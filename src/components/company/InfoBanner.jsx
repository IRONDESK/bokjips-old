import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import useSWR, { useSWRConfig } from "swr";
import styled from "@emotion/styled";

import { COLOR } from "../../constants";

import useUserInfo from "../../lib/useUserInfo";
import ModalAlert from "../ModalAlert";

function PlusGood(userInfo, corpId, setAlertMsg, setGoodAlert, mutate) {
  if (userInfo.isLogged) {
    axios
      .post("http://52.79.165.66:8081/corp/good", {
        user_id: userInfo.user_id,
        corp_id: corpId,
      })
      .then((res) => {
        if (res.data.substr(-2) == "등록") {
          setAlertMsg("이 회사를 즐겨찾기에 등록했습니다.");
        } else {
          setAlertMsg("이 회사를 즐겨찾기에서 삭제했습니다.");
        }
        setGoodAlert(true);
        setTimeout(() => {
          setGoodAlert(false);
        }, 2000);
        // 뮤테이션 갱신
        mutate(
          `http://52.79.165.66:8081/corp/select/${corpId}/${
            userInfo.user_id ?? "user"
          }`
        );
      });
  } else {
    setAlertMsg("로그인 후 사용 가능합니다.");
    setGoodAlert(true);
    setTimeout(() => {
      setGoodAlert(false);
    }, 2000);
  }
}

export default function InfoBanner({ corpId }) {
  const { userInfo } = useUserInfo();
  const [goodAlert, setGoodAlert] = useState(false);
  const [AlertMsg, setAlertMsg] = useState("");

  const { mutate } = useSWRConfig();
  const { data } = useSWR(
    `http://52.79.165.66:8081/corp/select/${corpId}/${
      userInfo.user_id ?? "user"
    }`,
    (...args) => fetch(...args).then((res) => res.json())
  );

  return (
    <>
      <Container>
        <Logo src={data?.image} />
        <h3 className='corpname'>{data?.name}</h3>
        <p className='category'>
          {data?.stock ? "상장" : "비상장"} • {data?.category}
        </p>
        <GoodBtn
          type='button'
          state={data?.goodState}
          onClick={() => {
            PlusGood(userInfo, corpId, setAlertMsg, setGoodAlert, mutate);
          }}
        >
          <i className='material-icons'>
            {data?.goodState ? "check" : "favorite"}
          </i>{" "}
          {data?.good}
        </GoodBtn>
        <ul className='site-list'>
          {data?.site ? (
            <li>
              <Link href={data?.site}>
                <LinkBtn>기업 사이트 이동</LinkBtn>
              </Link>
            </li>
          ) : null}
          {data?.career ? (
            <li>
              <Link href={data?.career}>
                <LinkBtn>채용정보 보기</LinkBtn>
              </Link>
            </li>
          ) : null}
        </ul>
      </Container>
      {goodAlert ? (
        <ModalAlert
          typeError={userInfo.isLogged ? false : true}
          text={AlertMsg}
        />
      ) : null}
    </>
  );
}

const Container = styled.section`
  position: sticky;
  top: 0;
  height: 100vh;
  flex: 1;
  padding: 28px;
  background-color: ${COLOR.graybg};
  text-align: right;
  @media (max-width: 640px) {
    padding: 16px 24px;
    height: 20vh;
  }
  .corpname {
    margin: 20px 0 0 0;
    font-size: 36px;
    font-weight: 500;
    word-break: keep-all;
    @media (max-width: 640px) {
      margin: 10px 0 0 0;
      font-size: 1.5rem;
    }
  }
  .category {
    margin: 12px 0;
    @media (max-width: 640px) {
      margin: 8px 0 0 0;
      font-size: 0.85rem;
    }
  }
  .site-list {
    margin: 80px 0 0 0;
    @media (max-width: 640px) {
      margin: 16px 0 0 0;
    }
  }
`;

const Logo = styled.img`
  width: 85px;
  height: 85px;
  background-color: #fff;
  border: 1px solid ${COLOR.gray};
  border-radius: 100%;
  object-fit: contain;
  @media (max-width: 640px) {
    width: 52px;
    height: 52px;
    float: left;
  }
`;

const GoodBtn = styled.button`
  float: right;
  display: flex;
  align-items: flex-end;
  gap: 5px;
  padding: 8px 16px;
  background-color: ${(props) => (props.state ? COLOR.main : "#000")};
  color: #fff;
  font-size: 1rem;
  font-weight: ${(props) => (props.state ? "600" : "300")};
  border-radius: 30px;
  i {
    font-size: 20px;
  }
  &:hover {
    background-color: ${COLOR.main};
    color: #fff;
  }
  @media (max-width: 640px) {
    margin: 16px 0 0 0;
  }
`;

const LinkBtn = styled.button`
  display: block;
  padding: 10px 0;
  flex: 1;
  font-size: 1rem;
  &:hover {
    color: ${COLOR.main};
  }
  &::before {
    content: "chevron_right";
    display: inline-block;
    font-family: "Material Icons";
  }
  @media (max-width: 640px) {
    padding: 6px 8px 6px 0;
    font-size: 0.9rem;
  }
`;

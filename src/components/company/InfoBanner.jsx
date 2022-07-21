import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import useSWR, { useSWRConfig } from "swr";

import styled from "@emotion/styled";
import { COLOR } from "../../constants";
import { useSelector } from "react-redux";

import ModalAlert from "../ModalAlert";

function PlusGood(userInfo, corpId, setAlertMsg, setGoodAlert, mutate) {
  if (userInfo.logged.isLogged) {
    axios
      .post("http://52.79.165.66:8081/corp/good", {
        user_id: userInfo.logged.user_id,
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
        }, 2500);
        // 뮤테이션 갱신
        mutate(
          `http://52.79.165.66:8081/corp/select/${corpId}/${
            userInfo.logged.user_id ?? "user"
          }`
        );
      });
  } else {
    setAlertMsg("로그인 후 사용 가능합니다.");
    setGoodAlert(true);
    setTimeout(() => {
      setGoodAlert(false);
    }, 2500);
  }
}

export default function InfoBanner({ corpId }) {
  const [goodAlert, setGoodAlert] = useState(false);
  const [AlertMsg, setAlertMsg] = useState("");

  const userInfo = useSelector((state) => state);
  const { mutate } = useSWRConfig();
  const { data } = useSWR(
    `http://52.79.165.66:8081/corp/select/${corpId}/${
      userInfo.logged.user_id ?? "user"
    }`,
    (...args) => fetch(...args).then((res) => res.json())
  );

  return (
    <>
      <Container>
        <Wrap>
          <Logo>
            <img src={data?.image} />
          </Logo>
          <Info>
            <CorpName>{data?.name}</CorpName>
            <Category>
              {data?.stock ? "상장" : "비상장"} • {data?.category}
            </Category>
          </Info>
          <Good>
            <GoodBtn
              type='button'
              onClick={() => {
                PlusGood(userInfo, corpId, setAlertMsg, setGoodAlert, mutate);
              }}
            >
              ♥{data?.good}
            </GoodBtn>
          </Good>
        </Wrap>
      </Container>
      <BtnContainer>
        <BtnWrap>
          {data?.site ? (
            <Link href={data?.site}>
              <LinkBtn>기업 사이트 이동</LinkBtn>
            </Link>
          ) : null}
          {data?.career ? (
            <Link href={data?.career}>
              <LinkBtn>채용정보 보기</LinkBtn>
            </Link>
          ) : null}
        </BtnWrap>
      </BtnContainer>
      {goodAlert ? (
        <ModalAlert
          typeError={userInfo.logged.isLogged ? false : true}
          text={AlertMsg}
        />
      ) : null}
    </>
  );
}

const Container = styled.section`
  width: 100%;
  background-color: ${COLOR.main};
`;

const Wrap = styled.article`
  position: relative;
  margin: 0 auto;
  max-width: 1100px;
  height: 120px;
  overflow: hidden;
`;

const Logo = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 50%;
  width: 230px;
  height: 230px;
  border-radius: 100%;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 20%,
    rgba(255, 255, 255, 0.45) 65%,
    rgba(255, 255, 255, 1) 100%
  );
  transform: translate(0, -50%);
  img {
    width: 90px;
    height: 90px;
    border-radius: 15px;
    object-fit: cover;
  }
`;
const Info = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 7px 0;
  justify-content: space-between;
  align-items: center;
  width: 560px;
  height: 100%;
  text-align: center;
`;
const Good = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  width: 230px;
  height: 230px;
  border: 1px solid #fff;
  border-radius: 100%;
  transform: translate(0, -50%);
  overflow: hidden;
`;
const GoodBtn = styled.button`
  width: 100%;
  color: #fff;
  font-size: 35px;
  font-weight: 600;
  line-height: 230px;
  &:hover {
    background-color: #fff;
    color: ${COLOR.main};
    transition: 0.3s background-color;
  }
`;

const Category = styled.span`
  color: #fff;
  font-size: 17px;
  font-weight: 600;
`;
const CorpName = styled.h3`
  margin: 7px 0;
  color: #fff;
  font-size: 37px;
  font-weight: 700;
`;
const BtnContainer = styled.section`
  background-color: ${"rgba(" + COLOR.mainrgb + ", .6)"};
`;
const BtnWrap = styled.article`
  display: flex;
  margin: 0 auto;
  max-width: 1100px;
`;
const LinkBtn = styled.button`
  display: block;
  padding: 10px 0;
  flex: 1;
  color: #fff;
  font-size: 16px;
  &:hover {
    background-color: ${COLOR.main};
    color: #fff;
  }
`;

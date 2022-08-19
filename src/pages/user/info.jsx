import React from "react";
import Link from "next/link";
import styled from "@emotion/styled";

import { Title } from "../../components/layouts";
import useUserInfo from "../../lib/useUserInfo";
import { COLOR } from "../../constants";

function Info() {
  const { userInfo } = useUserInfo();

  return (
    <>
      <Title title='내 정보 관리' />
      <Container>
        <PageName>
          {userInfo.isLogged ? userInfo?.user_name + " 님의" : "내"} 정보 관리
        </PageName>
        {userInfo.isLogged ? (
          <>
            <InfoCard>
              <li>
                <strong>이메일</strong>
                <p>{userInfo?.email}</p>
              </li>
              <li>
                <strong>비밀번호</strong>
                <p>
                  <Button
                    type='button'
                    onClick={() => alert("준비중인 기능입니다.")}
                  >
                    비밀번호 수정
                  </Button>
                </p>
              </li>
              <li>
                <strong>좋아요한 회사</strong>
                <p>0개</p>
              </li>
            </InfoCard>
            <Options>
              <Link href='/corp/write'>복지정보 작성</Link>
              <span
                style={{ opacity: "0.5" }}
                onClick={() => alert("준비중인 기능입니다.")}
              >
                회원탈퇴
              </span>
            </Options>
          </>
        ) : (
          <UnLoggedSection>
            <p className='material-icons'>edit_off</p>
            로그인이 필요한 기능입니다
          </UnLoggedSection>
        )}
      </Container>
    </>
  );
}
const Container = styled.main`
  margin: 0 auto;
  max-width: 1024px;
  @media (max-width: 1024px) {
    padding: 0 30px;
  } ;
`;

const PageName = styled.h1`
  margin: 20px 0;
  font-size: 1.6rem;
  font-weight: 700;
`;
const InfoCard = styled.ul`
  display: flex;
  margin: 12px 0;
  justify-content: space-between;
  gap: 24px;
  li {
    flex: 1;
    padding: 28px 32px;
    background-color: ${COLOR.graybg};
    border-radius: 10px;
    strong {
      display: block;
      font-size: 1.1rem;
      font-weight: 600;
    }
    p {
      margin: 16px 0 0;
      text-align: right;
      font-size: 1.3rem;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
  } ;
`;

const Button = styled.button`
  margin: -4px 0 0;
  padding: 6px 16px;
  background-color: #000;
  border-radius: 15px;
  color: #fff;
  font-size: 1.1rem;
  text-align: right;
  &:hover {
    background-color: ${COLOR.main};
  }
`;

const Options = styled.section`
  display: flex;
  justify-content: center;
  margin: 12vh 0 32px;
  gap: 24px;
  span {
    cursor: pointer;
  }
`;

const UnLoggedSection = styled.section`
  margin: 160px 0%;
  text-align: center;
  p {
    display: block;
    margin: 20px 0;
    font-size: 64px;
  }
`;

export default Info;

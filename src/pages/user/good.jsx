import React from "react";
import styled from "@emotion/styled";

import { Title } from "../../components/layouts";
import useUserInfo from "../../lib/useUserInfo";

function Good() {
  const { userInfo } = useUserInfo();
  return (
    <>
      <Title title='나의 좋아요 모음' />
      <Container>
        <PageName>{userInfo?.user_name} 님의 좋아요 모음</PageName>
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

export default Good;

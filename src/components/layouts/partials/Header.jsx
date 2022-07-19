import Link from "next/link";
import { useRouter } from "next/router";

import styled from "@emotion/styled";
import { COLOR } from "../../../constants";
import { useDispatch, useSelector } from "react-redux";
import { logoutAccount } from "../../../store/LoggedState";

export const Header = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const userInfo = useSelector((state) => state);

  const Logout = () => {
    dispatch(logoutAccount());
    sessionStorage.removeItem("user_name");
    sessionStorage.removeItem("token");
    router.push("/");
  };

  return (
    <Container>
      <Nav>
        <Link href='/'>
          <Title>
            <strong>복지</strong>
            <br />
            편살
          </Title>
        </Link>
        <UserInfo>
          {userInfo.logged.isLogged ? (
            <>
              <Item>{userInfo.logged.user_name} 님, 안녕하세요</Item>
              <Item onClick={Logout} style={{ cursor: "pointer" }}>
                로그아웃
              </Item>
            </>
          ) : (
            <>
              <Item>
                <Link href='/user/login'>로그인</Link>
              </Item>
              <Item>
                <Link href='/user/join'>회원가입</Link>
              </Item>
            </>
          )}
        </UserInfo>
      </Nav>
    </Container>
  );
};

const Container = styled.header`
  border-bottom: 1px solid ${COLOR.gray};
  @media (max-width: 1024px) {
    padding: 0 30px;
  }
`;
const Nav = styled.nav`
  position: relative;
  margin: 25px auto 10px auto;
  max-width: 1024px;
  @media (max-width: 768px) {
    display: flex;
    margin: 20px auto 12px auto;
  } ;
`;

const Title = styled.h1`
  cursor: pointer;
  margin: 0 auto;
  padding: 10px 0 0 0;
  width: 100px;
  font-weight: 800;
  font-size: 45px;
  font-family: "GangwonEdu";
  text-align: center;
  line-height: 40px;
  strong {
    color: ${COLOR.main};
  }
  @media (max-width: 768px) {
    margin: 0;
    padding: 0;
    font-size: 26px;
    text-align: left;
    line-height: 26px;
  } ;
`;

const UserInfo = styled.ul`
  position: absolute;
  display: flex;
  top: 0;
  right: 0;
  gap: 0 13px;
`;
const Item = styled.li`
  font-size: 14px;
`;

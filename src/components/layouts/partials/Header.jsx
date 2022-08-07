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
    router.push("/");
  };

  return (
    <Container>
      <Nav>
        <UserInfo>
          {userInfo.logged.isLogged ? (
            <>
              <Item isButton={false}>
                {userInfo.logged.user_name} 님, 안녕하세요
              </Item>
              <Item isButton={true}>
                <Link href='/corp/write'>복지정보 작성</Link>
              </Item>
              <Item
                isButton={true}
                onClick={Logout}
                style={{ cursor: "pointer" }}
              >
                로그아웃
              </Item>
            </>
          ) : (
            <>
              <Item isButton={true}>
                <Link href='/user/login'>로그인</Link>
              </Item>
              <Item isButton={true}>
                <Link href='/user/join'>회원가입</Link>
              </Item>
            </>
          )}
        </UserInfo>
        <Link href='/'>
          <Title>
            <strong>복지</strong>
            <br />
            편살
          </Title>
        </Link>
      </Nav>
    </Container>
  );
};

const Container = styled.header`
  border-bottom: 1px solid ${COLOR.gray};
`;
const Nav = styled.nav`
  padding: 16px;
`;

const Title = styled.h1`
  cursor: pointer;
  margin: 0 auto;
  padding: 10px 0 0 0;
  width: 100px;
  font-weight: 800;
  font-size: 40px;
  font-family: "GangwonEdu";
  text-align: center;
  line-height: 35px;
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
  float: right;
  display: flex;
  gap: 0 13px;
`;
const Item = styled.li`
  font-size: 14px;
  &:hover {
    color: ${(props) => (props.isButton ? COLOR.main : "none")};
  }
`;

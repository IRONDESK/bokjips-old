import Link from "next/link";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

import { COLOR } from "../../../constants";

import useUserInfo from "../../../lib/useUserInfo";
import { useDispatch } from "react-redux";
import { logoutAccount } from "../../../store/LoggedState";

export const Header = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { userInfo } = useUserInfo();

  const Logout = () => {
    dispatch(logoutAccount());
    router.push("/");
  };

  return (
    <Container>
      <Nav>
        <OptionsWrap>
          {userInfo.isLogged ? (
            <>
              <Option>
                <Link href='/user/info'>
                  <span>{userInfo?.user_name}</span>
                </Link>
              </Option>
              <Option>
                <Link href='/user/good'>나의 좋아요</Link>
              </Option>
              <Option onClick={Logout} style={{ cursor: "pointer" }}>
                로그아웃
              </Option>
            </>
          ) : (
            <>
              <Option>
                <Link href='/user/login'>로그인</Link>
              </Option>
              <Option>
                <Link href='/user/join'>회원가입</Link>
              </Option>
            </>
          )}
        </OptionsWrap>
        <Link href='/'>
          <Title>
            <strong>복지</strong>편살
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

const OptionsWrap = styled.ul`
  float: right;
  display: flex;
  gap: 0 13px;
`;
const Option = styled.li`
  cursor: pointer;
  padding: 4px;
  font-size: 14px;
  &:hover {
    color: ${COLOR.main};
  }
`;

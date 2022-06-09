import Link from 'next/link'
import styled from '@emotion/styled'
import { COLOR } from '../../../constants'

export const Header = () => {
  return (
    <Container>
      <Nav>
        <Link href="/">
          <Title>
            <strong>복지</strong>
            <br />
            편살
          </Title>
        </Link>
        <UserInfo>
          <Item>
            <Link href="/user/login">로그인</Link>
          </Item>
          <Item>
            <Link href="/user/join">회원가입</Link>
          </Item>
        </UserInfo>
      </Nav>
    </Container>
  )
}

const Container = styled.header`
  border-bottom: 1px solid ${COLOR.gray};
`
const Nav = styled.nav`
  position: relative;
  margin: 25px auto 10px auto;
  max-width: 1024px;
`

const Title = styled.h1`
  cursor: pointer;
  margin: 0 auto;
  padding: 10px 0 0 0;
  width: 100px;
  font-weight: 800;
  font-size: 45px;
  font-family: 'GangwonEdu';
  text-align: center;
  line-height: 40px;
  strong {
    color: ${COLOR.main};
  }
`

const UserInfo = styled.ul`
  position: absolute;
  display: flex;
  top: 0;
  right: 0;
  gap: 0 13px;
`
const Item = styled.li`
  font-size: 14px;
`

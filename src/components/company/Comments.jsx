import React from 'react'

import styled from '@emotion/styled'
import { COLOR } from '../../constants'

export default function Comments({ commentCount = 0 }) {
  return (
    <Container>
      <Nav>
        <Title>댓글 {commentCount}개</Title>
        <Write className="material-icons">drive_file_rename_outline</Write>
      </Nav>
      <Items>
        <Item>
          <p className="comment-text">
            이 회사의 장점은 어떻고요다니고 싶어요. 그렇습니다. 그래서 다녀야
            합니다. 동해물과 백두산이 마르고 닳도록.
            <button className="del-button">[삭제]</button>
          </p>
          <ul className="comment-options">
            <li>작성자</li>
            <li>작성일</li>
          </ul>
        </Item>
      </Items>
    </Container>
  )
}

const Container = styled.section`
  margin: 0 auto;
  padding: 25px 30px;
  max-width: 1000px;
  min-height: 260px;
  box-shadow: 0 0 8px 5px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
`
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.h3`
  font-weight: 700;
  font-size: 23px;
`
const Write = styled.button`
  width: 40px;
  height: 40px;
  font-size: 28px;
  border-radius: 100%;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`
const Items = styled.section`
  margin: 30px 0 10px 0;
`
const Item = styled.article`
  display: flex;
  padding: 10px 6px;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${COLOR.gray};
  &:last-child {
    border: none;
  }
  .comment-text {
    width: 85%;
    line-height: 130%;
    .del-button {
      display: inline-block;
    }
    @media (max-width: 768px) {
      width: 100%;
    }
  }
  .comment-options {
    li {
      display: inline;
      margin: 0 4px;
      font-size: 14px;
    }
    @media (max-width: 768px) {
      margin: 4px 0 0 0;
      text-align: right;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-end;
  } ;
`

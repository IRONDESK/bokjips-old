import React from 'react'
import styled from '@emotion/styled'
import { COLOR } from '../../constants'

export default function MoreCorp() {
  return (
    <Container>
      <Items>
        <Item head={true}>이 회사는 어때요?</Item>
        <Item>
          <CorpName>회사명</CorpName>
          <CorpCategory>IT</CorpCategory>
          <Good>♥13</Good>
        </Item>
        <Item>
          <CorpName>회사명</CorpName>
          <CorpCategory>IT</CorpCategory>
          <Good>♥13</Good>
        </Item>
        <Item>
          <CorpName>회사명</CorpName>
          <CorpCategory>IT</CorpCategory>
          <Good>♥13</Good>
        </Item>
        <Item>
          <CorpName>회사명</CorpName>
          <CorpCategory>IT</CorpCategory>
          <Good>♥13</Good>
        </Item>
      </Items>
    </Container>
  )
}

const Container = styled.section`
  width: 100%;
  background-color: ${COLOR.main};
  @media (max-width: 1024px) {
    padding: 0 20px;
  }
`
const Items = styled.ul`
  display: flex;
  margin: -30px auto 0 auto;
  padding: 15px;
  max-width: 1024px;
  gap: 0 16px;
`
const Item = styled.li`
  flex: 1;
  padding: 10px;
  color: #fff;
  font-size: ${prop => (prop.head ? '20px' : '16px')};
  border: ${prop => (prop.head ? '2px solid ' + COLOR.main : '2px solid #fff')};
  border-radius: 7px;
  word-break: keep-all;
  &:hover {
    cursor: ${prop => (prop.head ? '' : 'pointer')};
    background-color: ${prop => (prop.head ? 'none' : '#fff')};
    color: ${prop => (prop.head ? 'none' : COLOR.main)};
    box-shadow: ${prop => (prop.head ? 'none' : '0 0 5px 3px rgba(0,0,0,.1)')};
  }
`
const CorpName = styled.h5`
  margin: 0 0 5px 0;
  font-size: 18px;
  font-weight: 700;
`
const CorpCategory = styled.span``
const Good = styled.p`
  float: right;
`

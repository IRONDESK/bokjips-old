import React, { useState } from 'react'

import styled from '@emotion/styled'
import { COLOR } from '../../constants'

export default function join() {
  return (
    <>
      <Container>
        <Form>
          <Label for="user-email">
            이메일
            <Input id="user-email" />
            {/* <Alert>이메일 형식이 올바르지 않습니다.</Alert> */}
          </Label>
          <Label for="user-name">
            이름
            <Input id="user-name" />
            {/* <Alert>이미 존재하는 이름입니다.</Alert> */}
          </Label>
          <Label for="user-pw">
            비밀번호
            <Input type="password" id="user-pw" placeholder="최소 6자 이상" />
            {/* <Alert>비밀번호 형식이 올바르지 않습니다.</Alert> */}
          </Label>
          <Button type="submit" className="material-icons">
            check
          </Button>
        </Form>
      </Container>
    </>
  )
}

const Container = styled.main`
  position: relative;
  height: 70vh;
`
const Form = styled.form`
  position: absolute;
  padding: 40px;
  top: 50%;
  left: 50%;
  width: 350px;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 15px 3px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`
const Label = styled.label`
  display: block;
  margin: 10px 0 30px 0;
  font-size: 17px;
  font-weight: 600;
`
const Input = styled.input`
  display: block;
  padding: 5px 0;
  width: 100%;
  font-size: 20px;
  font-family: 'Pretendard';
  border: none;
  outline: none;
  border-bottom: 2px solid black;
  &:focus {
    border-bottom: 2px solid ${COLOR.main};
  }
  &::placeholder {
    font-size: 17px;
  }
`
const Alert = styled.span`
  display: block;
  margin: 5px 3px;
  color: ${COLOR.report};
  font-size: 15px;
  font-weight: 400;
`
const Button = styled.button`
  display: block;
  margin: 0 auto;
  width: 55px;
  height: 55px;
  font-size: 28px;
  border: 2px solid #000;
  border-radius: 100%;
  &:focus,
  &:hover {
    background-color: ${COLOR.main};
    border: 2px solid ${COLOR.main};
    color: #fff;
  }
`

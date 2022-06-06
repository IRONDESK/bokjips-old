import React, { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'

import styled from '@emotion/styled'
import { COLOR } from '../../constants'

export default function login() {
  const [userEmail, setUserEmail] = useState('')
  const [userPwd, setUserPwd] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    axios
      .post(
        'http://52.79.165.66:8081/user/login',
        JSON.stringify({
          email: userEmail,
          password: userPwd,
        }),
        { headers: { 'Content-Type': `application/json` } }
      )
      .then((res) => {
        console.log(res)
      })
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="user-email">이메일</Label>
        <Input
          type="text"
          id="user-email"
          onChange={(e) => {
            setUserEmail(e.target.value)
          }}
          value={userEmail}
        />
        <Label htmlFor="user-pw">비밀번호</Label>
        <Input
          type="password"
          id="user-pw"
          onChange={(e) => {
            setUserPwd(e.target.value)
          }}
          value={userPwd}
        />
        <Button type="submit" className="material-icons">
          check
        </Button>
        <JoinHref>
          <Link href="/user/join">회원가입</Link>
        </JoinHref>
      </Form>
    </Container>
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
  font-size: 17px;
  font-weight: 600;
`
const Input = styled.input`
  display: block;
  margin: 10px 0 30px 0;
  padding: 3px 5px;
  width: 100%;
  font-size: 20px;
  border: none;
  outline: none;
  border-bottom: 2px solid black;
  &:focus {
    border-bottom: 2px solid ${COLOR.main};
  }
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
const JoinHref = styled.p`
  margin-top: 23px;
  font-size: 15px;
  text-align: right;
`

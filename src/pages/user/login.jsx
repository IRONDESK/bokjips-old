import React, { useState } from 'react'
import styled from '@emotion/styled'
import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { loginAccount } from '../../store/LoggedState'
import { COLOR } from '../../constants'

import { Title } from '../../components/layouts'
import ModalAlert from '../../components/ModalAlert'

export default function login() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [showAlert, setShowAlert] = useState(false)
  const [userInput, setUserInput] = useState({
    email: '',
    password: '',
  })
  const handleUserInput = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    axios
      .post(
        'http://52.79.165.66:8081/user/login',
        JSON.stringify({
          email: userInput.email,
          password: userInput.password,
        }),
        { headers: { 'Content-Type': `application/json` } }
      )
      .then((res) => {
        const { token, name } = res.data
        dispatch(loginAccount(name))
        sessionStorage.setItem('token', token)
        sessionStorage.setItem('user_name', name)
        router.push('/')
      }).catch((res) => {
        setShowAlert(true)
        setTimeout(() => {
          setShowAlert(false)
        }, 3000)
      })
  }

  return (
    <>
      <Title title={'로그인'} />
      <Container>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="user-email">이메일</Label>
          <Input
            type="text"
            name="email"
            value={userInput.email}
            onChange={handleUserInput}
          />
          <Label htmlFor="user-pw">비밀번호</Label>
          <Input
            type="password"
            name="password"
            value={userInput.password}
            onChange={handleUserInput}
          />
          <Button
            type="submit"
            disabled={
              userInput.email && userInput.password.length > 5 ? false : true
            }
            className="material-icons"
          >
            check
          </Button>
          <JoinHref>
            <Link href="/user/join">회원가입</Link>
          </JoinHref>
        </Form>
        {showAlert ? <ModalAlert typeError={true} text="아이디나 비밀번호를 확인해주세요." /> : null}
      </Container>
    </>
  )
}

const Container = styled.main`
  position: relative;
  height: 80vh;
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
  &::before {
    content: '로그인';
    position: absolute;
    display: inline-block;
    top: -60px;
    left: 50%;
    font-size: 24px;
    font-weight: 900;
    transform: translateX(-50%);
  }
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
  cursor: ${(prop) => (prop.disabled ? 'not-allowed' : 'pointer')};
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

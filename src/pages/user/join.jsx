import React, { useState } from 'react'
import axios from 'axios'

import styled from '@emotion/styled'
import { COLOR } from '../../constants'

export default function join() {
  const [userEmail, setUserEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [userPwd, setUserPwd] = useState('')
  const [Wait, setWait] = useState(true)
  const [LoginRes, setLoginRes] = useState({})

  const EmailRegex =
    /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
  const PwdRegex = /(?=.*[!@#])[!@#]/

  const EmailAutoComplete = (e) => {
    setUserEmail(userEmail + e.target.innerHTML)
  }

  const handleSubmit = async (e) => {
    setWait(false)
    e.preventDefault()
    axios
      .post(
        'http://52.79.165.66:8081/user/insert',
        JSON.stringify({
          email: userEmail,
          name: userName,
          password: userPwd,
        }),
        { headers: { 'Content-Type': `application/json` } }
      )
      .then((res) => {
        console.log(res)
        setWait(true)
        setLoginRes(res.data)
      })
  }

  return (
    <>
      <Container>
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="user-email">
            이메일
            <Input
              id="user-email"
              type="text"
              onChange={(e) => {
                setUserEmail(e.target.value)
              }}
              value={userEmail}
            />
            {EmailRegex.test(userEmail) ||
            !userEmail ||
            userEmail.charAt(userEmail.length - 2) !== '@' ? null : (
              <Alert>이메일 형식이 올바르지 않습니다.</Alert>
            )}
            {userEmail && userEmail.charAt(userEmail.length - 1) == '@' ? (
              <Domains onClick={EmailAutoComplete}>
                <Domain>gmail.com</Domain>
                <Domain>naver.com</Domain>
              </Domains>
            ) : null}
          </Label>
          <Label htmlFor="user-name">
            이름
            <Input
              id="user-name"
              onChange={(e) => {
                setUserName(e.target.value)
              }}
              value={userName}
            />
          </Label>
          <Label htmlFor="user-pw">
            비밀번호
            <Input
              type="password"
              id="user-pw"
              onChange={(e) => {
                setUserPwd(e.target.value)
              }}
              value={userPwd}
            />
            <PwdCheck>
              <Item check={userPwd && userPwd.length > 5}>
                <i className="material-icons">check</i>6자 이상
              </Item>
              <Item check={userPwd && PwdRegex.test(userPwd)}>
                <i className="material-icons">check</i>한 개 이상의 특수문자
                포함 (@, !, #)
              </Item>
            </PwdCheck>
          </Label>
          <Button
            type="submit"
            className="material-icons"
            disabled={
              userPwd &&
              userPwd.length > 5 &&
              PwdRegex.test(userPwd) &&
              EmailRegex.test(userEmail) &&
              Wait
                ? false
                : true
            }
          >
            subdirectory_arrow_right
          </Button>
          {LoginRes?.code ? (
            <ErrorMsg>
              <i className="material-icons">error</i> {LoginRes.message}
            </ErrorMsg>
          ) : null}
        </Form>
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
  height: 480px;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 15px 3px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  &::before {
    content: '회원가입';
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
  margin: 7px 0 0 3px;
  color: ${COLOR.report};
  font-size: 15px;
  font-weight: 400;
`
const Domains = styled.ul`
  display: flex;
  margin-top: 7px;
  flex-wrap: wrap;
  gap: 6px 5px;
`
const Domain = styled.li`
  cursor: pointer;
  padding: 3px 8px;
  color: ${COLOR.darkgray};
  font-weight: 500;
  text-align: center;
  border: 1px solid ${COLOR.darkgray};
  border-radius: 5px;
  &:hover {
    background-color: ${COLOR.darkgray};
    color: #fff;
  }
`
const PwdCheck = styled.ul`
  margin-top: 7px;
`
const Item = styled.li`
  display: flex;
  margin-top: 5px;
  align-items: center;
  color: ${(prop) => (prop.check ? COLOR.check : COLOR.darkgray)};
  font-size: 14px;
  font-weight: 400;
  i {
    padding: 1.5px;
    margin-right: 3px;
    font-size: 13px;
    background-color: ${(prop) => (prop.check ? COLOR.check : 'none')};
    color: ${(prop) => (prop.check ? '#fff' : 'none')};
    border-radius: 100%;
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
const ErrorMsg = styled.p`
  margin: 9px 0 0 0;
  display: flex;
  align-items: center;
  padding: 10px 15px;
  background-color: ${`rgba(${COLOR.reportrgb}, 0.1)`};
  color: ${COLOR.report};
  font-size: 15px;
  font-weight: 600;
  border-radius: 10px;
  i {
    margin: 0 5px;
  }
`

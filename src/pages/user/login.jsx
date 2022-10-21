import React, { useState } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import { useRouter } from "next/router";

import { useDispatch } from "react-redux";
import { loginAccount } from "../../store/LoggedState";

import { UserLogin } from "../../api/UserAuthApi";

import { COLOR } from "../../constants";
import { Title } from "../../components/layouts";
import ModalAlert from "../../components/ModalAlert";

export default function Login() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [showAlert, setShowAlert] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    UserLogin(userEmail, userPassword)
      .then((res) => {
        const { token, name, user_id } = res.data;
        dispatch(loginAccount({ user_name: name, user_id, token }));
        router.push("/");
      })
      .catch((res) => {
        console.log(res.data);
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, 3000);
      });
  };

  return (
    <>
      <Title title={"로그인"} />
      <Container>
        <Welcome>
          환영합니다
          <br />
          <span>당신이 원하는 복지정보가 모인 곳</span>
        </Welcome>
        <Form onSubmit={handleSubmit}>
          <Label>
            이메일
            <Input
              type='email'
              name='email'
              autoFocus={true}
              defaultChecked={true}
              value={userEmail}
              onChange={() => setUserEmail(e.target.value)}
            />
          </Label>
          <Label>
            비밀번호
            <Input
              type='password'
              name='password'
              defaultChecked={true}
              value={userPassword}
              onChange={() => setUserPassword(e.target.value)}
            />
          </Label>
          <Button
            type='submit'
            disabled={
              userInput.email && userInput.password.length > 5 ? false : true
            }
            className='material-icons'
          >
            check
          </Button>
          <JoinHref>
            <Link href='/user/join'>회원가입</Link>
          </JoinHref>
        </Form>
        {showAlert ? (
          <ModalAlert
            typeError={true}
            text='아이디나 비밀번호를 확인해주세요.'
          />
        ) : null}
      </Container>
    </>
  );
}

const Container = styled.main`
  min-height: 70vh;
`;
const Welcome = styled.h2`
  margin: 36px 0 52px;
  font-weight: 500;
  font-size: 1.5rem;
  text-align: center;
  line-height: 2.1rem;
  span {
    font-size: 1.35rem;
  }
`;
const Form = styled.form`
  margin: 32px auto;
  max-width: 420px;
`;
const Label = styled.label`
  display: block;
  font-size: 1.1rem;
  font-weight: 500;
  transition: all 0.3s;
  &:has(input:focus) {
    font-size: 1.35rem;
  }
`;
const Input = styled.input`
  display: block;
  margin: 10px 0 56px;
  padding: 8px;
  width: 100%;
  font-size: 1.3rem;
  border: none;
  outline: none;
  border-bottom: 2px solid black;
  &:focus {
    border-bottom: 2px solid ${COLOR.main};
  }
`;
const Button = styled.button`
  cursor: ${(prop) => (prop.disabled ? "not-allowed" : "pointer")};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 55px;
  height: 55px;
  border: 2px solid #000;
  border-radius: 100%;
  font-size: 1.6rem;
  &:focus,
  &:hover {
    background-color: ${COLOR.main};
    border: 2px solid ${COLOR.main};
    color: #fff;
  }
`;
const JoinHref = styled.p`
  margin-top: 23px;
  font-size: 15px;
  text-align: right;
`;

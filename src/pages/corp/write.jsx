import React from "react";
import styled from "@emotion/styled";
import useUserInfo from "../../lib/useUserInfo";
import { useForm, useFieldArray } from "react-hook-form";
import axios from "axios";

import { COLOR } from "../../constants";

import { Title } from "../../components/layouts";
import TopForm from "../../components/company/write/TopForm";
import BottomForm from "../../components/company/write/BottomForm";

export default function Write() {
  const { userInfo } = useUserInfo();
  const { register, handleSubmit, watch, control } = useForm({
    mode: "onBlur",
    defaultValues: {
      welfareList: {
        condition: [{}],
        worksupport: [{}],
        support: [{}],
        environment: [{}],
      },
    },
  });

  const onSubmit = (data) => {
    axios
      .post("http://52.79.165.66:8081/corp/insert", JSON.stringify(data), {
        headers: {
          Authorization: `Bearer ${userInfo?.token}`,
          "Content-Type": `application/json`,
        },
      })
      .then((res) => {
        console.log("res :", res);
      });
  };

  return (
    <>
      <Title title='새 회사 추가' />
      <Container>
        {userInfo?.isLogged ? (
          <Form onSubmit={handleSubmit(onSubmit)}>
            <TopForm register={register} watch={watch} />
            <BottomForm
              register={register}
              useFieldArray={useFieldArray}
              control={control}
            />
            <Submit type='submit' className='material-icons'>
              check
            </Submit>
          </Form>
        ) : (
          <UnLoggedSection>
            <p className='material-icons'>edit_off</p>
            복지 정보를 게시하려면 로그인이 필요합니다.
          </UnLoggedSection>
        )}
      </Container>
    </>
  );
}

const Container = styled.main`
  margin: 0 auto;
  max-width: 1024px;
  @media (max-width: 1024px) {
    padding: 0 30px;
  } ;
`;
const Form = styled.form``;

const Submit = styled.button`
  /* cursor: ${(prop) => (prop.disabled ? "not-allowed" : "pointer")}; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px auto;
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

const UnLoggedSection = styled.section`
  margin: 160px 0%;
  text-align: center;
  p {
    display: block;
    margin: 20px 0;
    font-size: 64px;
  }
`;

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

import styled from '@emotion/styled'
import { COLOR } from '../../constants'

import { Title } from '../../components/layouts'
import TopForm from '../../components/company/write/TopForm'
import Detail from '../../components/company/write/Detail'

export default function write() {
  // useForm Handle
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => {
    console.log('Data: ', data)
    // axios.post('http://52.79.165.66:8081/corp/insert', data).then((res) => {
    //   console.log('res :', res)
    // })
  }

  return (
    <>
      <Title title="새 회사 추가" />
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <TopForm register={register} />
          <Bottom>
            <Detail kind="condition" formRegister={register} />
            <Detail kind="worksupport" formRegister={register} />
            <Detail kind="support" formRegister={register} />
            <Detail kind="environment" formRegister={register} />
            <Detail kind="etc" formRegister={register} />
          </Bottom>
          <Submit type="submit" className="material-icons">
            check
          </Submit>
        </Form>
      </Container>
    </>
  )
}

const Container = styled.main`
  margin: 0 auto;
  max-width: 1024px;
  @media (max-width: 1024px) {
    padding: 0 30px;
  } ;
`
const Form = styled.form``

const Bottom = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  } ;
`

const Submit = styled.button`
  /* cursor: ${(prop) => (prop.disabled ? 'not-allowed' : 'pointer')}; */
  display: block;
  margin: 35px auto;
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

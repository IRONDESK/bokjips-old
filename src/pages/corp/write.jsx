import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'

import styled from '@emotion/styled'
import { COLOR } from '../../constants'

import { Title } from '../../components/layouts'
import TopForm from '../../components/company/write/TopForm'
import BottomForm from '../../components/company/write/BottomForm'

export default function write() {
  // useForm Handle
  const token =
    'eyJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTU0NDQ2NjgsImV4cCI6MTY1NTYxNzQ2OCwic3ViIjoiYm9ramlwcyJ9.wS5ynA-X00udTuuOaTzEBbzQV1KzcTnqt3rCzS_S8IY'
  const { register, handleSubmit } = useForm({
    mode: 'onSubmit',
  })
  const onSubmit = (data) => {
    console.log('Data: ', data)
    axios
      .post('http://52.79.165.66:8081/corp/insert', JSON.stringify(data), {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': `application/json`,
        },
      })
      .then((res) => {
        console.log('res :', res)
      })
  }

  return (
    <>
      <Title title="새 회사 추가" />
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <TopForm register={register} />
          <BottomForm register={register} />
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

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

import styled from '@emotion/styled'
import { COLOR } from '../../constants'

import { Title } from '../../components/layouts'
import Detail from '../../components/company/write/Detail'

export default function write() {
  // useForm Handle
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log('Data: ', data)

  // category
  const categories = [
    'IT/플랫폼',
    '유통',
    '게임',
    '건강/바이오',
    '금융',
    '문화',
    '기타',
  ]

  return (
    <>
      <Title title="새 회사 추가" />
      <Container>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Top>
            <ImgInput type="file" {...register('image')} />
            <Input
              type="text"
              placeholder="회사명"
              {...register('name', {
                required: true,
              })}
            />
            <CheckInput
              type="checkbox"
              {...register('stock', {
                value: false,
              })}
            />
            <Input
              type="text"
              placeholder="사이트"
              {...register('site', {
                required: true,
              })}
            />
            <Input
              type="text"
              placeholder="회사 채용 사이트"
              {...register('career', {
                required: true,
              })}
            />
            <Catagories>
              {categories.map((el) => (
                <RadioLabel key={el}>
                  <RadioInput
                    {...register('category')}
                    type="radio"
                    htmlFor="category"
                    value={el}
                  />
                  {el}
                </RadioLabel>
              ))}
            </Catagories>
          </Top>
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
const Top = styled.section`
  margin: 20px 0;
  padding: 30px 20px;
  background-color: ${COLOR.main};
  border-radius: 10px;
`
const Bottom = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  } ;
`

const ImgInput = styled.input``
const Input = styled.input``
const CheckInput = styled.input``
const RadioInput = styled.input``
const RadioLabel = styled.label``
const Catagories = styled.article``
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

import React, { useState } from 'react'

import styled from '@emotion/styled'
import { COLOR } from '../../constants'

import { Title } from '../../components/layouts'
import Detail from '../../components/company/write/Detail'

export default function write() {
  //회사 기본정보
  const [imgFile, setImgFile] = useState('')
  const [corpName, setCorpName] = useState('')
  const [corpStock, setCorpStock] = useState(false)
  const [category, setCategory] = useState([])
  /// 근무 조건
  const [Condition, setCondition] = useState({})
  const [WorkSupport, setWorkSupport] = useState({})
  const [Support, setSupport] = useState({})
  const [Environment, setEnvironment] = useState({})
  const [Etc, setEtc] = useState({})

  return (
    <>
      <Title title="새 회사 추가" />
      <Container>
        <Form>
          <Top>
            <ImgInput
              type="file"
              onChange={(e) => {
                setImgFile(e.target.value)
              }}
              value={imgFile}
            />
            <Input
              type="text"
              onChange={(e) => {
                setCorpName(e.target.value)
              }}
              value={corpName}
            />
            <CheckInput
              type="checkbox"
              onChange={(e) => {
                setCorpStock(e.target.value)
              }}
              value={corpStock}
            ></CheckInput>
          </Top>
          <Bottom>
            <Detail
              value={Condition}
              setValue={setCondition}
              kind="condition"
            />
            <Detail
              value={WorkSupport}
              setValue={setWorkSupport}
              kind="worksupport"
            />
            <Detail value={Support} setValue={setSupport} kind="support" />
            <Detail
              value={Environment}
              setValue={setEnvironment}
              kind="environment"
            />
            <Detail value={Etc} setValue={setEtc} kind="etc" />
          </Bottom>
          <Submit type="submit">제출</Submit>
        </Form>
      </Container>
    </>
  )
}

const Container = styled.main`
  margin: 40px auto;
  max-width: 1024px;
  @media (max-width: 1024px) {
    padding: 0 30px;
  } ;
`
const Form = styled.form`
  height: 100vh;
`
const Top = styled.section``
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
const Submit = styled.button``

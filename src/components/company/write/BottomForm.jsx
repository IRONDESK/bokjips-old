import React from 'react'

import styled from '@emotion/styled'
import { COLOR } from '../../../constants'

import Detail from './DetailForm'

export default function BottomForm({ register }) {
  return (
    <Bottom>
      <Detail kind="condition" formRegister={register} />
      <Detail kind="worksupport" formRegister={register} />
      <Detail kind="support" formRegister={register} />
      <Detail kind="environment" formRegister={register} />
      <Detail kind="etc" formRegister={register} />
    </Bottom>
  )
}

const Bottom = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  } ;
`

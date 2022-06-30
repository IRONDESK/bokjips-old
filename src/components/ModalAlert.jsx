import React, { useState } from 'react'
import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'
import { COLOR } from '../constants'

function ModalAlert({ typeError, text }) {
  return (
    <Wrap>
      <Message typeColor={typeError}>
        <span className="material-icons">
          {typeError ? 'priority_high' : 'check'}
        </span>
        {text}
      </Message>
    </Wrap>
  )
}

const Popup = keyframes`
    0% {
        bottom: -100%;
    }
    20% {
        bottom: 40px;
    }
    80% {
        bottom: 40px;
    }
    100% {
        bottom : -100%;
    }
`

const Wrap = styled.article`
  position: fixed;
  margin: 0 auto;
  padding: 0 20px;
  background-color: ${COLOR.modal};
  left: 50%;
  max-width: 500px;
  min-width: 360px;
  height: 50px;
  line-height: 50px;
  transform: translateX(-50%);
  border-radius: 10px;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
  animation: ${Popup} 4s linear forwards;
  transition: 0.5s bottom;
`
const Message = styled.p`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  gap: 11px;
  span {
    display: inline-block;
    padding: 3px;
    background-color: ${(prop) =>
      prop.typeColor ? COLOR.report : COLOR.check};
    font-size: inherit;
    border-radius: 100%;
  }
`

export default ModalAlert

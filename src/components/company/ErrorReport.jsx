import styled from '@emotion/styled'
import { useState } from 'react'
import { COLOR } from '../../constants'

export default function ErrorReport({ corpId, corpName, view, setView }) {
  const [reportMsg, setReportMsg] = useState('')
  return (
    <Container view={view}>
      {view ? (
        <Wrap>
          <Close
            onClick={() => {
              setView(false)
            }}
          >
            <span></span>
            <i className="a11y-hidden">닫기</i>
            <span></span>
          </Close>
          <Title>오류 수정 요청</Title>
          <Form>
            <CorpName>{corpName}</CorpName>
            <Label htmlFor="corp_hr">
              <Input type="checkbox" id="corp_hr" />
              <span>이 회사의 인사담당자일 경우 선택해주세요.</span>
            </Label>
            <Textarea
              placeholder="메시지를 입력해주세요."
              value={reportMsg}
              onChange={e => {
                setReportMsg(e.target.value)
              }}
            ></Textarea>
            <Button
              type="submit"
              isMsg={reportMsg ? true : false}
              disabled={reportMsg ? false : true}
            >
              제출
            </Button>
          </Form>
        </Wrap>
      ) : null}
    </Container>
  )
}

const Container = styled.section`
  opacity: ${props => (props.view ? '1' : '0')};
  position: fixed;
  top: 0;
  left: 0;
  width: ${props => (props.view ? '100vw' : '0')};
  height: ${props => (props.view ? '100vh' : '0')};
  background-color: rgba(256, 256, 256, 0.5);
  backdrop-filter: blur(20px);
  transition: all 0.3s;
`
const Close = styled.button`
  position: absolute;
  padding: 5px 1px 8px 1px;
  width: 43px;
  height: 40px;
  top: -20px;
  right: 0;
  span {
    position: absolute;
    display: block;
    width: 40px;
    height: 5px;
    background-color: #fff;
    &:first-child {
      transform: rotate(45deg);
    }
    &:last-child {
      transform: rotate(135deg);
    }
  }
  &:hover span {
    background-color: ${COLOR.report};
  }
`
const Wrap = styled.article`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 380px;
  height: 400px;
  transform: translate(-50%, -50%);
`
const Title = styled.h4`
  margin: 15px 0;
  font-size: 38px;
  font-weight: 800;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px 0;
`
const CorpName = styled.label`
  display: block;
  padding: 12px 6px;
  background-color: #fff;
  font-size: 19px;
  color: ${COLOR.report};
  line-height: 18px;
  text-align: center;
  border: 1px solid ${COLOR.border};
`
const Label = styled.label`
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 12px 6px;
  background-color: #fff;
  font-size: 16px;
  line-height: 18px;
  border: 1px solid ${COLOR.border};
`
const Input = styled.input`
  position: relative;
  margin: 0 12px;
  float: left;
  width: 26px;
  height: 26px;
  background-color: #fff;
  border: 3px solid #999;
  appearance: none;
  &:checked {
    border-color: ${COLOR.report};
    & + span {
      color: ${COLOR.report};
      font-weight: 700;
    }
    &::after {
      position: absolute;
      content: '';
      top: 50%;
      left: 50%;
      width: 11px;
      height: 11px;
      background-color: ${COLOR.report};
      transform: translate(-50%, -50%);
    }
  }
`
const Textarea = styled.textarea`
  padding: 13px;
  width: 100%;
  height: 130px;
  background-color: #fff;
  font-family: 'Pretendard';
  font-size: 18px;
  border: none;
  outline: none;
  resize: none;
  border: 1px solid ${COLOR.border};
`
const Button = styled.button`
  cursor: ${props => (props.isMsg ? 'pointer' : 'not-allowed')};
  width: 100%;
  padding: 12px;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  background-color: ${props => (props.isMsg ? COLOR.report : COLOR.gray)};
`

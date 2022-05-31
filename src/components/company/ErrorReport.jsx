import styled from '@emotion/styled'
import { useState } from 'react'
import { COLOR } from '../../constants'

export default function ErrorReport({ corpId, corpName, view, setView }) {
  const [reportMsg, setReportMsg] = useState('')
  return (
    <Container view={view}>
      {view ? (
        <Wrap>
          <Title>오류 수정 요청</Title>
          <Form>
            <CorpName>• 기업명 : {corpName}</CorpName>
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
            <Button
              type="button"
              isMsg={true}
              onClick={() => {
                setView(false)
              }}
            >
              취소
            </Button>
          </Form>
        </Wrap>
      ) : null}
    </Container>
  )
}

const Container = styled.section`
  opacity: ${props => (props.view ? '1' : '0')};
  z-index: ${props => (props.view ? '1' : '-1')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(256, 256, 256, 0.5);
  backdrop-filter: blur(20px);
  transition: all 0.3s;
`
const Wrap = styled.article`
  position: absolute;
  z-index: 2;
  padding: 15px 23px;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 500px;
  background-color: #fff;
  transform: translate(-50%, -50%);
  border-radius: 20px;
  box-shadow: 0 0 20px 3px #ff3c0078;
`
const Title = styled.h4`
  margin: 15px 0;
  color: ${COLOR.report};
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
  line-height: 18px;
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

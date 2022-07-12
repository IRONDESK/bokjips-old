import styled from "@emotion/styled";
import { useState } from "react";
import { COLOR } from "../../constants";

export default function ErrorReport({ corpId, corpName, view, setView }) {
  const [reportMsg, setReportMsg] = useState("");
  return (
    <Wrap view={view}>
      {view ? (
        <>
          <Title>
            <span className='material-icons'>priority_high</span>
            오류 수정 요청
          </Title>
          <Form>
            <CorpName>• {corpName}</CorpName>
            <Label htmlFor='corp_hr'>
              <Input type='checkbox' id='corp_hr' />
              <span>이 회사의 인사담당자입니다.</span>
            </Label>
            <Textarea
              placeholder='메시지를 입력해주세요.'
              value={reportMsg}
              onChange={(e) => {
                setReportMsg(e.target.value);
              }}
            ></Textarea>
            <ButtonWrap>
              <Button
                type='submit'
                className='material-icons'
                isMsg={reportMsg ? true : false}
                disabled={reportMsg ? false : true}
              >
                check
              </Button>
              <Button
                type='button'
                className='material-icons'
                isMsg={true}
                onClick={() => {
                  setView(false);
                }}
              >
                close
              </Button>
            </ButtonWrap>
          </Form>
        </>
      ) : null}
    </Wrap>
  );
}

const Wrap = styled.article`
  position: fixed;
  margin: 0 auto;
  padding: 18px 35px;
  background-color: ${COLOR.modal};
  bottom: ${(prop) => (prop.view ? "20px" : "-100%")};
  left: 50%;
  width: 500px;
  height: 350px;
  transform: translateX(-50%);
  border-radius: 10px;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.1);
  transition: 0.5s bottom;
`;
const Title = styled.h4`
  display: flex;
  align-items: center;
  margin: 15px 0;
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  gap: 7px;
  span {
    display: inline-block;
    padding: 3px;
    background-color: ${COLOR.report};
    border-radius: 100%;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 14px 0;
`;
const CorpName = styled.label`
  display: block;
  padding: 8px 6px;
  color: #fff;
  font-size: 18px;
  line-height: 18px;
`;
const Label = styled.label`
  cursor: pointer;
  float: right;
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 16px;
`;
const Input = styled.input`
  position: relative;
  margin: 0 6px;
  width: 19px;
  height: 19px;
  border: 2px solid #fff;
  appearance: none;
  &:checked {
    border-color: #fff;
    & + span {
      font-weight: 700;
    }
    &::after {
      position: absolute;
      content: "";
      top: 50%;
      left: 50%;
      width: 7px;
      height: 7px;
      background-color: #fff;
      transform: translate(-50%, -50%);
    }
  }
`;
const Textarea = styled.textarea`
  padding: 10px;
  width: 100%;
  height: 87px;
  background-color: #fff;
  font-size: 16px;
  border: none;
  outline: none;
  resize: none;
  border: 1px solid ${COLOR.border};
`;
const ButtonWrap = styled.article`
  display: flex;
  gap: 20px;
`;
const Button = styled.button`
  cursor: ${(prop) => (prop.isMsg ? "pointer" : "not-allowed")};
  width: 100%;
  padding: 10px 0;
  color: #fff;
  font-weight: 700;
  border: 3px solid #fff;
  opacity: ${(prop) => (prop.isMsg ? "1" : "0.3")};
`;

import { useState } from 'react'

import styled from '@emotion/styled'
import { COLOR } from '../../../constants'

const DataKinds = {
  condition: ['근무 조건', '#E86A6A'],
  worksupport: ['근무 지원', '#5EAC7D'],
  support: ['근무 외 지원', '#855EAC'],
  environment: ['사내 환경 지원', '#DE9528'],
  etc: ['기타 사항', '#898989'],
}

export default function DetailForm({ kind, formRegister }) {
  const [itemAmount, setItemAmount] = useState([1])
  const AddItemAmount = (e) => {
    e.preventDefault()
    setItemAmount([...itemAmount, itemAmount.length + 1])
  }
  const RemoveItemAmount = (e) => {
    e.preventDefault()
    if (itemAmount.length > 1) {
      setItemAmount(itemAmount.slice(0, -1))
    } else {
      alert('모든 항목을 지울 수 없습니다.')
    }
  }
  return (
    <Container>
      <Title>{DataKinds[kind][0]}</Title>
      <List>
        {itemAmount.map((el) => (
          <SubList key={`${el}-sublist`}>
            <SubTitle
              id={`${el}-subtitle`}
              color={DataKinds[kind][1]}
              placeholder="제목을 입력하세요."
              {...formRegister(`welfareList.${kind}.${el - 1}.subTitle`, {
                required: kind == 'etc' ? false : true,
              })}
            />
            <OptionTxt
              id={`${el}-option`}
              color={DataKinds[kind][1]}
              placeholder="상세내용을 입력하세요.(선택)"
              {...formRegister(`welfareList.${kind}.${el - 1}.options`)}
            />
          </SubList>
        ))}
      </List>
      <Buttons>
        <Button className="material-icons" onClick={AddItemAmount}>
          add
        </Button>
        <Button className="material-icons" onClick={RemoveItemAmount}>
          remove
        </Button>
      </Buttons>
    </Container>
  )
}

const Container = styled.article`
  padding: 23px;
  border-radius: 10px;
  border: 3px solid ${COLOR.gray};
`
const Title = styled.h4`
  font-weight: 700;
  font-size: 23px;
`

const List = styled.ul`
  padding: 20px 0 5px 0;
`

const SubList = styled.li`
  margin: 0 0 10px 0;
`
const SubTitle = styled.input`
  width: 37%;
  margin-right: 7px;
  padding: 6px 15px;
  background-color: ${(props) => props.color};
  color: #fff;
  font-size: 17px;
  font-weight: 500;
  font-family: 'Pretendard';
  border: none;
  border-radius: 15px;
  &::placeholder {
    color: #fff;
    opacity: 0.6;
  }
`
const OptionTxt = styled.input`
  width: 60%;
  padding: 3px 5px;
  color: ${(props) => props.color};
  font-size: 17px;
  font-family: 'Pretendard';
  outline: none;
  border: none;
  border-bottom: 2px solid ${(props) => props.color};
`
const Buttons = styled.article`
  margin: 5px 0;
  text-align: center;
`
const Button = styled.button`
  display: inline-block;
  margin: 0 3px;
  width: 35px;
  height: 35px;
  border-radius: 100%;
  &:hover {
    background-color: #000;
    color: #fff;
  }
`

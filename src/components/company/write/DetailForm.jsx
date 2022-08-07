import { useState } from "react";
import styled from "@emotion/styled";
import { COLOR } from "../../../constants";

import ModalAlert from "../../ModalAlert";

const DataKinds = {
  condition: ["근무 조건", "#E86A6A"],
  worksupport: ["근무 지원", "#5EAC7D"],
  support: ["근무 외 지원", "#855EAC"],
  environment: ["사내 환경 지원", "#DE9528"],
  etc: ["기타 사항", "#898989"],
};

export default function DetailForm({
  kind,
  control,
  formRegister,
  useFieldArray,
}) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `welfareList.${kind}`,
  });
  const [showAlert, setShowAlert] = useState(false);

  return (
    <Container>
      <Title color={DataKinds[kind][1]}>{DataKinds[kind][0]}</Title>
      <List>
        {fields.map((item, index) => (
          <SubList key={`${item.id}-sublist`}>
            <SubTitle
              id={`${index}-subtitle`}
              name={`welfareList.${kind}[${index}].subTitle`}
              defaultValue={item.subTitle}
              color={DataKinds[kind][1]}
              placeholder='제목'
              {...formRegister(`welfareList.${kind}.${index}.subTitle`)}
            />
            <OptionTxt
              id={`${index}-option`}
              name={`welfareList.${kind}[${index}].options`}
              defaultValue={item.options}
              color={DataKinds[kind][1]}
              placeholder='상세내용(선택)'
              {...formRegister(`welfareList.${kind}.${index}.options`)}
            />
            <button
              type='button'
              className='material-icons'
              onClick={() => {
                if (fields.length > 1 || kind == "etc") {
                  remove(index);
                } else {
                  setShowAlert(true);
                  setTimeout(() => {
                    setShowAlert(false);
                  }, 3000);
                }
              }}
            >
              close
            </button>
          </SubList>
        ))}
      </List>
      {showAlert ? (
        <ModalAlert
          typeError={true}
          text={"최소 1개 이상의 항목이 입력되야 합니다."}
        />
      ) : null}
      <Buttons>
        <Button
          className='material-icons'
          onClick={(e) => {
            e.preventDefault();
            append({});
          }}
        >
          add
        </Button>
      </Buttons>
    </Container>
  );
}

const Container = styled.article`
  padding: 23px;
`;
const Title = styled.h4`
  padding: 8px 0;
  color: ${(props) => props.color};
  font-weight: 700;
  font-size: 23px;
  border-bottom: 3px solid ${(props) => props.color};
`;

const List = styled.ul`
  padding: 20px 0 5px 0;
`;

const SubList = styled.li`
  display: flex;
  margin: 0 0 10px 0;
  button {
    opacity: 0.3;
  }
`;
const SubTitle = styled.input`
  flex: 1;
  margin-right: 7px;
  padding: 8px 12px;
  border: 1px solid ${COLOR.gray};
  font-size: 1rem;
  font-weight: 500;
  font-family: "Pretendard";
  outline: none;
`;
const OptionTxt = styled.input`
  flex: 3;
  padding: 8px 4px;
  border: none;
  border-bottom: 1px solid ${COLOR.gray};
  font-size: 0.95rem;
  outline: none;
`;

const Buttons = styled.article`
  margin: 5px 0;
  text-align: center;
`;
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
`;

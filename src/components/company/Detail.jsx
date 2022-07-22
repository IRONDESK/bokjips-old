import styled from "@emotion/styled";
import { COLOR } from "../../constants";

const DataKinds = {
  condition: ["근무 조건", "#E86A6A"],
  worksupport: ["근무 지원", "#5EAC7D"],
  support: ["근무 외 지원", "#855EAC"],
  environment: ["사내 환경 지원", "#DE9528"],
  etc: ["기타 사항", "#898989"],
};

export default function Detail({ kind, data }) {
  return (
    <Container>
      <Title>{DataKinds[kind][0]}</Title>
      <List>
        {data
          ? data?.map((el, index) => (
              <SubList key={"kind" + index}>
                <SubTitle color={DataKinds[kind][1]}>{el.subTitle}</SubTitle>
                <OptionTxt color={DataKinds[kind][1]}>{el.options}</OptionTxt>
              </SubList>
            ))
          : null}
      </List>
    </Container>
  );
}

const Container = styled.article`
  padding: 23px;
  border-radius: 10px;
  border: 1px solid ${COLOR.gray};
`;
const Title = styled.h4`
  font-weight: 600;
  font-size: 20px;
`;

const List = styled.ul`
  padding: 20px 0 5px 0;
`;
const SubList = styled.li`
  margin: 0 0 10px 0;
`;
const SubTitle = styled.span`
  display: inline-block;
  margin-right: 7px;
  padding: 8px 12px;
  background-color: ${(props) => props.color};
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  border-radius: 20px;
`;
const OptionTxt = styled.span`
  color: ${(props) => props.color};
  font-size: 16px;
`;

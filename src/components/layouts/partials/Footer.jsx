import styled from "@emotion/styled";
import { COLOR } from "../../../constants";

export const Footer = () => {
  return <Container>ⓒ 복지편살, 2022</Container>;
};

const Container = styled.footer`
  padding: 25px;
  background-color: ${COLOR.gray};
`;

import styled from "@emotion/styled";
import { COLOR } from "../../../constants";

export const Footer = () => {
  return (
    <Container>
      <strong>복지편살 ─ 복잡한 복지 정보, 편하게 살펴보자</strong>
      <br />
      <br />
      복지편살의 정보 사용은 모두에게 자유롭게 허용됩니다.
    </Container>
  );
};

const Container = styled.footer`
  padding: 24px 20px 60px;
  background-color: ${COLOR.gray};
  font-weight: 300;
  font-size: 0.9rem;
  strong {
    font-size: 1.1rem;
    font-weight: 600;
  }
`;

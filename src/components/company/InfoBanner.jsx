import Link from "next/link";
import styled from "@emotion/styled";
import { COLOR } from "../../constants";

export default function InfoBanner({
  name,
  site,
  career,
  category,
  stock,
  good,
  image,
}) {
  return (
    <>
      <Container>
        <Wrap>
          <Logo>
            <img src={image} />
          </Logo>
          <Info>
            <CorpName>{name}</CorpName>
            <Category>
              {stock ? "상장" : "비상장"} • {category}
            </Category>
          </Info>
          <Good>
            <GoodBtn
              type='button'
              onClick={() => {
                alert("좋아요 클릭");
              }}
            >
              ♥{good}
            </GoodBtn>
          </Good>
        </Wrap>
      </Container>
      <BtnContainer>
        <BtnWrap>
          {site ? (
            <Link href={site}>
              <LinkBtn>기업 사이트 이동</LinkBtn>
            </Link>
          ) : null}
          {career ? (
            <Link href={career}>
              <LinkBtn>채용정보 보기</LinkBtn>
            </Link>
          ) : null}
        </BtnWrap>
      </BtnContainer>
    </>
  );
}

const Container = styled.section`
  width: 100%;
  background-color: ${COLOR.main};
`;

const Wrap = styled.article`
  position: relative;
  margin: 0 auto;
  max-width: 1100px;
  height: 120px;
  overflow: hidden;
`;

const Logo = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  top: 50%;
  width: 230px;
  height: 230px;
  border-radius: 100%;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0) 20%,
    rgba(255, 255, 255, 0.45) 65%,
    rgba(255, 255, 255, 1) 100%
  );
  transform: translate(0, -50%);
  img {
    width: 90px;
    height: 90px;
    border-radius: 15px;
    object-fit: cover;
  }
`;
const Info = styled.div`
  display: flex;
  margin: 0 auto;
  padding: 7px 0;
  justify-content: space-between;
  align-items: center;
  width: 560px;
  height: 100%;
  text-align: center;
`;
const Good = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  width: 230px;
  height: 230px;
  border: 1px solid #fff;
  border-radius: 100%;
  transform: translate(0, -50%);
  overflow: hidden;
`;
const GoodBtn = styled.button`
  width: 100%;
  color: #fff;
  font-size: 35px;
  font-weight: 600;
  line-height: 230px;
  &:hover {
    background-color: #fff;
    color: ${COLOR.main};
    transition: 0.3s background-color;
  }
`;

const Category = styled.span`
  color: #fff;
  font-size: 17px;
  font-weight: 600;
`;
const CorpName = styled.h3`
  margin: 7px 0;
  color: #fff;
  font-size: 37px;
  font-weight: 700;
`;
const BtnContainer = styled.section`
  background-color: ${"rgba(" + COLOR.mainrgb + ", .6)"};
`;
const BtnWrap = styled.article`
  display: flex;
  margin: 0 auto;
  max-width: 1100px;
`;
const LinkBtn = styled.button`
  display: block;
  padding: 10px 0;
  flex: 1;
  color: #fff;
  font-size: 16px;
  &:hover {
    background-color: ${COLOR.main};
    color: #fff;
  }
`;

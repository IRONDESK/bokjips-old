import Link from "next/link";
import styled from "@emotion/styled";
import { COLOR } from "../../constants";

export default function CorpItem({
  corp_id,
  name,
  category,
  stock,
  good,
  image,
  welfareList,
}) {
  return (
    <Container>
      <Top>
        <Logo
          src='https://media-exp1.licdn.com/dms/image/C560BAQFXeEWM-FoApw/company-logo_200_200/0/1519881499181?e=2147483647&v=beta&t=KM_FX6hrlfp-OCrbSa6qrckrxs_znCgT6oyrxEP_0RI'
          alt={name}
        />
        <Info>
          <TitleWrap>
            <Name>{name}</Name>
            {stock ? <StockTag src='/images/icons/stock.svg' /> : null}
            <CategoryTag>{category}</CategoryTag>
          </TitleWrap>
          <WelfareWrap>
            {welfareList.slice(0, 7).map((el, index) => (
              <Welfare key={index}>{el}</Welfare>
            ))}
          </WelfareWrap>
        </Info>
      </Top>

      <Options>
        <Like>♥ {good}</Like>
        <Link href={`/corp/${corp_id}`}>
          <DetailBtn>
            <span className='material-icons'>chevron_right</span>
            자세히
          </DetailBtn>
        </Link>
      </Options>
    </Container>
  );
}

const Container = styled.article`
  position: relative;
  width: 100%;
  height: 164px;
  border-radius: 10px;
  border: 1px solid ${COLOR.gray};
  overflow: hidden;
  transition: box-shadow 0.5s;
  &:hover {
    border: none;
    box-shadow: 0 3px 15px 1px rgba(0, 0, 0, 0.1);
  }
`;
const Top = styled.div`
  display: flex;
  padding: 16px;
`;
const Logo = styled.img`
  display: block;
  padding: 8px;
  width: 70px;
  height: 70px;
  border: 1px solid ${COLOR.gray};
  object-fit: cover;
  border-radius: 100%;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 17px;
  width: 380px;
`;
const TitleWrap = styled.div`
  display: flex;
  margin: 0 0 7px 0;
  align-items: center;
`;
const Name = styled.h3`
  display: inline-block;
  font-weight: 700;
  font-size: 20px;
  @media (max-width: 1024px) {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  } ;
`;
const StockTag = styled.img`
  margin: 0 4px;
  padding: 3px;
  background-color: ${COLOR.gray};
  width: 23px;
  height: 23px;
  border-radius: 100%;
`;
const CategoryTag = styled.span`
  display: inline-block;
  margin: 0 3px;
  padding: 1px 8px;
  min-width: 50px;
  color: ${COLOR.darkgray};
  font-size: 13px;
  text-align: center;
  line-height: 20px;
  border: 1px solid ${COLOR.gray};
  border-radius: 15px;
`;
const WelfareWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 5px 4px;
`;
const Welfare = styled.li`
  padding: 2px 3px;
  font-size: 14px;
  border: 1px solid #000;
`;
const Options = styled.div`
  position: absolute;
  display: flex;
  padding: 0 18px;
  width: 100%;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  bottom: 0;
  font-weight: 500;
  border-top: 1px solid ${COLOR.gray};
`;
const Like = styled.span`
  display: inline-block;
  min-width: 20px;
  text-align: left;
  font-size: 13px;
`;
const DetailBtn = styled.a`
  display: flex;
  padding: 2px 8px;
  align-items: center;
  font-size: 14px;
  &:hover {
    color: ${COLOR.main};
  }
`;

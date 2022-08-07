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
        <div className='top_head'>
          <Logo src={image} alt={name} />
          <Info>
            <Name>{name}</Name>
            {stock ? <StockTag src='/images/icons/stock.svg' /> : null}
            <CategoryTag>{category}</CategoryTag>
          </Info>
        </div>
        <WelfareWrap>
          {welfareList.slice(0, 12).map((el, index) => (
            <Welfare key={index}>{el}</Welfare>
          ))}
        </WelfareWrap>
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
  height: 170px;
  border-radius: 10px;
  border: 1px solid ${COLOR.gray};
  overflow: hidden;
  transition: box-shadow 0.5s;
  &:hover {
    border: none;
    box-shadow: 0 3px 15px 1px rgba(0, 0, 0, 0.1);
  }
  @media (max-width: 960px) {
    height: 180px;
  }
`;
const Top = styled.div`
  padding: 20px 16px;
  @media (max-width: 960px) {
    padding: 12px 16px;
    .top_head {
      display: flex;
      padding: 0 0 8px 0;
    }
  }
`;
const Logo = styled.img`
  float: left;
  display: block;
  width: 66px;
  height: 66px;
  background-color: #fff;
  border: 1px solid ${COLOR.gray};
  border-radius: 100%;
  object-fit: contain;
  @media (max-width: 1024px) {
    width: 40px;
    height: 40px;
  }
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px 8px 16px;
  @media (max-width: 960px) {
    padding: 0 12px;
  }
`;

const Name = styled.h3`
  display: inline-block;
  font-weight: 600;
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
  width: 23px;
  height: 23px;
  border: 1px solid ${COLOR.darkgray};
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
  border: 1px solid ${COLOR.darkgray};
  border-radius: 15px;
`;
const WelfareWrap = styled.ul`
  display: flex;
  padding: 0 16px;
  flex-wrap: wrap;
  gap: 5px 4px;
  max-height: 50px;
  overflow: hidden;
  @media (max-width: 960px) {
    padding: 0 4px;
  }
`;
const Welfare = styled.li`
  padding: 3px 4px;
  font-size: 14px;
  background-color: ${COLOR.graybg};
  border-radius: 5px;
  border: 1px solid ${COLOR.gray};
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

import Link from 'next/link'
import styled from '@emotion/styled'
import { COLOR } from '../../constants'

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
          src="https://media-exp1.licdn.com/dms/image/C560BAQFXeEWM-FoApw/company-logo_200_200/0/1519881499181?e=2147483647&v=beta&t=KM_FX6hrlfp-OCrbSa6qrckrxs_znCgT6oyrxEP_0RI"
          alt={name}
        />
        <Info>
          <TitleWrap>
            <Name>{name}</Name>
            {stock ? <StockTag src="/images/icons/stock.svg" /> : null}
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
        <DetailBtn>
          <Link href={`/corp/${corp_id}`}>복지 정보 자세히</Link>
        </DetailBtn>
      </Options>
    </Container>
  )
}

const Container = styled.article`
  position: relative;
  width: 100%;
  height: 150px;
  border-radius: 10px;
  box-shadow: 0 0 15px 2px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`
const Top = styled.div`
  display: flex;
  padding: 15px;
`
const Logo = styled.img`
  display: block;
  padding: 5px;
  width: 83px;
  height: 83px;
  border: 1px solid ${COLOR.gray};
  object-fit: cover;
  border-radius: 100%;
`
const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 17px;
  width: 380px;
`
const TitleWrap = styled.div`
  display: flex;
  margin: 0 0 7px 0;
  align-items: center;
`
const Name = styled.h3`
  display: inline-block;
  font-weight: 800;
  font-size: 23px;
  @media (max-width: 1024px) {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  } ;
`
const StockTag = styled.img`
  margin: 0 2px;
  width: 23px;
  height: 23px;
`
const CategoryTag = styled.span`
  display: inline-block;
  margin: 0 3px;
  padding: 1px 5px;
  min-width: 50px;
  background-color: ${COLOR.gray};
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  border-radius: 15px;
`
const WelfareWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 5px 4px;
`
const Welfare = styled.li`
  padding: 2px 3px;
  font-size: 14px;
  border: 1px solid #000;
`
const Options = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 38px;
  bottom: 0;
  border-top: 1px solid ${COLOR.gray};
  font-size: 15px;
  line-height: 38px;
  text-align: center;
  font-weight: 500;

  & > span:hover {
    background-color: ${COLOR.gray};
    font-weight: 700;
  }
`
const Like = styled.span`
  flex: 1;
  border-right: 1px solid ${COLOR.gray};
`
const DetailBtn = styled.span`
  flex: 1;
  a {
    display: inline-block;
    width: 100%;
  }
`

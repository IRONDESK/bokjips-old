import Link from 'next/link'
import styled from '@emotion/styled'
import { COLOR } from '../../constants'

export default function CorpItem({
  corp_id,
  name,
  site,
  career,
  category,
  stock,
  good,
  image,
  welfareList,
}) {
  return (
    <Container>
      <Top>
        <Logo src={image} alt={name} />
        <Info>
          <TitleWrap>
            <Name>{name}</Name>
            {stock ? <StockTag src="/images/icons/stock.svg" /> : null}
            <CategoryTag>{category}</CategoryTag>
          </TitleWrap>
          <Welfare>{welfareList}</Welfare>
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
const TitleWrap = styled.p`
  display: flex;
  margin: 0 0 7px 0;
  align-items: center;
`
const Name = styled.h3`
  display: inline-block;
  font-weight: 800;
  font-size: 23px;
`
const StockTag = styled.img`
  margin: 0 2px;
  width: 23px;
  height: 23px;
`
const CategoryTag = styled.span`
  display: inline-block;
  margin: 0 3px;
  min-width: 50px;
  background-color: ${COLOR.gray};
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  border-radius: 15px;
`
const Welfare = styled.ul``
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

import styled from '@emotion/styled'
import { COLOR } from '../../constants'
import CorpItem from './CorpItem'

export default function ItemList() {
  return (
    <>
      <Items>
        <CorpItem
          corp_id={1}
          name="우아한형제들"
          image="https://media-exp1.licdn.com/dms/image/C560BAQFXeEWM-FoApw/company-logo_200_200/0/1519881499181?e=2147483647&v=beta&t=KM_FX6hrlfp-OCrbSa6qrckrxs_znCgT6oyrxEP_0RI"
          stock={true}
          good="201"
          category="IT"
          welfareList="welfareList"
        />
        <CorpItem
          corp_id={1}
          name="직방"
          image=""
          stock={true}
          good="201"
          category="IT"
          welfareList="welfareList"
        />
      </Items>
    </>
  )
}

const Items = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 30px;
`

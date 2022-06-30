import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import axios from 'axios'
import { COLOR } from '../../constants'

import CorpItem from './CorpItem'

export default function ItemList() {
  const [corpData, setCorpData] = useState()
  useEffect(() => {
    axios.get('http://52.79.165.66:8081/corp/select').then((res) => {
      // console.log(res.data.dtoList)
      setCorpData(res?.data.dtoList)
    })
  }, [corpData])

  return (
    <>
      <Items>
        {corpData?.map((el) => (
          <CorpItem
            key={el.corp_id}
            corp_id={el.corp_id}
            name={el.name}
            image={el.image}
            stock={el.stock}
            good={el.good}
            category={el.category}
            welfareList={el.welfareList}
          />
        ))}
        {/* <CorpItem
          corp_id={1}
          name="우아한형제들"
          image="https://media-exp1.licdn.com/dms/image/C560BAQFXeEWM-FoApw/company-logo_200_200/0/1519881499181?e=2147483647&v=beta&t=KM_FX6hrlfp-OCrbSa6qrckrxs_znCgT6oyrxEP_0RI"
          stock={true}
          good="201"
          category="IT"
          welfareList="welfareList"
        /> */}
      </Items>
    </>
  )
}

const Items = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px 30px;
  @media (max-width: 1024px) {
    padding: 0 30px;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  } ;
`

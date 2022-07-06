import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import axios from 'axios'

import CorpItem from './CorpItem'

export default function ItemList({ setItemLength }) {
  const [corpData, setCorpData] = useState()
  useEffect(() => {
    axios.get('http://52.79.165.66:8081/corp/select').then((res) => {
      setCorpData(res?.data.dtoList)
      setItemLength(res?.data.dtoList.length)
    })
  }, [])

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

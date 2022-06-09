import styled from '@emotion/styled'
import { COLOR } from '../constants'

import FilterList from '../components/main/FilterList'
import ItemList from '../components/main/ItemList'

export default function Home() {
  return (
    <>
      <Wrap>
        <FilterList />
        <ItemList />
      </Wrap>
    </>
  )
}

const Wrap = styled.main`
  margin: 0 auto 30px auto;
  max-width: 1024px;
`

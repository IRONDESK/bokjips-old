import styled from "@emotion/styled";

import FilterList from "../components/main/FilterList";
import ItemList from "../components/main/ItemList";
import { useState } from "react";

export default function Home() {
  const [itemLength, setItemLength] = useState(0);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [selectedFilter, setSelectedFilter] = useState([]);

  return (
    <>
      <Wrap>
        <FilterList
          itemLength={itemLength}
          setSearchKeyword={setSearchKeyword}
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
        />
        <ItemList
          setItemLength={setItemLength}
          searchKeyword={searchKeyword}
          selectedFilter={selectedFilter}
        />
      </Wrap>
    </>
  );
}

const Wrap = styled.main`
  margin: 0 auto 30px auto;
  max-width: 1024px;
`;

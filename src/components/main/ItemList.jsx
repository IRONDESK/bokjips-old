import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import axios from "axios";

import CorpItem from "./CorpItem";
import useSWR from "swr";

export default function ItemList({
  setItemLength,
  searchKeyword,
  selectedFilter,
}) {
  const { data, error } = useSWR(
    `http://52.79.165.66:8081/${
      searchKeyword ? "search/" + searchKeyword : "corp/select"
    }`,
    (...args) => fetch(...args).then((res) => res.json())
  );
  useEffect(() => {
    setItemLength(data?.dtoList.length);
  }, [data]);

  return (
    <>
      {data ? (
        <Items>
          {data?.dtoList.map((el) => (
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
      ) : (
        <NoDataSection>
          <p className='material-icons'>search_off</p>
          검색된 회사가 없습니다
        </NoDataSection>
      )}
    </>
  );
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
`;

const NoDataSection = styled.section`
  margin: 120px 0%;
  text-align: center;
  p {
    display: block;
    margin: 20px 0;
    font-size: 64px;
  }
`;

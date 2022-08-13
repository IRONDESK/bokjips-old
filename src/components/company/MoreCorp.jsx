import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Link from "next/link";
import axios from "axios";

import { COLOR } from "../../constants";

export default function MoreCorp({ corpId, category, stock }) {
  const [MoreCorp, setMoreCorp] = useState();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axios
      .post("http://52.79.165.66:8081/corp/select/mini", {
        corp_id: corpId ?? 1,
        category: category ?? [""],
        stock: stock ?? false,
      })
      .then((res) => setMoreCorp(res?.data));
  }, [isLoaded]);

  setTimeout(() => {
    setIsLoaded(true);
  }, 200);

  return (
    <Container>
      <Items>
        <ItemHead>
          이 회사는
          <br />
          어때요?
        </ItemHead>
        {MoreCorp
          ? MoreCorp?.slice(0, 4).map((el, idx) => (
              <Link href={`/corp/${el.corp_id}`} key={idx}>
                <Item>
                  <CorpName>{el.name}</CorpName>
                  <Good>
                    <span className='material-icons'>favorite</span>
                    {el.good}
                  </Good>
                </Item>
              </Link>
            ))
          : null}
      </Items>
    </Container>
  );
}

const Container = styled.section`
  width: 100%;
  background-color: ${COLOR.graybg2};
`;
const Items = styled.article`
  display: flex;
  padding: 24px 20px;
  margin: -30px auto 0 auto;
  max-width: 820px;
  overflow: auto;
  text-align: center;
  white-space: nowrap;
`;
const ItemHead = styled.div`
  margin: 0 12px 0 0;
  padding: 8px;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  text-align: left;
  line-height: 28px;
  word-break: keep-all;
`;
const Item = styled.div`
  margin: 0 16px 0 0;
  padding: 4px 12px;
  width: 152px;
  background-color: #fff;
  border: 2px solid #fff;
  border-radius: 7px;
  font-size: 16px;
  text-align: left;
  line-height: 28px;
  word-break: keep-all;
  cursor: pointer;
  &:hover {
    color: ${COLOR.main};
  }
  @media (max-width: 640px) {
    min-width: 148px;
  }
`;
const CorpName = styled.h5`
  margin: 0 0 3px 0;
`;
const Good = styled.p`
  float: right;
  display: flex;
  align-items: center;
  span {
    font-size: 16px;
  }
`;

import styled from "@emotion/styled";
import { useState } from "react";
import { COLOR } from "../../constants";
import { MainFilter } from "../../lib/GlobalData";

export default function FilterList({ itemLength }) {
  const [showFilter, setShowFilter] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState([]);
  const selectFilter = (e) => {
    if (e.target.id) setSelectedFilter([...selectedFilter, e.target.id]);
  };

  return (
    <Container>
      <FilterNav>
        <ItemAmount>
          총 <strong>{itemLength}개</strong>의 기업
        </ItemAmount>
        <Inputs>
          <Search>
            <SearchInput type='text' placeholder='기업명으로 검색' />
            <i className='material-icons'>search</i>
          </Search>
          <FilterShowBtn
            type='button'
            onClick={() => setShowFilter(!showFilter)}
          >
            <i className='material-icons'>filter_alt</i> 필터
          </FilterShowBtn>
        </Inputs>
      </FilterNav>
      <FilterWrap show={showFilter} onClick={selectFilter}>
        {showFilter
          ? MainFilter.map((el) => (
              <li key={el.id}>
                <ItemCheck type='checkbox' id={el.id} />
                <FilterItem htmlFor={el.id} value={el.value}>
                  {el.text}
                </FilterItem>
              </li>
            ))
          : null}
      </FilterWrap>
    </Container>
  );
}

const Container = styled.section`
  margin: 10px 0;
  width: 100%;
  @media (max-width: 1024px) {
    padding: 0 30px;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  } ;
`;

const FilterNav = styled.section`
  display: flex;
  align-items: center;
  gap: 16px;
  @media (max-width: 768px) {
    flex-direction: column;
  } ;
`;
const Inputs = styled.article`
  display: flex;
  align-items: center;
  gap: 8px;
`;
const ItemAmount = styled.p`
  font-size: 15px;
  strong {
    font-weight: bold;
  }
  @media (max-width: 768px) {
    margin: 12px 0 0 0;
  } ;
`;

const Search = styled.div`
  display: flex;
  justify-content: space-between;
  width: 240px;
  padding: 8px 12px;
  border-radius: 20px;
  border: 1px solid ${COLOR.gray};
  box-sizing: border-box;
  i {
    display: block;
    padding: 5px;
    font-family: "Material Icons";
    font-size: 16px;
    color: ${COLOR.darkgray};
  }
`;
const SearchInput = styled.input`
  flex: 1;
  outline: none;
  border: none;
`;
const FilterShowBtn = styled.button`
  display: flex;
  padding: 8px 12px;
  height: 36px;
  align-items: center;
  background-color: ${COLOR.main};
  color: #fff;
  border-radius: 15px;
  i {
    margin: 0 4px 0 0;
    font-size: 16px;
  }
`;

const FilterWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 12px 0 24px 0;
  gap: 10px 5px;
  height: ${(prop) => (prop.show ? "auto" : "0")};
  opacity: ${(prop) => (prop.show ? "1" : "0")};
  transition: all 0.3s;
`;
const ItemCheck = styled.input`
  display: none;
  &:checked + label {
    color: ${COLOR.main};
    font-weight: 600;
    border: 1px solid ${COLOR.main};
    box-shadow: 0 0 4px 1px rgba(${COLOR.mainrgb}, 0.2);
  }
`;
const FilterItem = styled.label`
  cursor: pointer;
  display: inline-block;
  padding: 8px 12px;
  font-size: 13px;
  border-radius: 20px;
  border: 1px solid ${COLOR.gray};
  &:hover {
    box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.1);
  }
`;

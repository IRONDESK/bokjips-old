import styled from "@emotion/styled";
import React, { useRef, useState } from "react";
import { COLOR } from "../../constants";
import { MainFilter } from "../../lib/GlobalData";

export default function FilterList({
  itemLength,
  setSearchKeyword,
  selectedFilter,
  setSelectedFilter,
}) {
  const [showFilter, setShowFilter] = useState(false);
  const searchInput = useRef();

  const FilterCorp = (e) => {
    if (e.target.id && e.target.checked) {
      setSelectedFilter([...selectedFilter, e.target.id]);
    }
    if (!e.target.checked) {
      let filtered = selectedFilter.filter((el) => el !== e.target.id);
      setSelectedFilter(filtered);
    }
  };

  const SearchCorp = (e) => {
    e.preventDefault();
    setSearchKeyword(searchInput.current.value);
  };

  return (
    <Container>
      <FilterNav>
        <ItemAmount>
          총 <strong>{itemLength ?? 0}개</strong>의 기업
        </ItemAmount>
        <SearchFilterWrap>
          <Search onSubmit={(e) => SearchCorp(e)}>
            <input
              type='text'
              ref={searchInput}
              placeholder='기업명, 카테고리로 검색'
            />
            <button className='material-icons' type='submit'>
              search
            </button>
          </Search>
          <FilterShowBtn
            type='button'
            isSelected={selectedFilter.length > 0}
            onClick={() => setShowFilter(!showFilter)}
          >
            <i className='material-icons'>filter_alt</i>{" "}
            {selectedFilter.length > 0 ? selectedFilter.length + "개" : "필터"}
          </FilterShowBtn>
        </SearchFilterWrap>
      </FilterNav>
      <FilterWrap show={showFilter} onClick={FilterCorp}>
        {MainFilter.map((el) => (
          <li key={el.id}>
            <ItemCheck type='checkbox' id={el.value} />
            <FilterItem htmlFor={el.value}>{el.text}</FilterItem>
          </li>
        ))}
      </FilterWrap>
    </Container>
  );
}

const Container = styled.section`
  margin: 24px 0;
  width: 100%;
  @media (max-width: 768px) {
    display: flex;
    margin: 16px 0;
    flex-direction: column;
    flex-wrap: wrap;
  } ;
`;

const FilterNav = styled.section`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 0 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  } ;
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

const SearchFilterWrap = styled.article`
  flex: 1;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;
const Search = styled.form`
  flex: 1;
  display: flex;
  padding: 8px 12px;
  border-radius: 20px;
  border: 1px solid ${COLOR.gray};
  input {
    width: calc(100% - 32px);
    outline: none;
    border: none;
    font-size: 0.9rem;
    line-height: 28px;
  }
  button {
    width: 32px;
    padding: 4px;
    font-family: "Material Icons";
    font-size: 20px;
    color: ${COLOR.darkgray};
  }
  @media (max-width: 768px) {
    padding: 4px 12px;
  } ;
`;

const FilterShowBtn = styled.button`
  display: flex;
  padding: 8px 12px;
  min-width: 68px;
  height: 32px;
  align-items: center;
  border: 1px solid ${COLOR.modal};
  border-radius: 15px;
  color: ${COLOR.modal};
  font-size: 0.8rem;
  font-weight: ${(props) => (props.isSelected ? "600" : "300")};
  opacity: ${(props) => (props.isSelected ? "1" : "0.6")};
  i {
    margin: 0 4px 0 0;
    font-size: 16px;
  }
`;

const FilterWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: ${(prop) => (prop.show ? "20px 0" : "8px 0")};
  padding: ${(prop) => (prop.show ? "20px" : "0 20px")};
  height: ${(prop) => (prop.show ? "auto" : "0")};
  background-color: ${COLOR.graybg};
  border-radius: 10px;
  gap: 12px;
  opacity: ${(prop) => (prop.show ? "1" : "0")};
  transition: all 0.3s;
  @media (max-width: 1024px) {
    border-radius: 0;
  } ;
`;
const ItemCheck = styled.input`
  display: none;
  &:checked + label {
    color: ${COLOR.main};
    font-weight: 600;
    border: 1px solid ${COLOR.main};
  }
`;
const FilterItem = styled.label`
  cursor: pointer;
  display: inline-block;
  background-color: #fff;
  padding: 8px 12px;
  font-size: 13px;
  border-radius: 20px;
  border: 1px solid #fff;
  &:hover {
    border: 1px solid ${COLOR.main};
  }
  @media (max-width: 768px) {
    padding: 12px 14px;
    &:hover {
      border: 1px solid #fff;
    }
  }
`;

import React, { useState } from "react";

import styled from "@emotion/styled";
import { COLOR } from "../../../constants";

function TopForm({ register }) {
  const [selectedCategory, setselectedCategory] = useState("카테고리");
  const categories = [
    "IT/플랫폼",
    "유통",
    "게임",
    "건강/바이오",
    "금융",
    "문화",
    "기타",
  ];
  const SelectCategory = (e) => {
    if (e.target.value) {
      setselectedCategory(e.target.value);
    }
  };
  return (
    <Container>
      <ImgInput
        // type="file"
        id='img-attach'
        {...register("image")}
      />
      <ImgLabel htmlFor='img-attach' className='material-icons'>
        add_photo_alternate
        <span className='a11y-hidden'>이미지 첨부</span>
      </ImgLabel>
      <InputWrap>
        <Line>
          <Label htmlFor='name'>회사명</Label>
          <NameInput
            type='text'
            id='name'
            {...register("name", {
              required: true,
            })}
          />
          <CategoryButton type='button' id='category'>
            {selectedCategory}
            <Catagories onClick={SelectCategory}>
              {categories.map((el) => (
                <CategoryItem key={el}>
                  <RadioLabel>
                    <RadioInput
                      {...register("category.0")}
                      type='radio'
                      htmlFor='category'
                      value={el}
                    />
                    {el}
                  </RadioLabel>
                </CategoryItem>
              ))}
            </Catagories>
          </CategoryButton>
          <Label htmlFor='stock'>
            상장여부
            <CheckInput
              type='checkbox'
              id='stock'
              {...register("stock", {
                value: false,
              })}
            />
          </Label>
        </Line>
        <Line>
          <Label htmlFor='site'>사이트</Label>
          <Input
            type='text'
            id='site'
            {...register("site", {
              required: true,
            })}
          />
          <Label htmlFor='career'>채용 페이지</Label>
          <Input
            type='text'
            id='career'
            {...register("career", {
              required: true,
            })}
          />
        </Line>
      </InputWrap>
    </Container>
  );
}

const Container = styled.section`
  margin: 20px 0;
  padding: 10px 5px;
  height: 120px;
  & input[type="text"]:focus {
    border: 1px solid #000;
  }
  @media (max-width: 768px) {
    height: 410px;
  } ;
`;
const InputWrap = styled.article`
  margin: 5px 0;
  height: 120px;
`;
const Line = styled.article`
  display: flex;
  margin: 10px 0;
  align-items: center;
  @media (max-width: 768px) {
    margin: 0 auto 15px auto;
    width: 70%;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
  @media (max-width: 540px) {
    width: 100%;
  } ;
`;

const ImgInput = styled.input`
  display: none;
`;
const ImgLabel = styled.label`
  cursor: pointer;
  float: left;
  margin: 0 15px 0 0;
  width: 100px;
  height: 100px;
  background-color: ${COLOR.gray};
  font-size: 28px;
  line-height: 100px;
  text-align: center;
  border-radius: 100%;
  &:hover {
    background-color: #000;
    color: ${COLOR.gray};
  }
  @media (max-width: 768px) {
    float: none;
    display: block;
    margin: 0 auto;
  } ;
`;
const Label = styled.label`
  margin-right: 5px;
  font-size: 15px;
  font-weight: 600;
`;
const NameInput = styled.input`
  min-width: calc(100% - 270px);
  padding: 6px 10px;
  font-size: 20px;
  border: 1px solid ${COLOR.gray};
  outline: none;
  font-family: Pretendard;
  @media (max-width: 768px) {
    width: 100%;
  } ;
`;
const Input = styled.input`
  padding: 6px 10px;
  width: 40%;
  font-size: 16px;
  border: 1px solid ${COLOR.gray};
  outline: none;
  font-family: Pretendard;
  @media (max-width: 768px) {
    width: 100%;
  }
  &:nth-child(2) {
    margin-right: 23px;
  }
`;
const CheckInput = styled.input``;
const RadioLabel = styled.label`
  display: flex;
  align-items: center;
`;
const RadioInput = styled.input`
  margin: 0 4px;
  accent-color: #000;
`;
const CategoryButton = styled.button`
  position: relative;
  display: inline-block;
  margin: 0 10px;
  padding: 6px 10px;
  width: 120px;
  background-color: ${COLOR.gray};
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  border: 1px solid ${COLOR.gray};
  &:hover {
    background-color: #000;
    color: ${COLOR.gray};
    border: 1px solid #000;
    ul {
      display: block;
    }
  }
  &::after {
    content: "expand_more";
    float: right;
    display: block;
    font-family: "Material Icons";
    font-size: 18px;
  }
  @media (max-width: 768px) {
    margin: 0;
  }
`;
const Catagories = styled.ul`
  display: none;
  position: absolute;
  padding: 10px;
  top: 36px;
  left: -1px;
  width: 120px;
  background-color: #fff;
  color: #000;
  font-size: 13px;
  border: 1px solid #000;
`;
const CategoryItem = styled.li``;

export default TopForm;

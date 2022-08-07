import React from "react";

import styled from "@emotion/styled";
import { COLOR } from "../../../constants";

import Detail from "./DetailForm";

export default function BottomForm({ register, control, useFieldArray }) {
  return (
    <Bottom>
      <Detail
        kind='condition'
        formRegister={register}
        control={control}
        useFieldArray={useFieldArray}
      />
      <Detail
        kind='worksupport'
        formRegister={register}
        control={control}
        useFieldArray={useFieldArray}
      />
      <Detail
        kind='support'
        formRegister={register}
        control={control}
        useFieldArray={useFieldArray}
      />
      <Detail
        kind='environment'
        formRegister={register}
        control={control}
        useFieldArray={useFieldArray}
      />
      <Detail
        kind='etc'
        formRegister={register}
        control={control}
        useFieldArray={useFieldArray}
      />
    </Bottom>
  );
}

const Bottom = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  } ;
`;

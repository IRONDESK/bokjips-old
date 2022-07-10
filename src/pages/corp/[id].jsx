import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

import styled from "@emotion/styled";
import { COLOR } from "../../constants";

import { Title } from "../../components/layouts";
import Comments from "../../components/company/Comments";
import InfoBanner from "../../components/company/InfoBanner";
import Detail from "../../components/company/Detail";
import ErrorReport from "../../components/company/ErrorReport";
import MoreCorp from "../../components/company/MoreCorp";

export default function Home() {
  const router = useRouter();
  const corp_id = router.query.id;
  const user_id =
    typeof window !== "undefined" ? sessionStorage.getItem("id") : "";
  const [data, setData] = useState();
  const [errorReportModal, setErrorReportModal] = useState(false);

  useEffect(() => {
    axios
      .get(
        `http://52.79.165.66:8081/corp/select/${corp_id}/${
          user_id ? "" : user_id
        }`
      )
      .then((res) => {
        setData(res?.data);
      });
  }, []);

  return (
    <>
      <Title title={data?.name} />
      <InfoBanner
        name={data?.name}
        site={data?.site}
        career={data?.career}
        image={data?.image}
        stock={data?.stock}
        good={data?.good}
        category={data?.category}
      />
      <Contents>
        <Details>
          {data ? (
            <>
              <Detail kind='condition' data={data?.welfareList?.condition} />
              <Detail
                kind='worksupport'
                data={data?.welfareList?.worksupport}
              />
              <Detail kind='support' data={data?.welfareList?.support} />
              <Detail
                kind='environment'
                data={data?.welfareList?.environment}
              />
              <Detail kind='etc' data={data?.welfareList?.etc} />
            </>
          ) : null}
        </Details>
        <ReportBtn
          type='button'
          onClick={() => {
            setErrorReportModal(true);
          }}
        >
          <span className='material-icons'>priority_high</span>
          오류 수정 요청
        </ReportBtn>
        <ErrorReport
          corpId={0}
          corpName={data?.name}
          view={errorReportModal}
          setView={setErrorReportModal}
        />
      </Contents>
      <Comments />
      <MoreCorp />
    </>
  );
}

const Contents = styled.main`
  margin: 40px auto;
  max-width: 1024px;
  @media (max-width: 1024px) {
    padding: 0 30px;
  } ;
`;

const Details = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
  } ;
`;

const ReportBtn = styled.button`
  display: flex;
  align-items: center;
  margin: 30px auto;
  color: ${COLOR.report};
  font-size: 13px;
  font-weight: 500;
  span {
    display: inline-block;
    margin: 0 6px 0 0;
    padding: 3px;
    background-color: ${COLOR.report};
    color: #fff;
    font-size: inherit;
    border-radius: 100%;
  }
`;

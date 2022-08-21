import { useState } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "@emotion/styled";
import useUserInfo from "../../lib/useUserInfo";

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
  const { userInfo } = useUserInfo();

  const [errorReportModal, setErrorReportModal] = useState(false);
  const { data } = useSWR(
    `http://52.79.165.66:8081/corp/select/${corp_id}/${
      userInfo.user_id ?? "user"
    }`,
    (...args) => fetch(...args).then((res) => res.json())
  );

  return (
    <>
      <Title title={data?.name} />
      <Main>
        <InfoBanner corpId={corp_id} />
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
                {data?.welfareList?.etc ? (
                  <Detail kind='etc' data={data?.welfareList?.etc} />
                ) : null}
              </>
            ) : null}
          </Details>
          <ReportBtn
            type='button'
            onClick={() => {
              // setErrorReportModal(true);
              alert(
                `준비 중인 기능입니다.\n 수정이 필요한 경우, 댓글로 요청 바랍니다.`
              );
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
      </Main>
      <Comments />
      <MoreCorp
        corpId={corp_id}
        category={data?.category}
        stock={data?.stock}
      />
    </>
  );
}

const Main = styled.main`
  display: flex;
  @media (max-width: 640px) {
    flex-direction: column;
  } ;
`;
const Contents = styled.section`
  flex: 3.8;
  padding: 28px;
  @media (max-width: 640px) {
    padding: 20px;
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

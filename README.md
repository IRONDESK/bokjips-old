<div align="center">
  <h1>🍀 복지편살</h1>
  <p>복잡한 복지 정보 편하게 살펴보자</p>
  <p>기업의 복지정보만 모아서 보여주는 서비스</p>

<img width="500" alt="스크린샷 2022-08-07 오후 8 38 11" src="https://user-images.githubusercontent.com/87234410/183288704-1d0b756e-3cc3-4039-b82d-339d12be293f.png">
</div>
[목차]

0. [팀원 소개](#chapter-0)
1. [목표와 기능](#chapter-1)
2. [개발 환경 및 배포 URL](#chapter-2)
3. [프로젝트 구조와 개발 일정](#chapter-3)
4. [주요 페이지 UI](#chapter-4)
5. [개발 주요 코드](#chapter-5)

<br>
<br>

## 🌷 팀원 소개 <a id="chapter-0"></a>

<table>
    <tr height="160px">
        <td align="center" width="195px">
            <a href="https://github.com/IRONDESK"><img height="120px" width="120px" src="https://github.com/IRONDESK.png"/></a>
            <br />
            <strong>손수철</strong>
        </td>
        <td align="center" width="195px">
            <a href="https://github.com/jinyun3075"><img height="120px" width="120px" src="https://github.com/jinyun3075.png"/></a>
            <br />
            <strong>진윤재</strong>
        </td>
    </tr>
</table>
<table>
    <tr>
        <td width="195px">
            <ul>
            <li><strong>Front-End</strong></li> 
            <li>기획</li>
            <li>UI</li>
            </ul>
        </td>
        <td width="195px">
            <ul>
            <li><strong>Back-End</strong></li> 
            <li>Server</li>
            </ul>
        </td>
    </tr>
</table>

## 🌼 목표와 기능 <a id="chapter-1"></a>

### 1.1 목표

- 기업의 복지 정보만을 모아서 볼 수 있는 서비스
- 원하는 복지 옵션을 선택해서 찾아 볼 수 있는 서비스
- 기업과 관련한 정보를 공유하는 댓글 커뮤니티

#### 1.2 기능

- 기업의 복지 정보를 찾아볼 수 있다.
- 기업의 복지 정보를 등록할 수 있다. (관리자 계정만)
- 등록된 복지 정보의 오류 리포트를 보낼 수 있다.
- 복지 정보 페이지에서 기업에 관한 댓글을 등록, 삭제할 수 있다.
- 기업의 채용 페이지에 접근할 수 있다.

<br><br>

## 🌵 개발 환경 및 배포 URL <a id="chapter-2"></a>

#### 2.1 개발 환경

- 프론트엔드 : React & Next.js, JavaScript, @emotion, Redux-toolkit
- 백엔드 : Spring, MySQL, AWSS3
- 배포 : LightSail, docker

#### 2.2 배포 URL

<a href="#">🔗 &nbsp; 예정</a>

<br><br>

## 🪴 프로젝트 구조와 개발 일정 <a id="chapter-3"></a>

```
📦src
 ┣ 📂app
 ┃ ┗ 📜store.js
 ┣ 📂components
 ┃ ┣ 📂company
 ┃ ┃ ┣ 📂write
 ┃ ┃ ┃ ┣ 📜BottomForm.jsx
 ┃ ┃ ┃ ┣ 📜DetailForm.jsx
 ┃ ┃ ┃ ┗ 📜TopForm.jsx
 ┃ ┃ ┣ 📜Comments.jsx
 ┃ ┃ ┣ 📜Detail.jsx
 ┃ ┃ ┣ 📜ErrorReport.jsx
 ┃ ┃ ┣ 📜InfoBanner.jsx
 ┃ ┃ ┗ 📜MoreCorp.jsx
 ┃ ┣ 📂layouts
 ┃ ┃ ┣ 📂partials
 ┃ ┃ ┃ ┣ 📜Footer.jsx
 ┃ ┃ ┃ ┣ 📜Header.jsx
 ┃ ┃ ┃ ┗ 📜Title.jsx
 ┃ ┃ ┣ 📜Layout.jsx
 ┃ ┃ ┗ 📜index.jsx
 ┃ ┣ 📂main
 ┃ ┃ ┣ 📜CorpItem.jsx
 ┃ ┃ ┣ 📜FilterList.jsx
 ┃ ┃ ┗ 📜ItemList.jsx
 ┃ ┗ 📜ModalAlert.jsx
 ┣ 📂constants
 ┃ ┗ 📜index.jsx
 ┣ 📂lib
 ┃ ┗ 📜GlobalData.jsx
 ┣ 📂pages
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📜hello.js
 ┃ ┣ 📂corp
 ┃ ┃ ┣ 📜[id].jsx
 ┃ ┃ ┗ 📜write.jsx
 ┃ ┣ 📂user
 ┃ ┃ ┣ 📜join.jsx
 ┃ ┃ ┗ 📜login.jsx
 ┃ ┣ 📜_app.js
 ┃ ┗ 📜index.js
 ┣ 📂store
 ┃ ┗ 📜LoggedState.js
 ┗ 📂styles
 ┃ ┣ 📜globals.css
 ┃ ┗ 📜reset.css
```

## 🌳 프로젝트 일정

| 내용                | 일정                              |
| ------------------- | --------------------------------- |
| 프로젝트 기획       | 2022년 4월 말 ~ 2022년 5월 초 |
| 디자인, 컨벤션 구현 | 2022년 5월 5일 ~ 2022년 5월 7일  |
| UI/UX 구현           | 2022년 5월 7일 ~ 진행 중 |
| 백엔드 구현         | 2021년 5월 7일 ~ 진행 중 |
| 정리 및 배포        | 예정  |

<br>


## 🎍 주요 페이지 UI <a id="chapter-4"></a>
* 메인 화면
<img width="900" alt="스크린샷 2022-08-07 오후 8 38 11" src="https://user-images.githubusercontent.com/87234410/183288704-1d0b756e-3cc3-4039-b82d-339d12be293f.png">

* 회사 페이지
<img width="900" alt="스크린샷 2022-08-07 오후 8 38 37" src="https://user-images.githubusercontent.com/87234410/183288719-843635be-ce08-40e0-9437-6b25d94ac996.png">

* 복지정보 작성 페이지
<img width="900" alt="스크린샷 2022-08-07 오후 8 38 57" src="https://user-images.githubusercontent.com/87234410/183288727-8722f8f1-93a0-445b-baa4-167ae0821db1.png">

## 🥪 개발 주요 코드 <a id="chapter-5"></a>

### 🙋 손수철
#### 새로고침시에도 Redux 상태 유지
 * redux-toolkit으로 로그인된 user 정보의 상태를 관리하고 있었으나, 페이지가 새로고침되면 user 정보의 상태도 사라지는 문제점이 있었습니다.
 * redux-persist를 통해, 상태를 LocalStorage에 저장해 새로고침 시에도 상태가 유지되도록 했습니다.

```js
/// app.js
import store, { persistor } from "../app/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}
```
 * 다만 user 정보는 브라우저에 정보가 계속 유지되면 보안 이슈가 생겨, SessionStorage에 저장하거나 일정 시간이 지나면 storage를 초기화하는 보완이 필요하다고 생각했습니다. 

#### 좋아요 누를 때 SWR 뮤테이션 처리
 * GET 메서드를 활용하는 데이터 fetch 작업을 useSWR로 처리했습니다.
 * 좋아요 버튼을 누르면 API에 POST 메서드로 호출을 하는데, 좋아요 하거나 해제 상태를 보여주려면 기존에는 페이지 전체 혹은 일부 컴포넌트를 리렌더링을 하는 방법 밖에 없었습니다.
 * 페이지 리렌더링 없이, SWR에서 제공하는 mutate 함수를 활용해 좋아요 부분만 업데이트한 값을 받아올 수 있습니다.
 
```js
/// components\company\InfoBanner.jsx
import axios from "axios";
import useSWR, { useSWRConfig } from "swr";


function PlusGood(userInfo, corpId, setAlertMsg, setGoodAlert, mutate) {
  if (userInfo.logged.isLogged) {
    axios
      .post("http://52.79.165.66:8081/corp/good", {
        user_id: userInfo.logged.user_id,
        corp_id: corpId,
      })
      .then((res) => {
       /// 생략
        mutate(
          `http://52.79.165.66:8081/corp/select/${corpId}/${
            userInfo.logged.user_id ?? "user"
          }`
        );
      });
```


### 💁‍♂️ 진윤재

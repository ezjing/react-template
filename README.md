# React Template

다른 React 프로젝트를 시작할 때 **이 저장소를 복사**해서 바로 개발할 수 있도록 만든 **JavaScript(JS)** 기반 템플릿입니다.

- **언어**: JavaScript (`.js` / `.jsx`) — TypeScript 미사용
- **빌드**: [Create React App](https://github.com/facebook/create-react-app) (CRA)
- **아키텍처**: [Feature-Sliced Design (FSD)](https://feature-sliced.design/docs/get-started/overview)

> **현재 구현 상태**: CRA 기본 프로젝트가 생성된 상태입니다. 아래에 정리한 라우팅, React Query, Redux, Tailwind, FSD 폴더 등은 템플릿 **목표 구성**이며, 단계적으로 채워 나갑니다.

---

## 목차

1. [이 템플릿으로 할 수 있는 것](#이-템플릿으로-할-수-있는-것)
2. [새 프로젝트 시작하기](#새-프로젝트-시작하기)
3. [기술 스택 로드맵](#기술-스택-로드맵)
4. [상태 관리: Redux vs React Query](#상태-관리-redux-vs-react-query)
5. [코딩 규칙 (레이어 역할)](#코딩-규칙-레이어-역할)
6. [FSD란? — 처음 보는 분을 위한 상세 설명](#fsd란--처음-보는-분을-위한-상세-설명)
7. [폴더 구조 전체 (JavaScript)](#폴더-구조-전체-javascript)
8. [파일 확장자 규칙](#파일-확장자-규칙)
9. [경로 별칭 (Path Alias)](#경로-별칭-path-alias)
10. [import 규칙 — 폴더 간 연결 규칙](#import-규칙--폴더-간-연결-규칙)
11. [새 화면 추가하는 방법](#새-화면-추가하는-방법)
12. [예시: 여러 페이지에서 쓰는 회원 정보 팝업](#예시-여러-페이지에서-쓰는-회원-정보-팝업)
13. [스타일 · 아이콘 · 색상 · 폰트](#스타일--아이콘--색상--폰트)
14. [개발 규칙 (ESLint · Cursor)](#개발-규칙-eslint--cursor)
15. [실행 명령어](#실행-명령어)
16. [참고 링크](#참고-링크)

---

## 이 템플릿으로 할 수 있는 것

| 목적          | 설명                                                               |
| ------------- | ------------------------------------------------------------------ |
| **빠른 시작** | 매번 CRA부터 설정하지 않고, 라우팅·상태·폴더 규칙이 잡힌 채로 시작 |
| **구조 통일** | 화면·기능·공통 UI가 항상 같은 위치에 있어 팀원이 파일을 찾기 쉬움  |
| **규칙 공유** | ESLint 설정, Cursor Rule로 AI·린터가 같은 스타일을 따름            |

---

## 새 프로젝트 시작하기

1. 이 저장소를 **복사**하거나 `Use this template` / `git clone`으로 가져옵니다.
2. 프로젝트 이름에 맞게 `package.json`의 `name`을 수정합니다.
3. `.env.example`을 복사해 `.env`를 만들고 API 주소 등을 채웁니다. (추가 예정)
4. `npm install` 후 `npm start`로 실행합니다.
5. CRA 기본 데모 파일(`App.js`, `logo.svg` 등)은 `app/` · `pages/` 구조로 **교체**합니다. (구현 시 README 체크리스트 참고)
6. 새 기능은 [새 화면 추가하는 방법](#새-화면-추가하는-방법)을 따릅니다.

---

## 기술 스택 로드맵

템플릿에 단계적으로 넣을 기술입니다.

### Step 1 — 빌드

| 항목      | 선택                                               |
| --------- | -------------------------------------------------- |
| 빌드 도구 | Create React App (`react-scripts`) — **이미 적용** |
| SSR       | **적용하지 않음** (CRA는 클라이언트 렌더링 중심)   |

### Step 2 — 앱 골격

| 항목                             | 역할                                           |
| -------------------------------- | ---------------------------------------------- |
| **React Router**                 | URL에 따라 다른 화면(페이지) 표시              |
| **TanStack Query (React Query)** | 서버 API 데이터, 로딩/에러 표시, 캐시, refetch |
| **React.lazy**                   | 화면별 코드 분할 — 처음에 필요한 JS만 로드     |
| **SSR**                          | 미적용                                         |

### Step 3 — 클라이언트 전역 상태

| 항목              | Redux에 둘 것                                    |
| ----------------- | ------------------------------------------------ |
| **Redux Toolkit** | 로그인한 사용자 정보                             |
|                   | UI 전역 (사이드바 열림/닫힘, 테마)               |
|                   | 여러 화면이 **동시에** 써야 하는 클라이언트 상태 |

서버에서 받아온 목록·상세 데이터는 **React Query**에 둡니다. ([상태 관리](#상태-관리-redux-vs-react-query) 참고)

### Step 4 — 스타일

| 항목             | 규칙                                                                             |
| ---------------- | -------------------------------------------------------------------------------- |
| **Tailwind CSS** | 유틸리티 클래스 기반 스타일                                                      |
| **아이콘**       | Heroicons / Lucide 등 라이브러리 사용, **`shared/config/icons.js`에서만** import |
| **색상**         | Tailwind `theme` 확장, **`shared/config/colors.js`에서만** 정의                  |
| **폰트**         | **`shared/config/fonts.js`** + `tailwind.config.js` 연동                         |

> Tailwind는 **아이콘 세트를 제공하지 않습니다**. “아이콘은 Tailwind에서”가 아니라 **아이콘 라이브러리 + 중앙 관리 파일**을 의미합니다.

### Step 5 — UI · 폴더

| 항목              | 내용                                                            |
| ----------------- | --------------------------------------------------------------- |
| **기초 컴포넌트** | Input, Textarea, Select, Dialog, Bottom Sheet 등 → `shared/ui/` |
| **폴더 구조**     | FSD (아래 [상세 설명](#fsd란--처음-보는-분을-위한-상세-설명))   |

### Step 6 — 개발 규칙

| 항목             | 내용                                                                     |
| ---------------- | ------------------------------------------------------------------------ |
| **ESLint**       | `.eslintrc` 등 **설정 파일을 저장소에 포함** — 새 프로젝트에 그대로 복사 |
| **Prettier**     | (권장) ESLint와 함께 포맷 통일                                           |
| **Cursor Rules** | `.cursor/rules` — FSD, 네이밍, Query/Redux 역할을 AI에게 안내            |

---

## 상태 관리: Redux vs React Query

코딩을 모르셔도 아래 표만 기억하시면 됩니다.

| 데이터 종류               | 예시                              | 어디에?                |
| ------------------------- | --------------------------------- | ---------------------- |
| **서버 데이터**           | 회원 목록, 게시글, API 조회 결과  | **React Query**        |
| **화면에만 잠깐 쓰는 UI** | 모달 열림, 입력 중인 검색어       | 컴포넌트 안 `useState` |
| **앱 전체가 공유**        | 로그인 사용자, 다크모드, 사이드바 | **Redux**              |

**왜 나누나요?**  
서버 데이터는 “가져오기·캐시·다시 불러오기”가 React Query에 맞고, 로그인 사용자처럼 **여러 화면이 같은 값을 봐야 할 때** Redux가 맞습니다.

---

## 코딩 규칙 (레이어 역할)

FSD 레이어별로 파일을 나누고, **React에서 흔히 쓰는 패턴**(훅 + API)을 따릅니다.

| 구분        | 의미                       | 폴더 위치                | 파일 예시                    |
| ----------- | -------------------------- | ------------------------ | ---------------------------- |
| **화면**    | URL 하나에 대응하는 페이지 | `pages/<이름>/ui/`       | `OrderPage.jsx`              |
| **위젯**    | 여러 기능을 묶은 큰 UI     | `widgets/<이름>/ui/`     | `MemberProfileDialog.jsx`    |
| **UI**      | 표·폼·버튼 등 기능 UI      | `features/<이름>/ui/`    | `SelectMemberButton.jsx`     |
| **로직·훅** | 상태, React Query, Redux   | `features/<이름>/model/` | `useSelectMember.js`         |
| **API**     | HTTP 호출만                | `entities/<이름>/api/`   | `memberApi.js`               |

**흐름 (한 줄)**  
브라우저 주소 → **page** 가 레이아웃·기능 UI를 조립 → **model 훅** 이 api를 호출해 조회·저장을 처리합니다.

---

## FSD란? — 처음 보는 분을 위한 상세 설명

### 한 문장 정의

**FSD(Feature-Sliced Design)** 는 “웹 앱의 파일을 **역할별 층(레이어)** 과 **기능별 상자(슬라이스)** 로 나누는 설계 방법”입니다.

공식 문서: [Feature-Sliced Design — Get started](https://feature-sliced.design/docs/get-started/overview)

---

### 왜 폴더를 나누나요? (비유: 회사 건물)

웹 앱을 **한 층짜리 창고에 모든 물건을 쌓아 두는 것**에 비유해 보겠습니다.

- 로그인 버튼 코드
- 메인 화면 코드
- API 주소 설정
- 빨간색 버튼 디자인
- 사이드바 코드

이게 전부 `src` 한 폴더에 섞이면:

- “로그인 버튼 색만 바꾸고 싶은데 어디 있지?” → 찾기 어렵습니다.
- 새 사람이 합류하면 **파일 이름만 보고는 역할을 모릅니다**.
- 화면 A가 화면 B 코드를 직접 건드리면, B를 수정할 때 A도 깨질 수 있습니다.

FSD는 건물을 **층(레이어)** 으로 나눕니다.

| 층 이름      | 비유                       | 하는 일                                                     |
| ------------ | -------------------------- | ----------------------------------------------------------- |
| **app**      | 건물 로비·전기·엘리베이터  | 앱 전체 설정: 라우터, Redux, React Query Provider           |
| **pages**    | “로그인 층”, “주문 층”     | **주소(URL) 하나 = 화면 하나**                              |
| **widgets**  | 로비에 있는 큰 안내 데스크 | 여러 기능을 **묶은 큰 UI** (전체 레이아웃, 사이드바+헤더)   |
| **features** | 각 부서 창구               | **사용자 행동** 단위 (로그인하기, 회원 선택하기)            |
| **entities** | 회사 공통 명함·직원 카드   | **업무 데이터 단위** (사용자, 상품) — 여러 창구가 공유      |
| **shared**   | 공용 복사기·도장·A4용지    | **어떤 프로젝트에나 쓸 수 있는** 버튼, 색상, API 클라이언트 |

**중요한 규칙**: 위층(앱·페이지)은 아래층(shared)을 **가져다 쓸 수** 있지만, 아래층이 위층을 가져다 쓰면 **안 됩니다**. (엘리베이터가 로비 전기를 쓰는 것은 OK, 복사기가 “3층 회의실 전용 코드”를 알면 안 됨)

---

### “슬라이스(Slice)”란? (비유: 같은 층의 칸막이 서랍)

한 층 안에도 기능마다 **서랍(폴더)** 을 둡니다.

예: `features` 층 안에

- `auth` 서랍 → 로그인 관련만
- `member-select` 서랍 → 회원 선택 관련만

이 **서랍 하나 = 슬라이스** 입니다.  
이름은 보통 **영문 kebab-case** (`member-select`, `ui-preferences`).

**같은 층의 서랍끼리는 직접 물건을 빌려오지 않습니다.**  
로그인 서랍이 회원 선택 서랍 파일을 직접 import 하면 안 됩니다. 공통이 필요하면 **아래층 `entities`나 `shared`** 로 내립니다.

---

### 슬라이스 안의 “칸” (세그먼트)

각 서랍 안은 다시 **역할별 칸**으로 나눕니다.

| 칸 이름   | 들어가는 것                     | 비유                        |
| --------- | ------------------------------- | --------------------------- |
| **ui**    | 화면에 보이는 버튼·표·폼        | 창구 앞에 보이는 키오스크   |
| **model** | 상태, 훅, 비즈니스 로직         | 창구 뒤에서 일하는 직원     |
| **api**   | 서버 주소 호출, fetch/axios     | 창구와 본사를 연결하는 전화 |
| **lib**   | (선택) 이 기능만 쓰는 계산·포맷 | 창구 전용 계산기            |

**팀 규칙과 연결**

- 화면 파일 (`OrderPage.jsx`) → **`pages/.../ui`**
- 팝업 조립 (`MemberProfileDialog.jsx`) → **`widgets/.../ui`**
- 선택 훅 (`useSelectMember.js`) → **`features/.../model`**
- 회원 API (`memberApi.js`) → **`entities/.../api`**

---

### 데이터가 흐르는 순서 (주문 화면에서 회원 팝업 열기)

아래는 “사용자가 주문 화면에서 **회원 정보 팝업**을 열었을 때”를 **위에서 아래로**만 읽으면 됩니다.

```
1. app (로비)
   → 라우터가 OrderPage를 렌더

2. pages/order (주문 층)
   → OrderPage.jsx: open/onClose 상태 + MemberProfileDialog 조립

3. widgets/member-profile-dialog (팝업 조립)
   → MemberProfileDialog: Dialog + MemberCard + 선택 버튼

4. features/member-select (회원 선택 창구)
   → ui: SelectMemberButton
   → model: useSelectMember — 선택 시 onSelect 콜백

5. entities/member (회원 명함)
   → api: memberApi — HTTP
   → model: useMemberQuery — 회원 상세 조회
   → ui: MemberCard — 회원 정보 표시

6. shared (공용 창고)
   → Dialog, Button, API client, 색상·아이콘 설정
```

**React Query**는 `entities/member/model` 또는 `features/.../model` 훅에서 회원 조회에 쓰고,  
**Redux**는 `features/auth`, `features/ui-preferences`처럼 “로그인 사용자·테마”에 씁니다.

---

### 레이어별로 “이것만 넣으세요” 체크리스트

#### `app` — 앱 전체

- React 앱을 브라우저에 올리는 시작점 (`App.jsx`)
- `Router`, `QueryClientProvider`, `Provider`(Redux) 한곳에 모음
- 전역 CSS (`@tailwind` 등)

**넣지 말 것**: 특정 화면 전용 표, “게시글 목록 테이블” 같은 것

---

#### `pages` — URL과 1:1 화면

- `/login` → `LoginPage.jsx`
- `/home` → `HomePage.jsx`

**역할**: 여러 `features`·`widgets`를 **레고처럼 조립**만 함.  
무거운 조회/저장 코드는 `pages`에 길게 쓰지 않고 `features/.../model`로 보냅니다.

---

#### `widgets` — 여러 기능을 묶은 큰 UI

- `MainLayout` (사이드바 + 헤더 + `{자식}` 영역)
- 대시보드의 “상단 3개 카드 묶음”처럼 **페이지보다 크고, feature보다 큰 덩어리**

작은 프로젝트면 `widgets`가 거의 없을 수 있고, 레이아웃 하나만 있어도 됩니다.

---

#### `features` — 사용자 시나리오

- “로그인한다”
- “회원을 선택한다” (`member-select`)
- “사이드바를 연다/닫는다” (UI 전역이면 Redux slice도 여기 `model`)

**가장 자주 코드를 추가하는 층**입니다.

---

#### `entities` — 업무 도메인

- `member`, `user`, `product` 처럼 **비즈니스 객체** 단위
- 처음에는 `features` 안에 두었다가, **두 번째 기능에서도 같은 user를 쓰면** `entities/user`로 올립니다.

---

#### `shared` — 비즈니스와 무관한 공통

- 버튼, 입력창, 다이얼로그
- `colors.js`, `icons.js`, `fonts.js`
- API `client.js` (기본 URL, 헤더)

**어떤 회사 프로젝트에도 그대로 가져갈 수 있는 것**만 둡니다.

---

### FSD를 지키지 않으면 생기는 일

| 잘못된 예                               | 결과                                                     |
| --------------------------------------- | -------------------------------------------------------- |
| `shared`에서 `pages/login` import       | 공용 복사기가 “로그인 층 전용 코드”에 묶임 → 재사용 불가 |
| `features/A`가 `features/B` 직접 import | 창구끼리 엮임 → B 수정 시 A도 수정                       |
| 모든 코드를 `pages` 한곳에              | 화면이 커질수록 파일 수천 줄, 신규 인원 온보딩 어려움    |

템플릿에서는 **ESLint `import/no-restricted-paths`** 로 위 규칙을 자동 검사하는 것을 권장합니다.

---

### import 경로

슬라이스 내부 파일은 **경로를 직접** import 합니다.

```js
import { MemberProfileDialog } from '@/widgets/member-profile-dialog/ui/MemberProfileDialog';
import { useMemberQuery } from '@/entities/member/model/useMemberQuery';
import { useSelectMember } from '@/features/member-select/model/useSelectMember';
```

---

### FSD 다이어그램 (레이어 관계)

```mermaid
flowchart TB
  subgraph upper [위쪽 - 조립·설정]
    app[app - 라우터 Provider Redux Query]
    pages[pages - URL별 화면]
    widgets[widgets - 레이아웃 큰 블록]
  end
  subgraph middle [중간 - 기능·도메인]
    features[features - 로그인 회원 선택 등]
    entities[entities - Member User 등]
  end
  subgraph lower [아래 - 공통]
    shared[shared - UI 색상 API 유틸]
  end
  app --> pages
  app --> widgets
  pages --> widgets
  pages --> features
  widgets --> features
  features --> entities
  features --> shared
  entities --> shared
  pages --> shared
  widgets --> shared
```

**화살표 방향**: 위에서 아래로만 의존합니다. `shared` → `pages` 같은 역방향은 금지.

---

### 더 읽을 거리 (한국어·영문)

- [Feature-Sliced Design 공식 — Overview](https://feature-sliced.design/docs/get-started/overview)

---

## 폴더 구조 전체 (JavaScript)

아래는 템플릿 **완성 목표** 트리입니다. `src/` 아래 기준입니다.

```text
src/
├── app/                              # 앱 전체 설정
│   ├── App.jsx
│   ├── providers/
│   │   ├── AppProviders.jsx          # Query + Redux + Router
│   │   ├── QueryProvider.jsx
│   │   └── StoreProvider.jsx
│   ├── router/
│   │   ├── index.jsx
│   │   ├── routes.jsx
│   │   ├── PrivateRoute.jsx          # (선택) 로그인 필요 라우트
│   │   └── lazyPages.js              # React.lazy 페이지 모음
│   ├── store/
│   │   ├── index.js
│   │   ├── hooks.js                  # useAppDispatch, useAppSelector
│   │   └── rootReducer.js
│   └── styles/
│       └── globals.css
│
├── pages/                            # URL 1개 = 화면 1개
│   ├── home/
│   │   └── ui/
│   │       └── HomePage.jsx
│   ├── login/
│   │   └── ui/
│   │       └── LoginPage.jsx
│   └── order/
│       └── ui/
│           └── OrderPage.jsx         # MemberProfileDialog 사용 예시
│
├── widgets/                          # 큰 UI 조각 (레이아웃 등)
│   ├── layout/
│   │   └── ui/
│   │       ├── MainLayout.jsx
│   │       └── AuthLayout.jsx
│   ├── sidebar/
│   │   └── ui/
│   │       └── AppSidebar.jsx
│   └── member-profile-dialog/        # 회원 정보 팝업 조립
│       └── ui/
│           └── MemberProfileDialog.jsx
│
├── features/                         # 기능·시나리오
│   ├── auth/
│   │   ├── api/
│   │   │   └── authApi.js
│   │   ├── model/
│   │   │   ├── authSlice.js          # Redux: 로그인 사용자
│   │   │   ├── useAuth.js
│   │   │   └── useLogin.js           # 로그인 처리 훅
│   │   └── ui/
│   │       └── LoginForm.jsx
│   ├── member-select/                # 회원 선택 행동
│   │   ├── model/
│   │   │   └── useSelectMember.js
│   │   └── ui/
│   │       └── SelectMemberButton.jsx
│   └── ui-preferences/
│       └── model/
│           └── uiPreferencesSlice.js   # 테마, 사이드바
│
├── entities/                         # 공유 도메인 (필요 시 추가)
│   ├── member/                       # 회원 도메인
│   │   ├── api/
│   │   │   └── memberApi.js
│   │   ├── model/
│   │   │   ├── memberTypes.js
│   │   │   └── useMemberQuery.js
│   │   └── ui/
│   │       └── MemberCard.jsx
│   ├── user/
│   │   ├── api/
│   │   │   └── userApi.js
│   │   └── model/
│   │       └── userTypes.js          # (선택) JSDoc typedef
│
├── shared/                           # 전역 공통
│   ├── api/
│   │   ├── client.js
│   │   └── queryClient.js
│   ├── config/
│   │   ├── env.js
│   │   ├── colors.js
│   │   ├── fonts.js
│   │   └── icons.js
│   ├── ui/
│   │   ├── button/
│   │   ├── input/
│   │   ├── textarea/
│   │   ├── select/
│   │   ├── dialog/
│   │   └── bottom-sheet/
│   ├── lib/
│   │   ├── cn.js
│   │   └── formatDate.js
│   └── constants/
│       └── queryKeys.js
│
├── index.js
└── setupTests.js
```

프로젝트 루트 예시:

```text
├── public/
├── src/
├── tailwind.config.js
├── postcss.config.js
├── jsconfig.json                     # 에디터용 path alias
├── .eslintrc.cjs
├── .env.example
└── package.json
```

---

## 파일 확장자 규칙

| 종류                           | 확장자                   | 예                                      |
| ------------------------------ | ------------------------ | --------------------------------------- |
| React 화면·컴포넌트 (JSX 있음) | `.jsx`                   | `HomePage.jsx`, `Button.jsx`            |
| 로직·API·slice·설정            | `.js`                    | `useMemberQuery.js`, `authSlice.js`     |
| 전역 스타일                    | `.css`                   | `globals.css`                           |
| 테스트                         | `.test.js` / `.test.jsx` | `Button.test.jsx`                       |

---

## 경로 별칭 (Path Alias)

`jsconfig.json` (에디터 자동완성) 예시:

```json
{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
      "@/app/*": ["app/*"],
      "@/pages/*": ["pages/*"],
      "@/widgets/*": ["widgets/*"],
      "@/features/*": ["features/*"],
      "@/entities/*": ["entities/*"],
      "@/shared/*": ["shared/*"]
    }
  },
  "include": ["src"]
}
```

실제 빌드에서도 동일 alias를 쓰려면 CRA에서는 **CRACO** 등으로 webpack alias를 맞춰야 합니다.

사용 예:

```js
import { Button } from '@/shared/ui/button/Button';
import { MemberProfileDialog } from '@/widgets/member-profile-dialog/ui/MemberProfileDialog';
```

---

## import 규칙 — 폴더 간 연결 규칙

| 내 레이어  | import 가능한 레이어                       |
| ---------- | ------------------------------------------ |
| `app`      | pages, widgets, features, entities, shared |
| `pages`    | widgets, features, entities, shared        |
| `widgets`  | features, entities, shared                 |
| `features` | entities, shared                           |
| `entities` | shared                                     |
| `shared`   | **shared만**                               |

**금지**

- `features/로그인` → `features/회원선택` 직접 import
- `shared` → `pages` / `features` import
- `pages/A` → `pages/B` import (공통은 `widgets` / `features` / `shared`로)

---

## 새 화면 추가하는 방법

URL에 대응하는 **page**를 추가하고, 필요한 **widgets** · **features** · **entities**를 조립합니다.

예: 주문 화면(`/order`)에서 **회원 정보 팝업**(`member-profile-dialog`)을 쓰는 경우

### 1단계 — 페이지(화면) 만들기

1. `src/pages/order/ui/OrderPage.jsx` 생성
2. `app/router/routes.jsx`에 경로 등록
3. 필요 시 `app/router/lazyPages.js`에 `React.lazy` 등록

### 2단계 — page에서 팝업 조립

1. `open` / `onClose` / `onSelect` 상태는 **page**에서 `useState`로 관리
2. `widgets/member-profile-dialog/ui/MemberProfileDialog` import
3. 레이아웃이 필요하면 `widgets/layout`의 `MainLayout`로 감싸기

### 3단계 — 팝업 내부 구성 (최초 1회)

1. `entities/member` — `memberApi`, `useMemberQuery`, `MemberCard`
2. `features/member-select` — `useSelectMember`, `SelectMemberButton`
3. `widgets/member-profile-dialog` — 위 조각을 조립한 `MemberProfileDialog`

자세한 레이어 분리·폴더 구조·코드 예시는 [예시: 여러 페이지에서 쓰는 회원 정보 팝업](#예시-여러-페이지에서-쓰는-회원-정보-팝업)을 참고하세요.

---

## 예시: 여러 페이지에서 쓰는 회원 정보 팝업

### 시나리오

`member` 테이블에 회원 정보가 있고, **여러 페이지에서 공통으로 쓰는 “회원 정보 팝업”** 을 만든다.

팝업에서 필요한 것:

| 동작     | 설명                                |
| -------- | ----------------------------------- |
| **조회** | 회원 ID(또는 검색 조건)로 정보 표시 |
| **닫기** | 팝업 닫기                           |
| **선택** | 회원을 고르고 부모 화면에 전달      |

한 페이지에만 쓰는 UI면 `features`만으로도 충분합니다. **여러 page에서 재사용**하고, entity 표현 + 선택 행동 + 팝업 조립을 나누려면 아래처럼 **entities → features → widgets → pages** 순으로 쌓습니다.

### 레이어별 역할

| 레이어       | 슬라이스                | 역할                                                  |
| ------------ | ----------------------- | ----------------------------------------------------- |
| **entities** | `member`                | 회원 **도메인** — 타입, API, 카드 UI, (공통) 조회 훅  |
| **features** | `member-select`         | 회원을 **선택**하는 사용자 행동 — 선택 버튼·핸들러 훅 |
| **widgets**  | `member-profile-dialog` | Dialog + 카드 + 선택 UI를 **조립한 완성 팝업**        |
| **pages**    | (각 화면)               | `open` / `onClose` / `onSelect` 로 팝업 **제어·조립** |
| **shared**   | `ui/dialog`             | 비즈니스 무관한 **모달 껍데기**                       |

> `entities/user`와 회원 도메인이 같다면 `member` 대신 `user` 슬라이스를 확장해도 됩니다.

### 폴더 구조 예시

```text
entities/member/
  api/
    memberApi.js              # getById, search 등 HTTP
  model/
    memberTypes.js            # Member 필드 정의 (JSDoc typedef)
    useMemberQuery.js         # id로 회원 상세 조회 (React Query)
  ui/
    MemberCard.jsx            # 사진·이름·이메일만 표시 (열기/닫기/선택 로직 없음)

features/member-select/
  ui/
    SelectMemberButton.jsx    # “선택” 버튼 (또는 행 클릭 UI)
  model/
    useSelectMember.js        # 선택 시 부모 onSelect 콜백 호출

widgets/member-profile-dialog/
  ui/
    MemberProfileDialog.jsx   # 팝업 전체 조립

shared/ui/dialog/             # 범용 Dialog (overlay, ESC 등)
```

### 이벤트·상태를 어디에 둘까

| 항목         | 위치                                              |
| ------------ | ------------------------------------------------- |
| **조회 API** | `entities/member/api/memberApi.js`                |
| **조회 훅**  | `entities/member/model/useMemberQuery.js`         |
| **닫기**     | **page**의 `isOpen` + `onClose` (controlled)      |
| **선택**     | `features/member-select/model/useSelectMember.js` |
| **팝업 UI**  | `widgets/member-profile-dialog/ui`                |

팝업 **열림/닫힘은 page가 소유**하는 편이 재사용에 유리합니다. widget 안에서만 `isOpen`을 관리하면 page마다 연동이 어렵습니다.

### import / 조립 흐름

```text
pages/order/ui/OrderPage.jsx
  ├─ isOpen, setOpen (useState)
  ├─ widgets/member-profile-dialog → MemberProfileDialog
  │     ├─ shared/ui/dialog
  │     ├─ entities/member → useMemberQuery, MemberCard
  │     └─ features/member-select → SelectMemberButton, useSelectMember
  └─ (선택) “회원 선택” 버튼으로 setOpen(true)
```

**주의 (import 규칙)**

- `widgets` → `features`, `entities`, `shared` ✅
- `features/member-select` → `widgets/member-profile-dialog` ❌ (feature가 widget을 import하면 안 됨)
- 팝업을 **여는 쪽은 page** — feature 버튼은 `onClick={() => setOpen(true)}` 만 넘기고, dialog는 page가 렌더

### 코드 스케치

```jsx
// pages/order/ui/OrderPage.jsx
import { useState } from 'react';

import { MemberProfileDialog } from '@/widgets/member-profile-dialog/ui/MemberProfileDialog';

export default function OrderPage() {
  const [open, setOpen] = useState(false);
  const [memberId, setMemberId] = useState(null);

  const handleSelect = (member) => {
    setMemberId(member.id);
    setOpen(false);
  };

  return (
    <main>
      <button type="button" onClick={() => setOpen(true)}>
        회원 선택
      </button>
      <MemberProfileDialog
        open={open}
        memberId={memberId}
        onClose={() => setOpen(false)}
        onSelect={handleSelect}
      />
    </main>
  );
}
```

```jsx
// widgets/member-profile-dialog/ui/MemberProfileDialog.jsx
import { Dialog } from '@/shared/ui/dialog/Dialog';
import { MemberCard } from '@/entities/member/ui/MemberCard';
import { useMemberQuery } from '@/entities/member/model/useMemberQuery';
import { SelectMemberButton } from '@/features/member-select/ui/SelectMemberButton';

export function MemberProfileDialog({ open, memberId, onClose, onSelect }) {
  const { data: member, isLoading } = useMemberQuery(memberId, { enabled: open && !!memberId });

  return (
    <Dialog open={open} onClose={onClose}>
      {isLoading ? <p>로딩 중…</p> : <MemberCard member={member} />}
      <SelectMemberButton member={member} onSelect={() => onSelect(member)} />
    </Dialog>
  );
}
```

### 요약

| 조각                       | 레이어                          |
| -------------------------- | ------------------------------- |
| 회원 타입·API·카드·조회 훅 | `entities/member`               |
| 선택 이벤트                | `features/member-select`        |
| 팝업 조립                  | `widgets/member-profile-dialog` |
| 열기/닫기 제어             | `pages/.../ui`                  |

---

## 스타일 · 아이콘 · 색상 · 폰트

| 항목        | 파일                      | 규칙                                                    |
| ----------- | ------------------------- | ------------------------------------------------------- |
| 색상        | `shared/config/colors.js` | `tailwind.config.js`의 `theme.extend.colors`에서 import |
| 폰트        | `shared/config/fonts.js`  | 동일하게 theme 연동                                     |
| 아이콘      | `shared/config/icons.js`  | Lucide/Heroicons 등을 여기서만 re-export                |
| UI 컴포넌트 | `shared/ui/*`             | Input, Dialog 등 — 비즈니스 문구는 `features` 쪽에서    |

컴포넌트 파일 안에서 아이콘·색상 hex를 **직접 하드코딩하지 않습니다.**

---

## 개발 규칙 (ESLint · Cursor)

| 도구                               | 목적                                                                      |
| ---------------------------------- | ------------------------------------------------------------------------- |
| **ESLint**                         | 문법·import 규칙·실수 방지 — 설정 파일을 repo에 포함해 새 프로젝트에 복사 |
| **Prettier**                       | 들여쓰기·따옴표 통일 (권장)                                               |
| **Cursor Rules** (`.cursor/rules`) | FSD 레이어, ui/api/model 역할, Query vs Redux 안내                        |

---

## 실행 명령어

프로젝트 루트에서:

| 명령어          | 설명                                                       |
| --------------- | ---------------------------------------------------------- |
| `npm start`     | 개발 서버 — [http://localhost:3000](http://localhost:3000) |
| `npm test`      | 테스트 (watch 모드)                                        |
| `npm run build` | 프로덕션 빌드 → `build/` 폴더                              |
| `npm run eject` | CRA 설정 추출 (**되돌릴 수 없음**, 가급적 사용 안 함)      |

---

## 참고 링크

| 주제                  | URL                                                     |
| --------------------- | ------------------------------------------------------- |
| Create React App      | https://github.com/facebook/create-react-app            |
| Feature-Sliced Design | https://feature-sliced.design/docs/get-started/overview |
| FSD (블로그)          | https://wonderfulwonder.tistory.com/110                 |
| React 폴더 구조       | https://joong-sunny.github.io/react/react7/             |
| React Router          | https://reactrouter.com/                                |
| TanStack Query        | https://tanstack.com/query/latest                       |
| Redux Toolkit         | https://redux-toolkit.js.org/                           |
| Tailwind CSS          | https://tailwindcss.com/docs                            |

---

## CRA 기본 파일 정리 (구조 적용 시)

FSD 구조로 옮길 때 제거·대체 대상:

| 제거/대체                           | 대신                                          |
| ----------------------------------- | --------------------------------------------- |
| `src/App.js`, `App.css`, `logo.svg` | `app/App.jsx`, `app/styles/globals.css`       |
| `src/index.js`                      | `AppProviders`로 감싼 뒤 `app/App.jsx` 마운트 |

---

## 라이선스 · 기여

사내/개인 템플릿 용도에 맞게 저장소 설정을 추가하세요.

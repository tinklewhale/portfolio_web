# Architecture Documentation

> Portfolio Web 프로젝트 구조 및 컴포넌트 설명
> 작성일: 2026-02-15
> 최종 업데이트: 2026-02-18

---

## 1. 프로젝트 개요

### 1.1 기술 스택

| Layer | Technology | Purpose |
|-------|-----------|---------|
| **Framework** | React 19.2 | UI 컴포넌트 기반 개발 |
| **Build Tool** | Vite 7.3 | 빠른 빌드 및 HMR |
| **Styling** | Tailwind CSS 4.1 | 유틸리티 기반 스타일링 |
| **Animation** | Framer Motion 12.34 | 레이아웃 애니메이션 |
| **Icons** | Lucide React 0.563 | SVG 아이콘 |

### 1.2 아키텍처 원칙

- **단일 페이지 애플리케이션 (SPA)**: 라우터 없이 스크롤 기반 네비게이션
- **컴포넌트 기반**: React 함수형 컴포넌트 사용
- **선언적 애니메이션**: Framer Motion의 `layoutId`, `AnimatePresence` 활용
- **반응형 우선**: Tailwind의 lg: breakpoint 기준으로 모바일/데스크톱 분기

---

## 2. 파일 구조

### 2.1 디렉토리 구조 (현재)

```
portfolio_web/
├── public/
│   └── vite.svg              # 파비콘 (변경 필요)
├── src/
│   ├── App.jsx               # 메인 컴포넌트 (~780줄)
│   ├── main.jsx              # React 앱 진입점
│   ├── index.css             # Tailwind CSS 설정
│   └── assets/
│       └── react.svg         # React 로고
├── index.html                # HTML 템플릿
├── package.json              # 의존성 관리
├── vite.config.js            # Vite 설정
└── eslint.config.js          # ESLint 규칙
```

**현재 문제점**: [App.jsx](src/App.jsx) 단일 파일에 모든 로직 집중 (~780줄)

### 2.2 예상 리팩토링 후 구조 (제안)

```
src/
├── components/
│   ├── layout/
│   │   ├── Sidebar.jsx
│   │   └── MobileHeader.jsx
│   ├── sections/
│   │   │   ├── HeroSection.jsx
│   │   ├── ProofSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── SkillsSection.jsx
│   │   ├── SideProjectsSection.jsx
│   │   ├── AboutSection.jsx
│   │   └── ContactSection.jsx
│   ├── projects/
│   │   ├── ProjectCard.jsx
│   │   └── ProjectModal.jsx
│   └── common/
│       └── ProofCard.jsx
├── data/
│   └── projects.js           # PROJECT_DATA 배열
├── hooks/
│   └── useActiveSection.js   # 스크롤 감지 로직
├── constants/
│   ├── colors.js
│   └── sections.js
├── App.jsx                    # 라우터 역할만
├── main.jsx
└── index.css
```

---

## 3. 컴포넌트 구조 (현재 App.jsx 기준)

### 3.1 컴포넌트 트리

```
App (root)
├── Sidebar (desktop only)
│   └── menuItems.map(MenuItem)
├── MobileHeader (mobile only)
├── main
│   ├── HeroSection (#hero)
│   ├── ProofSection (#proof) - 3개 pillar 통합
│   ├── ProjectsSection (#projects)
│   │   └── ProjectCard × 4
│   ├── SkillsSection (#skills) - 3개 카드
│   ├── SideProjectsSection (#sideprojects) - 3개 카테고리 아코디언
│   │   ├── IframePreview (URL 미리보기 / fallback)
│   │   └── SideItemDetail (상세 내용 펼침)
│   ├── AboutSection (#about)
│   └── ContactSection (#contact)
└── AnimatePresence
    └── ProjectModal (conditional)
```

### 3.2 컴포넌트 상세 설명

#### 3.2.1 Sidebar (라인 144-205)

**역할**: 데스크톱 환경에서 좌측 고정 네비게이션 제공

**Props**:
```javascript
{ activeSection: string }
```

**주요 기능**:
- 7개 섹션 버튼 (`hero`, `proof`, `projects`, `skills`, `sideprojects`, `about`, `contact`)
- 현재 활성 섹션에 따라 크기 변경 (`flex-[2]` vs `flex-1`)
- Framer Motion의 `layoutId="activeDot"` 으로 활성 표시 애니메이션
- `scrollIntoView({ behavior: 'smooth' })` 스크롤 이동

**스타일**:
- 위치: `fixed left-4 top-4 bottom-4`
- 너비: `w-64` (256px)
- 숨김: `hidden lg:flex` (모바일에서 숨김)

**개선 필요 사항**:
- [ ] 키보드 네비게이션 지원 (Tab, Enter)
- [ ] `aria-current="page"` 추가
- [ ] Download CV 버튼 실제 링크 연결 ([166-169](src/App.jsx#L166-L169))

---

#### 3.2.2 ProjectCard (라인 208-252)

**역할**: 프로젝트 카드 UI 렌더링

**Props**:
```javascript
{
  project: {
    id: number,
    title: string,
    category: string,
    status: string,
    tags: string[],
    brand: string,
    summary: string,
    outcome: string,
    imageColor: string,  // Tailwind class (e.g., "bg-[#FF2E00]")
    details: { ... }
  },
  onClick: function,
  colSpan: string  // Tailwind class (default: "col-span-1")
}
```

**주요 기능**:
- Framer Motion `layoutId="card-{id}"` (모달 전환 애니메이션)
- 호버 시 `scale: 0.98`
- 상단: status + tags 배지
- 하단: title, summary, outcome

**스타일**:
- 높이: `h-[450px]` 고정
- 배경: `project.imageColor` (블랙, 레드, 퍼플 등)
- 텍스트: 흰색 고정

**개선 필요 사항**:
- [ ] 실제 프로젝트 이미지 추가 옵션
- [ ] `aria-label` 추가 (카드 전체 설명)
- [ ] 키보드 포커스 스타일

---

#### 3.2.3 ProjectModal (라인 254-378)

**역할**: 프로젝트 상세 정보 모달 팝업

**Props**:
```javascript
{ project: object, onClose: function }
```

**구조**:
1. **Header** (컬러 배경): title, oneLiner, category, status
2. **Content Body**:
   - Context & Goal (2 컬럼)
   - My Role & Approach (2 컬럼)
   - Challenges & Solutions (카드 형태)
   - Outcome & Learning (블랙 배경)

**주요 기능**:
- Framer Motion `layoutId="card-{id}"` (카드→모달 전환)
- `AnimatePresence` exit 애니메이션
- 배경 클릭 시 닫기 (`onClick={onClose}`)
- 내부 클릭 시 이벤트 전파 중지 (`stopPropagation`)

**스타일**:
- 배경: `bg-[#F3F0E7]` (베이지)
- 최대 너비: `max-w-4xl`
- 최대 높이: `max-h-[90vh]`, 스크롤 가능

**개선 필요 사항**:
- [ ] ESC 키로 닫기 (현재 X 버튼만)
- [ ] 모달 열릴 때 body 스크롤 방지
- [ ] 포커스 트랩 (focus trap)

---

#### 3.2.4 IframePreview (라인 395-442)

**역할**: URL이 있는 Side Project 항목의 iframe 미리보기 제공

**Props**:
```javascript
{ url: string }
```

**주요 기능**:
- iframe으로 외부 URL 미리보기 표시
- 로드 실패 시 "새 창에서 보기" 링크로 fallback
- sandbox 속성으로 보안 제어
- 우측 상단에 외부 링크 아이콘 버튼

---

#### 3.2.5 SideItemDetail (라인 445-491)

**역할**: Side Project 하위 항목의 상세 내용 표시

**Props**:
```javascript
{ item: { description: string[], summary?: string, techNote?: string, url?: string, image?: string } }
```

**주요 기능**:
- Framer Motion 애니메이션으로 펼침/접힘
- summary, description 리스트, techNote 조건부 렌더링
- URL이 있으면 IframePreview, 없으면 이미지 플레이스홀더 표시

---

#### 3.2.6 ProofCard (라인 ~385)

**역할**: Core Competencies 섹션의 카드 컴포넌트

**Props**:
```javascript
{ title: string, desc: string, index: number }
```

**스타일**:
- 배경: 흰색 (`bg-white`)
- 보더: `border-black/5` → hover 시 `border-black`
- 최소 높이: `min-h-[180px]`

**개선 필요 사항**:
- [ ] 아이콘 추가 옵션
- [ ] 애니메이션 효과 (Framer Motion)

---

### 3.3 데이터 구조

#### PROJECT_DATA (라인 6-139)

**구조**:
```javascript
[
  {
    id: 1,
    title: "AA1 RU Live Ops",
    category: "Live Ops Strategy",
    status: "Live / Ongoing",
    tags: ["Live Ops", "KPI", "Event Strategy"],
    brand: "Revenue +208%",
    summary: "...",
    outcome: "Revenue +208% 성장",
    imageColor: "bg-[#FF2E00]",
    details: {
      oneLiner: "...",
      context: "...",
      goalMetrics: ["Goal: ...", "Metrics: ..."],
      role: ["...", "..."],
      approach: ["...", "..."],
      challenges: [{ c: "...", s: "..." }],
      outcome: "...",
      learning: "..."
    }
  },
  // ... 3개 프로젝트 더
]
```

**특징**:
- 매우 상세한 케이스스터디 구조
- 한국어 콘텐츠
- 4개 프로젝트:
  1. AA1 RU Live Ops (Revenue +208%)
  2. AA1 NAEU Ops (End-to-End Ops)
  3. TTS Pipeline (Efficiency & Quality)
  4. Auto & Tooling (Time Saving)

#### SIDE_PROJECT_DATA (라인 141-199)

**구조**:
```javascript
[
  {
    id: 'tools',
    category: '01',
    title: '업무용 툴',
    items: [
      {
        id: 'tool-1',
        title: '인게임 NPC 통합 정보 확인 툴 (시각화)',
        description: string[],
        image: string | null,      // 스크린샷 경로 (플레이스홀더)
      },
      // ...
    ]
  },
  // 02. 콘텐츠, 03. 프로젝트
]
```

**특징**:
- 3개 카테고리: 업무용 툴, 콘텐츠, 프로젝트
- 아코디언 UI로 카테고리 → 하위 항목 → 상세 내용 펼침
- URL이 있는 항목은 iframe 미리보기, 없는 항목은 이미지 플레이스홀더
- Notion URL은 iframe 차단 가능성 있어 fallback 링크 제공

**개선 필요 사항**:
- [ ] JSON 파일로 분리 (`src/data/projects.json`)
- [ ] 타입 정의 (TypeScript 전환 시)
- [ ] 다국어 대응 구조 (i18n)

---

## 4. 상태 관리

### 4.1 App 컴포넌트 State

```javascript
const [activeSection, setActiveSection] = useState('hero');
const [selectedProject, setSelectedProject] = useState(null);
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
const [expandedSideCategory, setExpandedSideCategory] = useState(null);
const [expandedSideItem, setExpandedSideItem] = useState(null);
```

| State | Type | Purpose |
|-------|------|---------|
| `activeSection` | string | 현재 보이는 섹션 ID (스크롤 감지) |
| `selectedProject` | object\|null | 모달에 표시할 프로젝트 데이터 |
| `isMobileMenuOpen` | boolean | 모바일 메뉴 열림 상태 |
| `expandedSideCategory` | string\|null | Side Projects 펼쳐진 카테고리 ID |
| `expandedSideItem` | string\|null | Side Projects 펼쳐진 하위 항목 ID |

### 4.2 Side Effects (useEffect)

**스크롤 감지 로직** ([398-416](src/App.jsx#L398-L416)):
```javascript
useEffect(() => {
  const handleScroll = () => {
    const sections = ['hero', 'proof', 'projects', 'skills', 'sideprojects', 'about', 'contact'];
    const scrollPosition = window.scrollY + window.innerHeight / 3;

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section);
        }
      }
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

**동작 원리**:
1. 스크롤 위치 = `window.scrollY + window.innerHeight / 3` (뷰포트 상단 1/3 지점)
2. 각 섹션의 `offsetTop`과 비교해 현재 섹션 감지
3. `activeSection` 상태 업데이트 → Sidebar에 반영

**개선 필요 사항**:
- [ ] `IntersectionObserver` API로 전환 (성능 개선)
- [ ] 디바운싱 적용 (scroll 이벤트 과다 호출 방지)
- [ ] Custom Hook으로 분리 (`useActiveSection`)

---

## 5. 스타일링 구조

### 5.1 Tailwind CSS 설정

**파일**: [src/index.css](src/index.css)
```css
@import "tailwindcss";

/* Custom scrollbar hide utility */
@utility no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
}
```

**사용 예시**: Sidebar의 `overflow-y-auto no-scrollbar`

### 5.2 색상 팔레트

| Color | Hex | Tailwind Class | Usage |
|-------|-----|----------------|-------|
| 베이지 | `#F3F0E7` | `bg-[#F3F0E7]` | Hero, Skills 섹션 |
| 블랙 | `#000000` | `bg-black` | Proof, About 섹션 |
| 에메랄드 | `#50C878` | `bg-[#50C878]` | Projects, Contact 섹션, 강조색 |
| 그레이 | `#EAEAEA` | `bg-[#EAEAEA]` | 페이지 배경 |

### 5.3 타이포그래피

| Element | Font Size | Weight | Line Height |
|---------|-----------|--------|-------------|
| Hero Title (HELEN KIM) | `text-[12vw]` | `font-bold` | `leading-[0.8]` |
| Section Titles | `text-4xl ~ text-8xl` | `font-bold` | - |
| Body Text | `text-sm ~ text-xl` | `font-normal` | `leading-relaxed` |
| Font Mono | `font-mono` | - | - |

---

## 6. 애니메이션 구조

### 6.1 Framer Motion 주요 사용 패턴

#### 패턴 1: Layout Animation (Sidebar)

```javascript
<motion.button layout className={...} />
```
→ `activeSection` 변경 시 버튼 크기 부드럽게 전환

#### 패턴 2: Shared Layout (Card ↔ Modal)

```javascript
// ProjectCard
<motion.div layoutId={`card-${project.id}`} />

// ProjectModal
<motion.div layoutId={`card-${project.id}`} />
```
→ 카드 클릭 시 모달로 변형 애니메이션

#### 패턴 3: Exit Animation

```javascript
<AnimatePresence>
  {selectedProject && <ProjectModal ... />}
</AnimatePresence>
```
→ 모달 닫을 때 fade-out

### 6.2 성능 고려사항

- `whileHover={{ scale: 0.98 }}`: GPU 가속 사용 (transform)
- `layoutId`: FLIP 애니메이션 기법
- `transition={{ type: "spring", stiffness: 300, damping: 20 }}`: 물리 기반 애니메이션

---

## 7. 반응형 디자인

### 7.1 Breakpoint 전략

Tailwind CSS 기본 breakpoint 사용:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px (주요 분기점)
- `xl`: 1280px

### 7.2 주요 반응형 패턴

| Component | Mobile (< lg) | Desktop (≥ lg) |
|-----------|---------------|----------------|
| **Sidebar** | `hidden` | `flex` |
| **MobileHeader** | `flex` | `hidden` |
| **Hero Title** | `text-[12vw]` (동적) | `text-[12vw]` (동적) |
| **Projects Grid** | `grid-cols-1` | `grid-cols-2` |
| **Skills** | `grid-cols-1` | `grid-cols-3` |
| **Side Projects** | `grid-cols-1` | `grid-cols-3` |

### 7.3 개선 필요 사항

- [ ] iPad 세로 모드 (768px ~ 1024px) 최적화
- [ ] 작은 모바일 (< 375px) 테스트
- [ ] 터치 영역 최소 44px 확보

---

## 8. 의존성 분석

### 8.1 Production Dependencies

| Package | Version | Size (예상) | Purpose |
|---------|---------|------|---------|
| react | 19.2.0 | ~150KB | 코어 UI 라이브러리 |
| react-dom | 19.2.0 | ~150KB | DOM 렌더링 |
| framer-motion | 12.34.0 | ~100KB | 애니메이션 |
| lucide-react | 0.563.0 | ~50KB | 아이콘 (트리쉐이킹 지원) |
| tailwindcss | 4.1.18 | - | CSS 프레임워크 |
| @tailwindcss/vite | 4.1.18 | - | Vite 플러그인 |

**총 번들 사이즈 (예상)**: ~450KB (gzip 전)

### 8.2 Dev Dependencies

- `vite`: 빌드 도구
- `eslint`: 코드 린팅
- `@vitejs/plugin-react`: Vite + React 통합

### 8.3 개선 필요 사항

- [ ] 번들 사이즈 분석 (`vite-plugin-bundle-visualizer`)
- [ ] Lucide 아이콘 트리쉐이킹 확인
- [ ] Framer Motion 코드 스플리팅 검토

---

## 9. 빌드 및 배포

### 9.1 Vite 설정

**파일**: [vite.config.js](vite.config.js)
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

### 9.2 빌드 프로세스

```bash
npm run build
```

**결과**:
- `dist/` 폴더 생성
- 최적화된 JS/CSS 파일
- index.html 포함

### 9.3 배포 옵션

| Platform | Command | URL |
|----------|---------|-----|
| **Vercel** | `vercel deploy` | Auto |
| **Netlify** | `netlify deploy` | Auto |
| **GitHub Pages** | `npm run build && gh-pages -d dist` | Manual |

---

## 10. 섹션별 상세 분석

### 10.1 Hero Section ([436-492](src/App.jsx#L436-L492))

**주요 요소**:
- 대형 타이틀: "HELEN KIM" (`text-[12vw]`)
- 서브 타이틀: "글로벌 서비스 운영에서 자동화까지..."
- Summary 카드: ROLE, STRENGTHS, KEYWORDS
- CTA 버튼: View Projects, Download CV

**스타일 특징**:
- 배경: `bg-[#F3F0E7]` (베이지)
- 최소 높이: `min-h-[90vh]`
- Summary 카드: 회전 효과 (`rotate-1 hover:rotate-0`)

### 10.2 Proof Section ([498-538](src/App.jsx#L498-L538))

**주요 요소**:
- 타이틀: "Core Competencies"
- 3개 Pillar (Capabilities와 통합):
  1. Live Ops & Partners
  2. TTS & Content Pipeline
  3. Automation & Data Workflow

**스타일 특징**:
- 배경: `bg-black` (블랙)
- 그리드: `grid-cols-1 lg:grid-cols-3`
- 호버 시: `hover:bg-white hover:text-black`

### 10.3 Projects Section ([541-560](src/App.jsx#L541-L560))

**주요 요소**:
- 타이틀: "Recent Projects"
- 4개 ProjectCard (2x2 그리드)
- 클릭 시 모달 팝업

**스타일 특징**:
- 배경: `bg-[#50C878]` (에메랄드)
- 최소 높이: `min-h-screen`
- 그리드: `grid-cols-1 md:grid-cols-2`

### 10.4 Skills Section

**주요 요소**:
- 타이틀: "Skills & Tools"
- 3개 카드:
  1. Product Ops & Collaboration (Jira, Notion, MS Office, Figma)
  2. Data & Automation (SQL, Git, AI Tools)
  3. Design & Media Production (Blender, Photoshop, Illustrator, Premiere Pro, After Effects)

**스타일 특징**:
- 배경: `bg-[#F3F0E7]` (베이지)
- 카드: 흰색 배경, 호버 시 `hover:bg-black hover:text-white`
- 그리드: `grid-cols-1 lg:grid-cols-3`

### 10.5 Side Projects Section (#sideprojects)

**주요 요소**:
- 타이틀: "Side Projects"
- 3개 카테고리 카드 (아코디언):
  1. 업무용 툴 (인게임 NPC 통합 정보 확인 툴, NPC 대사 정보 자동 갱신 툴)
  2. 콘텐츠 (Notion 기반 콘텐츠 포트폴리오)
  3. 프로젝트 (제품 홍보용 웹 제작)

**인터랙션**:
- 카테고리 카드 클릭 → 하위 항목 리스트 펼침
- 하위 항목 클릭 → 상세 내용 펼침 (설명 + iframe/이미지)
- URL 항목: iframe 미리보기 (차단 시 새 창 링크 fallback)
- 이미지 없는 항목: 플레이스홀더 표시

**스타일 특징**:
- 배경: `bg-[#50C878]` (에메랄드)
- 카테고리 카드: 선택 시 `bg-white text-black`, 미선택 시 `bg-black/20`
- Framer Motion 애니메이션: 펼침/접힘, ChevronDown 회전

### 10.7 About Section

**주요 요소**:
- 메인 문구: "운영을 '사람의 노력'으로만 유지하지 않고..."
- 설명: 글로벌 서비스 운영 경험...
- Working Style 태그 4개

**스타일 특징**:
- 배경: `bg-black` (블랙)
- 텍스트: 흰색
- 최대 너비: `max-w-4xl mx-auto`

### 10.8 Contact Section

**주요 요소**:
- 헤드라인: "Let's build scalable operations..."
- 설명: "프로젝트/제품의 운영 복잡도를 줄이고..."
- 4개 버튼: Email Me, LinkedIn Profile, Download CV, Career Description
- Footer: © 2026 Helen Kim Portfolio

**연락처 정보**:
- Email: hano9758@gmail.com
- LinkedIn: https://www.linkedin.com/in/helenkim1201/

**스타일 특징**:
- 배경: `bg-[#50C878]` (에메랄드)
- 텍스트: 블랙
- 최소 높이: `min-h-[50vh]`
- 텍스트 정렬: `text-center`

---

## 11. 향후 아키텍처 개선 계획

### 11.1 단기 (v0.2.0)

1. **모듈 분리**
   - [App.jsx](src/App.jsx) → 컴포넌트별 파일 분리
   - 데이터 레이어 분리 (`src/data/`)
   - Custom Hooks 분리 (`src/hooks/`)

2. **TypeScript 전환**
   - `.jsx` → `.tsx`
   - `PROJECT_DATA` 타입 정의
   - Props 타입 정의

### 11.2 중기 (v1.0.0)

1. **테스트 환경 구축**
   - Vitest 설정
   - React Testing Library
   - E2E 테스트 (Playwright)

2. **성능 최적화**
   - 코드 스플리팅 (React.lazy)
   - 이미지 최적화 (WebP, lazy loading)
   - Lighthouse 90+ 달성

### 11.3 장기 (v2.0.0)

1. **다국어 지원**
   - i18n 라이브러리 도입
   - 한국어/영어 전환

2. **CMS 통합**
   - 프로젝트 데이터 관리용 Headless CMS (Strapi, Contentful)
   - 동적 콘텐츠 로딩

---

## 12. 참고 자료

- [React 19 공식 문서](https://react.dev)
- [Vite 공식 문서](https://vite.dev)
- [Framer Motion 공식 문서](https://www.framer.com/motion/)
- [Tailwind CSS 공식 문서](https://tailwindcss.com)
- [REVIEW.md](REVIEW.md) - 개선 체크리스트
- [CONTENT.md](CONTENT.md) - 콘텐츠 관리 가이드

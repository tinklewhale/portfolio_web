# Helen Kim - Portfolio Website

> Global PM Portfolio showcasing Live Ops, Localization, TTS Pipeline, and Automation projects.

[![React](https://img.shields.io/badge/React-19.2-blue)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7.3-purple)](https://vite.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-cyan)](https://tailwindcss.com)

---

## About This Project

헬렌 김(Helen Kim)의 포트폴리오 웹사이트입니다. 글로벌 게임 서비스 운영 경험을 바탕으로 한 PM 역량과 프로젝트 케이스 스터디를 소개합니다.

**주요 특징:**
- 7개 섹션으로 구성된 단일 페이지 애플리케이션 (SPA)
- 4개의 상세한 프로젝트 케이스 스터디 (Live Ops, Risk Management, TTS Pipeline, Automation)
- Framer Motion 기반 인터랙티브 애니메이션
- 모바일 반응형 디자인
- 스크롤 기반 네비게이션

---

## Tech Stack

| Category | Technology | Version |
|----------|-----------|---------|
| **Framework** | React | 19.2.0 |
| **Build Tool** | Vite | 7.3.1 |
| **Styling** | Tailwind CSS | 4.1.18 |
| **Animation** | Framer Motion | 12.34.0 |
| **Icons** | Lucide React | 0.563.0 |
| **Language** | JavaScript (ES6+) | - |

---

## Project Structure

```
portfolio_web/
├── public/
│   └── vite.svg              # Favicon (변경 예정)
├── src/
│   ├── App.jsx               # 메인 컴포넌트 (~780줄)
│   ├── main.jsx              # 앱 진입점
│   ├── index.css             # Tailwind 설정
│   └── assets/               # 정적 리소스
├── index.html                # HTML 템플릿
├── package.json              # 의존성 관리
├── vite.config.js            # Vite 설정
├── eslint.config.js          # ESLint 설정
├── README.md                 # 이 파일
├── ARCHITECTURE.md           # 구조 설명 문서
├── REVIEW.md                 # 개선 체크리스트
├── CONTENT.md                # 콘텐츠 관리 가이드
├── CHANGELOG.md              # 변경 이력
└── PORTFOLIO.md              # 전체 콘텐츠 정리
```

**Note**: [App.jsx](src/App.jsx)가 현재 단일 파일로 구성되어 있습니다. 모듈화 작업이 [REVIEW.md](REVIEW.md)에 P0 항목으로 계획되어 있습니다.

---

## Getting Started

### Prerequisites

- Node.js 18.x 이상
- npm 9.x 이상

### Installation

1. **저장소 클론**
   ```bash
   git clone <repository-url>
   cd portfolio_web
   ```

2. **의존성 설치**
   ```bash
   npm install
   ```

3. **개발 서버 실행**
   ```bash
   npm run dev
   ```
   브라우저에서 http://localhost:5173 접속

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | 개발 서버 시작 (Hot Module Replacement) |
| `npm run build` | 프로덕션 빌드 (dist/ 폴더 생성) |
| `npm run preview` | 빌드된 파일 로컬 미리보기 |
| `npm run lint` | ESLint 코드 검사 |

---

## Features

### 1. Hero Section

- 대형 타이포그래피 헤더
- 인터랙티브 Summary 카드
- CTA 버튼 (프로젝트 보기, CV 다운로드)

### 2. Core Competencies (Proof)

- 3개 역량 pillar (Live Ops & Partners, TTS & Content Pipeline, Automation & Data Workflow)
- 검은 배경, 호버 시 흰색으로 전환

### 3. Projects Section

- 4개 프로젝트 카드 (AA1 RU Live Ops, NAEU Ops, TTS Pipeline, Automation)
- 클릭 시 상세 모달 팝업 (Framer Motion layoutId 애니메이션)
- 각 프로젝트별 Context, Goal, Role, Approach, Challenges, Outcome 상세 설명

### 4. Skills & Tools

- 3개 카드 (Product Ops & Collaboration, Data & Automation, Design & Media Production)
- 흰색 카드, 호버 시 검은색으로 전환
- 사용 도구 태그 표시

### 5. Side Projects

- 3개 카테고리 카드 (업무용 툴, 콘텐츠, 프로젝트)
- 아코디언 UI: 카테고리 클릭 → 하위 항목 펼침 → 상세 내용 펼침
- URL 항목: iframe 미리보기 (차단 시 새 창 링크 fallback)
- 업무용 툴: 설명 텍스트 + 이미지 플레이스홀더

### 6. About Section

- 자기소개 및 Working Style 태그
- 운영 철학 강조

### 7. Contact Section

- Email, LinkedIn, CV 다운로드 버튼
- Footer 정보

### 8. Navigation

- **데스크톱**: 좌측 고정 사이드바 (섹션별 버튼, 현재 섹션 표시)
- **모바일**: 상단 햄버거 메뉴

---

## Sections Overview

| Section | ID | Background | Purpose |
|---------|-----|-----------|---------|
| Hero | `#hero` | `#F3F0E7` (베이지) | 첫인상, 자기소개 |
| Proof | `#proof` | `#000000` (블랙) | 핵심 역량 증명 (3개 pillar) |
| Projects | `#projects` | `#50C878` (에메랄드) | 프로젝트 케이스스터디 |
| Skills | `#skills` | `#F3F0E7` (베이지) | 사용 도구 및 스킬 |
| Side Projects | `#sideprojects` | `#50C878` (에메랄드) | 사이드 프로젝트 |
| About | `#about` | `#000000` (블랙) | 자기소개 |
| Contact | `#contact` | `#50C878` (에메랄드) | 연락처 |

---

## Design Principles

1. **대담한 타이포그래피**: 큰 폰트 사이즈와 명확한 계층 구조
2. **색상 대비**: 블랙(`#000000`), 에메랄드(`#50C878`), 베이지(`#F3F0E7`)로 섹션 구분
3. **인터랙션**: Framer Motion 기반 부드러운 애니메이션
4. **모바일 우선**: 반응형 디자인 (lg: breakpoint 기준)
5. **미니멀리즘**: 불필요한 요소 제거, 콘텐츠 중심

---

## Performance

- **번들 사이즈**: 측정 예정 (vite-plugin-bundle-visualizer 예정)
- **Lighthouse 점수**: 측정 예정
- **로딩 속도**: Vite 기본 최적화 적용

---

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## Roadmap

### v0.2.0 (현재)

- ✅ Side Projects 섹션 추가 (업무용 툴, 콘텐츠, 프로젝트)
- ✅ 아코디언 UI + iframe 미리보기
- ✅ 사이드바 7개 섹션으로 확장
- ✅ 섹션 번호 텍스트 정리

### v0.1.0

- ✅ 기본 6개 섹션 구현
- ✅ 프로젝트 모달 인터랙션
- ✅ 모바일 반응형
- ✅ 문서화 완료 (REVIEW, ARCHITECTURE, CONTENT, CHANGELOG, PORTFOLIO)
- ✅ 색상 변경 (레드→에메랄드 그린)
- ✅ 섹션 재구성 (Capabilities→Skills)
- ✅ 연락처 정보 연결

### v0.2.0 (계획 중)

- [ ] [App.jsx](src/App.jsx) 모듈 분리
- [ ] TypeScript 전환
- [ ] SEO 메타 태그 추가
- [ ] 실제 연락처 정보 연결

### v1.0.0 (배포 목표)

- [ ] 접근성 개선 (WCAG 2.1 AA)
- [ ] Lighthouse 90+ 달성
- [ ] 다국어 지원 (한/영)
- [ ] 테스트 커버리지 80%+

---

## Documentation

프로젝트 문서는 다음 파일들을 참조하세요:

- [REVIEW.md](REVIEW.md) - 수정 체크리스트 및 우선순위 (가장 중요!)
- [ARCHITECTURE.md](ARCHITECTURE.md) - 현재 구조 상세 설명
- [CONTENT.md](CONTENT.md) - 콘텐츠 관리 가이드
- [CHANGELOG.md](CHANGELOG.md) - 변경 이력 추적

---

## Contributing

현재 개인 포트폴리오 프로젝트로, 외부 기여는 받지 않습니다.
버그 리포트나 제안은 Issues에 남겨주세요.

---

## License

© 2026 Helen Kim. All rights reserved.
이 프로젝트는 포트폴리오 용도로 제작되었으며, 상업적 사용을 금지합니다.

---

## Contact

- **Email**: hano9758@gmail.com
- **LinkedIn**: [linkedin.com/in/helenkim1201](https://www.linkedin.com/in/helenkim1201/)
- **Portfolio**: [배포 URL 예정]

---

## Acknowledgments

- Design inspiration: Raw Materials Design
- Icons: [Lucide](https://lucide.dev)
- Fonts: System fonts (SF Pro, Inter fallback)

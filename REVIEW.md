# Portfolio Web - Review & Improvement Checklist

> 프로젝트 수정 전 검토 및 개선 사항 정리
> 최초 작성: 2026-02-15
> 최종 업데이트: 2026-02-15

---

## 사용 방법

- [ ] 이 문서를 먼저 읽고 수정 우선순위 파악
- [ ] 각 항목의 우선순위(P0/P1/P2)와 난이도(Easy/Medium/Hard)를 확인
- [ ] 완료한 항목은 체크 후 날짜 기록
- [ ] 수정 완료 후 [CHANGELOG.md](./CHANGELOG.md)에 반영

---

## 1. 코드 구조 개선 (Architecture)

### P0: 긴급 (필수, 리팩토링 기반)

- [ ] **[Hard]** App.jsx 모듈 분리 (32KB → 컴포넌트별 파일)
  - 현재: [App.jsx](src/App.jsx) 651줄 단일 파일
  - 목표: components/, data/, hooks/ 구조 분리
  - 예상 소요: 3-4시간
  - 참고: [ARCHITECTURE.md](./ARCHITECTURE.md) 참조

### P1: 중요 (품질 향상)

- [ ] **[Medium]** TypeScript 전환 검토
  - 이유: 타입 안정성 확보, 유지보수성 향상
  - 범위: .jsx → .tsx, PropTypes 제거
  - 예상 소요: 4-6시간

- [ ] **[Easy]** ESLint 경고 해결
  - 현재 상태: 확인 필요 (`npm run lint` 실행)
  - 목표: 0 warnings

### P2: 개선 (선택적)

- [ ] **[Medium]** 프로젝트 데이터 JSON 파일로 분리
  - 위치: src/data/projects.json
  - 이유: 콘텐츠 업데이트 용이성
  - 현재: [App.jsx:6-139](src/App.jsx#L6-L139) 하드코딩

- [ ] **[Easy]** 반복 사용 상수 분리 (색상, 섹션 ID 등)
  - 위치: src/constants/colors.js, sections.js
  - 예: `#F3F0E7`, `#FF2E00`, `#3B27BA` 등

---

## 2. UI/UX 개선 (User Experience)

### P0: 긴급

- [ ] **[Easy]** 모바일 반응형 테스트 및 개선
  - 테스트 기기: iPhone SE, iPad, Galaxy S
  - 확인 항목: 터치 영역, 폰트 크기, 레이아웃 깨짐
  - 현재: lg: breakpoint (1024px) 기준

- [ ] **[Medium]** 다크모드 대응 검토
  - 현재: 고정 색상 사용
  - 고려: 시스템 다크모드 감지 및 색상 대응

### P1: 중요

- [ ] **[Easy]** CTA 버튼 실제 동작 구현
  - Download CV: 실제 파일 다운로드 링크 연결 ([App.jsx:166-169](src/App.jsx#L166-L169), [460-462](src/App.jsx#L460-L462), [626-628](src/App.jsx#L626-L628))
  - Email Me: mailto: 링크 추가 ([620-622](src/App.jsx#L620-L622))
  - LinkedIn Profile: 실제 URL 연결 ([623-625](src/App.jsx#L623-L625))

- [ ] **[Medium]** 로딩 상태 및 에러 처리
  - Framer Motion 애니메이션 지연 시 로딩 표시
  - 프로젝트 모달 열기 실패 시 대체 UI

### P2: 개선

- [ ] **[Hard]** 키보드 네비게이션 지원
  - Tab/Shift+Tab으로 섹션 이동
  - ESC로 모달 닫기 (확인 필요)

- [ ] **[Medium]** 스크롤 성능 최적화
  - Intersection Observer 활용 검토
  - 현재 scroll 이벤트 리스너 최적화 ([398-416](src/App.jsx#L398-L416))

---

## 3. 접근성 개선 (Accessibility)

### P0: 긴급

- [ ] **[Easy]** 시맨틱 HTML 개선
  - `<button>` 태그 role 검토
  - `<nav>` 태그 추가 (사이드바 [159-204](src/App.jsx#L159-L204))
  - heading 계층 구조 확인 (h1→h2→h3)

- [ ] **[Easy]** 이미지 alt 텍스트 추가
  - 프로젝트 카드 배경색 설명
  - 아이콘 aria-label 추가 (Lucide 아이콘)

### P1: 중요

- [ ] **[Medium]** ARIA 속성 추가
  - aria-label: 네비게이션 버튼
  - aria-current: 현재 섹션 표시
  - aria-hidden: 장식용 요소

- [ ] **[Easy]** 포커스 표시 개선
  - outline 스타일 커스터마이징
  - :focus-visible 활용

### P2: 개선

- [ ] **[Hard]** 스크린 리더 테스트
  - VoiceOver (macOS) 테스트
  - 컨텐츠 읽기 순서 검증

---

## 4. SEO 및 메타 정보 (Search & Social)

### P0: 긴급

- [ ] **[Easy]** index.html 메타 태그 추가
  - `<title>`: "Helen Kim - Global PM Portfolio"
  - `<meta name="description">`: 150자 이내 설명
  - `<meta name="keywords">`: 주요 키워드
  - 현재: [index.html](index.html) title만 "portfolio_web"

- [ ] **[Easy]** Open Graph 태그 추가
  - og:title, og:description, og:image, og:url
  - 공유 시 미리보기 이미지 설정

- [ ] **[Easy]** favicon 변경
  - 현재: /vite.svg (기본 Vite 아이콘)
  - 목표: 개인 브랜드 아이콘

### P1: 중요

- [ ] **[Medium]** Twitter Card 메타 태그
  - twitter:card, twitter:title, twitter:description

- [ ] **[Easy]** robots.txt 및 sitemap.xml 생성
  - 검색 엔진 크롤링 최적화

### P2: 개선

- [ ] **[Medium]** 구조화된 데이터 (JSON-LD)
  - Schema.org Person 타입
  - 채용 담당자 검색 노출 향상

---

## 5. 성능 최적화 (Performance)

### P0: 긴급

- [ ] **[Medium]** 번들 사이즈 분석
  - vite-plugin-bundle-visualizer 설치
  - 불필요한 의존성 확인
  - 현재 예상: ~450KB (gzip 전)

### P1: 중요

- [ ] **[Medium]** 이미지 최적화
  - 현재: 색상 배경만 사용 (imageColor)
  - 고려: 실제 프로젝트 이미지 추가 시 WebP 포맷

- [ ] **[Easy]** 코드 스플리팅 검토
  - 프로젝트 모달 lazy loading
  - React.lazy() 활용

### P2: 개선

- [ ] **[Hard]** Lighthouse 성능 점수 90+ 달성
  - 현재 점수: 측정 필요
  - 목표: Performance, Accessibility, Best Practices, SEO 모두 90+

- [ ] **[Medium]** 폰트 최적화
  - font-display: swap 설정
  - preload 적용 검토

---

## 6. 콘텐츠 업데이트 (Content)

### P0: 긴급

- [ ] **[Easy]** 실제 연락처 정보 추가
  - Email: 실제 이메일 주소 ([620-622](src/App.jsx#L620-L622))
  - LinkedIn: 프로필 URL ([623-625](src/App.jsx#L623-L625))
  - CV 파일: /public/helen-kim-cv.pdf

- [ ] **[Easy]** Footer 연도 동적 변경
  - 현재: "© 2026 Helen Kim Portfolio." ([632](src/App.jsx#L632))
  - 목표: `new Date().getFullYear()`

### P1: 중요

- [ ] **[Easy]** About 섹션 내용 점검
  - 자기소개 문구 최신화 ([586-587](src/App.jsx#L586-L587))
  - Working Style 태그 검토 ([599-604](src/App.jsx#L599-L604))

- [ ] **[Medium]** 프로젝트 케이스스터디 업데이트
  - 4개 프로젝트 내용 재검토 ([PROJECT_DATA](src/App.jsx#L6-L139))
  - 성과 수치 검증 (Revenue +208% 등)

### P2: 개선

- [ ] **[Easy]** 다국어 지원 준비
  - 한국어/영어 토글 기능 검토
  - i18n 라이브러리 도입 고려

---

## 7. 개발 환경 및 도구 (DevOps)

### P0: 긴급

- [ ] **[Easy]** README.md 업데이트
  - 프로젝트 설명 추가
  - 로컬 실행 가이드 상세화
  - 현재: Vite 기본 템플릿 ([README.md](README.md))

### P1: 중요

- [ ] **[Medium]** Git 브랜치 전략 수립
  - main: 배포용
  - develop: 개발용
  - feature/*: 기능별 브랜치

- [ ] **[Easy]** .gitignore 점검
  - .env 파일 제외 확인
  - 불필요한 파일 제외

### P2: 개선

- [ ] **[Hard]** 테스트 환경 구축
  - Vitest + React Testing Library 설치
  - 주요 컴포넌트 단위 테스트 작성

- [ ] **[Medium]** CI/CD 파이프라인 구축
  - GitHub Actions: 빌드 + 테스트 자동화
  - Vercel/Netlify 자동 배포

---

## 8. 보안 및 베스트 프랙티스 (Security)

### P1: 중요

- [ ] **[Easy]** 의존성 보안 점검
  - npm audit 실행
  - 취약점 패치 적용

- [ ] **[Easy]** 환경 변수 분리
  - API 키, 민감 정보 .env 파일로 이동
  - .env.example 생성

### P2: 개선

- [ ] **[Medium]** Content Security Policy 설정
  - index.html에 CSP 헤더 추가
  - XSS 공격 방어

---

## 우선순위 요약

### 이번 주 집중 (P0)

1. **App.jsx 모듈 분리** (가장 중요!)
2. **index.html 메타 태그 추가** (SEO)
3. **실제 연락처 정보 연결** (콘텐츠)
4. **README.md 업데이트** (문서화)
5. **모바일 반응형 테스트** (UX)

### 다음 주 (P1)

- TypeScript 전환
- 접근성 개선 (ARIA, 시맨틱)
- 성능 최적화 (번들 사이즈)
- Git 브랜치 전략

### 시간 날 때 (P2)

- 테스트 환경 구축
- 다국어 지원
- Lighthouse 90+ 달성

---

## 진행 상황 트래킹

| 날짜 | 완료 항목 | 소요 시간 | 비고 |
|------|-----------|-----------|------|
| 2026-02-15 | REVIEW.md 작성 | 1h | 체크리스트 정리 |
| | | | |
| | | | |

---

## 참고 자료

- [ARCHITECTURE.md](./ARCHITECTURE.md) - 현재 구조 설명
- [README.md](./README.md) - 프로젝트 소개
- [CONTENT.md](./CONTENT.md) - 콘텐츠 관리 가이드
- [Vite 공식 문서](https://vite.dev)
- [React 19 Migration Guide](https://react.dev/blog/2024/04/25/react-19)
- [Tailwind CSS 공식 문서](https://tailwindcss.com)

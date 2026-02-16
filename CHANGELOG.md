# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Planned

- App.jsx 모듈 분리 (components/, data/, hooks/ 구조)
- TypeScript 전환 (.jsx → .tsx)
- SEO 메타 태그 추가 (index.html)
- 접근성 개선 (ARIA, 시맨틱 HTML)
- 성능 최적화 (번들 사이즈 분석, 코드 스플리팅)

---

## [0.1.1] - 2026-02-16

### Changed

**디자인 및 색상 변경**:
- 메인 색상: `#FF2E00` (레드) → `#50C878` (에메랄드 그린)
- Projects 섹션 배경: 레드 → 에메랄드
- Contact 섹션 배경: 블랙 → 에메랄드
- About 섹션 배경: 베이지 → 블랙
- 프로젝트 카드 강조색: 레드 → 에메랄드

**섹션 재구성**:
- Proof 섹션과 Capabilities 섹션 통합 → Core Competencies (3개 pillar)
- Skills 섹션 신규 추가 (Product Ops, Data & Automation, Design & Media Production)
- 섹션 순서: Hero → Proof → Projects → Skills → About → Contact

**연락처 정보 추가**:
- Email: hano9758@gmail.com 연결
- LinkedIn: https://www.linkedin.com/in/helenkim1201/ 연결
- CV 다운로드: /cv.pdf
- Career Description 다운로드: /career_description.pdf

**콘텐츠 업데이트**:
- KEYWORDS: 'Jira' → 'AI'
- Hero 서브타이틀 강조색: 레드 → 에메랄드
- About 메인 문구 강조색: 그레이 → 에메랄드

### Added

- Career Description 다운로드 버튼 (Sidebar, Hero, Contact)
- FileText 아이콘 import (Lucide React)

### Fixed

- 모든 연락처 링크 실제 동작 구현
- 문서 업데이트 (REVIEW, README, ARCHITECTURE, CONTENT, CHANGELOG)
- PORTFOLIO.md 신규 생성 (모든 텍스트 콘텐츠 정리)

---

## [0.1.0] - 2026-02-15

### Added

**프로젝트 초기 구현**:
- 6개 섹션 구성 (Hero, Proof, Projects, Capabilities, About, Contact)
- 4개 프로젝트 케이스스터디 (AA1 RU Live Ops, NAEU Ops, TTS Pipeline, Auto & Tooling)
- Framer Motion 기반 인터랙티브 애니메이션
- 모바일 반응형 디자인 (lg: breakpoint 기준)
- 스크롤 기반 네비게이션 (라우터 미사용)

**컴포넌트**:
- Sidebar 네비게이션 (데스크톱)
- MobileHeader (모바일)
- ProjectCard (프로젝트 카드 UI)
- ProjectModal (상세 모달)
- ProofCard (역량 카드)

**스타일링**:
- Tailwind CSS 4.1 설정
- 커스텀 색상 팔레트 (베이지, 블랙, 레드, 퍼플)
- 커스텀 no-scrollbar 유틸리티

**애니메이션**:
- Layout Animation (Sidebar 버튼 크기 전환)
- Shared Layout (Card ↔ Modal 전환)
- Exit Animation (Modal 닫기)

**문서화**:
- [REVIEW.md](REVIEW.md): 수정 체크리스트 40개 항목 (P0/P1/P2 우선순위)
- [README.md](README.md): 프로젝트 설명 및 시작 가이드
- [ARCHITECTURE.md](ARCHITECTURE.md): 현재 구조 상세 분석
- [CONTENT.md](CONTENT.md): 콘텐츠 관리 가이드
- [CHANGELOG.md](CHANGELOG.md): 이 파일

### Technical Details

- **React**: 19.2.0
- **Vite**: 7.3.1
- **Tailwind CSS**: 4.1.18
- **Framer Motion**: 12.34.0
- **Lucide React**: 0.563.0

### Notes

- 현재 [App.jsx](src/App.jsx)는 651줄 단일 파일로 구성 (모듈화 예정)
- 연락처 정보는 아직 placeholder 상태
- SEO 메타 태그 미적용
- 테스트 환경 미구축

---

## Future Versions

### [0.2.0] - Planned

**목표**: 코드 품질 향상 및 기본 SEO 적용

- App.jsx 모듈 분리
- TypeScript 전환
- SEO 메타 태그 추가
- 실제 연락처 정보 연결
- ESLint 경고 해결

### [1.0.0] - Planned

**목표**: 프로덕션 배포 준비

- 접근성 개선 (WCAG 2.1 AA)
- Lighthouse 90+ 달성
- 다국어 지원 (한/영)
- 테스트 커버리지 80%+
- CI/CD 파이프라인 구축

### [2.0.0] - Planned

**목표**: 고급 기능 추가

- Headless CMS 통합
- 다국어 완전 지원
- A/B 테스트 기능
- 분석 대시보드

---

## Guidelines for Future Updates

### Commit 메시지 규칙

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Type**:
- `feat`: 새 기능
- `fix`: 버그 수정
- `docs`: 문서 수정
- `style`: 코드 스타일 변경 (포맷팅 등)
- `refactor`: 리팩토링
- `perf`: 성능 개선
- `test`: 테스트 추가/수정
- `chore`: 빌드/도구 변경

**예시**:
```
feat(projects): Add 5th project card

- Add new project "Global Launch Strategy"
- Update PROJECT_DATA array
- Adjust grid layout for 5 projects

Closes #42
```

### Changelog 업데이트 규칙

1. **버전 릴리스 시**:
   - Unreleased 섹션 내용을 새 버전 섹션으로 이동
   - 날짜 추가 (YYYY-MM-DD)
   - 변경 사항을 Added/Changed/Deprecated/Removed/Fixed/Security로 분류

2. **작업 완료 시**:
   - [REVIEW.md](REVIEW.md)에서 완료한 항목을 여기에 기록
   - 구체적인 변경 내용 명시

3. **링크 추가**:
   - 관련 이슈/PR 번호 추가
   - 중요한 파일 링크 포함

---

## Version History Summary

| Version | Date | Key Features |
|---------|------|--------------|
| 0.1.0 | 2026-02-15 | 초기 구현 + 문서화 완료 |
| 0.2.0 | TBD | 모듈화 + TypeScript + SEO |
| 1.0.0 | TBD | 접근성 + 성능 + 다국어 |
| 2.0.0 | TBD | CMS + 고급 기능 |

---

## References

- [Keep a Changelog](https://keepachangelog.com/en/1.0.0/)
- [Semantic Versioning](https://semver.org/spec/v2.0.0.html)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [REVIEW.md](REVIEW.md) - 수정 체크리스트
- [README.md](README.md) - 프로젝트 소개

# Content Management Guide

> 포트폴리오 콘텐츠 업데이트 가이드
> 작성일: 2026-02-15
> 최종 업데이트: 2026-02-16

---

## 1. 프로젝트 데이터 업데이트

### 1.1 위치

[App.jsx:6-139](src/App.jsx#L6-L139) (리팩토링 후: `src/data/projects.json`)

### 1.2 구조

```javascript
{
  id: number,              // 고유 ID (1, 2, 3, 4)
  title: string,           // 프로젝트 제목
  category: string,        // 카테고리 (예: "Live Ops Strategy")
  status: string,          // 상태 (예: "Live / Ongoing")
  tags: string[],          // 태그 배열 (최대 3개 권장)
  brand: string,           // 브랜드 라벨 (예: "Revenue +208%")
  summary: string,         // 한 줄 요약 (150자 이내)
  outcome: string,         // 최종 성과 (짧게)
  imageColor: string,      // Tailwind class (예: "bg-[#FF2E00]")
  details: { ... }         // 상세 정보 (아래 참조)
}
```

### 1.3 details 구조

```javascript
details: {
  oneLiner: string,           // 한 문장 요약 (200자 이내)
  context: string,            // 배경 설명 (300자 이내)
  goalMetrics: string[],      // 목표와 지표 (2-3개)
  role: string[],             // 역할 (3-5개)
  approach: string[],         // 접근 방식 (2-3개)
  challenges: [               // 도전 과제와 해결책
    { c: string, s: string }  // c: Challenge, s: Solution
  ],
  outcome: string,            // 최종 성과 (상세)
  learning: string            // 배운 점 (인용문 형태)
}
```

### 1.4 색상 가이드

| 색상 | Hex Code | Tailwind Class | 사용처 |
|------|----------|----------------|--------|
| 블랙 | `#000000` | `bg-black` | 프로젝트 2 (NAEU Ops) |
| 에메랄드 | `#50C878` | `bg-[#50C878]` | 프로젝트 1, 4 (RU Live Ops, Auto & Tooling) |
| 커스텀 | `#YOUR_HEX` | `bg-[#YOUR_HEX]` | 새 프로젝트 |

---

## 2. 섹션별 콘텐츠 위치

| 섹션 | 라인 | 주요 콘텐츠 |
|------|------|------------|
| Hero | [435-495](src/App.jsx#L435-L495) | 타이틀, 자기소개, Summary 카드 |
| Proof | [498-538](src/App.jsx#L498-L538) | 3개 역량 pillar (Live Ops, TTS, Automation) |
| Projects | [541-560](src/App.jsx#L541-L560) | PROJECT_DATA 렌더링 |
| Skills | [563-585](src/App.jsx#L563-L585) | 3개 스킬 카드 (도구 및 기술) |
| About | [588-614](src/App.jsx#L588-L614) | 자기소개 문구, Working Style |
| Contact | [617-644](src/App.jsx#L617-L644) | CTA 버튼, Footer |

---

## 3. 텍스트 업데이트 체크리스트

### 3.1 Hero Section

- [ ] **타이틀**: "HELEN KIM" ([447](src/App.jsx#L447))
- [ ] **서브 타이틀** ([452-454](src/App.jsx#L452-L454))
  ```javascript
  글로벌 서비스 운영에서 자동화까지,
  <span className="text-[#FF2E00]">실행으로 성과를 만드는 PM</span>
  ```
- [ ] **Summary 카드** ([469-492](src/App.jsx#L469-L492))
  - ROLE ([477](src/App.jsx#L477))
  - STRENGTHS ([481](src/App.jsx#L481))
  - KEYWORDS ([486](src/App.jsx#L486)): KPI, L10N, TTS, AI, SQL, Python

### 3.2 Proof Section (Core Competencies - 3개 Pillar 통합)

- [ ] **Pillar 1**: Live Ops & Partners ([506-514](src/App.jsx#L506-L514))
- [ ] **Pillar 2**: TTS & Content Pipeline ([517-525](src/App.jsx#L517-L525))
- [ ] **Pillar 3**: Automation & Data Workflow ([528-536](src/App.jsx#L528-L536))

### 3.3 Skills Section (새 섹션)

- [ ] **Card 1**: Product Ops & Collaboration ([553-561](src/App.jsx#L553-L561))
  - 도구: Jira, Redmine, Notion, MS Office, Figma
- [ ] **Card 2**: Data & Automation ([564-572](src/App.jsx#L564-L572))
  - 도구: SQL, Git, AI Tools
- [ ] **Card 3**: Design & Media Production ([575-583](src/App.jsx#L575-L583))
  - 도구: Blender, Photoshop, Illustrator, Premiere Pro, After Effects

### 3.4 About Section

- [ ] **메인 문구** ([592-593](src/App.jsx#L592-L593))
  ```javascript
  운영을 '사람의 노력'으로만 유지하지 않고,
  <span className="text-[#50C878]">시스템으로 재현 가능하게 만드는 데 집중합니다.</span>
  ```
- [ ] **설명** ([598-600](src/App.jsx#L598-L600))
- [ ] **Working Style 태그** ([605-609](src/App.jsx#L605-L609))
  - Data-informed decisions
  - Clear ownership
  - QA-first mindset
  - Automate what repeats

### 3.5 Contact Section

- [ ] **헤드라인** ([618-620](src/App.jsx#L618-L620))
  ```javascript
  Let's build <span className="text-white">scalable operations</span> and AI-ready workflows.
  ```
- [ ] **설명** ([621-623](src/App.jsx#L621-L623))
- [ ] **Footer** ([640-642](src/App.jsx#L640-L642))

---

## 4. 연락처 정보 업데이트

### 4.1 위치

| 위치 | 라인 | 버튼 |
|------|------|------|
| Sidebar | [166-169](src/App.jsx#L166-L169) | Download CV |
| Sidebar | [170-173](src/App.jsx#L170-L173) | Career Description |
| Hero | [460-462](src/App.jsx#L460-L462) | Download CV |
| Hero | [463-465](src/App.jsx#L463-L465) | Career Description |
| Contact | [626-628](src/App.jsx#L626-L628) | Email Me |
| Contact | [629-631](src/App.jsx#L629-L631) | LinkedIn Profile |
| Contact | [632-634](src/App.jsx#L632-L634) | Download CV |
| Contact | [635-637](src/App.jsx#L635-L637) | Career Description |

### 4.2 수정 사항

#### Email 연결 (완료)

**현재** ([626-628](src/App.jsx#L626-L628)):
```javascript
<a href="mailto:hano9758@gmail.com" className="...">
  Email Me
</a>
```

#### LinkedIn 연결 (완료)

**현재** ([629-631](src/App.jsx#L629-L631)):
```javascript
<a href="https://www.linkedin.com/in/helenkim1201/" target="_blank" rel="noopener noreferrer" className="...">
  LinkedIn Profile
</a>
```

#### CV 다운로드 (완료)

**현재** ([166-169](src/App.jsx#L166-L169)):
```javascript
<a href="/cv.pdf" download="2026_김헬렌 이력서.pdf" className="...">
  <span>Download CV</span>
  <Download size={12} />
</a>
```

**파일 위치**: `/public/cv.pdf` (업로드 필요)

#### Career Description 다운로드 (추가)

**현재** ([170-173](src/App.jsx#L170-L173)):
```javascript
<a href="/career_description.pdf" download="2026.02_김헬렌 경력기술서.pdf" className="...">
  <span>Career Description</span>
  <FileText size={12} />
</a>
```

**파일 위치**: `/public/career_description.pdf` (업로드 필요)

---

## 5. 프로젝트 추가/삭제 방법

### 5.1 새 프로젝트 추가

1. **PROJECT_DATA 배열에 객체 추가** ([6-139](src/App.jsx#L6-L139))

```javascript
const PROJECT_DATA = [
  // ... 기존 프로젝트
  {
    id: 5,  // 다음 ID
    title: "새 프로젝트 제목",
    category: "카테고리",
    status: "Live / Ongoing",
    tags: ["태그1", "태그2", "태그3"],
    brand: "핵심 메시지",
    summary: "한 줄 요약 (150자 이내)",
    outcome: "최종 성과",
    imageColor: "bg-[#FF2E00]",  // 색상 선택
    details: {
      oneLiner: "한 문장 요약",
      context: "배경 설명",
      goalMetrics: [
        "Goal: 목표",
        "Metrics: 지표"
      ],
      role: [
        "역할 1",
        "역할 2",
        "역할 3"
      ],
      approach: [
        "접근 방식 1",
        "접근 방식 2"
      ],
      challenges: [
        { c: "도전 과제", s: "해결책" }
      ],
      outcome: "최종 성과 상세",
      learning: "배운 점 (인용문 형태)"
    }
  }
];
```

2. **그리드 레이아웃 조정** (필요시)

현재 2x2 그리드로 4개 프로젝트 표시. 5개 이상일 경우 레이아웃 조정 필요.

### 5.2 프로젝트 삭제

1. **PROJECT_DATA 배열에서 객체 제거**
2. **ID 재정렬** (선택적)

---

## 6. 다국어 지원 준비

### 6.1 현재 상태

- 한국어 고정
- 하드코딩된 텍스트

### 6.2 향후 계획

1. **react-i18next 설치**
```bash
npm install react-i18next i18next
```

2. **locales 파일 생성**
```
src/
├── locales/
│   ├── ko.json  # 한국어
│   └── en.json  # 영어
```

3. **텍스트 치환**
```javascript
// Before
<h2>Recent Projects</h2>

// After
import { useTranslation } from 'react-i18next';
const { t } = useTranslation();
<h2>{t('projects.title')}</h2>
```

---

## 7. 콘텐츠 작성 가이드라인

### 7.1 문장 길이 권장

| 요소 | 권장 길이 |
|------|----------|
| 한 줄 요약 (summary) | 150자 이내 |
| 설명 문단 (context) | 300자 이내 |
| 리스트 항목 (role, approach) | 80자 이내 |
| 한 문장 요약 (oneLiner) | 200자 이내 |

### 7.2 톤 앤 매너

1. **1인칭 사용**
   - ✅ "저는 글로벌 서비스 운영 경험을 바탕으로..."
   - ❌ "본인은...", "그는..."

2. **능동태 우선**
   - ✅ "설계했습니다", "구축했습니다"
   - ❌ "설계되었습니다", "구축되었습니다"

3. **구체적 수치 포함**
   - ✅ "Revenue +208%", "32KB", "651줄"
   - ❌ "많은", "빠른", "효율적인" (단독 사용)

### 7.3 금지 사항

❌ **피해야 할 표현**:
1. 과장된 표현
   - "세계 최고", "혁명적", "획기적인"
2. 모호한 표현
   - "많은", "빠른", "효율적인" (단독 사용)
   - "좋은", "나쁜" (구체적 설명 없이)
3. 기술 용어 남발
   - 대상 독자(채용 담당자, PM)를 고려

✅ **권장 표현**:
1. 정량적 목표
   - "Revenue +208% 달성"
   - "번들 사이즈 500KB → 300KB 감소"
2. 구체적 행동
   - "KPI 기반 운영 전략 수립"
   - "L10N 흐름 정리 및 QA 기준 수립"
3. 결과 중심
   - "재작업 비용 감소"
   - "운영 리스크 최소화"

---

## 8. 프로젝트 데이터 예시

### 8.1 현재 프로젝트 (참고용)

#### 프로젝트 1: AA1 RU Live Ops

- **ID**: 1
- **카테고리**: Live Ops Strategy
- **상태**: Live / Ongoing
- **핵심 성과**: Revenue +208%
- **색상**: `bg-[#FF2E00]` (레드)

#### 프로젝트 2: AA1 NAEU Ops

- **ID**: 2
- **카테고리**: Risk Management
- **상태**: Closed
- **핵심 성과**: End-to-End Ops
- **색상**: `bg-[#3B27BA]` (퍼플)

#### 프로젝트 3: TTS Pipeline

- **ID**: 3
- **카테고리**: AI Operations
- **상태**: Production
- **핵심 성과**: Efficiency & Quality
- **색상**: `bg-black` (블랙)

#### 프로젝트 4: Auto & Tooling

- **ID**: 4
- **카테고리**: Internal Tools
- **상태**: Internal Tooling
- **핵심 성과**: Time Saving
- **색상**: `bg-[#FF2E00]` (레드)

---

## 9. Footer 연도 동적 변경

### 9.1 현재 코드 ([641](src/App.jsx#L641))

```javascript
<span>© 2026 Helen Kim Portfolio.</span>
```

### 9.2 수정 권장

```javascript
<span>© {new Date().getFullYear()} Helen Kim Portfolio.</span>
```

이렇게 하면 매년 자동으로 연도가 업데이트됩니다.

**현재는 2026으로 고정**: 포트폴리오 제작 시점 명시용

---

## 10. 참고 자료

- [App.jsx](src/App.jsx) - 모든 콘텐츠가 위치한 메인 파일
- [ARCHITECTURE.md](ARCHITECTURE.md) - 구조 및 컴포넌트 설명
- [REVIEW.md](REVIEW.md) - 수정 체크리스트
- [React 공식 문서](https://react.dev) - React 사용법

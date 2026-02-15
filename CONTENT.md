# Content Management Guide

> 포트폴리오 콘텐츠 업데이트 가이드
> 작성일: 2026-02-15

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
| 블랙 | `#000000` | `bg-black` | 프로젝트 3 |
| 레드 | `#FF2E00` | `bg-[#FF2E00]` | 프로젝트 1, 4 |
| 퍼플 | `#3B27BA` | `bg-[#3B27BA]` | 프로젝트 2 |
| 커스텀 | `#YOUR_HEX` | `bg-[#YOUR_HEX]` | 새 프로젝트 |

---

## 2. 섹션별 콘텐츠 위치

| 섹션 | 라인 | 주요 콘텐츠 |
|------|------|------------|
| Hero | [436-492](src/App.jsx#L436-L492) | 타이틀, 자기소개, Summary 카드 |
| Proof | [495-519](src/App.jsx#L495-L519) | 4개 역량 카드 (title, desc) |
| Projects | [522-542](src/App.jsx#L522-L542) | PROJECT_DATA 렌더링 |
| Capabilities | [545-579](src/App.jsx#L545-L579) | 3개 기둥 (Live Ops, TTS, Automation) |
| About | [582-608](src/App.jsx#L582-L608) | 자기소개 문구, Working Style |
| Contact | [611-636](src/App.jsx#L611-L636) | CTA 버튼, Footer |

---

## 3. 텍스트 업데이트 체크리스트

### 3.1 Hero Section

- [ ] **타이틀**: "HELEN KIM" ([447](src/App.jsx#L447))
- [ ] **서브 타이틀** ([452-454](src/App.jsx#L452-L454))
  ```javascript
  글로벌 서비스 운영에서 자동화까지,
  <span className="text-[#FF2E00]">실행으로 성과를 만드는 PM</span>
  ```
- [ ] **Summary 카드** ([466-489](src/App.jsx#L466-L489))
  - ROLE ([474](src/App.jsx#L474))
  - STRENGTHS ([478](src/App.jsx#L478))
  - KEYWORDS ([484](src/App.jsx#L484))

### 3.2 Proof Section

- [ ] **ProofCard 4개** ([502-517](src/App.jsx#L502-L517))
  - Card 1: Global Live Ops
  - Card 2: L10N & Content
  - Card 3: TTS Pipeline
  - Card 4: Automation

**수정 방법**:
```javascript
<ProofCard
  index={0}
  title="새 타이틀"
  desc="새 설명"
/>
```

### 3.3 Capabilities Section

- [ ] **Pillar 1**: Live Ops & Partners ([550-557](src/App.jsx#L550-L557))
- [ ] **Pillar 2**: TTS & Content Pipeline ([560-567](src/App.jsx#L560-L567))
- [ ] **Pillar 3**: Automation & Data Workflow ([570-577](src/App.jsx#L570-L577))

### 3.4 About Section

- [ ] **메인 문구** ([586-587](src/App.jsx#L586-L587))
  ```javascript
  운영을 '사람의 노력'으로만 유지하지 않고,
  <span className="text-gray-400">시스템으로 재현 가능하게 만드는 데 집중합니다.</span>
  ```
- [ ] **설명** ([592-594](src/App.jsx#L592-L594))
- [ ] **Working Style 태그** ([599-604](src/App.jsx#L599-L604))
  - Data-informed decisions
  - Clear ownership
  - QA-first mindset
  - Automate what repeats

### 3.5 Contact Section

- [ ] **헤드라인** ([612-614](src/App.jsx#L612-L614))
  ```javascript
  Let's build <span className="text-[#FF2E00]">scalable operations</span> and AI-ready workflows.
  ```
- [ ] **설명** ([615-617](src/App.jsx#L615-L617))
- [ ] **Footer** ([632-633](src/App.jsx#L632-L633))

---

## 4. 연락처 정보 업데이트

### 4.1 위치

| 위치 | 라인 | 버튼 |
|------|------|------|
| Sidebar | [166-169](src/App.jsx#L166-L169) | Download CV |
| Hero | [460-462](src/App.jsx#L460-L462) | Download CV |
| Contact | [620-622](src/App.jsx#L620-L622) | Email Me |
| Contact | [623-625](src/App.jsx#L623-L625) | LinkedIn Profile |
| Contact | [626-628](src/App.jsx#L626-L628) | Download CV |

### 4.2 수정 사항

#### Email 연결

**현재** ([620-622](src/App.jsx#L620-L622)):
```javascript
<button className="bg-[#3B27BA] px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
  Email Me
</button>
```

**수정 후**:
```javascript
<button
  onClick={() => window.location.href = 'mailto:your-email@example.com'}
  className="bg-[#3B27BA] px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
>
  Email Me
</button>
```

#### LinkedIn 연결

**현재** ([623-625](src/App.jsx#L623-L625)):
```javascript
<button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
  LinkedIn Profile
</button>
```

**수정 후**:
```javascript
<button
  onClick={() => window.open('https://linkedin.com/in/yourprofile', '_blank')}
  className="bg-white text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
>
  LinkedIn Profile
</button>
```

#### CV 다운로드

**현재** ([166-169](src/App.jsx#L166-L169)):
```javascript
<button className="flex items-center justify-between bg-black text-white text-xs px-3 py-2 rounded-lg hover:bg-[#FF2E00] transition-colors">
  <span>Download CV</span>
  <Download size={12} />
</button>
```

**수정 후**:
```javascript
<a href="/helen-kim-cv.pdf" download>
  <button className="flex items-center justify-between bg-black text-white text-xs px-3 py-2 rounded-lg hover:bg-[#FF2E00] transition-colors">
    <span>Download CV</span>
    <Download size={12} />
  </button>
</a>
```

**파일 위치**: `/public/helen-kim-cv.pdf` (생성 필요)

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

### 9.1 현재 코드 ([632](src/App.jsx#L632))

```javascript
<span>© 2026 Helen Kim Portfolio.</span>
```

### 9.2 수정 후

```javascript
<span>© {new Date().getFullYear()} Helen Kim Portfolio.</span>
```

이렇게 하면 매년 자동으로 연도가 업데이트됩니다.

---

## 10. 참고 자료

- [App.jsx](src/App.jsx) - 모든 콘텐츠가 위치한 메인 파일
- [ARCHITECTURE.md](ARCHITECTURE.md) - 구조 및 컴포넌트 설명
- [REVIEW.md](REVIEW.md) - 수정 체크리스트
- [React 공식 문서](https://react.dev) - React 사용법

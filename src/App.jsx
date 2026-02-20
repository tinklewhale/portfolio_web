import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, Download, ChevronRight, ChevronDown, Check, Menu, FileText, ExternalLink, Image, ZoomIn } from 'lucide-react';

// --- Data: Projects & Case Studies ---
const PROJECT_DATA = [
  {
    id: 1,
    title: "AA1 RU Live Ops",
    category: "Live Ops Strategy",
    status: "Live / Ongoing",
    tags: ["Live Ops", "KPI", "Event Strategy"],
    brand: "Revenue +208%",
    summary: "현지 유저 지표(MAU/매출)를 기반으로 이벤트·운영 전략을 재설계하고, 라이브 일정/BTS/현지화 이슈를 통합 관리해 매출 성과를 만들었습니다.",
    outcome: "Revenue +208% 성장",
    imageColor: "bg-[#50C878]",
    details: {
      oneLiner: "현지 유저 지표 기반으로 운영/이벤트 전략을 재설계하고, 일정·이슈·현지화를 통합 관리해 Revenue +208% 성과를 만들었습니다.",
      context: "러시아 서비스는 시장 특성과 유저 반응이 다르고, 라이브 이슈가 일정·콘텐츠·개발 이슈와 동시에 발생합니다. 빠른 의사결정과 추적 가능한 이슈 관리가 없으면 운영 비용이 급격히 증가합니다.",
      goalMetrics: [
        "Goal: 지표 기반 운영 전략으로 KPI 달성",
        "Metrics: Revenue, MAU/활성 지표, 운영 이슈 처리 리드타임"
      ],
      role: [
        "KPI/사업 전략 수립 및 이벤트 플래닝",
        "Live 일정/BTS 및 버전별 이슈 트래킹",
        "현지화 협의 및 개발 이슈 커뮤니케이션"
      ],
      approach: [
        "KPI 중심으로 우선순위를 고정하고 운영 플랜을 단일화했습니다.",
        "버전별 이슈를 한 흐름으로 묶어 공유/결정/실행의 지연을 줄였습니다."
      ],
      challenges: [
        { c: "현지 시장 맥락 차이로 인한 의사결정 변동", s: "지표 기반 기준을 선명히 하고, 실험-학습 루프를 빠르게 운영" },
        { c: "일정/BTS/이슈의 동시다발로 커뮤니케이션 비용 증가", s: "단일 트래킹 구조로 정리하여 추적성과 정합성 강화" }
      ],
      outcome: "Revenue +208% 달성 및 운영 리스크 감소",
      learning: "라이브 운영은 '더 열심히'가 아니라 지표–우선순위–협업 구조를 먼저 설계해야 속도와 품질이 함께 오른다는 것을 체득했습니다."
    }
  },
  {
    id: 2,
    title: "AA1 NAEU Ops",
    category: "Risk Management",
    status: "Closed",
    tags: ["Ops", "Royalty", "Risk Mgmt"],
    brand: "End-to-End Ops",
    summary: "서비스 지표·로열티·버그 리포트·현지화 협의·종료 계약까지 End-to-End로 정리하며 운영 리스크를 체계적으로 관리했습니다.",
    outcome: "운영/정산/계약 정합성 확보",
    imageColor: "bg-[#000000]",
    details: {
      oneLiner: "서비스 지표·로열티·버그 리포트·현지화 협의·종료 계약까지 End-to-End로 관리해 운영 리스크를 체계적으로 정리했습니다.",
      context: "글로벌 서비스 운영은 기능 운영뿐 아니라 정산/계약의 정합성까지 포함됩니다. 운영·정산·계약이 분리돼 움직이면 책임 경계가 흐려지고 리스크가 커집니다.",
      goalMetrics: [
        "Goal: 운영 리스크 최소화 및 정합성 확보",
        "Metrics: 로열티 정산 정확도, 이슈 추적성, 계약 종료 완료도"
      ],
      role: [
        "서비스 지표 분석 및 로열티 관리",
        "버그 리포트 운영 및 현지화 협의 지원",
        "종료 계약 진행"
      ],
      approach: [
        "운영/정산/이슈를 하나의 관리 흐름으로 엮어 추적성을 강화했습니다.",
        "버그 리포트는 영향 범위와 우선순위를 기준으로 정리해 커뮤니케이션 비용을 낮췄습니다."
      ],
      challenges: [
        { c: "운영과 정산/계약의 분리로 인한 누락/불일치", s: "단일 운영 체계로 묶어 변경 이력과 의사결정 근거를 남김" }
      ],
      outcome: "운영·정산·계약 전 구간의 정합성 강화 및 안정적 종료",
      learning: "이 경험은 IT기업에서도 유효한 End-to-End 리스크 매니지먼트 역량(정합성/추적성/커뮤니케이션)으로 확장 가능합니다."
    }
  },
  {
    id: 3,
    title: "TTS Pipeline",
    category: "AI Operations",
    status: "Production",
    tags: ["TTS", "L10N", "Unreal"],
    brand: "Efficiency & Quality",
    summary: "L10N 기반 대사 흐름을 정의하고 ElevenLabs 보이스로 생성한 TTS를 Unreal Editor에서 적용할 수 있도록 프로세스를 구축했습니다.",
    outcome: "재작업 비용 감소, 품질 확보",
    imageColor: "bg-black",
    details: {
      oneLiner: "L10N 기반 대사 흐름을 정리하고 ElevenLabs 보이스로 생성한 TTS를 Unreal Editor에서 적용·검수할 수 있도록 파이프라인을 구축했습니다.",
      context: "TTS는 생성 자체보다 데이터 정합성, 엔진 적용의 재현성, QA 기준의 일관성이 깨질 때 재작업 비용이 급증합니다.",
      goalMetrics: [
        "Goal: 재작업 최소화, 품질 게이트 정립",
        "Metrics: 제작/검수 리드타임, 재작업률, QA 이슈 발생률"
      ],
      role: [
        "TTS 제작 워크플로우 정의 및 제작/관리",
        "ElevenLabs 기반 생성 및 Unreal Editor 적용 운영",
        "QA 기준 수립 및 검수 운영"
      ],
      approach: [
        "'입력 데이터(L10N)'를 고정해 앞단 흔들림으로 인한 재작업을 줄였습니다.",
        "생성→적용→검수 단계별 체크포인트를 설계해 추적성과 품질을 확보했습니다."
      ],
      challenges: [
        { c: "데이터 변경이 잦아 재작업이 반복", s: "L10N 흐름과 검수 기준을 명문화해 변경 영향 범위를 통제" }
      ],
      outcome: "TTS 제작을 개별 작업이 아닌 프로덕션 운영으로 전환",
      learning: "AI 기능은 운영이 곧 품질입니다. 재현성·추적성·품질 게이트 관점으로 운영 체계를 잡았습니다."
    }
  },
  {
    id: 4,
    title: "Auto & Tooling",
    category: "Internal Tools",
    status: "Internal Tooling",
    tags: ["Automation", "Python", "SQL"],
    brand: "Time Saving",
    summary: "JQL 기반 주간보고 자동화 및 SQLite·Python(JSON)·PyQt 기반 검색 도구로 반복 업무 병목을 줄였습니다.",
    outcome: "수동 취합/검증 시간 절감",
    imageColor: "bg-[#50C878]",
    details: {
      oneLiner: "JQL 기반 주간보고 자동화와 SQLite/Python/PyQt 도구로 반복 업무 병목을 줄이고 데이터 검증 속도를 높였습니다.",
      context: "주간보고/데이터 검증은 사람이 직접 취합하면 누락/중복/버전 불일치가 발생해 의사결정 신뢰도를 떨어뜨립니다.",
      goalMetrics: [
        "Goal: 반복 업무 자동화 및 보고 신뢰도 향상",
        "Metrics: 취합 시간 절감, 누락률 감소, 검증 리드타임 단축"
      ],
      role: [
        "Jira 이슈를 JQL로 조회해 보고에 자동 반영되는 구조 설계",
        "SQLite 적재 + Python 처리 + PyQt UI로 탐색/검증 도구 설계"
      ],
      approach: [
        `반복 업무를 '사람 작업'에서 '시스템 작업'으로 전환하는 기준을 세웠습니다.`,
        "데이터 탐색/검증 UI를 단순화하고 검색 기준을 표준화했습니다."
      ],
      challenges: [
        { c: "보고용 데이터가 흩어져 있어 취합 비용 증가", s: "단일 조회(JQL)와 자동 반영으로 소스 오브 트루스를 고정" }
      ],
      outcome: "수동 취합/정리 시간 절감 및 데이터 검증 속도 향상",
      learning: "PM이 병목을 발견하면 자동화/툴링으로 실제 시간을 절약하는 결과를 만들어야 조직의 속도가 올라갑니다."
    }
  }
];

// --- Data: Side Projects ---
const SIDE_PROJECT_DATA = [
  {
    id: 'tools',
    category: '01',
    title: '업무용 툴',
    items: [
      {
        id: 'tool-1',
        title: '인게임 NPC 통합 정보 확인 툴 (시각화)',
        description: [
          'NPC와 몬스터의 위치 및 수량을 맵에 표기해주는 검색 기능',
          'NPC 별 보유 대사를 취합하여 보여주는 기능',
          '특정 key값을 검색하면 해당 키 값에 연결되어있는 대사, NPC 정보, 좌표값, 음성 연결 여부를 표기해주는 기능'
        ],
        image: null,
        images: ['/npc-search-tool.png', '/l10n-data-searching.png'],
      },
      {
        id: 'tool-2',
        title: 'NPC 대사 정보 자동 갱신 툴',
        summary: '게임 개발 과정에서 발생하는 파편화된 NPC 관련 데이터를 하나로 통합하고, 분석하여, 사람이 보기 좋은 형태로 가공하는 자동화 도구',
        description: [
          '데이터 통합: 여러 곳에 흩어져 있는 대사(Dialogue, Caption, CutScenePreset), NPC 정보, 음성 정보, 번역/텍스트 정보 등 수많은 CSV 파일을 하나의 데이터베이스로 불러와 통합 후, 인게임 대사 발화 순서대로 정렬하여 볼 수 있도록 함',
          'NPC별 대사량 집계: 어떤 NPC가 얼마나 많은 대사를 가지고 있는지 종류별로 집계하여 NPC의 중요도 파악 및 성우 녹음 대상 선정 등 기획 업무 지원',
          '데이터 무결성 검증: 대사와 NPC 정보의 올바른 연결 확인, L10N key와 실제 대사 출처 교차 검증, 음성 파일 존재 여부 확인 및 대체 대사 탐색',
          '자동화 및 편의 기능: 수작업 취합/분석 시간 절감, 인간형/몬스터형/voice_file 등 기준별 분류 엑셀 시트 생성, 핵심 정보 자동 매칭 기능'
        ],
        techNote: 'SQLite 인메모리(in-memory) 데이터베이스 활용 — 스크립트 실행 시마다 메모리상에 임시 DB를 생성하여 CSV 파일들을 테이블로 불러와 사용',
        image: null,
        images: ['/united_lines1.png', '/united_lines2.png'],
      }
    ]
  },
  {
    id: 'content',
    category: '02',
    title: '콘텐츠',
    items: [
      {
        id: 'content-1',
        title: '콘텐츠 포트폴리오',
        description: ['Notion 기반 콘텐츠 포트폴리오'],
        url: 'https://satisfying-substance-8c4.notion.site/30ba0a7687f9802f92f6eda12ada5c3e?source=copy_link',
      }
    ]
  },
  {
    id: 'project',
    category: '03',
    title: '프로젝트',
    items: [
      {
        id: 'project-1',
        title: '친구와 함께하는 뽀모도로',
        description: [
          '뽀모도로 타이머에 RPG 라이트 요소를 결합한 생산성 웹앱입니다. 집중 세션(25분)을 완료하면 코인과 아이템 박스를 획득하고, 가챠·합성 시스템으로 배경·악세서리·스킨 등 21종의 아이템을 수집해 고양이·여우 캐릭터를 꾸밀 수 있습니다.',
          'Supabase Realtime을 활용한 친구방 기능으로 최대 10명이 실시간으로 집중 현황과 아바타를 공유하며 함께 공부할 수 있고, 오늘의 집중 시간 기준 실시간 랭킹도 제공합니다. 로그인 시 클라우드 자동 동기화, 비로그인 게스트 플레이도 지원합니다.',
          '기술스택: React 19 · TypeScript 5.9 · Vite 7 · Zustand · Framer Motion · Supabase (Auth + Postgres + Realtime)'
        ],
        url: 'https://cute-pomodoro-sigma.vercel.app/',
        images: ['/pomo1.png', '/pomo2.png', '/pomo3.png', '/pomo4.png']
      },
      {
        id: 'project-2',
        title: '여성용 제품 홍보용 웹 제작',
        description: ['마케팅을 위한 콘텐츠 구성, 디자인 및 배포까지 1인 진행'],
        url: 'https://rituallywebybti.vercel.app/',
      }
    ]
  }
];

// --- Components ---

// 1. Navigation Sidebar
const Sidebar = ({ activeSection }) => {
  const menuItems = [
    { id: 'hero', label: 'Home', color: 'bg-[#F3F0E7]', text: 'text-black' },
    { id: 'proof', label: 'Core Competencies', color: 'bg-black', text: 'text-white' },
    { id: 'projects', label: 'Projects', color: 'bg-[#50C878]', text: 'text-white' },
    { id: 'skills', label: 'Skills', color: 'bg-[#F3F0E7]', text: 'text-black' },
    { id: 'sideprojects', label: 'Side Projects', color: 'bg-[#50C878]', text: 'text-white' },
    { id: 'about', label: 'About', color: 'bg-black', text: 'text-white' },
    { id: 'contact', label: 'Contact', color: 'bg-[#50C878]', text: 'text-white' },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hidden lg:flex flex-col fixed left-4 top-4 bottom-4 w-64 z-50 gap-2">
      <div className="bg-[#F3F0E7] p-4 rounded-xl mb-2 border-2 border-black/5 flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <span className="font-bold text-sm text-gray-500">Helen Kim</span>
          <span className="font-bold text-sm text-gray-500">PM</span>
        </div>
        <a href="/cv.pdf" download="2026_김헬렌 이력서.pdf" className="flex items-center justify-between bg-black text-white text-xs px-3 py-2 rounded-lg hover:bg-[#50C878] transition-colors">
          <span>Download CV</span>
          <Download size={12} />
        </a>
        <a href="/career_description.pdf" download="2026.02_김헬렌 경력기술서.pdf" className="flex items-center justify-between bg-black text-white text-xs px-3 py-2 rounded-lg hover:bg-[#50C878] transition-colors">
          <span>Career Description</span>
          <FileText size={12} />
        </a>
      </div>

      <div className="flex-1 flex flex-col gap-2 overflow-y-auto no-scrollbar">
        {menuItems.map((item, index) => (
          <motion.button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`
              relative p-6 rounded-xl text-left transition-all duration-500 ease-out
              ${item.color} ${item.text}
              ${activeSection === item.id ? 'flex-[2]' : 'flex-1'}
              hover:flex-[1.5] group overflow-hidden border border-black/5
            `}
            layout
          >
            <span className="absolute top-4 left-4 text-xs font-mono opacity-60">0{index}</span>
            <span className={`
              absolute bottom-4 left-4 text-xl font-bold tracking-tight
              transition-transform duration-300
              ${activeSection === item.id ? 'scale-110 origin-bottom-left' : ''}
            `}>
              {item.label}
            </span>

            {activeSection === item.id && (
              <motion.div
                layoutId="activeDot"
                className={`absolute top-4 right-4 w-2 h-2 rounded-full ${item.text === 'text-white' ? 'bg-white' : 'bg-[#50C878]'}`}
              />
            )}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

// 2. Project Card
const ProjectCard = ({ project, onClick, colSpan = "col-span-1" }) => {
  return (
    <motion.div
      layoutId={`card-${project.id}`}
      onClick={() => onClick(project)}
      className={`relative group rounded-3xl overflow-hidden cursor-pointer ${colSpan} h-[450px] border border-black/10`}
      whileHover={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className={`absolute inset-0 bg-[#F3F0E7] transition-colors duration-500 group-hover:bg-opacity-90`} />

      {/* Content */}
      <div className="relative h-full p-8 flex flex-col justify-between text-black z-10">
        <div className="flex justify-between items-start">
          <div className="flex gap-2">
            <span className="px-3 py-1 border border-black/20 rounded-full text-xs backdrop-blur-md bg-white/40">
              {project.status}
            </span>
            {project.tags.slice(0, 2).map((tag, i) => (
              <span key={i} className="px-3 py-1 border border-black/20 rounded-full text-xs backdrop-blur-md hidden md:inline-block">
                {tag}
              </span>
            ))}
          </div>
          <motion.div className="bg-black text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            <ArrowRight size={16} />
          </motion.div>
        </div>

        <div>
          <h3 className="text-4xl font-bold mb-4 leading-none">{project.title}</h3>
          <p className="text-black/80 text-sm mb-4 line-clamp-2 leading-relaxed">
            {project.summary}
          </p>
          <div className="border-t border-black/20 pt-4 mt-4">
            <p className="font-mono text-xs opacity-60 mb-1">OUTCOME</p>
            <p className="text-xl font-bold text-[#50C878] bg-black/80 w-fit px-2 py-1 rounded inline-block">
              {project.outcome}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// 3. Project Detail Modal
const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        layoutId={`card-${project.id}`}
        className="bg-[#F3F0E7] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header (Colored) */}
        <div className={`${project.imageColor} p-8 md:p-12 text-white relative shrink-0`}>
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 bg-black/20 hover:bg-black/40 rounded-full transition-colors"
          >
            <X size={24} />
          </button>

          <div className="mb-6 flex flex-wrap gap-2">
            <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-mono">{project.category}</span>
            <span className="bg-black/20 px-3 py-1 rounded-full text-sm font-mono">{project.status}</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">{project.title}</h2>
          <p className="text-xl md:text-2xl opacity-90 font-light leading-relaxed max-w-2xl">
            {project.details.oneLiner}
          </p>
        </div>

        {/* Content Body */}
        <div className="p-8 md:p-12 space-y-12 text-black">

          {/* 1. Context & Goal */}
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="font-bold text-lg mb-4 text-[#000000] flex items-center gap-2"><ChevronRight size={16} /> Context</h4>
              <p className="leading-relaxed opacity-80">{project.details.context}</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-black/5 shadow-sm">
              <h4 className="font-bold text-lg mb-4 text-[#000000]">Goal & Metrics</h4>
              <ul className="space-y-2">
                {project.details.goalMetrics.map((item, i) => (
                  <li key={i} className="flex gap-2 items-start text-sm">
                    <div className="w-1.5 h-1.5 bg-[#50C878] rounded-full mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 2. My Role & Approach */}
          <div>
            <h3 className="text-2xl font-bold mb-6 border-b-2 border-black/10 pb-2">My Role & Approach</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-mono text-sm opacity-50 mb-3">MY ROLE</h4>
                <ul className="space-y-2">
                  {project.details.role.map((role, i) => (
                    <li key={i} className="flex gap-2 items-center font-medium">
                      <Check size={16} className="text-[#000000]" /> {role}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-mono text-sm opacity-50 mb-3">APPROACH</h4>
                <ul className="space-y-3">
                  {project.details.approach.map((app, i) => (
                    <li key={i} className="bg-white p-3 rounded-lg border border-black/5 text-sm">
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 3. Challenges & Solutions */}
          <div>
            <h3 className="text-2xl font-bold mb-6 border-b-2 border-black/10 pb-2">Challenges & Solutions</h3>
            <div className="space-y-4">
              {project.details.challenges.map((cs, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-4 p-4 rounded-xl bg-gray-100">
                  <div className="flex-1">
                    <span className="text-xs font-bold text-[#50C878] block mb-1">CHALLENGE</span>
                    <p className="text-sm font-medium">{cs.c}</p>
                  </div>
                  <div className="hidden md:block w-px bg-black/10" />
                  <div className="flex-1">
                    <span className="text-xs font-bold text-[#000000] block mb-1">SOLUTION</span>
                    <p className="text-sm">{cs.s}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 4. Outcome & Learning */}
          <div className="bg-black text-white p-8 rounded-2xl">
            <div className="mb-8">
              <h4 className="font-mono text-[#50C878] mb-2">FINAL OUTCOME</h4>
              <p className="text-3xl font-bold">{project.details.outcome}</p>
            </div>
            <div>
              <h4 className="font-mono opacity-60 mb-2">LEARNINGS</h4>
              <p className="text-white/80 leading-relaxed italic">
                "{project.details.learning}"
              </p>
            </div>
          </div>
        </div>

      </motion.div>
    </motion.div>
  );
};

// 4. Proof Card Component
const ProofCard = ({ title, desc, index }) => (
  <div className="bg-white p-6 rounded-2xl border border-black/5 hover:border-black transition-colors flex flex-col justify-between min-h-[180px]">
    <div>
      <span className="font-mono text-xs opacity-40 mb-2 block">0{index + 1} / Proof</span>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
    </div>
    <p className="text-sm text-gray-600 leading-relaxed">{desc}</p>
  </div>
);

// 5. Side Project - iframe preview with fallback
const IframePreview = ({ url }) => {
  const [iframeFailed, setIframeFailed] = useState(false);

  if (iframeFailed || !url) {
    return (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white px-4 py-3 rounded-xl transition-colors text-sm font-bold"
      >
        <ExternalLink size={16} />
        새 창에서 보기
      </a>
    );
  }

  return (
    <div className="relative w-full rounded-xl overflow-hidden border border-white/20 bg-black/20">
      <div className="aspect-video">
        <iframe
          src={url}
          title="Preview"
          className="w-full h-full"
          sandbox="allow-scripts allow-same-origin allow-popups"
          onError={() => setIframeFailed(true)}
          onLoad={(e) => {
            try {
              // If we can't access contentWindow, iframe might be blocked
              const doc = e.target.contentDocument;
              if (!doc) setIframeFailed(true);
            } catch {
              // Cross-origin — iframe loaded but we can't inspect it, which is fine
            }
          }}
        />
      </div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-2 right-2 bg-black/60 hover:bg-black/80 text-white p-1.5 rounded-lg transition-colors"
      >
        <ExternalLink size={14} />
      </a>
    </div>
  );
};

// 6. Side Project Detail Content
const SideItemDetail = ({ item, onImageClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: 'auto' }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="overflow-hidden"
    >
      <div className="pt-4 pb-2 space-y-4">
        {/* Summary if exists */}
        {item.summary && (
          <p className="text-white/90 text-sm leading-relaxed bg-white/10 p-4 rounded-xl">
            {item.summary}
          </p>
        )}

        {/* Description list */}
        <ul className="space-y-2">
          {item.description.map((desc, i) => (
            <li key={i} className="flex gap-2 items-start text-sm text-white/80">
              <div className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 shrink-0" />
              <span>{desc}</span>
            </li>
          ))}
        </ul>

        {/* Tech note if exists */}
        {item.techNote && (
          <div className="bg-black/30 p-3 rounded-lg text-xs text-white/60 font-mono">
            {item.techNote}
          </div>
        )}

        {/* Images */}
        {item.images && (
          <div className="flex flex-col gap-4">
            {item.images.map((imgSrc, index) => (
              <div
                key={index}
                className="relative w-full rounded-xl overflow-hidden border border-white/20 cursor-pointer group"
                onClick={() => onImageClick(imgSrc, item.title)}
              >
                <img src={imgSrc} alt={`${item.title} ${index + 1}`} className="w-full h-auto object-contain" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                  <ZoomIn size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Single Image */}
        {item.image && !item.images && (
          <div
            className="relative w-full rounded-xl overflow-hidden border border-white/20 cursor-pointer group"
            onClick={() => onImageClick(item.image, item.title)}
          >
            <img src={item.image} alt={item.title} className="w-full h-auto object-contain" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <ZoomIn size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        )}

        {/* Iframe or External Link */}
        {item.url && (
          <IframePreview url={item.url} />
        )}

        {/* Placeholder if nothing exists */}
        {!item.url && !item.images && !item.image && (
          <div className="w-full aspect-video rounded-xl border border-white/20 bg-black/20 flex flex-col items-center justify-center gap-2 text-white/40">
            <Image size={32} />
            <span className="text-xs">스크린샷 준비 중</span>
          </div>
        )}
      </div>
    </motion.div>
  );
};

// --- Main App Component ---

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedSideCategory, setExpandedSideCategory] = useState(null);
  const [expandedSideItem, setExpandedSideItem] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null); // { src, alt }

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

  return (
    <div className="bg-[#EAEAEA] min-h-screen font-sans selection:bg-[#50C878] selection:text-white">

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 p-4 z-50 flex justify-between items-center bg-[#F3F0E7] border-b border-black/10">
        <span className="font-bold text-xl">Helen Kim</span>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <div className="flex flex-col lg:flex-row">

        <Sidebar activeSection={activeSection} />

        <main className="flex-1 lg:ml-72 lg:mr-4 lg:py-4 flex flex-col gap-4">

          {/* 1. HERO Section */}
          <section id="hero" className="min-h-[90vh] bg-[#F3F0E7] rounded-3xl p-6 lg:p-12 flex flex-col relative overflow-hidden">
            <div className="flex justify-between items-start border-b-2 border-black/10 pb-6 mb-8 z-10">
              <span className="font-mono text-sm tracking-widest uppercase">Global PM Portfolio</span>
              <div className="flex gap-4 text-sm font-bold">
                <span>Seoul, KR</span>
                <span>Open to Work</span>
              </div>
            </div>

            <div className="relative z-10 flex-1 flex flex-col justify-center">
              <h1 className="text-[12vw] leading-[0.8] font-bold tracking-tighter text-black mb-4">
                HELEN<br />KIM
              </h1>

              <div className="grid lg:grid-cols-2 gap-12 mt-8">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
                    글로벌 서비스 운영에서 자동화까지,<br />
                    <span className="text-[#50C878]">실행으로 성과를 만드는 PM</span>
                  </h2>
                  <div className="flex flex-wrap gap-4">
                    <button onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })} className="bg-black text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">
                      View Projects
                    </button>
                    <a href="/cv.pdf" download="2026_김헬렌 이력서.pdf" className="border-2 border-black px-8 py-4 rounded-full font-bold hover:bg-black hover:text-white transition-colors flex gap-2 items-center">
                      Download CV <Download size={18} />
                    </a>
                    <a href="/career_description.pdf" download="2026.02_김헬렌 경력기술서.pdf" className="border-2 border-black px-8 py-4 rounded-full font-bold hover:bg-black hover:text-white transition-colors flex gap-2 items-center">
                      Career Description <FileText size={18} />
                    </a>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-2xl border border-black/5 shadow-xl rotate-1 hover:rotate-0 transition-transform duration-300">
                  <div className="flex justify-between items-center mb-6">
                    <span className="bg-[#000000] text-white px-3 py-1 rounded-full text-xs font-mono">SUMMARY</span>
                    <span className="text-4xl">👩🏻‍💻</span>
                  </div>
                  <ul className="space-y-4">
                    <li className="border-b border-black/5 pb-2">
                      <span className="block text-xs font-mono opacity-50 mb-1">ROLE</span>
                      <span className="text-xl font-bold">Global PM (Live Ops / Localization / TTS)</span>
                    </li>
                    <li className="border-b border-black/5 pb-2">
                      <span className="block text-xs font-mono opacity-50 mb-1">STRENGTHS</span>
                      <span className="font-medium">Cross-functional execution, Process design, Automation mindset</span>
                    </li>
                    <li>
                      <span className="block text-xs font-mono opacity-50 mb-1">KEYWORDS</span>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {['KPI', 'L10N', 'TTS', 'AI', 'SQL', 'Python'].map(tag => (
                          <span key={tag} className="bg-gray-100 px-2 py-1 rounded text-xs font-bold">{tag}</span>
                        ))}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* 2. PROOF Section (merged with Capabilities) */}
          <section id="proof" className="bg-black rounded-3xl p-8 lg:p-12 text-white">
            <div className="mb-12 border-b border-white/20 pb-4 flex justify-between items-end">
              <h2 className="text-4xl font-bold">Core Competencies</h2>
              <span className="font-mono text-sm text-[#50C878]">PROVEN TRACK RECORD</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Pillar 1: Live Ops & Partners */}
              <div className="p-8 border border-white/20 rounded-2xl bg-black hover:bg-white hover:text-black transition-colors group">
                <h3 className="text-3xl font-bold mb-4">Live Ops &<br />Partners</h3>
                <p className="text-sm opacity-60 group-hover:opacity-70 mb-6">KR↔RU/NAEU 다국가 운영 경험 기반으로 KPI 중심 운영과 이슈 관리를 수행했습니다.</p>
                <ul className="space-y-4 opacity-80 group-hover:opacity-100">
                  <li className="flex gap-2 text-sm font-medium border-b border-current pb-2">• KPI 기반 운영 전략 및 플래닝</li>
                  <li className="flex gap-2 text-sm font-medium border-b border-current pb-2">• BTS/이슈 트래킹 및 조율</li>
                  <li className="flex gap-2 text-sm font-medium">• 현지화 협의 및 커뮤니케이션</li>
                </ul>
              </div>

              {/* Pillar 2: TTS & Content Pipeline */}
              <div className="p-8 border border-white/20 rounded-2xl bg-black hover:bg-white hover:text-black transition-colors group">
                <h3 className="text-3xl font-bold mb-4">TTS & Content<br />Pipeline</h3>
                <p className="text-sm opacity-60 group-hover:opacity-70 mb-6">L10N 흐름을 정리하고 TTS 생성–엔진 적용–QA까지 운영 가능한 파이프라인으로 체계화했습니다.</p>
                <ul className="space-y-4 opacity-80 group-hover:opacity-100">
                  <li className="flex gap-2 text-sm font-medium border-b border-current pb-2">• L10N 기반 데이터 흐름 정리</li>
                  <li className="flex gap-2 text-sm font-medium border-b border-current pb-2">• ElevenLabs TTS 제작/운영</li>
                  <li className="flex gap-2 text-sm font-medium">• QA 기준 수립 및 검수</li>
                </ul>
              </div>

              {/* Pillar 3: Automation & Data Workflow */}
              <div className="p-8 border border-white/20 rounded-2xl bg-black hover:bg-white hover:text-black transition-colors group">
                <h3 className="text-3xl font-bold mb-4">Automation &<br />Data Workflow</h3>
                <p className="text-sm opacity-60 group-hover:opacity-70 mb-6">Jira/Confluence 보고 자동화 및 Python 기반 도구로 반복 업무 병목을 줄였습니다.</p>
                <ul className="space-y-4 opacity-80 group-hover:opacity-100">
                  <li className="flex gap-2 text-sm font-medium border-b border-current pb-2">• Jira/Confluence 리포팅 자동화</li>
                  <li className="flex gap-2 text-sm font-medium border-b border-current pb-2">• Python/SQL 기반 데이터 처리</li>
                  <li className="flex gap-2 text-sm font-medium">• 반복 업무 병목 제거 툴링</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 3. PROJECTS Section */}
          <section id="projects" className="min-h-screen bg-[#50C878] rounded-3xl p-8 lg:p-12 text-white">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
              <div>
                <span className="border border-white/30 px-3 py-1 rounded-full text-xs font-mono mb-4 inline-block">Selected Work</span>
                <h2 className="text-6xl md:text-8xl font-bold tracking-tight">Recent Projects</h2>
              </div>
              <div className="text-right hidden md:block">
                <p className="font-mono text-sm opacity-80">Click cards for details</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {PROJECT_DATA.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={setSelectedProject}
                />
              ))}
            </div>
          </section>

          {/* 3. SKILLS Section */}
          <section id="skills" className="bg-[#F3F0E7] rounded-3xl p-8 lg:p-12 text-black">
            <div className="mb-12 border-b border-black/10 pb-4 flex justify-between items-end">
              <h2 className="text-4xl font-bold">Skills & Tools</h2>
              <span className="font-mono text-sm text-[#50C878]">03 / Skills</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="p-8 border border-black/10 rounded-2xl bg-white hover:bg-black hover:text-white transition-colors group">
                <h3 className="text-2xl font-bold mb-3">Product Ops &<br />Collaboration</h3>
                <p className="text-sm opacity-60 group-hover:opacity-70 mb-6">이슈/일정/문서화를 정렬하고, 이해관계자와 빠르게 합의하기 위한 툴들</p>
                <div className="flex flex-wrap gap-2">
                  {['Jira', 'Redmine', 'Notion', 'MS Office', 'Figma'].map(tag => (
                    <span key={tag} className="bg-black/5 group-hover:bg-white/10 px-3 py-1.5 rounded-full text-xs font-bold transition-colors">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-8 border border-black/10 rounded-2xl bg-white hover:bg-black hover:text-white transition-colors group">
                <h3 className="text-2xl font-bold mb-3">Data &<br />Automation</h3>
                <p className="text-sm opacity-60 group-hover:opacity-70 mb-6">데이터 탐색과 자동화, 반복 업무 개선을 위한 기반 툴들</p>
                <div className="flex flex-wrap gap-2">
                  {['SQL', 'Git', 'AI Tools'].map(tag => (
                    <span key={tag} className="bg-black/5 group-hover:bg-white/10 px-3 py-1.5 rounded-full text-xs font-bold transition-colors">{tag}</span>
                  ))}
                </div>
              </div>

              {/* Card 3 */}
              <div className="p-8 border border-black/10 rounded-2xl bg-white hover:bg-black hover:text-white transition-colors group">
                <h3 className="text-2xl font-bold mb-3">Design &<br />Media Production</h3>
                <p className="text-sm opacity-60 group-hover:opacity-70 mb-6">시각 자료 제작, 프로토타이핑, 콘텐츠 편집을 위한 툴들</p>
                <div className="flex flex-wrap gap-2">
                  {['Blender', 'Photoshop', 'Illustrator', 'Premiere Pro', 'After Effects'].map(tag => (
                    <span key={tag} className="bg-black/5 group-hover:bg-white/10 px-3 py-1.5 rounded-full text-xs font-bold transition-colors">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Side Projects Section */}
          <section id="sideprojects" className="bg-[#50C878] rounded-3xl p-8 lg:p-12 text-white">
            <div className="mb-12 border-b border-white/20 pb-4 flex justify-between items-end">
              <h2 className="text-4xl font-bold">Side Projects</h2>
              <span className="font-mono text-sm text-white/80">PERSONAL WORK</span>
            </div>

            {/* Category Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {SIDE_PROJECT_DATA.map((cat) => (
                <div key={cat.id} className="flex flex-col gap-4">
                  {/* Category Card */}
                  <motion.button
                    onClick={() => {
                      if (expandedSideCategory === cat.id) {
                        setExpandedSideCategory(null);
                        setExpandedSideItem(null);
                      } else {
                        setExpandedSideCategory(cat.id);
                        setExpandedSideItem(null);
                      }
                    }}
                    className={`p-8 rounded-2xl text-left transition-all border border-white/20 ${
                      expandedSideCategory === cat.id
                        ? 'bg-white text-black'
                        : 'bg-black/20 hover:bg-black/30 text-white'
                    }`}
                    whileHover={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <span className="font-mono text-xs opacity-60 block mb-2">{cat.category}</span>
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl font-bold">{cat.title}</h3>
                      <motion.div
                        animate={{ rotate: expandedSideCategory === cat.id ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={20} />
                      </motion.div>
                    </div>
                  </motion.button>

                  {/* Expanded Items List */}
                  <AnimatePresence>
                    {expandedSideCategory === cat.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="space-y-3">
                          {cat.items.map((item) => (
                            <div key={item.id}>
                              {/* Item Button */}
                              <button
                                onClick={() => setExpandedSideItem(expandedSideItem === item.id ? null : item.id)}
                                className={`w-full text-left p-4 rounded-xl transition-all ${
                                  expandedSideItem === item.id
                                    ? 'bg-white/20 border border-white/30'
                                    : 'bg-black/20 hover:bg-black/30 border border-transparent'
                                }`}
                              >
                                <div className="flex justify-between items-center">
                                  <span className="font-bold text-sm">{item.title}</span>
                                  <motion.div
                                    animate={{ rotate: expandedSideItem === item.id ? 90 : 0 }}
                                    transition={{ duration: 0.2 }}
                                  >
                                    <ChevronRight size={16} />
                                  </motion.div>
                                </div>
                              </button>

                              {/* Item Detail */}
                              <AnimatePresence>
                                {expandedSideItem === item.id && (
                                  <SideItemDetail item={item} onImageClick={(src, alt) => setLightboxImage({ src, alt })} />
                                )}
                              </AnimatePresence>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </section>

          {/* 5. ABOUT Section */}
          <section id="about" className="bg-black rounded-3xl p-8 lg:p-20 text-white">
            <div className="max-w-4xl mx-auto">
              <span className="font-mono text-sm text-white/60 mb-6 block">About Helen</span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-12">
                운영을 '사람의 노력'으로만 유지하지 않고,<br />
                <span className="text-[#50C878]">시스템으로 재현 가능하게 만드는 데 집중합니다.</span>
              </h2>

              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <p className="text-lg leading-relaxed opacity-80">
                    저는 글로벌 서비스 운영 경험을 바탕으로, 여러 이해관계자 사이에서 문제를 정의하고 실행 가능한 프로세스와 도구로 해결을 만드는 PM입니다.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold mb-4 text-sm tracking-wide">WORKING STYLE</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {['Data-informed decisions', 'Clear ownership', 'QA-first mindset', 'Automate what repeats'].map((style, i) => (
                      <div key={i} className="bg-white/10 p-3 rounded-lg border border-white/10 text-sm font-bold text-center flex items-center justify-center">
                        {style}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 6. CONTACT Section */}
          <section id="contact" className="bg-[#50C878] rounded-3xl p-8 lg:p-20 text-black text-center flex flex-col items-center justify-center min-h-[50vh]">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl">
              Let's build <span className="text-white">scalable operations</span> and AI-ready workflows.
            </h2>
            <p className="text-xl opacity-60 mb-12 max-w-2xl">
              프로젝트/제품의 운영 복잡도를 줄이고, 품질과 속도를 동시에 올리는 방법을 함께 만들고 싶습니다.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a href="mailto:hano9758@gmail.com" className="bg-white text-black border border-white/30 px-8 py-4 rounded-full font-bold hover:bg-black hover:text-white transition-colors">
                Email Me
              </a>
              <a href="https://www.linkedin.com/in/helenkim1201/" target="_blank" rel="noopener noreferrer" className="bg-white text-black border border-white/30 px-8 py-4 rounded-full font-bold hover:bg-black hover:text-white transition-colors">
                LinkedIn Profile
              </a>
              <a href="/cv.pdf" download="2026_김헬렌 이력서.pdf" className="border border-white/30 px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-colors flex gap-2 items-center">
                Download CV <Download size={18} />
              </a>
              <a href="/career_description.pdf" download="2026.02_김헬렌 경력기술서.pdf" className="border border-white/30 px-8 py-4 rounded-full font-bold hover:bg-white hover:text-black transition-colors flex gap-2 items-center">
                Career Description <FileText size={18} />
              </a>
            </div>

            <div className="mt-20 pt-8 border-t border-black/10 w-full flex justify-between items-end font-mono text-xs opacity-40">
              <span>© 2026 Helen Kim Portfolio.</span>
              <span>Based on Raw Materials Design.</span>
            </div>
          </section>

        </main>
      </div>

      {/* MODAL Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>

      {/* Image Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setLightboxImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setLightboxImage(null)}
            >
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

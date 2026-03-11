const quizDeck = [
  {
    id: 1,
    type: "short-answer",
    category: "Fill in the Blank",
    phrase: "walk you through",
    meaning: "단계별로 설명하다",
    question: "Let me ____ ___ _______ the payroll process step by step.",
    hint: "뜻: 단계별로 설명하다",
    answer: "walk you through",
    explanation: "예문 전체: Let me walk you through the payroll process step by step."
  },
  {
    id: 2,
    type: "short-answer",
    category: "Fill in the Blank",
    phrase: "paid",
    meaning: "급여를 받는",
    question: "Those ____ on the 10th should submit their timesheets by the 5th.",
    hint: "뜻: 급여를 받는",
    answer: "paid",
    explanation: "예문 전체: Those paid on the 10th should submit their timesheets by the 5th."
  },
  {
    id: 3,
    type: "short-answer",
    category: "Fill in the Blank",
    phrase: "as part of",
    meaning: "일환으로, 일부로서",
    question: "__ ____ __ the review, we double-check all attendance records.",
    hint: "뜻: 일환으로, 일부로서",
    answer: "as part of",
    explanation: "예문 전체: As part of the review, we double-check all attendance records."
  },
  {
    id: 4,
    type: "short-answer",
    category: "Fill in the Blank",
    phrase: "select",
    meaning: "선정하다",
    question: "Each month, we ______ who’s going to receive payroll based on eligibility.",
    hint: "뜻: 선정하다",
    answer: "select",
    explanation: "예문 전체: Each month, we select who’s going to receive payroll based on eligibility."
  },
  {
    id: 5,
    type: "short-answer",
    category: "Fill in the Blank",
    phrase: "key",
    meaning: "핵심의",
    question: "Our ___ values include transparency, ownership, and respect.",
    hint: "뜻: 핵심의",
    answer: "key",
    explanation: "예문 전체: Our key values include transparency, ownership, and respect."
  },
  {
    id: 6,
    type: "short-answer",
    category: "Fill in the Blank",
    phrase: "initial",
    meaning: "초기의",
    question: "We run an _______ calculation to estimate the total payroll cost.",
    hint: "뜻: 초기의",
    answer: "initial",
    explanation: "예문 전체: We run an initial calculation to estimate the total payroll cost."
  },
  {
    id: 7,
    type: "short-answer",
    category: "Fill in the Blank",
    phrase: "preliminary",
    meaning: "예비의, 초기의",
    question: "This is a ___________ report, so the numbers may change.",
    hint: "뜻: 예비의, 초기의",
    answer: "preliminary",
    explanation: "예문 전체: This is a preliminary report, so the numbers may change."
  },
  {
    id: 8,
    type: "short-answer",
    category: "Fill in the Blank",
    phrase: "retroactive",
    meaning: "소급의",
    question: "The ___________ payment will be included in next month’s paycheck.",
    hint: "뜻: 소급의",
    answer: "retroactive",
    explanation: "예문 전체: The retroactive payment will be included in next month’s paycheck."
  },
  {
    id: 9,
    type: "short-answer",
    category: "Fill in the Blank",
    phrase: "probation",
    meaning: "수습 기간",
    question: "During __________, employees receive more frequent performance check-ins.",
    hint: "뜻: 수습 기간",
    answer: "probation",
    explanation: "예문 전체: During probation, employees receive more frequent performance check-ins."
  },
  {
    id: 10,
    type: "short-answer",
    category: "Fill in the Blank",
    phrase: "prorated",
    meaning: "일할 계산된",
    question: "Your salary will be _________ because you started mid-month.",
    hint: "뜻: 일할 계산된",
    answer: "prorated",
    explanation: "예문 전체: Your salary will be prorated because you started mid-month."
  }
];

const kimGaYeonDeck = [
  {
    id: 1,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "full-blown",
    meaning: "본격적인, 완전한",
    question: "Many customers didn't have a need for a ____ _____ off roader.",
    hint: "뜻: 본격적인, 완전한",
    answer: "full-blown",
    explanation: "예문 전체: Many customers didn't have a need for a full-blown off roader."
  },
  {
    id: 2,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "mass market",
    meaning: "대중 시장",
    question: "We developed the RAV4 as a ____ ______ compact SUV.",
    hint: "뜻: 대중 시장",
    answer: "mass market",
    explanation: "예문 전체: We developed the RAV4 as a mass market compact SUV."
  },
  {
    id: 3,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "distinct",
    meaning: "뚜렷한, 차별화된",
    question: "It will have 3 ________ personalities that we describe as Core, Rugged, and Sport.",
    hint: "뜻: 뚜렷한, 차별화된",
    answer: "distinct",
    explanation: "예문 전체: It will have 3 distinct personalities that we describe as Core, Rugged, and Sport."
  },
  {
    id: 4,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "commitment to",
    meaning: "~에 대한 의지, 헌신",
    question: "It's another example of our __________ __ reducing carbon emissions.",
    hint: "뜻: ~에 대한 의지, 헌신",
    answer: "commitment to",
    explanation: "예문 전체: It's another example of our commitment to reducing carbon emissions."
  },
  {
    id: 5,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "as quickly as possible",
    meaning: "가능한 한 빠르게",
    question: "We want to reduce carbon emissions as much as possible, __ _______ __ ________.",
    hint: "뜻: 가능한 한 빠르게",
    answer: "as quickly as possible",
    explanation: "예문 전체: We want to reduce carbon emissions as much as possible, as quickly as possible."
  },
  {
    id: 6,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "bumps",
    meaning: "끌어올리다, 향상시키다",
    question: "The new 5th generation Hybrid system ______ total horsepower to 236.",
    hint: "뜻: 끌어올리다, 향상시키다",
    answer: "bumps",
    explanation: "예문 전체: The new 5th generation Hybrid system bumps total horsepower to 236."
  },
  {
    id: 7,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "retaining",
    meaning: "유지하면서",
    question: "The system reaches 236 horsepower while still _________ excellent efficiency.",
    hint: "뜻: 유지하면서",
    answer: "retaining",
    explanation: "예문 전체: The new 5th generation Hybrid system bumps total horsepower to 236 while still retaining excellent efficiency."
  },
  {
    id: 8,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "high dampening adhesive",
    meaning: "고감쇠 접착제",
    question: "We've reduced road noise with ____ __________ adhesive.",
    hint: "뜻: 고감쇠 접착제",
    answer: "high dampening",
    explanation: "예문 전체: We've reduced road noise with high dampening adhesive."
  },
  {
    id: 9,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "handling",
    meaning: "핸들링, 조향 성능",
    question: "We've improved ________ with frame and suspension reinforcements.",
    hint: "뜻: 핸들링, 조향 성능",
    answer: "handling",
    explanation: "예문 전체: We've improved handling with frame and suspension reinforcements."
  },
  {
    id: 10,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "reinforcements",
    meaning: "보강, 강화",
    question: "We've improved handling with frame and suspension ______________.",
    hint: "뜻: 보강, 강화",
    answer: "reinforcements",
    explanation: "예문 전체: We've improved handling with frame and suspension reinforcements."
  }
];

const leeGeunNaDeck = [
  {
    id: 1,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "take ownership",
    meaning: "(업무/문제에 대해) 주인의식, 책임감을 가지다",
    question: "I decided to take _________ of this problem and lead the architectural revamp.",
    hint: "뜻: 주인의식, 책임감을 가지다",
    answer: "ownership",
    explanation: "예문 전체: I decided to take ownership of this problem and lead the architectural revamp."
  },
  {
    id: 2,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "shake things up",
    meaning: "(기존의 방식을 타파하고) 대대적으로 개편하다",
    question: "Our Home Screen is our highest-traffic entry point, so we really needed to ______ things ___.",
    hint: "뜻: 대대적으로 개편하다",
    answer: "shake things up",
    explanation: "예문 전체: Our Home Screen is our highest-traffic entry point, so we really needed to shake things up."
  },
  {
    id: 3,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "raise the bar",
    meaning: "기준(목표치)을 높이다",
    question: "We knew that applying band-aids wouldn't work anymore. We needed to _____ the ___.",
    hint: "뜻: 기준(목표치)을 높이다",
    answer: "raise the bar",
    explanation: "예문 전체: We knew that applying band-aids wouldn't work anymore. We needed to raise the bar."
  },
  {
    id: 4,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "scope creep",
    meaning: "프로젝트 범위가 통제 없이 계속 확장되는 현상",
    question: "We had a lot of feature requests coming in, but to avoid _____ _____, we stayed laser-focused.",
    hint: "뜻: 프로젝트 범위가 통제 없이 계속 확장되는 현상",
    answer: "scope creep",
    explanation: "예문 전체: We had a lot of feature requests coming in, but to avoid scope creep, we stayed laser-focused."
  },
  {
    id: 5,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "elephant in the room",
    meaning: "누구나 알고 있지만 언급하기 꺼려하는 명백하고 큰 문제",
    question: "But here was the ________ __ the room: despite high traffic, we were facing declining conversion rates.",
    hint: "뜻: 누구나 알고 있지만 언급하기 꺼려하는 큰 문제",
    answer: "elephant in the room",
    explanation: "예문 전체: But here was the elephant in the room: despite high traffic, we were facing declining conversion rates."
  },
  {
    id: 6,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "went back to the drawing board",
    meaning: "(계획이 실패하여) 처음부터 다시 시작하다, 설계하다",
    question: "To tackle this, we essentially went back to the ________ ______ and completely redesigned our data-fetching architecture.",
    hint: "뜻: 처음부터 다시 시작하다, 설계하다",
    answer: "drawing board",
    explanation: "예문 전체: To tackle this, we essentially went back to the drawing board and completely redesigned our data-fetching architecture."
  },
  {
    id: 7,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "technical levers",
    meaning: "(목표 달성을 위해) 기술적 수단과 방법",
    question: "I pulled several technical ______ here. In networking, we reduced redundant calls.",
    hint: "뜻: 목표 달성을 위한 기술적 수단과 방법",
    answer: "levers",
    explanation: "예문 전체: I pulled several technical levers here. In networking, we reduced redundant calls."
  },
  {
    id: 8,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "technical debt",
    meaning: "기술 부채",
    question: "_________ _____ is a direct business risk. It's not just an engineering complaint.",
    hint: "뜻: 기술 부채",
    answer: "technical debt",
    explanation: "예문 전체: Technical Debt is a direct business risk. It's not just an engineering complaint."
  },
  {
    id: 9,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "bottlenecks",
    meaning: "병목 현상, 진행을 가로막는 장애물",
    question: "Before we dive into the solutions, let's look at the ____________.",
    hint: "뜻: 병목 현상, 진행을 가로막는 장애물",
    answer: "bottlenecks",
    explanation: "예문 전체: Before we dive into the solutions, let's look at the bottlenecks."
  },
  {
    id: 10,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "churn",
    meaning: "이탈률, 고객 이탈",
    question: "We were facing declining conversion rates and increasing ______.",
    hint: "뜻: 이탈률, 고객 이탈",
    answer: "churn",
    explanation: "예문 전체: We were facing declining conversion rates and increasing churn."
  }
];

const kimWonMiDeck = [
  {
    id: 1,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "passenger belly capacity",
    meaning: "여객기 하부",
    question: "We are reviewing the available __________ ______ capacity on international routes.",
    hint: "뜻: 여객기 하부",
    answer: "passenger belly",
    explanation: "표현 전체: passenger belly capacity"
  },
  {
    id: 2,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "yield",
    meaning: "평균 운임 단가",
    question: "Our cargo ______ improved in the second half of the year.",
    hint: "뜻: 평균 운임 단가",
    answer: "yield",
    explanation: "표현 전체: yield"
  },
  {
    id: 3,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "fundamentally",
    meaning: "근본적으로",
    question: "The market has __________ changed compared to last year.",
    hint: "뜻: 근본적으로",
    answer: "fundamentally",
    explanation: "표현 전체: fundamentally"
  },
  {
    id: 4,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "proactive",
    meaning: "적극적으로",
    question: "We need to take a more _________ approach to customer communication.",
    hint: "뜻: 적극적으로",
    answer: "proactive",
    explanation: "표현 전체: proactive"
  },
  {
    id: 5,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "pricing integrity",
    meaning: "가격 원칙 유지",
    question: "Even in a difficult market, we must protect our _______ __________.",
    hint: "뜻: 가격 원칙 유지",
    answer: "pricing integrity",
    explanation: "표현 전체: pricing integrity"
  },
  {
    id: 6,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "diversification",
    meaning: "다양화, 다변화",
    question: "Portfolio ______________ remains one of our top priorities.",
    hint: "뜻: 다양화, 다변화",
    answer: "diversification",
    explanation: "표현 전체: diversification"
  },
  {
    id: 7,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "strategic direction",
    meaning: "전략적 방향(성)",
    question: "Today, I will walk you through our strategic __________ for 2026.",
    hint: "뜻: 전략적 방향(성)",
    answer: "direction",
    explanation: "예문 전체: Today, I will walk you through our strategic direction for 2026."
  },
  {
    id: 8,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "key challenges",
    meaning: "핵심 과제, 도전 요소",
    question: "We faced three key __________ throughout 2025.",
    hint: "뜻: 핵심 과제, 도전 요소",
    answer: "challenges",
    explanation: "예문 전체: We faced three key challenges throughout 2025."
  },
  {
    id: 9,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "milestones",
    meaning: "(중요) 이정표, 주요 성과, 단계",
    question: "Let me share the __________ we achieved in 2025.",
    hint: "뜻: (중요) 이정표, 주요 성과, 단계",
    answer: "milestones",
    explanation: "예문 전체: Let me share the milestones we achieved in 2025."
  },
  {
    id: 10,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "structural change",
    meaning: "구조적 변화",
    question: "We are now seeing __________ change in the market.",
    hint: "뜻: 구조적 변화",
    answer: "structural",
    explanation: "예문 전체: We are now seeing structural change in the market."
  }
];

const kimSeoYoonDeck = [
  {
    id: 1,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "minimum viable product",
    meaning: "최소 기능 제품, MVP",
    question: "After launching the app, the first step is to release a minimum viable ________ and observe how users interact with the core features.",
    hint: "뜻: 최소 기능 제품, MVP",
    answer: "product",
    explanation: "예문 전체: After launching the app, the first step is to release a minimum viable product (MVP) and observe how users interact with the core features."
  },
  {
    id: 2,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "validate",
    meaning: "검증하다",
    question: "The main objective at this stage is to ________ whether the system actually motivates users to start and complete tasks.",
    hint: "뜻: 검증하다",
    answer: "validate",
    explanation: "예문 전체: The main objective at this stage is to validate whether the system actually motivates users to start and complete tasks more consistently."
  },
  {
    id: 3,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "behavioral data",
    meaning: "행동 데이터",
    question: "Based on user feedback and __________ data, we plan to iterate on key aspects of the product.",
    hint: "뜻: 행동 데이터",
    answer: "behavioral",
    explanation: "예문 전체: Based on user feedback and behavioral data, we plan to iterate on key aspects of the product."
  },
  {
    id: 4,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "differentiate",
    meaning: "차별화하다",
    question: "A multiplayer or social interaction feature could definitely __________ the app from other productivity tools.",
    hint: "뜻: 차별화하다",
    answer: "differentiate",
    explanation: "예문 전체: A multiplayer or social interaction feature could definitely differentiate the app from other productivity tools."
  },
  {
    id: 5,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "gamification",
    meaning: "게이미피케이션",
    question: "Questify integrates routine building and __________ directly into the workflow to encourage users to actually start tasks.",
    hint: "뜻: 게이미피케이션",
    answer: "gamification",
    explanation: "예문 전체: Questify integrates routine building and gamification directly into the workflow to encourage users to actually start tasks."
  },
  {
    id: 6,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "sense of urgency",
    meaning: "긴박감",
    question: "The main reason we introduced gamification is to create a sense of ________.",
    hint: "뜻: 긴박감",
    answer: "urgency",
    explanation: "예문 전체: The main reason we introduced gamification is to create a sense of urgency."
  },
  {
    id: 7,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "reward-based progression system",
    meaning: "보상 기반 성장 시스템",
    question: "It also introduces a reward-based __________ system, where users gain experience and level up after completing tasks.",
    hint: "뜻: 보상 기반 성장 시스템",
    answer: "progression",
    explanation: "예문 전체: It also introduces a reward-based progression system, where users gain experience and level up after completing tasks."
  },
  {
    id: 8,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "short-form content platforms",
    meaning: "숏폼 콘텐츠 플랫폼",
    question: "Our initial marketing strategy focuses on short-form content __________ such as Instagram Reels, TikTok, and YouTube Shorts.",
    hint: "뜻: 숏폼 콘텐츠 플랫폼",
    answer: "platforms",
    explanation: "예문 전체: Our initial marketing strategy focuses on short-form content platforms such as Instagram Reels, TikTok, and YouTube Shorts."
  },
  {
    id: 9,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "session completion rate",
    meaning: "세션 완료율",
    question: "We plan to track several key metrics, including session completion ______, average focus duration, and daily active users.",
    hint: "뜻: 세션 완료율",
    answer: "rate",
    explanation: "예문 전체: We plan to track several key metrics, including session completion rate, average focus duration, daily active users, and habit retention over time."
  },
  {
    id: 10,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "daily active users",
    meaning: "일일 활성 사용자 수",
    question: "One of the key metrics we will track is daily active ______.",
    hint: "뜻: 일일 활성 사용자 수",
    answer: "users",
    explanation: "예문 전체: We plan to track several key metrics, including session completion rate, average focus duration, daily active users, and habit retention over time."
  }
];

const jeongHyeWonDeck = [
  {
    id: 1,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "proactive",
    meaning: "선제적인, 사전 대응의",
    question: "Today, I would like to talk about why _________ safety inspections are important.",
    hint: "뜻: 선제적인, 사전 대응의",
    answer: "proactive",
    explanation: "예문 전체: Today, I would like to talk about why proactive safety inspections are important."
  },
  {
    id: 2,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "inspection",
    meaning: "점검, 검사",
    question: "Proactive safety __________ is important because it prevents accidents before they happen.",
    hint: "뜻: 점검, 검사",
    answer: "inspection",
    explanation: "예문 전체: Proactive safety inspection is important because it prevents accidents before they happen."
  },
  {
    id: 3,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "workplace",
    meaning: "작업장",
    question: "No one should get injured at our __________.",
    hint: "뜻: 작업장",
    answer: "workplace",
    explanation: "예문 전체: No one should get injured at our workplace."
  },
  {
    id: 4,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "work suspension",
    meaning: "작업 중지",
    question: "If a serious accident happens, the government can order a work __________.",
    hint: "뜻: 작업 중지",
    answer: "suspension",
    explanation: "예문 전체: If a serious accident happens, the government can order a work suspension."
  },
  {
    id: 5,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "financial losses",
    meaning: "재정적 손실",
    question: "This can cause huge delays and financial ______.",
    hint: "뜻: 재정적 손실",
    answer: "losses",
    explanation: "예문 전체: This can cause huge delays and financial losses."
  },
  {
    id: 6,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "implement",
    meaning: "실행하다",
    question: "Now, I will explain how we can __________ proactive safety inspection at our site.",
    hint: "뜻: 실행하다",
    answer: "implement",
    explanation: "대본 표현 기반: How We Will Implement Proactive Safety Inspection"
  },
  {
    id: 7,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "visual materials",
    meaning: "시각 자료",
    question: "We will provide __________ training materials, such as pictures and videos, to help workers understand more easily.",
    hint: "뜻: 시각 자료",
    answer: "visual",
    explanation: "예문 전체: We will provide visual training materials, such as pictures and videos, to help workers understand more easily."
  },
  {
    id: 8,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "precautions",
    meaning: "예방 조치",
    question: "Through daily TBM meetings, we will review the day's safety __________ every morning.",
    hint: "뜻: 예방 조치",
    answer: "precautions",
    explanation: "예문 전체: Through daily TBM meetings, we will review the day's safety precautions and important points every morning."
  },
  {
    id: 9,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "regulation",
    meaning: "규정, 규제",
    question: "Under the Serious Accidents Punishment Act, safety has become a major issue because of stronger safety __________.",
    hint: "뜻: 규정, 규제",
    answer: "regulation",
    explanation: "표현 확장: safety regulation"
  },
  {
    id: 10,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "reminder",
    meaning: "상기시키는 것",
    question: "Daily TBM meetings can serve as a safety __________ for all workers before starting work.",
    hint: "뜻: 상기시키는 것",
    answer: "reminder",
    explanation: "표현 확장: safety reminder"
  }
];

const heoYoonHyeongDeck = [
  {
    id: 1,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "walk you through",
    meaning: "설명하다",
    question: "Let me briefly walk you ________ the study design.",
    hint: "뜻: 설명하다",
    answer: "through",
    explanation: "예문 전체: Let me briefly walk you through the study design."
  },
  {
    id: 2,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "dive into",
    meaning: "본론으로 들어가다",
    question: "Now let's ______ into the results.",
    hint: "뜻: 본론으로 들어가다",
    answer: "dive",
    explanation: "예문 전체: Now let's dive into the results."
  },
  {
    id: 3,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "wrap up",
    meaning: "마지막으로 정리하다",
    question: "Let me ______ up the key takeaway.",
    hint: "뜻: 마지막으로 정리하다",
    answer: "wrap",
    explanation: "예문 전체: Let me wrap up the key takeaway."
  },
  {
    id: 4,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "key takeaway",
    meaning: "핵심 메시지",
    question: "The key __________ is that influencer effectiveness varies by stage.",
    hint: "뜻: 핵심 메시지",
    answer: "takeaway",
    explanation: "예문 전체: The key takeaway is that influencer effectiveness varies by stage."
  },
  {
    id: 5,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "important part",
    meaning: "중요한 부분",
    question: "Here is the important ______ of the findings.",
    hint: "뜻: 중요한 부분",
    answer: "part",
    explanation: "예문 전체: Here is the important part of the findings."
  },
  {
    id: 6,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "I might be wrong",
    meaning: "내가 틀릴 수도 있지만",
    question: "I might be ______, but that assumption may not always hold true.",
    hint: "뜻: 내가 틀릴 수도 있지만",
    answer: "wrong",
    explanation: "예문 전체: I might be wrong, but that assumption may not always hold true."
  },
  {
    id: 7,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "research addresses",
    meaning: "이 연구가 다루는 질문",
    question: "This is the question this research tries to __________.",
    hint: "뜻: 이 연구가 다루다, 다루는 질문",
    answer: "address",
    explanation: "예문 전체: This is the question this research tries to address."
  },
  {
    id: 8,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "clearly stand out",
    meaning: "분명히 나타나다",
    question: "Chefs clearly stand ______ at the conversion stage.",
    hint: "뜻: 분명히 나타나다",
    answer: "out",
    explanation: "예문 전체: Chefs clearly stand out at the conversion stage."
  },
  {
    id: 9,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "remains underexplored",
    meaning: "아직 충분히 연구되지 않았다",
    question: "Cost-effectiveness remains ________________.",
    hint: "뜻: 아직 충분히 연구되지 않았다",
    answer: "underexplored",
    explanation: "예문 전체: Cost-effectiveness remains underexplored."
  },
  {
    id: 10,
    type: "short-answer",
    category: "Presentation Vocabulary",
    phrase: "a pattern emerges",
    meaning: "패턴이 나타나다",
    question: "A clear pattern __________ in the data.",
    hint: "뜻: 패턴이 나타나다",
    answer: "emerges",
    explanation: "예문 전체: A clear pattern emerges in the data."
  }
];

const teamQuizDecks = {
  "정주혜": quizDeck,
  "김가연": kimGaYeonDeck,
  "이근나": leeGeunNaDeck,
  "김원미": kimWonMiDeck,
  "김서윤": kimSeoYoonDeck,
  "정혜원": jeongHyeWonDeck,
  "허윤형": heoYoonHyeongDeck
};

const state = {
  currentIndex: 0,
  answered: false,
  selectedName: null,
  activeDeck: [],
  score: 0
};

const progressLabelEl = document.getElementById("progress-label");
const progressPercentEl = document.getElementById("progress-percent");
const progressFillEl = document.getElementById("progress-fill");
const deckStatusEl = document.getElementById("deck-status");
const homeBtnEl = document.getElementById("home-btn");
const profileScreenEl = document.getElementById("profile-screen");
const quizScreenEl = document.getElementById("quiz-screen");
const profileListEl = document.getElementById("profile-list");
const selectedNameEl = document.getElementById("selected-name");
const categoryBadgeEl = document.getElementById("category-badge");
const questionTextEl = document.getElementById("question-text");
const questionHintEl = document.getElementById("question-hint");
const optionsContainerEl = document.getElementById("options-container");
const answerFormEl = document.getElementById("answer-form");
const answerInputEl = document.getElementById("answer-input");
const hintBtnEl = document.getElementById("hint-btn");
const revealBtnEl = document.getElementById("reveal-btn");
const feedbackPanelEl = document.getElementById("feedback-panel");
const feedbackTitleEl = document.getElementById("feedback-title");
const feedbackAnswerEl = document.getElementById("feedback-answer");
const feedbackExplanationEl = document.getElementById("feedback-explanation");
const helperTextEl = document.getElementById("helper-text");
const nextBtnEl = document.getElementById("next-btn");
const backBtnEl = document.getElementById("back-btn");
const resultModalEl = document.getElementById("result-modal");
const resultTitleEl = document.getElementById("result-title");
const resultScoreEl = document.getElementById("result-score");
const resultMessageEl = document.getElementById("result-message");
const retryBtnEl = document.getElementById("retry-btn");
const closeModalBtnEl = document.getElementById("close-modal-btn");

function normalizeAnswer(value) {
  return (value || "")
    .trim()
    .toLowerCase()
    .replace(/[’']/g, "'")
    .replace(/\s+/g, " ");
}

function normalizeForComparison(value) {
  return normalizeAnswer(value).replace(/[^a-z0-9]/g, "");
}

function getEditDistance(source, target) {
  const rows = source.length + 1;
  const cols = target.length + 1;
  const dp = Array.from({ length: rows }, () => Array(cols).fill(0));

  for (let i = 0; i < rows; i += 1) dp[i][0] = i;
  for (let j = 0; j < cols; j += 1) dp[0][j] = j;

  for (let i = 1; i < rows; i += 1) {
    for (let j = 1; j < cols; j += 1) {
      const cost = source[i - 1] === target[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }

  return dp[source.length][target.length];
}

function isAcceptedAnswer(submitted, expected) {
  if (!submitted || !expected) return false;
  if (submitted === expected) return true;

  // Allow one small typo after removing spaces, hyphens, and case differences.
  const distance = getEditDistance(submitted, expected);
  return distance <= 1;
}

function getInitialHint(answer) {
  return (answer || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.charAt(0))
    .join(" · ");
}

function updateProgress() {
  const total = state.activeDeck.length;

  if (total === 0) {
    progressLabelEl.textContent = state.selectedName ? "0 / 0" : "대기 중";
    progressPercentEl.textContent = "0%";
    progressFillEl.style.width = "0%";
    deckStatusEl.textContent = state.selectedName
      ? `${state.selectedName} 퀴즈 준비 중`
      : "퀴즈 대기 중";
    return;
  }

  const current = Math.min(state.currentIndex + 1, total);
  const percent = Math.round((current / total) * 100);

  progressLabelEl.textContent = `${current} / ${total}`;
  progressPercentEl.textContent = `${percent}%`;
  progressFillEl.style.width = `${percent}%`;
  deckStatusEl.textContent = `${state.selectedName} · 총 ${total}문제`;
}

function showProfileScreen() {
  state.selectedName = null;
  state.activeDeck = [];
  state.currentIndex = 0;
  state.answered = false;
  state.score = 0;

  profileScreenEl.classList.remove("hidden");
  quizScreenEl.classList.add("hidden");
  resultModalEl.classList.add("hidden");
  resultModalEl.classList.remove("flex");
  updateProgress();
}

function showQuizScreen() {
  profileScreenEl.classList.add("hidden");
  quizScreenEl.classList.remove("hidden");
}

function createProfileButton(name) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = [
    "w-full rounded-[24px] border border-[#eadbc8] bg-[linear-gradient(180deg,#fffdf9_0%,#fbf4eb_100%)] px-5 py-5 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] transition",
    "hover:-translate-y-[1px] hover:border-[#d8c1a2] hover:shadow-[0_16px_36px_rgba(126,94,67,0.08)]"
  ].join(" ");
  button.innerHTML = `
    <span class="block text-xs font-bold uppercase tracking-[0.28em] text-latte">Team Member</span>
    <span class="mt-2.5 block text-[1rem] font-extrabold tracking-[-0.03em] text-cocoa sm:text-[1.1rem]">${name}</span>
    <span class="mt-2 block text-[14px] leading-6 text-latte">본인 이름을 눌러 퀴즈를 시작합니다.</span>
  `;
  button.addEventListener("click", () => selectProfile(name));
  return button;
}

function renderProfiles() {
  profileListEl.innerHTML = "";
  Object.keys(teamQuizDecks).forEach((name) => {
    profileListEl.appendChild(createProfileButton(name));
  });
}

function resetInteractionAreas() {
  optionsContainerEl.innerHTML = "";
  answerFormEl.classList.add("hidden");
  answerInputEl.value = "";
  answerInputEl.disabled = false;
  hintBtnEl.disabled = false;
  revealBtnEl.disabled = false;
  feedbackPanelEl.classList.add("hidden");
  nextBtnEl.disabled = true;
}

function setEmptyDeckState() {
  categoryBadgeEl.textContent = "Ready";
  questionTextEl.textContent = `${state.selectedName} 님 문제를 아직 넣지 않았습니다.`;
  questionHintEl.textContent = "";
  resetInteractionAreas();
  helperTextEl.textContent = `teamQuizDecks["${state.selectedName}"] 배열에 문제를 넣으면 바로 퀴즈가 열립니다.`;
}

function showCompletionState() {
  categoryBadgeEl.textContent = "Complete";
  questionTextEl.textContent = `${state.selectedName} 님 퀴즈를 모두 확인했습니다.`;
  questionHintEl.textContent = "";
  resetInteractionAreas();
  feedbackPanelEl.classList.remove("hidden");
  feedbackPanelEl.className = "mt-8 rounded-3xl border border-[#d9c2aa] bg-[#fff8ef] px-5 py-4";
  feedbackTitleEl.className = "text-sm font-semibold uppercase tracking-[0.2em] text-[#8b684a]";
  feedbackTitleEl.textContent = "Session Complete";
  feedbackAnswerEl.textContent = "모든 문제를 완료했습니다.";
  feedbackExplanationEl.textContent = "다른 팀원 문제를 추가하면 같은 구조로 계속 붙일 수 있습니다.";
  helperTextEl.textContent = "다른 팀원 퀴즈를 보려면 이름 다시 선택 버튼을 누르세요.";
  openResultModal();
}

function openResultModal() {
  const total = state.activeDeck.length;
  const percentage = total ? Math.round((state.score / total) * 100) : 0;

  resultTitleEl.textContent = `${state.selectedName} 퀴즈 완료`;
  resultScoreEl.textContent = `${state.score} / ${total}`;
  resultMessageEl.textContent = `${state.selectedName} 님 점수는 ${percentage}점입니다. 다시 풀거나 닫아서 화면에 머물 수 있습니다.`;
  resultModalEl.classList.remove("hidden");
  resultModalEl.classList.add("flex");
}

function closeResultModal() {
  resultModalEl.classList.add("hidden");
  resultModalEl.classList.remove("flex");
}

function restartCurrentQuiz() {
  state.currentIndex = 0;
  state.answered = false;
  state.score = 0;
  closeResultModal();
  renderQuestion();
}

function showFeedback({ title, titleColor, panelStyle, answerText, explanation }) {
  feedbackPanelEl.classList.remove("hidden");
  feedbackPanelEl.className = `mt-8 rounded-3xl border px-5 py-4 ${panelStyle}`;
  feedbackTitleEl.className = `text-base font-extrabold tracking-[-0.03em] ${titleColor}`;
  feedbackTitleEl.textContent = title;
  feedbackAnswerEl.textContent = answerText;
  feedbackExplanationEl.textContent = explanation || "";
  nextBtnEl.disabled = false;
  state.answered = true;
}

function renderQuestion() {
  updateProgress();

  if (!state.selectedName) {
    showProfileScreen();
    return;
  }

  if (state.activeDeck.length === 0) {
    setEmptyDeckState();
    return;
  }

  if (state.currentIndex >= state.activeDeck.length) {
    showCompletionState();
    return;
  }

  const currentQuiz = state.activeDeck[state.currentIndex];

  state.answered = false;
  selectedNameEl.textContent = state.selectedName;
  categoryBadgeEl.textContent = currentQuiz.category || "Quiz";
  questionTextEl.textContent = currentQuiz.question;
  questionHintEl.textContent = currentQuiz.hint || "";
  resetInteractionAreas();

  answerFormEl.classList.remove("hidden");
  answerInputEl.placeholder = "빈칸에 들어갈 표현을 입력한 뒤 Enter를 누르세요";
  helperTextEl.textContent = `뜻: ${currentQuiz.meaning} · 현재 점수 ${state.score}점 · Enter로 제출`;
}

function selectProfile(name) {
  state.selectedName = name;
  state.activeDeck = teamQuizDecks[name] || [];
  state.currentIndex = 0;
  state.answered = false;
  state.score = 0;
  selectedNameEl.textContent = name;
  showQuizScreen();
  renderQuestion();
}

function handleShortAnswer() {
  if (state.answered) return;

  const currentQuiz = state.activeDeck[state.currentIndex];
  const submitted = normalizeForComparison(answerInputEl.value);
  const expected = normalizeForComparison(currentQuiz.answer);

  if (!submitted) {
    showFeedback({
      title: "답을 입력해 주세요",
      titleColor: "text-[#8b684a]",
      panelStyle: "border-[#d8c3ae] bg-[#fff8ef]",
      answerText: "답을 먼저 입력하세요.",
      explanation: currentQuiz.hint || ""
    });
    nextBtnEl.disabled = true;
    state.answered = false;
    return;
  }

  const isCorrect = isAcceptedAnswer(submitted, expected);
  answerInputEl.disabled = true;
  hintBtnEl.disabled = true;
  revealBtnEl.disabled = true;
  if (isCorrect) {
    state.score += 1;
  }

  showFeedback({
    title: isCorrect ? "정답입니다" : "오답입니다",
    titleColor: isCorrect ? "text-[#2f6b2f]" : "text-[#b05d57]",
    panelStyle: isCorrect ? "border-[#b9ddb9] bg-[#ecf8ec]" : "border-[#efb8b1] bg-[#fff0ee]",
    answerText: isCorrect
      ? `정답입니다. 정답: ${currentQuiz.answer}`
      : `입력한 답: ${answerInputEl.value || "-"} / 정답: ${currentQuiz.answer}`,
    explanation: isCorrect
      ? `${currentQuiz.explanation} 현재 점수는 ${state.score}점입니다.`
      : `${currentQuiz.explanation} 현재 점수는 ${state.score}점입니다.`
  });
}

function revealAnswer() {
  if (state.answered) return;

  const currentQuiz = state.activeDeck[state.currentIndex];
  answerInputEl.disabled = true;
  hintBtnEl.disabled = true;
  revealBtnEl.disabled = true;

  showFeedback({
    title: "정답확인",
    titleColor: "text-[#8b684a]",
    panelStyle: "border-[#d8c3ae] bg-[#fff8ef]",
    answerText: `정답: ${currentQuiz.answer}`,
    explanation: currentQuiz.explanation
  });
}

function showHint() {
  if (state.answered) return;

  const currentQuiz = state.activeDeck[state.currentIndex];
  const initialHint = getInitialHint(currentQuiz.answer);

  feedbackPanelEl.classList.remove("hidden");
  feedbackPanelEl.className = "mt-8 rounded-3xl border border-[#d8c3ae] bg-[#fff8ef] px-5 py-4";
  feedbackTitleEl.className = "text-base font-extrabold tracking-[-0.03em] text-[#8b684a]";
  feedbackTitleEl.textContent = "힌트";
  feedbackAnswerEl.textContent = `첫 글자 힌트: ${initialHint}`;
  feedbackExplanationEl.textContent = currentQuiz.hint || "";
}

answerInputEl.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    handleShortAnswer();
  }
});

hintBtnEl.addEventListener("click", showHint);
revealBtnEl.addEventListener("click", handleShortAnswer);

nextBtnEl.addEventListener("click", () => {
  state.currentIndex += 1;
  renderQuestion();
});

backBtnEl.addEventListener("click", showProfileScreen);
retryBtnEl.addEventListener("click", restartCurrentQuiz);
closeModalBtnEl.addEventListener("click", closeResultModal);
homeBtnEl.addEventListener("click", showProfileScreen);

renderProfiles();
showProfileScreen();

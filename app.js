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

const teamQuizDecks = {
  "정주혜": quizDeck,
  "김가연": kimGaYeonDeck
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
      : "이름을 먼저 선택하세요";
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
    <span class="mt-2.5 block text-[2rem] font-extrabold tracking-[-0.04em] text-cocoa">${name}</span>
    <span class="mt-2.5 block text-[15px] leading-6 text-latte">본인 이름을 눌러 퀴즈를 시작합니다.</span>
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

  const isCorrect = submitted === expected;
  answerInputEl.disabled = true;
  hintBtnEl.disabled = true;
  revealBtnEl.disabled = true;
  if (isCorrect) {
    state.score += 1;
  }

  showFeedback({
    title: isCorrect ? "정답입니다" : "오답입니다",
    titleColor: isCorrect ? "text-[#5f7a35]" : "text-[#b05d57]",
    panelStyle: isCorrect ? "border-[#dbe4c4] bg-[#f7fbef]" : "border-[#f0d2ce] bg-[#fff4f2]",
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
    title: "정답 공개",
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
revealBtnEl.addEventListener("click", revealAnswer);

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

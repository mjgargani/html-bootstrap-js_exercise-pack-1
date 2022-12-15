let startTime;
let timer;
let quizState = 0 // 0: Tela inicial; 1: Quiz rodando; 2: Resultados

const results = {
  correct: 0,
  incorrect: 0
}

const elements = {
  div: {
    startQuiz: document.getElementById("start-quiz"),
    quiz: document.getElementById("quiz"),
    quizResults: document.getElementById("quiz-results"),
  },
  label: {
    quizTimer: document.getElementById("label-quiz-timer"),
    question: {
      index: document.getElementById("label-question-index"),
      description: document.getElementById("label-question-description")
    }
  },
  form: {
    question: document.getElementById("form-question"),
    questionAlternatives: document.getElementById("form-question-alternatives")
  },
  btn: {
    startQuiz: document.getElementById("btn-start-quiz"),
    restartQuiz: document.getElementById("btn-restart-quiz")
  }
}

function renderTimer(ms) {
  const min = Math.floor(ms / 60000);
  const sec = ((ms % 60000) / 1000).toFixed(0);
  elements.label.quizTimer
    .textContent = `${min}:${sec < 10 ? `0${sec}` : sec}`;
}

function showResults() {
  quizState = 2;

  elements.div.quiz.classList.add("hide");
  elements.div.quizResults.classList.remove("hide");
}

function validateTimer(ms) {
  const difference = Date.now() - startTime;
  const timeLeft = ms - difference;
  
  renderTimer(timeLeft);
  
  if(difference > ms){
    clearInterval(timer);
    changeQuizState(2);
  }
}

function startTimer(ms) {
  startTime = Date.now();
  timer = setInterval(() => validateTimer(ms), 1000);
}

function showQuiz() {
  quizState = 1;

  elements.div.startQuiz.classList.add("hide");
  elements.div.quiz.classList.remove("hide");
  
  startTimer(600000);
}

function showHome() {
  quizState = 0;

  elements.div.quizResults.classList.add("hide");
  elements.div.startQuiz.classList.remove("hide");
}

function changeQuizState(stateNum) {
  switch(stateNum){
    case 0: 
      quizState === 2 && showHome();
      break;
    case 1: 
      quizState === 0 && showQuiz();
      break;
    case 2: 
      quizState === 1 && showResults();
      break;
  }
}

elements.btn.startQuiz.addEventListener("click", () => changeQuizState(1));
elements.btn.restartQuiz.addEventListener("click", () => changeQuizState(0));
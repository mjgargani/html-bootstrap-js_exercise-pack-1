let startTime;
let timer;
let quizState = 0; // 0: Tela inicial; 1: Quiz rodando; 2: Resultados
let currentQuestion = 0;
let currentAnswer;

const results = {
  points: 0,
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
    },
    results: {
      points: document.getElementById("label-quiz-points"),
      correct: document.getElementById("label-quiz-corrects"),
      incorrect: document.getElementById("label-quiz-incorrects")
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

function renderQuestion() {
  const current = questions[currentQuestion];

  elements.label.question.index.textContent = currentQuestion + 1;
  elements.label.question.description.textContent = current.question;
  elements.form.questionAlternatives.replaceChildren();

  for (let i = 0; i < current.alternatives.length; i++) {
    const input = document.createElement("input");
    const label = document.createElement("label");
    const br = document.createElement("br");

    input.setAttribute("type", "radio");
    input.setAttribute("name", "alternative-item");
    input.setAttribute("value", i);

    label.textContent = current.alternatives[i];

    elements.form.questionAlternatives.appendChild(input);
    elements.form.questionAlternatives.appendChild(label);
    elements.form.questionAlternatives.appendChild(br);
  }

  currentAnswer = current.correct;
}

function renderTimer(ms) {
  const min = Math.floor(ms / 60000);
  const sec = ((ms % 60000) / 1000).toFixed(0);
  elements.label.quizTimer
    .textContent = `${min}:${sec < 10 ? `0${sec}` : sec}`;
}

function renderResults() {
  quizState = 2;
  clearInterval(timer);

  elements.div.quiz.classList.add("hide");
  elements.div.quizResults.classList.remove("hide");

  elements.label.results.points.textContent = results.points;
  elements.label.results.correct.textContent = results.correct;
  elements.label.results.incorrect.textContent = results.incorrect;
}

function validateAnswer(event) {
  event.preventDefault();
  const selected = document.querySelector('input[name="alternative-item"]:checked').value;

  if(Number(selected) === currentAnswer){
    results.points += 2;
    results.correct += 1;
  } else {
    results.incorrect += 1;
  }

  currentQuestion += 1;

  if(currentQuestion < questions.length) {
    renderQuestion();
  } else {
    changeQuizState(2);
  }
}

function validateTimer(ms) {
  const difference = Date.now() - startTime;
  const timeLeft = ms - difference;
  
  renderTimer(timeLeft);

  if(difference > ms){
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

  renderQuestion();
}

function showHome() {
  quizState = 0;

  elements.div.quizResults.classList.add("hide");
  elements.div.startQuiz.classList.remove("hide");

  results.points = 0;
  results.correct = 0;
  results.incorrect = 0;
  currentQuestion = 0;
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
      quizState === 1 && renderResults();
      break;
  }
}

elements.btn.startQuiz.addEventListener("click", () => changeQuizState(1));
elements.btn.restartQuiz.addEventListener("click", () => changeQuizState(0));

elements.form.question.addEventListener("submit", validateAnswer);
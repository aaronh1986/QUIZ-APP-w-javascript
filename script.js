const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const questionSpan = document.getElementById('question');
let shuffledQuestions, currentQuestionIndex
const answerContainer = document.getElementById('answer-container')

startBtn.addEventListener('click', startGame);

function startGame() {
    console.log("I will get this and write a great quiz app");
    startBtn.classList.add('hide');
    nextBtn.classList.remove('hide');
    showQuestion(questions);
    currentQuestionIndex = 0;
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    setQuestions();
}

function setQuestions() {
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(what) {
        questionSpan.innerText = what.question;
        what.answers.forEach(answer => {
            let button = document.createElement('button');
            button.innerText = answer.text;
        })
    answerContainer.appendChild(button);
}

const questions = [
{
    question: "What band does Fat Mike play in?",
    answers: [
        { text: 'NOFX', correct: true },
        { text: 'Meshuggah', correct: false },
        { text: 'Mastodon', correct: false}
    ]
},
{
    question: "What band does Troy Sanders play in?",
    answers: [
        { text: 'TOOL', correct: false },
        { text: 'The Clash', correct: false },
        { text: 'Mastodon', correct: true}
    ]
},
{
    question: "What band does Eddie Vedder play in?",
    answers: [
      { text: 'Suicidal Tendancies', correct: false },
      { text: 'Pearl Jam', correct: true },
      { text: 'The Prodigy', correct: false},
      { text: 'Slipknot', correct: false},
]
},
]
// Pseduo code

// 1 - Once the user clicks the start button, the timer gets activated and a multiple choice question appears. The intro text also dissappers.

// 2 - If the user clicks the wrong answer, the text "wrong" should appear in the html. 

// 3 - If the user clicks the wrong answer, time is subtracted from the clock.

// 4 - When the user clicks the right answer, the text "correct" should appear in the html. 

// 5 - When all of the answers are done or the time runs out, the game is over. 

// 6 - The users high score should appear, the users should be able to submit ther intials.



const startButton = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtons = document.getElementById("answer-buttons")
const timeLeftDisplay = document.querySelector("#time-left")
timeLeft = 60

let shuffledQuestions, currentQuestionIndex


startButton.addEventListener("click", startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
  })

startButton.addEventListener("click", countDown)

// Timer/Countdown Function
function countDown() {
    setInterval(function(){
        if(timeLeft <= 0) {
            clearInterval(timeLeft = 0)
        }
        timeLeftDisplay.innerHTML = timeLeft
        timeLeft -=1
    }, 1000)
}

// Start Game function

function startGame () {
    console.log("Started")
    startButton.classList.add("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuetsionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion ()
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add("hide")
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer() {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonELement.children).forEach(button => {
        set
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
      } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
      }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
    } else {
      element.classList.add('wrong')
    }
  }
  
  function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
  }


// Array of questions
const questions = [
    {
        question: "Commonly used data types DO NOT include:",
        answers: [
            {text: "strings", correct: false },
            {text: "booleans", correct: false},
            {text: "alerts", correct: true },
            {text: "numbers", correct: false}
        ] 
     },
     {
         question: "The condition in an if / else statement is enclosed within ___.",
         answers: [  
            {text: "quotes", correct: false },
            {text: "curly brackets", correct: true},
            {text: "parenthesis", correct: false },
            {text: "square brackets", correct: false}
        ]
     },
     {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answers: [
            {text: "commas", correct: false },
            {text: "curly brackets", correct: false},
            {text: "quotes", correct: true },
            {text: "parenthesis", correct: false}
        ] 
     },
 ]



 //function renderQuestion ()


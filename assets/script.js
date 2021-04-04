// Pseduo code

// 1 - Once the user clicks the start button, the timer gets activated and a multiple choice question appears. The intro text also dissappers.

// 2 - If the user clicks the wrong answer, the text "wrong" should appear in the html. 

// 3 - If the user clicks the wrong answer, time is subtracted from the clock.

// 4 - When the user clicks the right answer, the text "correct" should appear in the html. 

// 5 - When all of the answers are done or the time runs out, the game is over. 

// 6 - The users high score should appear, the users should be able to submit ther intials.

document.addEventListener('DOMContentLoaded', () => {
    const timeLeftDisplay = document.querySelector("#time-left")
    const startBtn = document.querySelector("#start-button")
    timeLeft = 60

    function countDown() {
        setInterval(function(){
            if(timeLeft <= 0) {
                clearInterval(timeLeft = 0)
            }
            timeLeftDisplay.innerHTML = timeLeft
            timeLeft -=1
        }, 1000)
    }

    startBtn.addEventListener('click' , countDown())
} )

const startBtn = document.querySelector("#start-button")
const questionContainerElement = document.querySelector("question-container")
startBtn.addEventListener("click", startGame())

function startGame () {
    console.log("Started")
    startBtn.classList.add("hide")
    questionContainerElement.classList.remove("hide")
    setNextQuestion ()
}



// Array of questions
const questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choiceA: "strings",
        choiceB: "booleans",
        choiceC: "alerts",
        choiceD: "numbers",
        correct: "c"
     },
     {
         question: "The condition in an if / else statement is enclosed within ___.",
         choiceA: "quotes",
         choiceB: "curly brackets",
         choiceC: "parenthesis",
         choiceD: "square brackets",
         correct: "b"
     },
     {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        choiceA: "commas",
        choiceB: "curly brackets",
        choiceC: "quotes",
        choiceD: "parenthesis",
        correct: "c"
     },
 ]

 questions [0].question
 questions [0].choiceA
 questions [0].choiceB
 questions [0].choiceC
 questions [0].choiceD
 questions [0].correct

 let lastQuestionIndex = questions.length-1;
 let runningQuestionIndex = 0;

 //function renderQuestion (){
     let q = questions[runningQuestionIndex];
     question.innerHTML = "<p>" +q.question+ "</p>"
     choiceA.innerHTML = q.choiceA;
     choiceB.innerHTML = q.choiceB;
     choiceC.innerHTML = q.choiceC;
     choiceD.innerHTML = q.choiceD;
// }

 runningQuestionIndex = 0;
 renderQuestion()

 runningQuestionIndex++
 renderQuestion()


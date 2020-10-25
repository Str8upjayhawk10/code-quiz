// questionsArray is the variable assign to an array[] all 5 ? & correct answer is within the array
var questionsArray = [
    {
        question: "What is a Variable?", 
        answers: ["A: Holds data value that can be change anytime. ", "B: Reserve keyword that declare a variable ", "C: Anything that can vary.", "D: None Above",], 
        correct: "C: Anything that can vary"
    },
    {
        question: "Which program does JavaScript support?", 
        answers: ["A: Object-Oriented Program", "B: Object-Procedural Program", "C: Imperative-Object Program", "D: None of the Above",], 
        correct: "A: Object-Oriented Program"
    },
    {
        question: "What is JavaScript(JS)?", 
        answers: ["A: Increased lightweight interperted interaction", "B: Network-centric applications", "C: Programming language with procedural-oriented capabilities", "D: Programming language with object-oriented capabilities",], 
        correct: "D: Programming language with object-oriented capabilities"
    },
    {
        question: "What does an array do?", 
        answers: ["A: Stores objects in a fixed-size sequential collection", "B: Lets you store multiple values in a single variable", "C: Uses a collection of elements of the same type.", "D: None of the Above",], 
        correct: "B: Lets you store multiple values in a single variable"
    },
    {
        question: "What is a boolean?", 
        answers: ["A: Datatype that returns either of two values ", "B: Datatype that express a condition", "C: Used as an object to get the value of a variable", "D: None of the Above",], 
        correct: "A: Datatype that returns either of two values "
    },
];

// Create Variables "Global Space" that can work within local data or outside global space 
var introEl = document.querySelector(".intro");
var startBtnEl = document.querySelector("#start-btn");
var questionContainerEl= document.querySelector("#question-container");
var questionEl = document.querySelector("#question");
// let answerButtonEl = document.querySelector("answer-buttons")
var controlEl = document.querySelector("#control");
var timeEl = document.querySelector("#time");
var highScoreEl = document.querySelector("#highscore");
var time = 50;
var timerFun;
var highScore = 0;
var highScoreFuc;
var questionIndex = 0;
var gameOver;

// Created function start quiz 
function startQuiz() {
// console.log("startQuiz")
// .classlist.add"hide" Sart Quiz button within div
introEl.classList.remove("hide");
// remove hide class @ start of function
questionContainerEl.classList.add("hide");
// Start Countdown (Global variable time set @ 50)
timerFun = setInterval(countDown, 1000);
// use of textContent is to get all elements  vs innerContent shows human readable element won't return hidden elements
timeEl.textContent = time;
showQuestions();
}


// function timer countdown when complete GameOver
function countDown () {
    time--
    timeEl.textContent = time;
    if (time <=  0) {
        time = 0;
    gameOver();
    // console.log("GameOver");
    }
}


function showQuestions () {
    
    let currentQuestion = questionsArray[questionIndex];
    questionEl.textContent = currentQuestion.question
    for (let i = 0; i < currentQuestion.answers.length; ++i) {
        let answer = document.getElementById(`answer${i+1}`);
    answer.textContent = currentQuestion.answers[i]; 
    answer.onclick = () => checkQuestion(i)
    
}
}


function checkQuestion(id) {
    console.log(id);
    var currentQuestion = questionsArray[questionIndex]
    if (currentQuestion.answers[id] === currentQuestion.correct) {
        console.log("correct")
    } else {
        time = time -10
        timeEl.textContent = time;
    }
    if (questionIndex === questionsArray.length -1) {
        gameOver();

    }else {
        questionIndex++ 
    showQuestions()

    }

}


function gameOver () {
    // console.log("gameOver");
    clearInterval(timerFun);
}






startBtnEl.addEventListener("click", startQuiz())
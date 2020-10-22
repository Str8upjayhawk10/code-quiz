// Qustion & Answer Array
var questionsArray = [
    {
        question: "What is a Variable?", 
        answers: ["A Holds data value that can be change anytime. ", "B Reserve keyword that declare a variable ", "C Anything that can vary.", "D None Above",], 
        correct: "C Anything that can vary"
    },
    {
        question: "Which program does JavaScript support?", 
        answers: ["A Object-Oriented Program", "B Object-Procedural Program", "C Imperative-Object Program", "D None of the Above",], 
        correct: "A Object-Oriented Program"
    },
    {
        question: "What is JavaScript(JS)?", 
        answers: ["A Increased lightweight interperted interaction", "B Network-centric applications", "C Programming language with procedural-oriented capabilities", "D None of the Above",], 
        correct: "D Programming language with object-oriented capabilities"
    },
    {
        question: "What does an array do?", 
        answers: ["A Stores objects in a fixed-size sequential collection", "B Lets you store multiple values in a single variable", "C Uses a collection of elements of the same type.", "D None of the Above",], 
        correct: "B Lets you store multiple values in a single variable"
    },
    {
        question: "What is a boolean?", 
        answers: ["A Datatype that returns either of two values ", "B Datatype that express a condition", "C Used as an object to get the value of a variable", "D None of the Above",], 
        correct: "A Datatype that returns either of two values "
    },
]





// Create Variable / Global space
var introEl = document.querySelector(".intro");
var startBtnEl = document.querySelector("#start-btn");
var questionContainerEl= document.querySelector("#question-container");
var questionEl = document.querySelector("#question");
var controlEl = document.querySelector("#control");
var timeEl = document.querySelector("#time");
var time = 50;
var timerFun;
var highscore = 0;
var highScoreFuc;
var questionIndex = 0;

// Creadted functio /start quiz
function startQuiz() {
console.log("startQuiz")
introEl.classList.add("hide");
questionContainerEl.classList.remove("hide");
timerFun = setInterval(countDown, 1000);
timeEl.textContent = time;
showQuestions()
}

function countDown () {
    time--
    timeEl.textContent = time;
    if (time <=  0) {
        time = 0;
    // Game Over()
    console.log("GameOver");
    }
}
function showQuestions () {
var currentQuestion = questionsArray[questionIndex]
    questionEl.textContent = currentQuestion.question
    for (var i = 0; i < currentQuestion.answers.length; ++i) {
        var answer = document.getElementById(`answer${i+1}`);
    answer.textContent = currentQuestion.answers[i]; 
    answer.onclick = () => checkQuestion(i)

    }
}

function checkQuestion (id) {
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
    clearInterval(timerFun);
}






startBtnEl.onclick = startQuiz
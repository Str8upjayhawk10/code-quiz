var questionsArray = [
    {
        question: "What is a Variable", 
        answers: ["a", "b", "c", "d",], 
        correct: "c"
    },
    {
        question: "", 
        answers: ["", "", "", "",], 
        correct: ""
    },
    {
        question: "", 
        answers: ["", "", "", "",], 
        correct: ""
    },
    {
        question: "", 
        answers: ["", "", "", "",], 
        correct: ""
    },
    {
        question: "", 
        answers: ["", "", "", "",], 
        correct: ""
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
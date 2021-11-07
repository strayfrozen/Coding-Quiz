//Create all my variables
var startQuiz = document.getElementById("start-button");
var quizBoxOne = document.getElementById("quiz-box-one");
var quizBoxTwo = document.getElementById("quiz-box-two");
var quizTimer = document.getElementById("timer");
var questionsDiv = document.getElementById('questions')
var choiceList = document.getElementById('choices')

var timeLeft = 60;
var timerInterval;
var questionIndex = 0
var score = 0

//Create an array of questions

var myQuestions = [
    {
        question: "What does HTML stand for?",
        choices: ["Hyper Text Markup Language", "Hyphen Text Makeup Language", "Hyper Title Markup Language", "Hydro Tonic Master Language"],
        answer: 'Hyper Text Markup Language'
    },
    {
        question: "What does Css stand for?",
        choices: ["Couple Style Sheet", "Cipher Style Sheet", "Cascading Style Sheet", "CoLinx Super Star"],
        answer: "Cascading Style Sheet"
    },
    {
        question: "What does API stand for?",
        choices: [" Apple Programming Interface", "Application Programming Interface", " Absoloute Programming Interface", " Apropriate Programming Interface"],
        answer: "Application Programming Interface"
    },
    {
        question: "What does var stand for in Javascript?",
        choices: ["Variable", "Vamp Apex Rotation", "Valuable Applicatin Revenue", "Variant"],
        answer: "Variable"
    },
    {
        question: "Is Programming Easy?",
        choices: ["Yea", "Yup", "Kinda", "No"],
        answer: "No"
    }
    
];

//Create a function to take you to quiz screen
startQuiz.addEventListener("click", function () {
    //Hide the start quiz screen
    quizBoxOne.style.display = "none";
    //Show quiz question screen
    quizBoxTwo.style.display = "block";
    //Timer starts
    Timer();
    renderQuestion();
    console.log(quizBoxTwo);
});



       function Timer() {setInterval(function(){
           if(timeLeft > 0){
               timeLeft--
               quizTimer.innerText = timeLeft;
           }else if(timeLeft === 0) {
               quizTimer.innerText = "";
               clearInterval(timeInterval)
               return
           }
           },1000);
        } 
    
    


function renderQuestion() {
    if (questionIndex === myQuestions.length ) {
        endQuiz()
    }
       else if(timeLeft === 0){
           alert("Time's up")
        endQuiz();
        
    }
    // if timeLeft equals = 0 then call the endquiz function
    var currentQuestion = document.createElement('h1')
    currentQuestion.textContent = myQuestions[questionIndex].question
    questionsDiv.prepend(currentQuestion)

    for (var i = 0; i < myQuestions[questionIndex].choices.length; i++) {
        var listEl = document.createElement('li')
        listEl.textContent = myQuestions[questionIndex].choices[i]
        listEl.setAttribute('id', myQuestions[questionIndex].choices[i])
        choiceList.append(listEl)

        listEl.addEventListener('click', answerCheck)
    }
} 


function answerCheck(e) {
    if (e.target.id === myQuestions[questionIndex].answer) {
        console.log('correct')
        score += 10
    } else {
        console.log('incorrect')
        score -= 10
    }
    console.log(score)
    questionsDiv.textContent = ""
    choiceList.textContent = ""
    questionIndex++
    renderQuestion()
}

function endQuiz() {
    var name = window.prompt("what is your name?");
    var highscoreObj = {
        name: name,
        score: score
    }
    var storage = JSON.parse(localStorage.getItem('user'))
    if (storage === null) {
        storage = []
    }

    storage.push(highscoreObj)
    localStorage.setItem('user', JSON.stringify(storage))

    window.location.href = 'highscore.html'
}





//Event Listneners
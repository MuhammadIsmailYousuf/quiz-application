const quizData = [
    {
        question: "1. What does HTML stand for?",
        choices: ["Hyper Text Markup Language", "Hyperlinks Markup Language", "Home Tool Markup Language"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "2. Choose the correct HTML element for the largest heading:",
        choices: ["<h1>", "<h6>", "<head>", "<heading>"],
        answer: "<h1>"
    },
    {
        question: "3. What is the correct HTML element for inserting a line break?",
        choices: ["<break>", "<lb>", "<br>"],
        answer: "<br>"
    },
    {
        question: "4. Choose the correct HTML element to define important text",
        choices: ["<important>", "<i>", "<strong>", "<b>"],
        answer: "<strong>"
    },
    {
        question: "5. Which character is used to indicate an end tag?",
        choices: ["*", "/", "<", ">" ],
        answer: "/"
    },
    {
        question: "6. Which of these elements are all <table> elements?",
        choices: ["<table><tr><tt>", "<table><tr><td>", "<table><head><tfoat>"],
        answer: "<table><tr><td>"
    },
    {
        question: "7. What does CSS stand for?",
        choices: ["Computer style sheets", "Cascading style sheets", "Colorful style sheets", "Creative style sheets"],
        answer: "Cascading style sheets"
    },
    {
        question: "8. Which HTML tag is used to define an internal style sheet?",
        choices: ["<style>", "<css>", "<script>"],
        answer: "<style>"
    },
    {
        question: "9. Which is the correct CSS syntax?",
        choices: ["{body;color:black;}", "{body:color=black;}", "body:color=black;", "body {color: black;}"],
        answer: "body {color: black;}"
    },
    {
        question: "10. How do you insert a comment in a CSS file?",
        choices: ["' this is a comment", "//this is a comment//", "*/this is a comment*/", "//this is a comment"],
        answer: "*/this is a comment*/"
    },
    {
        question: "11. Which property is used to change the background color?",
        choices: ["bgcolor", "color", "background-color"],
        answer: "background-color"
    },
    {
        question: "12. Which CSS property controls the text size?",
        choices: ["font-size", "font-style", "text-size", "text-style"],
        answer: "font-size"
    },
    {
        question: "13. Inside which HTML element do we put the JavaScript?",
        choices: ["<scripting>", "<script>", "<js>", "<javascript>"],
        answer: "<script>"
    },
    {
        question: "14. The external JavaScript file must contain the <script> tag.",
        choices: ["False", "True"],
        answer: "False"
    },
    {
        question: "15. How do you create a function in JavaScript?",
        choices: ["function = myFunction()", "function:myFunction()", "function myFunction()"],
        answer: "function myFunction()"
    },
    {
        question: "16. How to write an IF statement in JavaScript?",
        choices: ["if i == 5 then", "if i = 5 then", "if (i == 5)", "if i = 5"],
        answer: "if (i == 5)"
    },
    {
        question: "17. How to write an IF statement for executing some code if `i` is NOT equal to 5?",
        choices: ["if i <> 5", "if (i != 5)", "if i =! 5 then", "if (i <> 5)"],
        answer: "if (i != 5)"
    },
    {
        question: "18. How does a WHILE loop start?",
        choices: ["while (i = 10;i++)", "while i = 1 to 10", "while (i <= 10)"],
        answer: "while (i <= 10)"
    },
    {
        question: "19. How can you add a comment in a JavaScript?",
        choices: ["//This is a comment", "<!--This is a comment-->", "'This is a comment"],
        answer: "//This is a comment"
    },
    {
        question: "20. JavaScript is the same as Java.",
        choices: ["False", "True"],
        answer: "False"
    },
];
//Total 20 Mcq's 

let currentQuestionIndex = 0;
let score = 0;
let totalQuestions = quizData.length;
let timer = 1800; // 30 minutes in seconds

const questionEl = document.getElementById('question');
const choicesEl = document.getElementById('choices');
const nextBtn = document.getElementById('next-btn');
const timerEl = document.getElementById('time');
const resultContainer = document.getElementById('result-container');
const quizContainer = document.getElementById('quiz-container');
const scoreEl = document.getElementById('score');

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionEl.innerText = currentQuestion.question;
    choicesEl.innerHTML = '';

    currentQuestion.choices.forEach(choice => {
        const button = document.createElement('button');
        button.innerText = choice;
        button.onclick = selectAnswer;
        choicesEl.appendChild(button);
    });
}

function selectAnswer(e) {
    const selectedChoice = e.target.innerText;
    if (selectedChoice === quizData[currentQuestionIndex].answer) {
        score++;
    }
    nextBtn.disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < totalQuestions) {
        loadQuestion();
        nextBtn.disabled = true;
    } else {
        showResults();
    }
}

function showResults() {
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    scoreEl.innerText = ((score / totalQuestions) * 100).toFixed(2);  
}


function startTimer() {
    const timerInterval = setInterval(() => {
        let minutes = Math.floor(timer / 60);
        let seconds = timer % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        timerEl.innerText = `${minutes}:${seconds}`;
        timer--;

        if (timer < 0) {
            clearInterval(timerInterval);
            showResults();
        }
    }, 1000);
}

window.onload = () => {
    loadQuestion();
    nextBtn.disabled = true;
    startTimer();
};

const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElements = document.getElementById("question-container")
const questionElement = document.getElementById("question")
const answerButtonElement = document.getElementById("answer-buttons")

let shuffledQuestions;

startButton.addEventListener("click",startGame);
nextButton.addEventListener("click", () => {
    currentQuestionIndex++
    setNextQuestion()
});

function startGame(){
    startButton.classList.add("hide")
    shuffledQuestions = Questions.sort(() => Math.random() - 0.5)
    currentQuestionIndex = 0
    questionContainerElements.classList.remove("hide")
    setNextQuestion()
};

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
};

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
    answerButtonElement.appendChild(button)
})
};

function resetState(){
    clearStatusClass (document.body)
    nextButton.classList.add("hide")
    while (answerButtonElement.firstChild){
        answerButtonElement.removeChild(answerButtonElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove("hide")
    } else {
        startButton.innerText = "Restart"
        startButton.classList.remove("hide")
    }
}

function setStatusClass(element,correct){
    clearStatusClass(element)
    if (correct) {
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")
    }
};

function clearStatusClass(element) {
    element.classList.remove("correct")
    element.classList.remove("wrong")
};

const Questions = [
    {
        question:"What did the Romans call Scotland?",
        answers: [
            {text: "Caledonia", correct: true},
            {text: "Alba", correct:false},
            {text:"Scoti", correct:false},
            {text:"Scotia",correct:false}
        ]
    },
    {
        question:"What is the smallest country in the world?",
        answers: [
            {text:"Slovenia", correct: false},
            {text:"Moldova", correct:false},
            {text:"Vatican City", correct:true},
            {text:"Portugal",correct:false}
        ]
    },
    {
        question:"What is the most famous Mexican beer?",
        answers: [
            {text: "Heineken", correct: false},
            {text: "Sol", correct:false},
            {text:"Becks", correct:false},
            {text:"Corona",correct:true}
        ]
    },
    {
        question:"Who has scored more career goals - Cristiano Ronaldo or Lionel Messi?",
        answers: [
            {text: "Cristiano Ronaldo",correct: true},
            {text: "Lionel Messi",correct:false}
        ]
    },
    {
        question:"What year did Mark Zuckerberg invent Facebook?",
        answers: [
            {text: "2000", correct: false},
            {text: "2008", correct:false},
            {text:"2004", correct:true},
            {text:"1998",correct:false}
        ]
    }
]

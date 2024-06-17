const questions = [
    // Present Perfect Questions
        {
            question: "Choose the correct sentence:",
            answers: [
                {text: "I have saw that movie.", correct: false},
                {text: "I have seen that movie.", correct: true}
            ]
        },
        {
            question: "Which question is correct?",
            answers: [
                {text: "Has you finished your work?", correct: false},
                {text: "Have you finished your work?", correct: true}
            ]
        },
        {
            question: "Complete the sentence: 'She _______ (to live) here for ten years.'",
            answers: [
                {text: "has lived", correct: true},
                {text: "have lived", correct: false}
            ]
        },
        {
            question: "Choose the correct sentence:",
            answers: [
                {text: "They has gone to the market.", correct: false},
                {text: "They have gone to the market.", correct: true}
            ]
        },
        {
            question: "Which sentence is correct?",
            answers: [
                {text: "We have never been to Australia.", correct: true},
                {text: "We has never been to Australia.", correct: false}
            ]
        },
        // Zero Conditional Questions
        {
            question: "If you touch a flame, ________.",
            answers: [
                {text: "you get burned.", correct: true},
                {text: "you will get burned.", correct: false}
            ]
        },
        {
            question: "If water reaches 0 degrees Celsius, it ________.",
            answers: [
                {text: "freezes.", correct: true},
                {text: "will freeze.", correct: false}
            ]
        },
        {
            question: "If it rains, ________ wet.",
            answers: [
                {text: "you get", correct: true},
                {text: "you will get", correct: false}
            ]
        },
        {
            question: "What happens if you mix red and yellow?",
            answers: [
                {text: "You get orange.", correct: true},
                {text: "You will get orange.", correct: false}
            ]
        },
        {
            question: "If you don't eat, ________ hungry.",
            answers: [
                {text: "you get", correct: true},
                {text: "you will get", correct: false}
            ]
        },
        // First Conditional Questions
        {
            question: "If it rains tomorrow, ________ at home.",
            answers: [
                {text: "I will stay", correct: true},
                {text: "I stay", correct: false}
            ]
        },
        {
            question: "If she studies hard, she ________ the exam.",
            answers: [
                {text: "will pass", correct: true},
                {text: "passes", correct: false}
            ]
        },
        {
            question: "If we leave now, we ________ on time.",
            answers: [
                {text: "will arrive", correct: true},
                {text: "arrive", correct: false}
            ]
        },
        {
            question: "If you call him, he ________.",
            answers: [
                {text: "will answer", correct: true},
                {text: "answers", correct: false}
            ]
        },
        {
            question: "If they don't hurry, they ________ the bus.",
            answers: [
                {text: "will miss", correct: true},
                {text: "miss", correct: false}
            ]
        }
    ];
    


const questionElement= document.getElementById("question");
const answerButtons= document.getElementById("answer-buttons");
const nextButton= document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo= currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button= document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });

}

function resetState(){
    nextButton.style.display = "None";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
    }
    button.disabled = true;
});
nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}! => ${(score/ questions.length * 5).toFixed(1)}/5.0`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
})
startQuiz();




const questions = [
    {
        question: 'What year did World War 2 start?',
        answers: [
            { text: '1935', correct: false },
            { text: '1939', correct: true },
            { text: '1941', correct: false },
            { text: '1945', correct: false }
        ]
    },
    {
        question: 'Who was the leader of Nazi Germany during World War 2?',
        answers: [
            { text: 'Adolf Hitler', correct: true },
            { text: 'Benito Mussolini', correct: false },
            { text: 'Joseph Stalin', correct: false },
            { text: 'Winston Churchill', correct: false }
        ]
    },
    {
        question: 'In which year did the United States enter World War 2?',
        answers: [
            { text: '1941', correct: true },
            { text: '1939', correct: false },
            { text: '1943', correct: false },
            { text: '1945', correct: false }
        ]
    },
    {
        question: 'Which event marked the end of World War 2 in Europe?',
        answers: [
            { text: 'D-Day', correct: false },
            { text: 'Battle of Stalingrad', correct: false },
            { text: 'Battle of Berlin', correct: false },
            { text: 'Surrender of Nazi Germany', correct: true }
        ]
    },
    {
        question: 'Which country dropped atomic bombs on Hiroshima and Nagasaki?',
        answers: [
            { text: 'Germany', correct: false },
            { text: 'United Kingdom', correct: false },
            { text: 'United States', correct: true },
            { text: 'Soviet Union', correct: false }
        ]
    },
    {
        question: 'What was the code name for the Allied invasion of Normandy, France?',
        answers: [
            { text: 'Operation Barbarossa', correct: false },
            { text: 'Operation Overlord', correct: true },
            { text: 'Operation Market Garden', correct: false },
            { text: 'Operation Torch', correct: false }
        ]
    },
    {
        question: 'Which battle is often considered a turning point for the Allies in the Pacific Theater of World War 2?',
        answers: [
            { text: 'Battle of Midway', correct: true },
            { text: 'Battle of Okinawa', correct: false },
            { text: 'Battle of Iwo Jima', correct: false },
            { text: 'Battle of Guadalcanal', correct: false }
        ]
    },
    {
        question: 'Who was the British Prime Minister during most of World War 2?',
        answers: [
            { text: 'Winston Churchill', correct: true },
            { text: 'Neville Chamberlain', correct: false },
            { text: 'Margaret Thatcher', correct: false },
            { text: 'Tony Blair', correct: false }
        ]
    },
    {
        question: 'What was the name of the first concentration camp established by Nazi Germany?',
        answers: [
            { text: 'Auschwitz', correct: false },
            { text: 'Dachau', correct: true },
            { text: 'Treblinka', correct: false },
            { text: 'Buchenwald', correct: false }
        ]
    },
    {
        question: 'Who was the Supreme Commander of the Allied forces in Europe during World War 2?',
        answers: [
            { text: 'Dwight D. Eisenhower', correct: true },
            { text: 'George S. Patton', correct: false },
            { text: 'Douglas MacArthur', correct: false },
            { text: 'Bernard Montgomery', correct: false }
        ]
    },
    {
        question: 'Which country suffered the highest number of casualties during World War 2?',
        answers: [
            { text: 'Soviet Union', correct: true },
            { text: 'Germany', correct: false },
            { text: 'United States', correct: false },
            { text: 'Japan', correct: false }
        ]
    },
    {
        question: 'Who issued the order to drop atomic bombs on Hiroshima and Nagasaki?',
        answers: [
            { text: 'Harry S. Truman', correct: true },
            { text: 'Franklin D. Roosevelt', correct: false },
            { text: 'Winston Churchill', correct: false },
            { text: 'Joseph Stalin', correct: false }
        ]
    }
    // Add more questions here as needed
];

// Elements from HTML
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const resultContainer = document.getElementById('result-container');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-btn');
const timerElement = document.getElementById('timer');
const alertBox = document.getElementById('alert-box');

// Variables
let currentQuestionIndex = 0;
let score = 0;
const timerDuration = 60;
let timer;
let timeLeft = timerDuration;

// Function to start the quiz and display the first question
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
    resultContainer.classList.add('hidden');
    nextButton.classList.add('hidden');
    restartButton.classList.add('hidden');
    alertBox.classList.add('hidden');
    resetAndStartTimer();
}

// Function to reset and start timer
function resetAndStartTimer() {
    clearInterval(timer); 
    timeLeft = timerDuration; 
    updateTimerDisplay(); 
    timer = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();

        if (timeLeft <= 0) {
            clearInterval(timer);
            alertBox.classList.remove('hidden');
            showResults();
        }
    }, 1000); 
}

// Function to update the timer display
function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

// Function to display a question and its answers
function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', () => {
            if (!button.classList.contains('correct')) {
                selectAnswer(button, answer.correct);
            }
        });
        answerButtonsElement.appendChild(button);
    });
}

// Function to reset the state of the answer buttons
function resetState() {
    nextButton.classList.add('hidden');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

// Function to handle when an answer is selected
function selectAnswer(button, isCorrect) {
    setStatusClass(button, isCorrect);
    Array.from(answerButtonsElement.children).forEach(btn => {
        if (btn !== button && btn.dataset.correct === 'true') {
            btn.disabled = true; 
        }
        btn.disabled = true; 
    });
    if (isCorrect) {
        score++;
    }
    nextButton.classList.remove('hidden');
}

// Function to update button styling based on correctness
function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

// Function to clear previous button styling
function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

// Function to move to the next question or show results
function goToNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

// Function to display quiz results
function showResults() {
    clearInterval(timer);
    questionElement.innerText = 'Quiz Completed!';
    answerButtonsElement.innerHTML = '';
    scoreElement.innerText = `Your score: ${score} out of ${questions.length}`;
    resultContainer.classList.remove('hidden');
    nextButton.classList.add('hidden');
    restartButton.classList.remove('hidden');
}

// Event listeners
nextButton.addEventListener('click', goToNextQuestion);
restartButton.addEventListener('click', startQuiz);

// Start the quiz when the page loads
document.addEventListener('DOMContentLoaded', startQuiz);
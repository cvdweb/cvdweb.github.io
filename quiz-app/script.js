let currentQuestionIndex = 0;
let userAnswers = [];
let score = 0;

const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const questionNumber = document.getElementById('question-number');
const questionText = document.getElementById('question-text');
const optionsDiv = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const scoreDiv = document.getElementById('score');
const detailedResults = document.getElementById('detailed-results');
const restartBtn = document.getElementById('restart-btn');

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    questionNumber.textContent = `Câu hỏi ${currentQuestionIndex + 1}/${questions.length}`;
    questionText.textContent = question.question;
    optionsDiv.innerHTML = '';
    question.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'list-group-item list-group-item-action';
        btn.textContent = option;
        btn.onclick = () => selectOption(index);
        optionsDiv.appendChild(btn);
    });
    nextBtn.disabled = true;
}

function selectOption(index) {
    const buttons = optionsDiv.querySelectorAll('button');
    buttons.forEach(btn => btn.classList.remove('active'));
    buttons[index].classList.add('active');
    userAnswers[currentQuestionIndex] = index;
    nextBtn.disabled = false;
}

nextBtn.onclick = () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        showResults();
    }
};

function showResults() {
    score = userAnswers.reduce((acc, answer, index) => {
        return acc + (answer === questions[index].correct ? 1 : 0);
    }, 0);
    scoreDiv.textContent = `Điểm số: ${score}/${questions.length}`;
    detailedResults.innerHTML = '';
    questions.forEach((question, index) => {
        const div = document.createElement('div');
        div.className = 'mb-3 p-3 border rounded';
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.correct;
        div.innerHTML = `
            <strong>Câu ${index + 1}:</strong> ${question.question}<br>
            <span class="${isCorrect ? 'text-success' : 'text-danger'}">
                Đáp án của bạn: ${question.options[userAnswer] || 'Không chọn'} (${isCorrect ? 'Đúng' : 'Sai'})
            </span><br>
            <span class="text-primary">Đáp án đúng: ${question.options[question.correct]}</span>
        `;
        detailedResults.appendChild(div);
    });
    quizContainer.classList.add('d-none');
    resultContainer.classList.remove('d-none');
}

restartBtn.onclick = () => {
    currentQuestionIndex = 0;
    userAnswers = [];
    score = 0;
    resultContainer.classList.add('d-none');
    quizContainer.classList.remove('d-none');
    displayQuestion();
};

// Start the quiz
displayQuestion();

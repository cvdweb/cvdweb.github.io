let currentQuestionIndex = 0;
let userAnswers = [];
let score = 0;
let questions = [];

const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result-container');
const questionNumber = document.getElementById('question-number');
const questionText = document.getElementById('question-text');
const optionsDiv = document.getElementById('options');
const nextBtn = document.getElementById('next-btn');
const scoreDiv = document.getElementById('score');
const detailedResults = document.getElementById('detailed-results');
const restartBtn = document.getElementById('restart-btn');
const lessonTitle = document.getElementById('lesson-title');
const pageTitle = document.getElementById('page-title');

// Get lesson parameter from URL
const urlParams = new URLSearchParams(window.location.search);
const lesson = urlParams.get('lesson');

if (!lesson) {
    alert('Không tìm thấy bài học. Quay lại trang chọn bài học.');
    window.location.href = 'lessons.html';
}

// Load questions based on lesson
async function loadQuestions() {
    try {
        const response = await fetch(`questions/${lesson}.js`);
        if (!response.ok) {
            throw new Error('Không thể tải câu hỏi');
        }
        const script = await response.text();
        // Execute the script to load questions
        eval(script);
        // Now questions should be loaded on window
        if (window.questions && window.questions.length > 0) {
            questions = window.questions; // Copy to local variable
            startQuiz();
        } else {
            throw new Error('Không có câu hỏi cho bài học này');
        }
    } catch (error) {
        console.error('Lỗi khi tải câu hỏi:', error);
        alert('Không thể tải câu hỏi cho bài học này. Vui lòng thử lại sau.');
        window.location.href = 'lessons.html';
    }
}

function startQuiz() {
    // Set lesson title
    const lessonName = lesson.replace('_', ' ').replace('tin', 'Tin Học ').replace('bai', 'Bài ');
    lessonTitle.textContent = `Bài Thi Trắc Nghiệm - ${lessonName}`;
    pageTitle.textContent = `Quiz - ${lessonName}`;

    displayQuestion();
}

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

// Load questions when page loads
loadQuestions();

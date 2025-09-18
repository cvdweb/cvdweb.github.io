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

const urlParams = new URLSearchParams(window.location.search);
const examMode = urlParams.get('exam') === 'true';
const lesson = urlParams.get('lesson');
const classSelected = urlParams.get('class');
const studentSelected = urlParams.get('student');
const examPart = urlParams.get('part');
const examCode = urlParams.get('code');

if (!examMode && !lesson) {
    alert('Không tìm thấy bài học. Quay lại trang chọn bài học.');
    window.location.href = 'lessons.html';
}

// Load questions based on lesson or exam parameters
async function loadQuestions() {
    try {
        if (examMode) {
            // Determine class number from classSelected, e.g. "6A" -> 6
            const classNumber = classSelected.match(/\d+/)[0];
            const questionFile = `questions/tin${classNumber}.js`;
            const response = await fetch(questionFile);
            if (!response.ok) {
                throw new Error('Không thể tải câu hỏi kiểm tra');
            }
            const script = await response.text();
            eval(script);
            if (window.questionsByLesson) {
                // Collect all questions from all lessons
                let allQuestions = [];
                for (let bai in window.questionsByLesson) {
                    if (Array.isArray(window.questionsByLesson[bai])) {
                        allQuestions = allQuestions.concat(window.questionsByLesson[bai]);
                    }
                }
                // Filter by level
                const nbQuestions = allQuestions.filter(q => q.level === 'NB');
                const thQuestions = allQuestions.filter(q => q.level === 'TH');
                // Shuffle and take 4 each (or all if less)
                const selectedNB = shuffleArray(nbQuestions).slice(0, Math.min(1, nbQuestions.length));
                const selectedTH = shuffleArray(thQuestions).slice(0, Math.min(1, thQuestions.length));
                questions = selectedNB.concat(selectedTH);
                // Shuffle the combined questions
                questions = shuffleArray(questions);
                if (questions.length === 0) {
                    throw new Error('Không có câu hỏi kiểm tra');
                }
                startQuiz();
            } else if (window.questions && window.questions.length > 0) {
                // Fallback to old structure
                const nbQuestions = window.questions.filter(q => q.level === 'NB');
                const thQuestions = window.questions.filter(q => q.level === 'TH');
                const selectedNB = shuffleArray(nbQuestions).slice(0, Math.min(4, nbQuestions.length));
                const selectedTH = shuffleArray(thQuestions).slice(0, Math.min(4, thQuestions.length));
                questions = selectedNB.concat(selectedTH);
                questions = shuffleArray(questions);
                if (questions.length === 0) {
                    throw new Error('Không có câu hỏi kiểm tra');
                }
                startQuiz();
            } else {
                throw new Error('Không có câu hỏi kiểm tra');
            }
        } else {
            // Extract grade and bai from lesson param, e.g. tin6_bai1
            const match = lesson.match(/tin(\d+)_bai(\d+)/);
            if (!match) {
                throw new Error('Định dạng bài học không hợp lệ');
            }
            const grade = match[1];
            const bai = `bai${match[2]}`;
            const questionFile = `questions/tin${grade}.js`;
            const response = await fetch(questionFile);
            if (!response.ok) {
                throw new Error('Không thể tải câu hỏi');
            }
            const script = await response.text();
            eval(script);
            if (window.questionsByLesson && window.questionsByLesson[bai] && window.questionsByLesson[bai].length > 0) {
                questions = window.questionsByLesson[bai];
                startQuiz();
            } else if (window.questions && window.questions.length > 0) {
                // fallback for old structure with window.questions array
                questions = window.questions;
                startQuiz();
            } else {
                throw new Error('Không có câu hỏi cho bài học này');
            }
        }
    } catch (error) {
        console.error('Lỗi khi tải câu hỏi:', error);
        alert('Không thể tải câu hỏi. Vui lòng thử lại sau.');
        window.location.href = examMode ? 'exam.html' : 'lessons.html';
    }
}

// Helper function to shuffle array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startQuiz() {
    if (examMode) {
        const displayClass = classSelected.replace('tin_hoc_', '');
        lessonTitle.textContent = `Kiểm tra Trắc Nghiệm - Lớp ${displayClass} - ${studentSelected} - Phần ${examPart}`;
        pageTitle.textContent = `Quiz - Lớp ${displayClass} - ${studentSelected} - Phần ${examPart}`;
    } else {
        // Set lesson title
        const lessonName = lesson.replace('_', ' ').replace('tin', 'Tin Học ').replace('bai', 'Bài ');
        lessonTitle.textContent = `Kiểm tra Trắc Nghiệm - ${lessonName}`;
        pageTitle.textContent = `Quiz - ${lessonName}`;
    }
    displayQuestion();
}

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    questionNumber.textContent = `Câu hỏi ${currentQuestionIndex + 1}/${questions.length}`;
    questionText.textContent = question.question;
    optionsDiv.innerHTML = '';
    if (question.type === 'multiple') {
        question.options.forEach((option, index) => {
            const div = document.createElement('div');
            div.className = 'form-check';
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.className = 'form-check-input';
            checkbox.id = `option-${index}`;
            checkbox.value = index;
            checkbox.onchange = () => selectOption(index, true);
            const label = document.createElement('label');
            label.className = 'form-check-label';
            label.htmlFor = `option-${index}`;
            label.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
            div.appendChild(checkbox);
            div.appendChild(label);
            optionsDiv.appendChild(div);
        });
    } else {
        question.options.forEach((option, index) => {
            const btn = document.createElement('button');
            btn.className = 'list-group-item list-group-item-action';
            btn.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
            btn.onclick = () => selectOption(index, false);
            optionsDiv.appendChild(btn);
        });
    }
    nextBtn.disabled = true;
}

function selectOption(index, isMultiple) {
    if (isMultiple) {
        // For multiple choice, collect all checked options
        const checkboxes = optionsDiv.querySelectorAll('input[type="checkbox"]');
        const selectedIndices = [];
        checkboxes.forEach((checkbox, idx) => {
            if (checkbox.checked) {
                selectedIndices.push(idx);
            }
        });
        userAnswers[currentQuestionIndex] = selectedIndices;
        nextBtn.disabled = selectedIndices.length === 0;
    } else {
        // For single choice, highlight selected button
        const buttons = optionsDiv.querySelectorAll('button');
        buttons.forEach(btn => btn.classList.remove('active'));
        buttons[index].classList.add('active');
        userAnswers[currentQuestionIndex] = index;
        nextBtn.disabled = false;
    }
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
    score = 0;
    detailedResults.innerHTML = '';
    questions.forEach((question, index) => {
        const div = document.createElement('div');
        div.className = 'mb-3 p-3 border rounded';
        const userAnswer = userAnswers[index];
        let isCorrect = false;
        if (question.type === 'multiple') {
            // Check if arrays are equal (ignoring order)
            if (Array.isArray(userAnswer) && userAnswer.length === question.correct.length) {
                const sortedUser = [...userAnswer].sort();
                const sortedCorrect = [...question.correct].sort();
                isCorrect = sortedUser.every((val, i) => val === sortedCorrect[i]);
            }
        } else {
            isCorrect = userAnswer === question.correct;
        }
        if (isCorrect) {
            score++;
        }
        let userAnswerText = '';
        if (Array.isArray(userAnswer)) {
            userAnswerText = userAnswer.map(i => `${String.fromCharCode(65 + i)}. ${question.options[i]}`).join(', ');
        } else {
            userAnswerText = userAnswer !== undefined ? `${String.fromCharCode(65 + userAnswer)}. ${question.options[userAnswer]}` : 'Không chọn';
        }
        let correctAnswerText = '';
        if (Array.isArray(question.correct)) {
            correctAnswerText = question.correct.map(i => `${String.fromCharCode(65 + i)}. ${question.options[i]}`).join(', ');
        } else {
            correctAnswerText = `${String.fromCharCode(65 + question.correct)}. ${question.options[question.correct]}`;
        }
        div.innerHTML = `
            <strong>Câu ${index + 1}:</strong> ${question.question}<br>
            <span class="${isCorrect ? 'text-success' : 'text-danger'}">
                Đáp án của bạn: ${userAnswerText} (${isCorrect ? 'Đúng' : 'Sai'})
            </span><br>
            <span class="text-primary">Đáp án đúng: ${correctAnswerText}</span>
        `;
        detailedResults.appendChild(div);
    });
    scoreDiv.textContent = `Điểm số: ${score}/${questions.length}`;
    quizContainer.classList.add('d-none');
    resultContainer.classList.remove('d-none');
    // Save score if in exam mode
    if (examMode) {
        const apiUrl = 'api/scores.php';
        fetch(apiUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                className: classSelected,
                studentName: studentSelected,
                part: examPart,
                score: score
            })
        })
        .then(response => response.json())
        .then(data => {
            showSaveNotification(data.message || 'Điểm số đã được lưu.');
        })
        .catch(error => {
            console.error('Error saving score:', error);
            alert('Không thể lưu điểm số.');
        });
    }
}





// Show notification div at top-right corner
function showSaveNotification(message) {
    let notif = document.getElementById('save-notification');
    if (!notif) {
        notif = document.createElement('div');
        notif.id = 'save-notification';
        notif.style.position = 'fixed';
        notif.style.top = '20px';
        notif.style.right = '20px';
        notif.style.backgroundColor = '#4caf50';
        notif.style.color = 'white';
        notif.style.padding = '10px 20px';
        notif.style.borderRadius = '8px';
        notif.style.boxShadow = '0 2px 6px rgba(0,0,0,0.3)';
        notif.style.fontSize = '16px';
        notif.style.zIndex = '1000';
        notif.style.opacity = '0';
        notif.style.transition = 'opacity 0.5s ease';
        document.body.appendChild(notif);
    }
    notif.textContent = message;
    notif.style.opacity = '1';
    setTimeout(() => {
        notif.style.opacity = '0';
    }, 3000);
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

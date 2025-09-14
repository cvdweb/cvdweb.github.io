# TODO: Fix Excel Score Recording for Teachers

## Overview
Implement client-side score saving using localStorage and Excel generation for teacher downloads.

## Steps
- [x] Modified quiz-script.js to save scores to localStorage instead of server
- [x] Modified teacher.html to generate Excel files client-side using localStorage data
- [x] Scores are stored in browser localStorage with structure: {studentKey: {ho, ten, tx1_score, tx2_score, timestamp}}
- [x] Excel download reads base Excel file and updates it with localStorage scores
- [x] No backend server required - works with static hosting

## How it works
1. Student takes exam and score is saved to localStorage with key `quiz_scores_tin_hoc_{classCode}`
2. Teacher enters class code and clicks download
3. System fetches base Excel file from `result/all_lop.xls`
4. Updates Excel with scores from localStorage
5. Downloads updated Excel file

## Dependent Files
- cvd/quiz-app/quiz-script.js (modified saveScoreToLocalFile function)
- cvd/quiz-app/teacher.html (modified downloadResults function)

# TODO: Fix Excel Score Recording for Teachers

## Overview
Implement backend API to save student scores persistently and generate Excel files with recorded scores for teacher downloads.

## Steps
- [x] Create PHP API for saving scores (cvd/quiz-app/api/scores.php)
- [x] Create PHP API for generating Excel with scores (cvd/quiz-app/api/excel.php)
- [x] Modify cvd/quiz-app/quiz-script.js to call PHP API for saving score
- [x] Modify cvd/quiz-app/teacher.html to download Excel from PHP API
- [ ] Install PhpSpreadsheet via Composer (run `composer install` in cvd/quiz-app/api/)
- [ ] Test the complete flow: student takes exam, score saved, teacher downloads Excel with scores visible

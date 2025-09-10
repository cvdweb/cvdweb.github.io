# TODO: Update Quiz to Support Both Single and Multiple Choice Questions

## Completed

- [x] Update question data structure in `questions/tin7_bai1.js` to include `type` field and handle multiple correct answers
- [x] Improved hover effects in `style.css` for better visibility (changed to darker background on hover)

## Pending

- [ ] Modify `quiz-script.js` to detect question type and render appropriate UI (buttons for single, checkboxes for multiple)
- [ ] Update `selectOption` function to handle multiple selections for multiple-choice questions
- [ ] Update scoring logic in `showResults` to correctly score multiple-choice questions
- [ ] Update `quiz.html` to include checkbox elements if needed (not needed, added dynamically)
- [ ] Test the updated quiz with both single and multiple-choice questions (code updated, ready for testing)
- [ ] Optionally, update other question files (tin7_bai2.js, etc.) to include mixed types

## Notes
- For single-choice: `type: "single"`, `correct: number`
- For multiple-choice: `type: "multiple"`, `correct: [array of numbers]`
- UI will use buttons for single (current behavior) and checkboxes for multiple
- Scoring for multiple: user must select all correct options and no incorrect ones

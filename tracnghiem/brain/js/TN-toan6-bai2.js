// Quiz Creator;
function CQuiz(que, o1, o2, o3, o4, ans, d) {
	this.question = que;
	this.opt1 = o1;
	this.opt2 = o2;
	this.opt3 = o3;
	this.opt4 = o4;
	this.answer = ans;
	this.asked = d;
}

// Question 1
var q1 = new CQuiz(
	'Số nào sau đây là một số tự nhiên?',
	'-1',
	'0',
	'1/2',
	'Căn bậc 2',
	2,
	0
);

// Question 2
var q2 = new CQuiz(
	'Tập hợp số tự nhiên được ký hiệu là gì?',
	'ℤ',
	'ℚ',
	'ℝ',
	'ℕ',
	4,
	0	
);

// Question 3
var q3 = new CQuiz(
	'Số 345 được tạo thành từ các chữ số nào?',
	'3, 4, 5',
	'3, 5, 4',
	'4, 3, 5',
	'5, 4, 3',
	1, /*Giải thích: Số 345 là một số tự nhiên, và nó được tạo thành từ ba chữ số là 3, 4 và 5 theo thứ tự từ trái sang phải. Việc sắp xếp đúng thứ tự các chữ số là quan trọng để xác định chính xác số được tạo thành.*/
	0
);

// Question 4
var q4 = new CQuiz(
	'Đơn vị nào không nằm trong hệ thống số học của tập hợp số tự nhiên?',
	'Đơn vị (1)',
	'Chục (10)',
	'Nghìn (1000)',
	'Triệu (1000000)', 
	/*giải thích ngắn gọn
	Đơn vị "triệu (1000000)" không nằm trong hệ thống số học cơ bản của tập hợp số tự nhiên, bao gồm các đơn vị như đơn vị (1), chục (10), trăm (100) và nghìn (1000). Vì vậy, đáp án d. "triệu (1000000)" là đúng.*/ 
	4,
	0
);

// Question 5
var q5 = new CQuiz(
	'Số tự nhiên nhỏ nhất là số nào?',
	'1',
	'2',
	'0',
	'10',
	3,
	0
);



// total question...
var totQ = [q1, q2, q3, q4, q5];

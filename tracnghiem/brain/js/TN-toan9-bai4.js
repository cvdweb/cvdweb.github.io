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
	'Tập hợp nào dưới đây là tập hợp các số tự nhiên nhỏ hơn 10?',
	'\{1, 2, 3, 4, 5, 6, 7, 8, 9\}',
	'\{0, 1, 2, 3, 4, 5, 6, 7, 8, 9\}',
	'\{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\}',
	'\{0, 1, 2, 3, 4, 5, 6, 7, 8\}',
	2,
	0
);

// Question 2
var q2 = new CQuiz(
	'Phần tử nào sau đây không thuộc tập hợp \{a, b, c, d\}?',
	'a',
	'b',
	'e',
	'd',
	3,
	0	
);

// Question 3
var q3 = new CQuiz(
	'Cho tập hợp A = \{2, 4, 6, 8\}. Số nào dưới đây là phần tử của tập hợp A?',
	'6',
	'3',
	'5',
	'9',
	1,
	0
);

// Question 4
var q4 = new CQuiz(
	'Tập hợp các chữ cái trong từ "TOÁN" là tập hợp nào dưới đây?',
	'\{T, O, A, N\}',
	'\{T, O, A, N, T\}',
	'\{T, O, A\}',
	'\{T, A, N\}',
	1,
	0
);

// Question 5
var q5 = new CQuiz(
	'Cho tập hợp B = \{1, 2, 3, 4, 5\}. Phần tử nào dưới đây thuộc tập hợp B?',
	'6',
	'0',
	'4',
	'7',
	3,
	0
);



// total question...
var totQ = [q1, q2, q3, q4, q5];

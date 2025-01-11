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
	'Số nào đứng bên phải số 5 trên tia số? ',
	'-3',
	'4',
	'6',
	'2',
	3,
	0
);

// Question 2
var q2 = new CQuiz(
	'Số nào đứng bên trái số 7 trên tia số?',
	'6',
	'-6',
	'8',
	'5',
	1,
	0	
);

// Question 3
var q3 = new CQuiz(
	'Số 12 nằm ở vị trí nào so với số 10 trên tia số? ',
	'Bên phải',
	'Bên trái',
	'Trùng nhau',
	'Không xác định',
	1,
	0
);

// Question 4
var q4 = new CQuiz(
	'Số 4 nằm ở vị trí nào so với số 4 trên tia số?',
	'Bên phải',
	'Bên trái',
	'Trùng nhau',
	'Không xác định',
	3,
	0
);

// Question 5
var q5 = new CQuiz(
	'Số nào đứng bên phải số 0 trên tia số? ',
	'1',
	'0',
	'-1',
	'11',
	1,
	0
);



// total question...
var totQ = [q1, q2, q3, q4, q5];

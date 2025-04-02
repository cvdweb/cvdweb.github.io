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
	'Đa thức 2x^2y - 4xy^2 + 6xy có nhân tử chung là: ',
	'2x ',
	'2y',
	'2xy',
	'xy',
	3,
	0
);

// Question 2
var q2 = new CQuiz(
	'Phân tích đa thức x^2 - 9 thành nhân tử, ta được: ',
	'(x - 3)^2',
	'(x + 3)^2 ',
	'(x - 3)(x + 3) ',
	'(x - 3)(x + 3) ',
	3,
	0	
);

// Question 3
var q3 = new CQuiz(
	'Phân tích đa thức x^3 + 8y^3 thành nhân tử, ta được:',
	'(x + 2y)(x^2 - 2xy + 4y^2) ',
	'(x - 2y)(x^2 + 2xy + 4y^2) ',
	'(x + 2y)(x^2 + 2xy + 4y^2) ',
	'(x - 2y)(x^2 - 2xy + 4y^2)',
	1,
	0
);

// Question 4
var q4 = new CQuiz(
	'Phân tích đa thức x^2 + 5x + 6 thành nhân tử, ta được: ',
	'(x + 2)(x + 3) ',
	'(x - 2)(x - 3) ',
	'(x + 1)(x + 6) ',
	'(x - 1)(x - 6)',
	1,
	0
);

// Question 5
var q5 = new CQuiz(
	'Phân tích đa thức 6x^2 - 13x + 6 thành nhân tử, ta được: ',
	'(2x - 3)(3x - 2) ',
	'(2x + 3)(3x + 2) ',
	'(6x - 1)(x - 6) ',
	'(6x + 1)(x + 6)',
	1,
	0
);



// total question...
var totQ = [q1, q2, q3, q4, q5];

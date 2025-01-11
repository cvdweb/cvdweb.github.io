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
	'Kết quả của phép tính (x + 2y)^2 là: ',
	'x^2 + 4y^2 ',
	' x^2 + 2xy + 4y^2 ',
	'x^2 + 4xy + 4y^2 ',
	'x^2 + 2xy + 2y^2',
	3,
	0
);

// Question 2
var q2 = new CQuiz(
	'Phân tích đa thức x^2 - 4 thành nhân tử, ta được: ',
	'(x - 2)^2 ',
	'(x + 2)^2 ',
	'(x - 2)(x + 2) ',
	'x(x - 4)',
	3,
	0	
);

// Question 3
var q3 = new CQuiz(
	'Rút gọn biểu thức (2x - 1)^3, ta được: ',
	'8x^3 - 1 ',
	'8x^3 - 12x^2 + 6x - 1 ',
	'8x^3 + 12x^2 + 6x + 1 ',
	'4x^2 - 4x + 1',
	2,
	0
);

// Question 4
var q4 = new CQuiz(
	'Giá trị của biểu thức x^2 - 2xy + y^2 tại x = -2 và y = 3 là:',
	'25 ',
	'1',
	'-1',
	'-25',
	1,
	0
);

// Question 5
var q5 = new CQuiz(
	'Phân tích đa thức x^3 + 8 thành nhân tử, ta được: ',
	'(x + 2)(x^2 - 2x + 4) ',
	'(x - 2)(x^2 + 2x + 4) ',
	'(x + 2)(x^2 + 2x + 4) ',
	'(x - 2)(x^2 - 2x + 4)',
	1,
	0
);



// total question...
var totQ = [q1, q2, q3, q4, q5];

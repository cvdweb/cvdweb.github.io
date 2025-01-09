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
	'Kết quả của phép tính (2x^2y - 3xy^2) + (5x^2y + xy^2) là: ',
	'7x^4y^2',
	'7x^2y - 2xy^2 ',
	'3x^2y + 4xy^2 ',
	'3x^4y^2 - 2xy^2',
	2,
	0
);

// Question 2
var q2 = new CQuiz(
	'Đơn thức nào sau đây đồng dạng với đơn thức -3x^2y^3? ',
	'5x^3y^2 ',
	'-3xy^3',
	'2x^2y^3 ',
	'-x^2y',
	3,
	0	
);

// Question 3
var q3 = new CQuiz(
	'Kết quả của phép nhân (-2x^3) * (3x^2y) là:',
	'-6x^5y ',
	'6x^5y ',
	'-6x^6y ',
	'6x^6y',
	1,
	0
);

// Question 4
var q4 = new CQuiz(
	'Kết quả của phép chia (12x^4y^3 - 6x^2y^2) : (3x^2y) là: ',
	'4x^2y^2 - 2y ',
	'4x^2y^2 - 2y ',
	'4x^2y^2 - 2y ',
	'4x^2y^2 - 2y ',
	1,
	0
);

// Question 5
var q5 = new CQuiz(
	'Đa thức thu gọn của đa thức A = 2x^3 - 3x^2 + x + 5x^2 - 2x là: ',
	'2x^3 + 2x^2 + x ',
	'2x^3 + 2x^2 + x ',
	'2x^3 + 2x^2 + x ',
	'2x^3 + 2x^2 + x ',
	1,
	0
);



// total question...
var totQ = [q1, q2, q3, q4, q5];

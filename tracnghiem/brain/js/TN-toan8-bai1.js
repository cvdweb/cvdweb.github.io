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
	'Đơn thức nào sau đây đồng dạng với đơn thức -3xy^2? ',
	'3xy^2 ',
	'-3x^2y ',
	'-3xy ',
	'5xy^2',
	4,
	0
);

// Question 2
var q2 = new CQuiz(
	'Bậc của đa thức 2x^3y - 5xy^2 + x là: ',
	'2',
	'3',
	'4',
	'5',
	3,
	0	
);

// Question 3
var q3 = new CQuiz(
	'Kết quả của phép tính: 5x^2y + 3x^2y - 2x^2y là: ',
	'6x^4y^2 ',
	'6x^2y ',
	'4x^2y ',
	'0',
	2,
	0
);

// Question 4
var q4 = new CQuiz(
	'Đơn thức thu gọn của đơn thức (-2x^2y)^3 là: ',
	'-8x^5y^3 ',
	'8x^6y^3 ',
	'-8x^6y^3 ',
	'-6x^5y^3',
	3,
	0
);

// Question 5
var q5 = new CQuiz(
	'Đa thức nào sau đây là đa thức một biến? ',
	'x^2 + 2xy - y^2 ',
	'3x^2 - 5x + 1 ',
	'x^2y + xy^2 ',
	'x + y + z',
	2,
	0
);



// total question...
var totQ = [q1, q2, q3, q4, q5];

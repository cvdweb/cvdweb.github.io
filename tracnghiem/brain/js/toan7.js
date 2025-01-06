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
	'Tổng của 25 và 37 là bao nhiêu?',
	'52',
	'62',
	'55',
	'60',
	2,
	0
);

// Question 2
var q2 = new CQuiz(
	'Phân số nào dưới đây là phân số đơn giản nhất của 8/12?',
	'2/3',
	'3/4',
	'4/6',
	'1/2',
	1,
	0	
);

// Question 3
var q3 = new CQuiz(
	'Chu vi của hình vuông có cạnh dài 5 cm là bao nhiêu?',
	'80cm',
	'15cm',
	'20cm',
	'55cm',
	3,
	0
);

// Question 4
var q4 = new CQuiz(
	'Số nguyên tố lớn nhất nhỏ hơn 20 là số nào?',
	'17',
	'11',
	'13',
	'19',
	4,
	0
);

// Question 5
var q5 = new CQuiz(
	'Nếu a/5=3, giá trị của a là gì?',
	'8',
	'10',
	'15',
	'20',
	3,
	0
);



// total question...
var totQ = [q1, q2, q3, q4, q5];

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
	'Kết quả của 3<sup>2</sup> là bao nhiêu?',
	'6',
	'9',
	'12',
	'15',
	2,
	0
);

// Question 2
var q2 = new CQuiz(
	'2<sup>4</sup> bằng bao nhiêu?',
	'8',
	'12',
	'16',
	'20',
	3,
	0	
);

// Question 3
var q3 = new CQuiz(
	'Kết quả của phép tính 4<sup>3</sup> là gì?',
	'64',
	'16',
	'24',
	'256',
	1,
	0
);

// Question 4
var q4 = new CQuiz(
	'Kết quả của phép tính 5<sup>0</sup> là gì?',
	'0',
	'1',
	'5',
	'10',
	2,
	0
);

// Question 5
var q5 = new CQuiz(
	'Kết quả của (2<sup>3</sup>)<sup>2</sup> là gì?',
	'16',
	'64',
	'32',
	'36',
	2,
	0
);



// total question...
var totQ = [q1, q2, q3, q4, q5];

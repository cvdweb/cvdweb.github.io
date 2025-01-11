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
	'To have a good health you should_____cocaine and harmful food',
	'use',
	'try',
	'enjoy',
	'avoid',
	4,
	0
);

// Question 2
var q2 = new CQuiz(
	'apple is a_____food',
	'healthy',
	'harmful',
	'fast',
	'street',
	1,
	0	
);

// Question 3
var q3 = new CQuiz(
	'i usually vaccination to avoid____',
	"disease",
	"healthy",
	'good',
	"mustn't",
	1,
	0
);

// Question 4
var q4 = new CQuiz(
	'malignant cancer can____dangerously to victim',
	'mood',
	' effective',
	'effect',
	"affect",
	4,
	0
);

// Question 5
var q5 = new CQuiz(
	'which sentence is not simple sentence?',
	'my dad ussually plays chess every morning',
	"hoa go to school  late for the traffic jam",
	"her book is red",
	'my phone is more mordern than hes',
	2,
	0
);



// total question...
var totQ = [q1, q2, q3, q4, q5];

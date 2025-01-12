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
	'Hoang Sa and Truong Sa_______Viet Nam',
	'of',
	'in',
	'is',
	'belong to',
	4,
	0
);

// Question 2
var q2 = new CQuiz(
	'doing exercise have many____',
	'benefits',
	'benefit',
	'job',
	'harmful effect',
	1,
	0	
);

// Question 3
var q3 = new CQuiz(
	'you____ go out alone in the night, it is so dangerous',
	"should'",
	"shouldn't",
	'must',
	"mustn't",
	2,
	0
);

// Question 4
var q4 = new CQuiz(
	'The car ___ (she) is parked outside.?',
	'hers',
	' her',
	' she',
	"her's",
	4,
	0
);

// Question 5
var q5 = new CQuiz(
	'Choose the wrong sentence',
	' This is John book.',
	"their parents' car park there",
	"her book is overlook to a coffe cup",
	'my phone is more mordern than hes',
	1,
	0
);



// total question...
var totQ = [q1, q2, q3, q4, q5];

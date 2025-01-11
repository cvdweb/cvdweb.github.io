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
	'Jack like doing DIY so he joined a _____ club,yesterday',
	'music',
	'english',
	'craft',
	'maths',
	3,
	0
);

// Question 2
var q2 = new CQuiz(
	'Sakai knife is made by high skilled japanese______',
	'people',
	'chief',
	'chef',
	' Artisans',
	4,
	0	
);

// Question 3
var q3 = new CQuiz(
	"I have so many ingredients, but I don't know___to make!",
	'how',
	'what',
	'when',
	'where',
	1,
	0	
);
// Question 4
var q4 = new CQuiz(
	"Thương start learn english yesterday, and she don't know_____to start",
	'how',
	'what',
	'when',
	'where',
	4,
	0
);

// Question 5
var q5 = new CQuiz(
	'"we will travel till the next month, please______ our chilren"',
	'take part in',
	"take care of",
	"take back",
	'give up',
	2,
	0
);



// total question...
var totQ = [q1, q2, q3, q4, q5];

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
	'The___you try, the___successful you will be ',
	'as, more',
	'more,more',
	'as,as',
	',more, as',
	3,
	0
);

// Question 2
var q2 = new CQuiz(
	'The festival was so_____ with the visitor from many country',
	'bad',
	' Bustling',
	'sad',
	'wealth',
	2,
	0	
);

// Question 3
var q3 = new CQuiz(
	'Jonh was late because the way to factory was___',
	"late",
	'crow',
	'high',
	"Congested",
	4,
	0
);

// Question 4
var q4 = new CQuiz(
	'my dad has______cigarette for five years',
	'gave up',
	'give',
	'cancel',
	"cancle",
	1,
	0
);

// Question 5
var q5 = new CQuiz(
	'please_____the light when you go out the room !',
	'turn on',
	"turn off",
	"turn up",
	'turn down',
	1,
	0
);



// total question...
var totQ = [q1, q2, q3, q4, q5];

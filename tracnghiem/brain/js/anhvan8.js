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
	'1.His favourite leisure ___ is playing football',
	'time',
	'activity',
	'activity',
	'hang out',
	2,
	0
);

// Question 2
var q2 = new CQuiz(
	'2.She plays pickleball  to  stay_____',
	'A.In shape',
	' B.of',
	'in it',
	'in fat',
	1,
	0	
);

// Question 3
var q3 = new CQuiz(
	'3.Bao ____ on playing game',
	'Keen',
	'crazy   ',
	'is keen',
	'is crazy',
	3,
	0
);

// Question 4
var q4 = new CQuiz(
	'4.Tien likes_____ to school every day',
	'Walked    ',
	'to walking      ',
	'walking',
	'fly',
	3,
	0
);

// Question 5
var q5 = new CQuiz(
	'Bao Chau likes_____with Thương ',
	'Reading book ',
	'to play chess  ',
	'to Hanging out with friend',
	'a and b',
	4,
	0
);



// total question...
var totQ = [q1, q2, q3, q4, q5];

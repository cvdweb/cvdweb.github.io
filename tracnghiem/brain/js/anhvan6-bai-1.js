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
	'1.Bao usually_____foot ball with Dinh',
	'Plays',
	'plaies',
	'play',
	'hang out',
	1,
	0
);

// Question 2
var q2 = new CQuiz(
	'2.she usually use____in maths',
	'caculator',
	' caculation',
	'book',
	'reduce',
	1,
	0	
);

// Question 3
var q3 = new CQuiz(
	'3.we will loss in the forest without_____',
	'ball',
	'lovely',
	'key',
	'compass',
	4,
	0
);

// Question 4
var q4 = new CQuiz(
	'it was a bad experience i will never____here again',
	'coming    ',
	'come     ',
	'comes',
	'comedy',
	2,
	0
);

// Question 5
var q5 = new CQuiz(
	'he has studied at that_____school in german for 5 year',
	'black board',
	'bad  ',
	'boardings',
	'boarding',
	4,
	0
);



// total question...
var totQ = [q1, q2, q3, q4, q5];

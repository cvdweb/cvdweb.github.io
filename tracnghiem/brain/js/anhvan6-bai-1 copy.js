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
	"My bedroom is______the bathroom and my parents'bedroom",
	'inside',
	'between ',
	'play',
	'hang out',
	2,
	0
);

// Question 2
var q2 = new CQuiz(
	'we bought some_____ like chair, table,...',
	'Furniture',
	'chair',
	'things',
	'Furnitures',
	4,
	0	
);

// Question 3
var q3 = new CQuiz(
	"their_____engine is verry noisy.",
	"cars'",
	'car is',
	"cars's",
	'cartoon',
	1,
	0
);

// Question 4
var q4 = new CQuiz(
	'there is a big bath in my_____',
	'table',
	'bedroom',
	'bathroom',
	'television',
	3,
	0
);

// Question 5
var q5 = new CQuiz(
	'The winners stay here are____',
	"Chau Van Do's student",
	"Chau Van Do's students",
	'Chau Van Do is students',
	"Chau Van Do're students",
	2,
	0
);



// total question...
var totQ = [q1, q2, q3, q4, q5];

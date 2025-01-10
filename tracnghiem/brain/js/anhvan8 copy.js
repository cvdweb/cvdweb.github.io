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
	'1.jane dances _____ beautifully than long',
	'more',
	'to',
	'not',
	'as',
	1,
	0
);

// Question 2
var q2 = new CQuiz(
	'Jimmy ussually helps his parent to herd their_____every afternoon',
	'A.cattles',
	' B.house',
	'C. nothing',
	'D. another answer',
	1,
	0	
);

// Question 3
var q3 = new CQuiz(
	'3.Bao is____ than thiet',
	'taller',
	'tally ',
	'as tall',
	'more tall',
	1,
	0
);

// Question 4
var q4 = new CQuiz(
	'4.my PE teacher run____than my IT teacher',
	'fast    ',
	'taller      ',
	'quickly',
	'quicklier',
	4,
	0
);

// Question 5
var q5 = new CQuiz(
	'Loc đi this test worse than Tai= Tai did this test___Loc ',
	'gooder ',
	'well  ',
	'better',
	'best',
	3,
	0
);



// total question...
var totQ = [q1, q2, q3, q4, q5];

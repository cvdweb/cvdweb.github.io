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
	'Cặp số nào sau đây là nghiệm của phương trình 2x - y = 3? ',
	'(1; 1) ',
	'(2; 1) ',
	'(1; -1) ',
	'(-1; 1)',
	2,
	0
);

// Question 2
var q2 = new CQuiz(
	'Trong các phương trình sau, phương trình nào là phương trình bậc nhất hai ẩn? ',
	'x² + y = 2 ',
	'2x - 3y = 1 ',
	'x + y² = 0 ',
	'1/x + y = 5',
	2,
	0	
);

// Question 3
var q3 = new CQuiz(
	'Hệ phương trình nào sau đây là hệ phương trình bậc nhất hai ẩn',
	'{x+y=2x−y=1{x+y=2x−y=1 ',
	'{x2+y=3x−y=2{x2+y=3x−y=2 ',
	'{1x+y=2x−y=1{1x+y=2x−y=1',
	'{xy=2x−y=1{xy=2x−y=1',
	1,
	0
);

// Question 4
var q4 = new CQuiz(
	'Nếu (a; b) là nghiệm của hệ phương trình {2x−y=1x+y=3{2x−y=1x+y=3 thì a + b bằng:',
	'1',
	'2',
	'3',
	'4',
	3,
	0
);

// Question 5
var q5 = new CQuiz(
	'Phương trình nào sau đây có vô số nghiệm?',
	'x + y = 1 ',
	'2x - 2y = 0 ',
	'x - y = 3 ',
	'3x + y = 5',
	2,
	0
);



// total question...
var totQ = [q1, q2, q3, q4, q5];

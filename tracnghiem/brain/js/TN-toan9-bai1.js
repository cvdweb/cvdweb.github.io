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
	'Phương trình nào sau đây là phương trình bậc nhất một ẩn? ',
	'x2−3x+2=0 ',
	'x2+1=0 ',
	'3x−5=0 ',
	'x+2=0',
	3,
	0
);

// Question 2
var q2 = new CQuiz(
	'Điều kiện xác định của phương trình x−2x=1 là: ',
	'x=0 ',
	'x=2 ',
	'x=−2 ',
	'x=0 và x=2',
	3,
	0	
);

// Question 3
var q3 = new CQuiz(
	'Nghiệm của phương trình (x−2)(x+3)=0 là: ',
	'x=2 ',
	'x=−3 ',
	'x=2 hoặc x=−3 ',
	'Phương trình vô nghiệm',
	3,
	0
);

// Question 4
var q4 = new CQuiz(
	'Giải phương trình x−12x+1=3, ta được nghiệm là:',
	'x=2 ',
	'x=−2 ',
	'x=4 ',
	'Phương trình vô nghiệm',
	1,
	0
);

// Question 5
var q5 = new CQuiz(
	'Phương trình nào sau đây có thể đưa về dạng phương trình tích? ',
	'x2−4=0 ',
	'x2+4=0 ',
	'x2+2x+1=0 ',
	'Tất cả các phương trình trên',
	4,
	0
);



// total question...
var totQ = [q1, q2, q3, q4, q5];

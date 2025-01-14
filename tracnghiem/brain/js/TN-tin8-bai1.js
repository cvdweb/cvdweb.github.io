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
	'Ai được coi là "cha đẻ của máy tính"? ',
	'Blaise Pascal ',
	'Gottfried Wilhelm Leibniz ',
	'Charles Babbage ',
	'Ada Lovelace',
	3,
	0
);

// Question 2
var q2 = new CQuiz(
	'Ai được coi là lập trình viên máy tính đầu tiên trên thế giới?',
	'Blaise Pascal ',
	'Gottfried Wilhelm Leibniz ',
	'Charles Babbage ',
	'Ada Lovelace',
	4,
	0	
);

// Question 3
var q3 = new CQuiz(
	'Máy tính điện tử đầu tiên được gọi là gì? ',
	'Pascaline ',
	'Analytical Engine ',
	'ENIAC ',
	'IBM 1401',
	2,
	0
);

// Question 4
var q4 = new CQuiz(
	'Thế hệ máy tính nào sử dụng transistor để thay thế đèn chân không? ',
	'Thế hệ 1',
	'Thế hệ 2',
	'Thế hệ 3',
	'Thế hệ 4',
	2,
	0
);

// Question 5
var q5 = new CQuiz(
	'Thành phần nào đã dẫn đến sự ra đời của máy tính cá nhân (PC)?',
	'Mạch tích hợp (IC) ',
	'Vi xử lý (Microprocessor) ',
	'Transistor ',
	'Đèn chân không',
	2,
	0
);



// total question...
var totQ = [q1, q2, q3, q4, q5];

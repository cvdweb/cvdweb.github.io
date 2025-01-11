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
	'Số hữu tỉ là gì?',
	'Một số thập phân vô hạn tuần hoàn.',
	'Một số viết được dưới dạng phân số a⁄b, với a và b là các số nguyên và b ≠ 0.',
	'Một số nguyên.',
	'Một số thập phân hữu hạn.',
	2,
	0
);

// Question 2
var q2 = new CQuiz(
	'Tập hợp các số hữu tỉ được kí hiệu là gì?',
	'ℕ',
	'ℝ',
	'ℚ',
	'ℤ',
	3,
	0	
);

// Question 3
var q3 = new CQuiz(
	'Để biểu diễn số hữu tỉ 3⁄10 trên trục số, ta cần làm gì?',
	'Chia đoạn thẳng đơn vị thành 3 phần bằng nhau và lấy 10 phần.',
	'Chia đoạn thẳng đơn vị thành 10 phần bằng nhau và lấy 3 phần.',
	'Chia đoạn thẳng đơn vị thành 5 phần bằng nhau và lấy 2 phần.',
	'Chia đoạn thẳng đơn vị thành 2 phần bằng nhau và lấy 5 phần.',
	2,
	0
);

// Question 4
var q4 = new CQuiz(
	'Số đối của số hữu tỉ 7⁄3 là gì?',
	'-7⁄3',
	'7⁄3',
	'3⁄7',
	'-3⁄7',
	1,
	0
);

// Question 5
var q5 = new CQuiz(
	'Trên trục số, hai điểm biểu diễn hai số hữu tỉ đối nhau có đặc điểm gì?',
	'Nằm cùng một phía của điểm O và có cùng khoảng cách đến O.',
	'Nằm hai phía khác nhau của điểm O và có cùng khoảng cách đến O.',
	'Nằm cùng một phía của điểm O và có khoảng cách khác nhau đến O.',
	'Nằm hai phía khác nhau của điểm O và có khoảng cách khác nhau đến O.',
	4,
	0
);



// total question...
var totQ = [q1, q2, q3, q4, q5];

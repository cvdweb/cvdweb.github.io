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
	'Phương trình nào sau đây là phương trình bậc nhất hai ẩn?',
	'2x + 3y = 5',
	'x² + y = 1 ',
	'x/y + 2 = 0 ',
	'. x/y + 2 = 0 ',
	1,
	0
);

// Question 2
var q2 = new CQuiz(
	'Điều kiện xác định của phương trình (x-1)/(x+2) = 3 là:',
	'x ≠ 1',
	'x ≠ -2 ',
	'x ≠ 1 và x ≠ -2 ',
	'x ∈ R',
	2,
	0	
);

// Question 3
var q3 = new CQuiz(
	'Nghiệm của hệ phương trình {2x + y = 5; x - y = 1} là:',
	'(2; 1)',
	'(1; 2)',
	'(3; 2)',
	'(2; 3)',
	1,
	0
);

// Question 4
var q4 = new CQuiz(
	'Để giải phương trình (x-2)(x+3) = 0, ta thực hiện:',
	'Giải phương trình x-2 = 0 ',
	'Giải phương trình x+3 = 0 ',
	'Giải cả hai phương trình x-2 = 0 và x+3 = 0 ',
	'Không thể giải được phương trình này',
	3,
	0
);

// Question 5
var q5 = new CQuiz(
	'Một hình chữ nhật có chiều dài hơn chiều rộng 5m. Nếu tăng chiều dài thêm 2m và giảm chiều rộng đi 3m thì diện tích giảm đi 1 16m². Tìm chiều dài và chiều rộng ban đầu của hình chữ nhật.',
	'Chiều dài: 12m, chiều rộng: 7m ',
	'Chiều dài: 10m, chiều rộng: 5m',
	'Chiều dài: 15m, chiều rộng: 10m',
	'Chiều dài: 11m, chiều rộng: 6m',
	1,
	0
);



// total question...
var totQ = [q1, q2, q3, q4, q5];

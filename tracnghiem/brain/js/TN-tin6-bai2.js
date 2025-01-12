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
	'Hoạt động nào sau đây không phải là hoạt động cơ bản trong xử lý thông tin?',
	'Thu nhận thông tin',
	'Lưu trữ thông tin',
	'Hiển thị thông tin',
	'Truyền thông tin',
	3,
	0
);

// Question 2
var q2 = new CQuiz(
	'Bộ phận nào của máy tính được sử dụng để thu nhận thông tin?',
	'Màn hình',
	'Bàn phím',
	'Loa',
	'Ổ cứng',
	2,
	0	
);

// Question 3
var q3 = new CQuiz(
	'Chức năng chính của bộ xử lý (CPU) trong máy tính là gì?',
	'Lưu trữ dữ liệu',
	'Xử lý thông tin',
	'Hiển thị thông tin ra màn hình',
	'Điều khiển các thiết bị ngoại vi',
	2,
	0
);

// Question 4
var q4 = new CQuiz(
	'Thiết bị nào sau đây không phải là thiết bị lưu trữ?',
	'Ổ cứng',
	'Thẻ nhớ',
	'Chuột',
	'Ổ đĩa quang',
	3,
	0
);

// Question 5
var q5 = new CQuiz(
	'Ưu điểm lớn nhất của việc sử dụng máy tính để xử lý thông tin là gì?',
	'Giúp con người giải trí',
	'Giúp con người làm việc chậm hơn',
	'Giúp con người xử lý thông tin nhanh chóng và chính xác hơn',
	'Giúp con người giảm bớt căng thẳng',
	3,
	0
);



// total question...
var totQ = [q1, q2, q3, q4, q5];

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
	'Thông tin là gì?',
	'Những con số, văn bản, hình ảnh và âm thanh.',
	'Phương tiện được dùng để lưu trữ và truyền tải thông tin.',
	'Những gì đem lại hiểu biết cho con người.',
	'Dữ liệu được xử lý.',
	3,
	0
);

// Question 2
var q2 = new CQuiz(
	'Dữ liệu được thể hiện dưới dạng nào?',
	'Chỉ dưới dạng văn bản.',
	'Chỉ dưới dạng hình ảnh.',
	'Chỉ dưới dạng số.',
	'Dưới nhiều dạng như số, văn bản, hình ảnh, âm thanh.',
	4,
	0	
);

// Question 3
var q3 = new CQuiz(
	'Vật mang tin là gì?',
	'Những gì đem lại hiểu biết cho con người.',
	'Phương tiện được dùng để lưu trữ và truyền tải thông tin.',
	'Dữ liệu được xử lý.',
	'Những con số, văn bản, hình ảnh và âm thanh.',
	2,
	0
);

// Question 4
var q4 = new CQuiz(
	'Mối quan hệ giữa thông tin và dữ liệu là gì?',
	'Thông tin và dữ liệu là một.',
	'Thông tin được chứa trong dữ liệu.',
	'Dữ liệu được chứa trong thông tin.',
	'Không có mối quan hệ giữa thông tin và dữ liệu.',
	2,
	0
);

// Question 5
var q5 = new CQuiz(
	'Tầm quan trọng của thông tin là gì?',
	'Giúp con người giải trí.',
	'Giúp con người đưa ra những lựa chọn tốt hơn.',
	'Không có vai trò quan trọng.',
	'Chỉ quan trọng đối với máy tính.',
	2,
	0
);



// total question...
var totQ = [q1, q2, q3, q4, q5];

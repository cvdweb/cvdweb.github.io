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
	'Đơn vị nhỏ nhất để lưu trữ thông tin trong máy tính là gì?',
	'Byte',
	'Kilobyte',
	'Bit',
	'Megabyte',
	3,
	0
);

// Question 2
var q2 = new CQuiz(
	'Số nhị phân được cấu tạo từ những ký hiệu nào?',
	'Các chữ cái',
	'Các số từ 0 đến 9',
	'Chỉ số 0 và 1',
	'Các ký hiệu đặc biệt',
	3,
	0	
);

// Question 3
var q3 = new CQuiz(
	'1 Megabyte tương đương với bao nhiêu Kilobyte?',
	'1024 KB',
	'1000 KB',
	'512 KB',
	'2048 KB',
	1,
	0
);

// Question 4
var q4 = new CQuiz(
	'Thiết bị nào thường có dung lượng lưu trữ lớn nhất trong các thiết bị sau?',
	'Thẻ nhớ',
	'Đĩa CD',
	'Ổ đĩa cứng',
	'USB',
	3,
	0
);

// Question 5
var q5 = new CQuiz(
	'Vì sao máy tính lại sử dụng hệ thống số nhị phân để biểu diễn thông tin?',
	'Vì hệ nhị phân dễ hiểu hơn các hệ số khác.',
	'Vì các mạch điện tử trong máy tính chỉ có hai trạng thái: đóng hoặc mở.',
	'Vì hệ nhị phân có nhiều chữ số hơn các hệ số khác.',
	'Vì hệ nhị phân giúp tiết kiệm bộ nhớ.',
	2,
	0
);



// total question...
var totQ = [q1, q2, q3, q4, q5];

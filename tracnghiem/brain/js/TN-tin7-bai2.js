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
	'Chức năng chính của hệ điều hành là gì?',
	'A. Quản lí tài khoản người dùng ',
	'B. Quản lí, điều khiển các thiết bị phần cứng',
	'C. Cung cấp phần mềm ứng dụng cho người dùng',
	'D. Lưu trữ dữ liệu trên ổ cứng',
	2,
	0
);

// Question 2
var q2 = new CQuiz(
	'Phần mềm ứng dụng có vai trò gì trong hệ thống máy tính?',
	'A. Điều khiển các thiết bị phần cứng',
	'B. Quản lí tiến trình và tài nguyên của máy tính',
	'C. Cung cấp công cụ hỗ trợ người dùng xử lý công việc',
	'D. Lưu trữ và tổ chức dữ liệu',
	3,
	0	
);

// Question 3
var q3 = new CQuiz(
	'Điều nào sau đây không phải là chức năng của hệ điều hành?',
	'A. Quản lí, điều khiển các thiết bị phần cứng',
	'B. Cấp phát tài nguyên cho các tiến trình',
	'C. Quản lí phần mềm ứng dụng của máy tính',
	'D. Cung cấp công cụ xử lý công việc cho người dùng',
	4,
	0
);

// Question 4
var q4 = new CQuiz(
	'Để máy tính có thể sử dụng được phần mềm ứng dụng, điều gì cần thiết?',
	'A. Máy tính phải có đủ bộ nhớ',
	'B. Máy tính phải được cài đặt hệ điều hành',
	'C. Máy tính phải có phần mềm bảo mật',
	'D. Máy tính phải kết nối với Internet',
	2,
	0
);

// Question 5
var q5 = new CQuiz(
	'Phần mềm ứng dụng tương tác với thiết bị phần cứng thông qua cái gì?',
	'A. Bộ nhớ trong',
	'B. Hệ điều hành',
	'C. Phần mềm quản lí dữ liệu',
	'D. Mạng internet',
	2,
	0
);



// total question...
var totQ = [q1, q2, q3, q4, q5];

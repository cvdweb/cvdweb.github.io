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
	'Bộ phận nào được xem là "não bộ" của máy tính? ',
	'A. Bàn phím ',
	'B. Chuột ',
	'C. CPU ',
	'D. Màn hình',
	3,
	0
);

// Question 2
var q2 = new CQuiz(
	'Máy tính được sử dụng để làm gì trong lĩnh vực giáo dục? ',
	'A. Chỉ để chơi game ',
	'B. Hỗ trợ học tập trực tuyến, nghiên cứu và tạo tài liệu ',
	'C. Chỉ để nghe nhạc ',
	'D. Chỉ để xem phim',
	2,
	0	
);

// Question 3
var q3 = new CQuiz(
	'Ưu điểm lớn nhất của máy tính là gì? ',
	'A. Gây nghiện game',
	'B. Tốc độ xử lý chậm ',
	'C. Dung lượng lưu trữ nhỏ ',
	'D. Tốc độ xử lý nhanh và dung lượng lưu trữ lớn',
	4,
	0
);

// Question 4
var q4 = new CQuiz(
	'Máy tính có thể giúp chúng ta thực hiện các công việc nào trong lĩnh vực kinh doanh? ',
	'A. Chỉ để gửi email ',
	'B. Quản lý kho, bán hàng, tiếp thị trực tuyến ',
	'C. Chỉ để thiết kế đồ họa ',
	'D. Chỉ để soạn thảo văn bản',
	2,
	0
);

// Question 5
var q5 = new CQuiz(
	'Một trong những hạn chế của việc sử dụng máy tính là gì? ',
	'A. Giúp chúng ta kết nối với mọi người ',
	'B. Gây nghiện game, mạng xã hội ',
	'C. Tự động hóa nhiều công việc ',
	'D. Tốc độ xử lý nhanh',
	2,
	0
);



// total question...
var totQ = [q1, q2, q3, q4, q5];

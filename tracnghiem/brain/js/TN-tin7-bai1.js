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
	'Thiết bị nào sau đây KHÔNG phải là thiết bị vào?',
	'A. Bàn phím ',
	'B. Chuột ',
	'C. Màn hình ',
	'D. Máy quét',
	3,
	0
);

// Question 2
var q2 = new CQuiz(
	'Chức năng chính của thiết bị ra là gì?',
	'A. Nhập liệu vào máy tính ',
	'B. Hiển thị kết quả xử lý của máy tính ',
	'C. Lưu trữ dữ liệu ',
	'D. Xử lý thông tin',
	2,
	0	
);

// Question 3
var q3 = new CQuiz(
	'Thiết bị nào sau đây là thiết bị vào-ra tích hợp?',
	'A. Ổ đĩa cứng ',
	'B. Thẻ nhớ ',
	'C. Máy in ',
	'D. Loa',
	3,
	0
);

// Question 4
var q4 = new CQuiz(
	'Khi lắp ráp thiết bị vào máy tính, điều nào sau đây là QUAN TRỌNG nhất?',
	'A. Lắp thiết bị càng nhanh càng tốt ',
	'B. Đảm bảo các cổng và đầu nối khớp nhau ',
	'C. Không cần đọc hướng dẫn sử dụng ',
	'D. Sử dụng bất kỳ loại cáp nào đều được',
	2,
	0
);

// Question 5
var q5 = new CQuiz(
	'Để bảo quản thiết bị máy tính tốt, ta nên:',
	'A. Để thiết bị ở nơi ẩm ướt ',
	'B. Rút thiết bị ra khi đang ghi dữ liệu ',
	'C. Tắt máy tính ngay khi không sử dụng ',
	'D. Vệ sinh thiết bị thường xuyên',
	4,
	0
);



// total question...
var totQ = [q1, q2, q3, q4, q5];

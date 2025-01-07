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
	'Câu hỏi tin 7?',
	'Dãy bit',
	'Hình ảnh',
	'Âm thanh',
	'Tùy ý',
	1,
	0
);

// Question 2
var q2 = new CQuiz(
	'Một quyển sách A gồm 200 trang nếu lưu trữ trên đĩa chiếm khoảng 5MB. Hỏi 1 đĩa cứng 40GB thì có thể chứa khoảng bao nhiêu cuốn sách có dung lượng thông tin xấp xỉ cuốn sách A?',
	'8000',
	'8129',
	'8291',
	'8192',
	2,
	0	
);

// Question 3
var q3 = new CQuiz(
	'Câu hỏi số 3',
	'False',
	'True',
	'1',
	'0',
	2,
	0
);

// Question 4
var q4 = new CQuiz(
	'Câu hỏi 4?',
	'a',
	'b',
	'c',
	'd',
	3,
	0
);

// Question 5
var q5 = new CQuiz(
	'Câu hỏi số 5?',
	'a',
	'b',
	'c',
	'd',
	2,
	0
);



// total question...
var totQ = [q1, q2, q3, q4, q5];

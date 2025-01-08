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
	'Kết quả của phép tính 0,3 + <sup>2</sup>&frasl;<sub>3</sub> là gì?',
	'<sup>3</sup>&frasl;<sub>10</sub>',
	'<sup>2</sup>&frasl;<sub>3</sub>',
	'<sup>29</sup>&frasl;<sub>30</sub>',
	'<sup>5</sup>&frasl;<sub>6</sub>',
	3,
	0
);

// Question 2
var q2 = new CQuiz(
	'Tính hợp lý biểu thức: <sup>-3</sup>&frasl;<sub>10</sub> + 0,125 + <sup>-7</sup>&frasl;<sub>10</sub> + 0,875 + <sup>4</sup>&frasl;<sub>5</sub> là gì?',
	'<sup>-1</sup>&frasl;<sub>10</sub>',
	'<sup>4</sup>&frasl;<sub>5</sub>',
	'<sup>1</sup>&frasl;<sub>2</sub>',
	'<sup>3</sup>&frasl;<sub>10</sub>',
	2,
	0	
);

// Question 3
var q3 = new CQuiz(
	'Kết quả của phép tính (<sup>-9</sup>&frasl;<sub>8</sub> &times; <sup>-8</sup>&frasl;<sub>7</sub>) &times; 3 là gì?',
	'<sup>4</sup>&frasl;<sub>15</sub>',
	'1',
	'4',
	'<sup>4</sup>&frasl;<sub>5</sub>',
	4,
	0
);

// Question 4
var q4 = new CQuiz(
	'Kết quả của phép tính 5<sup>1</sup>&frasl;<sub>2</sub> : (<sup>-2</sup>&frasl;<sub>3</sub>) là gì?',
	'<sup>11</sup>&frasl;<sub>4</sub>',
	'<sup>11</sup>&frasl;<sub>3</sub>',
	'<sup>22</sup>&frasl;<sub>3</sub>',
	'<sup>-33</sup>&frasl;<sub>4</sub>',
	4,
	0
);

// Question 5
var q5 = new CQuiz(
	'Tính chất nào đúng cho phép cộng số hữu tỉ?',
	'Không giao hoán',
	'Kết hợp và cộng với số 1',
	'Giao hoán, kết hợp và cộng với số 0',
	'Không kết hợp',
	3,
	0
);



// total question...
var totQ = [q1, q2, q3, q4, q5];

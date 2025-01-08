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
	'Cho <sup>2</sup>&frasl;<sub>3</sub> và <sup>2</sup>, giá trị của <sup>2</sup>&frasl;<sub>3</sub><sup>2</sup> là gì?',
	'<sup>4</sup>&frasl;<sub>9</sub>',
	'<sup>2</sup>&frasl;<sub>9</sub>',
	'<sup>9</sup>&frasl;<sub>4</sub>',
	'<sup>3</sup>&frasl;<sub>2</sub>',
	1,
	0
);

// Question 2
var q2 = new CQuiz(
	'Cho <sup>5</sup>&frasl;<sub>6</sub> và <sup>3</sup>, giá trị của <sup>5</sup>&frasl;<sub>6</sub><sup>3</sup> là gì?',
	'<sup>25</sup>&frasl;<sub>36</sub>',
	'<sup>125</sup>&frasl;<sub>216</sub>',
	'<sup>125</sup>&frasl;<sub>216</sub>',
	'<sup>6</sup>&frasl;<sub>5</sub>',
	3,
	0	
);

// Question 3
var q3 = new CQuiz(
	'Cho <sup>3</sup>&frasl;<sub>4</sub> và <sup>-1</sup>, giá trị của <sup>3</sup>&frasl;<sub>4</sub><sup>-1</sup> là gì?',
	'<sup>4</sup>&frasl;<sub>3</sub>',
	'<sup>3</sup>&frasl;<sub>4</sub>',
	'<sup>-4</sup>&frasl;<sub>3</sub>',
	'<sup>1</sup>&frasl;<sub>3</sub>',
	1,
	0
);

// Question 4
var q4 = new CQuiz(
	'Cho <sup>1</sup>&frasl;<sub>5</sub> và <sup>2</sup>, giá trị của <sup>1</sup>&frasl;<sub>5</sub><sup>2</sup> là gì??',
	'<sup>5</sup>&frasl;<sub>25</sub>',
	'<sup>1</sup>&frasl;<sub>25</sub>',
	'<sup>1</sup>&frasl;<sub>5</sub>',
	'<sup>5</sup>&frasl;<sub>1</sub>',
	2,
	0
);

// Question 5
var q5 = new CQuiz(
	'Cho <sup>4</sup>&frasl;<sub>5</sub> và <sup>-2</sup>, giá trị của <sup>4</sup>&frasl;<sub>5</sub><sup>-2</sup> là gì?',
	'<sup>25</sup>&frasl;<sub>16</sub>',
	'<sup>5</sup>&frasl;<sub>4</sub>',
	'<sup>16</sup>&frasl;<sub>25</sub>',
	'<sup>4</sup>&frasl;<sub>5</sub>',
	3,
	0
);



// total question...
var totQ = [q1, q2, q3, q4, q5];

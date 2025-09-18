const questionsByLesson = {
  bai1: [
    {
    "question": "Thiết bị nào sau đây là thiết bị vào của máy tính?",
    "options": ["Màn hình", "Chuột", "Loa", "Máy in"],
    "correct": 1,
    "type": "single",
    "level": "NB"
},
{
    "question": "Thiết bị nào sau đây không phải là thiết bị ra?",
    "options": ["Máy in", "Màn hình", "Bàn phím", "Loa"],
    "correct": 2,
    "type": "single",
    "level": "NB"
},
{
    "question": "Màn hình cảm ứng thuộc loại thiết bị nào?",
    "options": ["Thiết bị vào", "Thiết bị ra", "Vừa vào vừa ra", "Không phải thiết bị vào-ra"],
    "correct": 2,
    "type": "single",
    "level": "TH"
},
{
    "question": "Trong các thiết bị sau, đâu là thiết bị vừa vào vừa ra?",
    "options": ["Ổ cứng", "Màn hình cảm ứng", "Máy quét", "Loa"],
    "correct": 1,
    "type": "single",
    "level": "TH"
},
{
    "question": "Học sinh muốn nhập văn bản vào máy tính, cần dùng thiết bị nào?",
    "options": ["Bàn phím", "Màn hình", "Máy in", "Loa"],
    "correct": 0,
    "type": "single",
    "level": "TH"
},
{
    "question": "Một học sinh muốn vừa ghi âm giọng nói vừa nghe nhạc trên máy tính. Thiết bị nào phù hợp nhất?",
    "options": ["Loa", "Micro", "Tai nghe có micro", "Máy quét"],
    "correct": 2,
    "type": "single",
    "level": "TH"
},
{
    "question": "Một giáo viên dùng bút cảm ứng viết trực tiếp lên màn hình máy tính bảng và nội dung hiển thị ngay. Thiết bị này được xếp vào loại nào?",
    "options": ["Thiết bị vào", "Thiết bị ra", "Vừa vào vừa ra", "Thiết bị lưu trữ"],
    "correct": 2,
    "type": "single",
    "level": "TH"
},
{
    "question": "Khi thuyết trình, học sinh kết nối laptop với máy chiếu. Trong tình huống này, máy chiếu đóng vai trò gì?",
    "options": ["Thiết bị vào", "Thiết bị ra", "Vừa vào vừa ra", "Thiết bị lưu trữ"],
    "correct": 1,
    "type": "single",
    "level": "TH"
},
{
    "question": "Một bạn chơi game trên điện thoại bằng màn hình cảm ứng. Khi chạm và vuốt để điều khiển nhân vật, màn hình cảm ứng đang thực hiện chức năng nào?",
    "options": ["Thiết bị vào", "Thiết bị ra", "Vừa vào vừa ra", "Không phải thiết bị vào-ra"],
    "correct": 0,
    "type": "single",
    "level": "TH"
},
{
    "question": "Một công ty dùng máy quét vân tay để chấm công cho nhân viên. Máy quét vân tay thuộc loại thiết bị nào?",
    "options": ["Thiết bị vào", "Thiết bị ra", "Vừa vào vừa ra", "Thiết bị lưu trữ"],
    "correct": 0,
    "type": "single",
    "level": "TH"
},
{
    "question": "Các thiết bị nào sau đây là thiết bị vào của máy tính? (Chọn nhiều)",
    "options": ["Màn hình", "Chuột", "Bàn phím", "Loa", "Máy quét"],
    "correct": [1, 2, 4],
    "type": "multiple",
    "level": "NB"
},
{
    "question": "Thiết bị nào sau đây là thiết bị ra? (Chọn nhiều)",
    "options": ["Màn hình", "Loa", "Bàn phím", "Máy in", "Micro"],
    "correct": [0, 1, 3],
    "type": "multiple",
    "level": "NB"
},

 {
    "question": "Khi lắp ráp máy tính, việc nào sau đây giúp đảm bảo an toàn điện?",
    "options": ["Đeo găng tay vải", "Rút nguồn điện trước khi thao tác", "Làm việc ở nơi ẩm ướt", "Chạm trực tiếp vào ổ cắm"],
    "correct": 1,
    "type": "single",
    "level": "NB"
},
{
    "question": "Những hành động nào sau đây là đúng khi sử dụng thiết bị điện tử trong phòng học? (Chọn nhiều)",
    "options": ["Ngồi đúng tư thế khi sử dụng máy tính", "Không để nước uống gần máy tính", "Tự ý tháo rời nguồn điện của máy", "Tuân theo hướng dẫn của giáo viên"],
    "correct": [0,1,3],
    "type": "multiple",
    "level": "TH"
},
{
    "question": "Khi cần di chuyển thùng máy tính, học sinh nên làm gì?",
    "options": ["Xách bằng một tay", "Khiêng bằng hai tay cẩn thận", "Kéo lê trên sàn lớp học", "Đặt lên ghế xoay để đẩy đi"],
    "correct": 1,
    "type": "single",
    "level": "NB"
},
{
    "question": "Những thiết bị nào sau đây cần thận trọng khi lắp ráp vì dễ gây nguy hiểm? (Chọn nhiều)",
    "options": ["Nguồn điện", "Ổ cứng", "Mainboard", "Màn hình CRT (cũ)"],
    "correct": [0,3],
    "type": "multiple",
    "level": "TH"
},
{
    "question": "Tại sao cần tránh dùng tay chạm trực tiếp vào các linh kiện bên trong máy tính?",
    "options": ["Vì tay dễ làm gãy linh kiện", "Vì mồ hôi tay có thể gây gỉ sét", "Vì điện tích cơ thể có thể làm hỏng mạch", "Vì linh kiện có thể rơi vỡ"],
    "correct": 2,
    "type": "single",
    "level": "TH"
},
{
    "question": "Những biện pháp nào giúp bảo đảm an toàn khi sử dụng máy tính trong lớp học? (Chọn nhiều)",
    "options": ["Ngồi ngay ngắn, khoảng cách mắt và màn hình hợp lý", "Không sờ vào dây điện hở", "Cắm nhiều thiết bị vào một ổ điện duy nhất", "Không mang đồ ăn, nước uống gần thiết bị"],
    "correct": [0,1,3],
    "type": "multiple",
    "level": "TH"
},
{
    "question": "Khi máy tính gặp sự cố, học sinh nên làm gì?",
    "options": ["Tự ý tháo mở thùng máy để kiểm tra", "Báo cho giáo viên hoặc người phụ trách", "Tiếp tục sử dụng bình thường", "Dùng tay gõ mạnh vào thùng máy"],
    "correct": 1,
    "type": "single",
    "level": "TH"
},
{
    "question": "Những vật dụng nào cần tránh đặt gần máy tính để đảm bảo an toàn? (Chọn nhiều)",
    "options": ["Nước uống", "Nam châm", "Sách vở", "Thức ăn"],
    "correct": [0,1,3],
    "type": "multiple",
    "level": "NB"
},
{
    "question": "Tư thế nào là đúng khi ngồi sử dụng máy tính?",
    "options": ["Ngồi thẳng lưng, mắt cách màn hình 50–70cm", "Ngồi gục mặt vào màn hình", "Ngồi vắt chéo chân trên ghế xoay", "Ngồi quá xa màn hình phải nhoài người"],
    "correct": 0,
    "type": "single",
    "level": "NB"
},
{
    "question": "Khi lắp ráp và sử dụng máy tính, học sinh cần chú ý những gì? (Chọn nhiều)",
    "options": ["Đảm bảo an toàn điện", "Giữ gìn vệ sinh và trật tự trong phòng máy", "Tự ý tháo lắp các bộ phận chưa học", "Tuân thủ hướng dẫn của giáo viên"],
    "correct": [0,1,3],
    "type": "multiple",
    "level": "TH"
}

]
};

window.questionsByLesson = questionsByLesson;

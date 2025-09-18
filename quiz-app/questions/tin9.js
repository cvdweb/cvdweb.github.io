const questionsByLesson = {
  bai1: [
    {
        "question": "Máy tính có vai trò quan trọng nhất là gì?",
        "options": ["Giúp giải trí", "Giúp lưu trữ, xử lý và trao đổi thông tin", "Giúp nấu ăn", "Giúp xây nhà"],
        "correct": 1,
        "type": "single",
        "level": "NB"
    },
    {
        "question": "Trong học tập, máy tính giúp học sinh:",
        "options": ["Chỉ dùng để chơi game", "Tìm kiếm thông tin, học trực tuyến, làm bài tập", "Không có tác dụng gì", "Thay thế hoàn toàn giáo viên"],
        "correct": 1,
        "type": "single",
        "level": "NB"
    },
    {
        "question": "Những lĩnh vực nào sau đây ứng dụng máy tính nhiều? (Chọn nhiều)",
        "options": ["Giáo dục", "Y tế", "Nông nghiệp", "Xây dựng", "Thời trang"],
        "correct": [0, 1, 2, 3, 4],
        "type": "multiple",
        "level": "NB"
    },
    {
        "question": "Máy tính và Internet đã thay đổi cách con người học tập như thế nào?",
        "options": ["Chỉ học qua sách giấy", "Có thể học trực tuyến mọi lúc, mọi nơi", "Không cần học nữa", "Chỉ học qua tivi"],
        "correct": 1,
        "type": "single",
        "level": "NB"
    },
    {
        "question": "Những lợi ích nào sau đây máy tính mang lại cho giáo dục? (Chọn nhiều)",
        "options": ["Tăng cường khả năng tự học", "Giúp học sinh tiếp cận kiến thức mới", "Giúp trao đổi nhanh chóng với giáo viên", "Giúp học sinh không cần học bài nữa"],
        "correct": [0, 1, 2],
        "type": "multiple",
        "level": "NB"
    },
    {
        "question": "Máy tính đã tác động đến xã hội theo những khía cạnh nào?",
        "options": ["Công việc, giải trí, giao tiếp", "Chỉ ảnh hưởng đến học sinh", "Không có ảnh hưởng gì", "Chỉ ảnh hưởng đến người già"],
        "correct": 0,
        "type": "single",
        "level": "NB"
    },
    {
        "question": "Điểm tích cực của công nghệ thông tin đối với xã hội là gì? (Chọn nhiều)",
        "options": ["Kết nối con người trên toàn thế giới", "Tăng hiệu quả công việc", "Hỗ trợ nghiên cứu khoa học", "Làm con người lười biếng hơn"],
        "correct": [0, 1, 2],
        "type": "multiple",
        "level": "NB"
    },
    {
        "question": "Hạn chế nào có thể xảy ra khi lạm dụng máy tính và Internet?",
        "options": ["Tăng cường sức khỏe", "Nghiện trò chơi điện tử", "Giảm khả năng giao tiếp trực tiếp", "Lãng phí thời gian"],
        "correct": [1, 2, 3],
        "type": "multiple",
        "level": "TH"
    },
    {
        "question": "Trong giáo dục, ngoài lợi ích, việc sử dụng công nghệ cũng cần chú ý điều gì?",
        "options": ["Học sinh cần biết chọn lọc thông tin đáng tin cậy", "Có thể tin tất cả thông tin trên mạng", "Không cần thầy cô hướng dẫn nữa", "Học sinh chỉ nên học qua mạng xã hội"],
        "correct": 0,
        "type": "single",
        "level": "TH"
    },
    {
        "question": "Theo em, trong tương lai, máy tính và công nghệ sẽ ảnh hưởng lớn nhất đến lĩnh vực nào?",
        "options": ["Chỉ trong giải trí", "Chỉ trong học tập", "Trong hầu hết các lĩnh vực: giáo dục, y tế, khoa học, sản xuất, giao thông,...", "Không ảnh hưởng nhiều"],
        "correct": 2,
        "type": "single",
        "level": "NB"
    }
  ],
  bai2: [
  {
    "question": "Thông tin nào sau đây thể hiện tính CHÍNH XÁC?",
    "options": ["Dự báo thời tiết hôm nay có thể mưa, nhưng không chắc", "Kết quả đo nhiệt độ cơ thể bằng nhiệt kế điện tử", "Nghe tin đồn trên mạng xã hội", "Lời tiên tri không có căn cứ"],
    "correct": 1,
    "type": "single",
    "level": "TH"
  },
  {
    "question": "Khi tìm hiểu để viết bài thuyết trình về một sự kiện lịch sử, tiêu chí 'tính mới' được hiểu là:",
    "options": ["Chọn nguồn thông tin do thầy cô biên soạn", "Chọn nguồn thông tin có ngày cập nhật gần đây", "Chọn nguồn thông tin nhiều người chia sẻ", "Chọn nguồn thông tin có hình ảnh minh họa"],
    "correct": 1,
    "type": "single",
    "level": "TH"
  },
  {
    "question": "Một bạn thu thập số liệu về dân số Việt Nam năm 2010 để làm báo cáo năm 2025. Thông tin này thiếu tiêu chí nào?",
    "options": ["Tính chính xác", "Tính mới", "Tính đầy đủ", "Tính sử dụng được"],
    "correct": 1,
    "type": "single",
    "level": "TH"
  },
  {
    "question": "Trong 4 tiêu chí chất lượng thông tin, tiêu chí nào giúp người sử dụng đưa ra quyết định đúng đắn?",
    "options": ["Tính chính xác", "Tính đầy đủ", "Tính sử dụng được", "Tính mới"],
    "correct": 2,
    "type": "single",
    "level": "TH"
  },
  {
    "question": "Một nhóm học sinh muốn tìm thông tin để làm bài thuyết trình về ô nhiễm môi trường ở địa phương nhưng chỉ lấy số liệu từ năm 2000. Thông tin này thiếu tiêu chí nào?",
    "options": ["Tính chính xác", "Tính mới", "Tính đầy đủ", "Tính sử dụng được"],
    "correct": 1,
    "type": "single",
    "level": "TH"
  },
  {
    "question": "Thông tin từ nguồn nào dưới đây có tính ĐẦY ĐỦ hơn khi tìm hiểu về bệnh sốt xuất huyết?",
    "options": ["Bài viết ngắn trên mạng xã hội", "Trang web chính thức của Bộ Y tế", "Ý kiến cá nhân trong diễn đàn", "Một câu chuyện truyền miệng"],
    "correct": 1,
    "type": "single",
    "level": "TH"
  },
  {
    "question": "Một bạn ghi chép kết quả thí nghiệm đầy đủ các bước và số liệu. Đây là biểu hiện của tiêu chí nào?",
    "options": ["Tính chính xác", "Tính đầy đủ", "Tính mới", "Tính sử dụng được"],
    "correct": 1,
    "type": "single",
    "level": "TH"
  },
  {
    "question": "Trong các tình huống sau, đâu là ví dụ về thông tin có tính SỬ DỤNG ĐƯỢC?",
    "options": ["Một công thức nấu ăn bằng tiếng Pháp mà bạn không biết đọc", "Hướng dẫn giải bài toán đúng và dễ hiểu với học sinh lớp 9", "Tin tức bóng đá quốc tế khi bạn cần làm bài tập về môi trường", "Một bản báo cáo chưa hoàn thành"],
    "correct": 1,
    "type": "single",
    "level": "TH"
  },
  {
    "question": "Để đảm bảo chất lượng khi giải quyết vấn đề, người thu thập thông tin cần làm gì?",
    "options": ["Chỉ chọn thông tin ngắn gọn, dễ đọc", "Chọn thông tin đáp ứng đủ 4 tiêu chí: chính xác, mới, đầy đủ, sử dụng được", "Tin tưởng vào cảm nhận cá nhân", "Chỉ cần thông tin từ một nguồn duy nhất"],
    "correct": 1,
    "type": "single",
    "level": "TH"
  },
  {
    "question": "Khi lên kế hoạch đi dã ngoại, nhóm A chỉ xem dự báo thời tiết tuần trước. Hậu quả có thể là gì?",
    "options": ["Không chọn đúng địa điểm tham quan", "Không chuẩn bị phù hợp do thông tin thiếu tính mới", "Không mang đủ thức ăn", "Không phân công nhiệm vụ rõ ràng"],
    "correct": 1,
    "type": "single",
    "level": "TH"
  }
]
};

window.questionsByLesson = questionsByLesson;

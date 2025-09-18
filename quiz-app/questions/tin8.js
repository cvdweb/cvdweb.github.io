const questionsByLesson = {
  bai1: [
    {
        "question": "Máy tính ENIAC (1946) thuộc thế hệ máy tính nào?",
        "options": ["Thế hệ thứ nhất", "Thế hệ thứ hai", "Thế hệ thứ ba", "Thế hệ thứ tư"],
        "correct": 0,
        "type": "single",
        "level": "NB"
    },
    {
        "question": "Đặc điểm nổi bật của máy tính thế hệ thứ hai (dùng bóng bán dẫn) là gì?",
        "options": ["Kích thước nhỏ hơn, ít tỏa nhiệt hơn", "Tốc độ tính toán nhanh hơn", "Giá thành rẻ hơn", "Có hệ điều hành hiện đại"],
        "correct": [0, 1, 2],
        "type": "multiple",
        "level": "NB"
    },
    {
        "question": "Máy tính IBM 1620 sử dụng công nghệ nào?",
        "options": ["Bóng đèn điện tử", "Bóng bán dẫn", "Mạch tích hợp", "Vi xử lí"],
        "correct": 1,
        "type": "single",
        "level": "NB"
    },
    {
        "question": "Máy tính thế hệ thứ ba (1965–1971) có đặc điểm nào sau đây? (Chọn nhiều)",
        "options": ["Sử dụng mạch tích hợp (IC)", "Kích thước lớn, tỏa nhiệt mạnh", "Có hệ điều hành", "Khả năng đa nhiệm tốt hơn"],
        "correct": [0, 2, 3],
        "type": "multiple",
        "level": "NB"
    },
    {
        "question": "Altair 8800 (1975) được coi là máy tính đầu tiên thuộc thế hệ nào?",
        "options": ["Thế hệ thứ nhất", "Thế hệ thứ hai", "Thế hệ thứ ba", "Thế hệ thứ tư"],
        "correct": 3,
        "type": "single",
        "level": "NB"
    },
    {
        "question": "Những cải tiến của máy tính thế hệ thứ tư (từ 1971 đến nay) gồm những điểm nào? (Chọn nhiều)",
        "options": ["Sử dụng vi xử lí", "Kích thước nhỏ gọn", "Giá thành ngày càng rẻ", "Khả năng kết nối mạng toàn cầu"],
        "correct": [0, 1, 2, 3],
        "type": "multiple",
        "level": "NB"
    },
    {
        "question": "Ai được xem là cha đẻ của máy tính hiện đại với mô hình 'Máy Turing' năm 1936?",
        "options": ["Charles Babbage", "Alan Turing", "John von Neumann", "Bill Gates"],
        "correct": 1,
        "type": "single",
        "level": "NB"
    },
    {
        "question": "Những điểm chung nào của các thế hệ máy tính sau này so với thế hệ đầu tiên? (Chọn nhiều)",
        "options": ["Kích thước ngày càng nhỏ", "Tốc độ xử lí ngày càng nhanh", "Khả năng lưu trữ tăng", "Tiêu thụ điện năng nhiều hơn"],
        "correct": [0, 1, 2],
        "type": "multiple",
        "level": "NB"
    },
    {
        "question": "Máy tính nào sau đây được coi là đầu tiên sử dụng kiến trúc Von Neumann?",
        "options": ["ENIAC", "IBM 1620", "IBM 370", "Altair 8800"],
        "correct": 0,
        "type": "single",
        "level": "NB"
    },
    {
        "question": "Những phát minh nào có ảnh hưởng trực tiếp đến sự phát triển của máy tính? (Chọn nhiều)",
        "options": ["Bóng bán dẫn", "Mạch tích hợp (IC)", "Vi xử lí", "Đèn LED"],
        "correct": [0, 1, 2],
        "type": "multiple",
        "level": "NB"
    }
  ],
  bai2: [
  {
    "question": "Thông tin số được biểu diễn dưới dạng nào trong máy tính?",
    "options": ["Âm thanh", "Hình ảnh", "Dãy bit 0 và 1", "Văn bản"],
    "correct": 2,
    "type": "single",
    "level": "TH"
  },
  {
    "question": "Đặc điểm nào sau đây đúng với thông tin số? (Chọn nhiều)",
    "options": ["Đa dạng: văn bản, hình ảnh, âm thanh, video", "Luôn luôn chính xác tuyệt đối", "Có thể dễ dàng sao chép và lan truyền", "Có thể khó thu hồi triệt để sau khi phát tán"],
    "correct": [0,2,3],
    "type": "multiple",
    "level": "TH"
  },
  {
    "question": "Vì sao thông tin số khó thu hồi triệt để sau khi chia sẻ?",
    "options": ["Vì có thể tồn tại nhiều bản sao trên Internet", "Vì chỉ lưu trong RAM", "Vì không có ai quản lý", "Vì máy tính không xóa được dữ liệu"],
    "correct": 0,
    "type": "single",
    "level": "TH"
  },
  {
    "question": "Nguồn nào sau đây được coi là đáng tin cậy nhất khi tra cứu thông tin tuyển sinh?",
    "options": ["Một bài viết trên blog cá nhân", "Thông báo chính thức từ Sở Giáo dục và Đào tạo", "Tin lan truyền trên mạng xã hội", "Bài viết trong nhóm chat bạn bè"],
    "correct": 1,
    "type": "single",
    "level": "TH"
  },
  {
    "question": "Để đánh giá độ tin cậy của thông tin trên mạng, cần làm gì? (Chọn nhiều)",
    "options": ["Kiểm tra tác giả, nguồn gốc, ngày đăng", "Chỉ đọc tiêu đề bài viết", "So sánh thông tin từ nhiều nguồn khác nhau", "Chọn thông tin có nhiều lượt chia sẻ nhất"],
    "correct": [0,2],
    "type": "multiple",
    "level": "TH"
  },
  {
    "question": "Tính bản quyền của thông tin số có nghĩa là gì?",
    "options": ["Thông tin số không cần tuân theo luật", "Ai cũng có thể sử dụng tự do", "Người sáng tạo có quyền kiểm soát việc sử dụng lại", "Chỉ dùng được khi không có Internet"],
    "correct": 2,
    "type": "single",
    "level": "TH"
  },
  {
    "question": "Đặc điểm nào sau đây không đúng với thông tin số?",
    "options": ["Được thu thập và lưu trữ với dung lượng lớn", "Có công cụ hỗ trợ tìm kiếm và xử lí", "Chỉ truy cập được trên một máy tính duy nhất", "Đa dạng về hình thức như văn bản, âm thanh, hình ảnh"],
    "correct": 2,
    "type": "single",
    "level": "TH"
  },
  {
    "question": "Khi đọc thông tin trên Internet, việc nào sau đây là khai thác thông tin không đáng tin?",
    "options": ["Chỉ tin vào bài viết y tế không rõ tác giả", "Kiểm tra nguồn thông tin trước khi dùng", "So sánh với nhiều nguồn khác", "Chỉ dùng thông tin từ cơ quan uy tín"],
    "correct": 0,
    "type": "single",
    "level": "TH"
  },
  {
    "question": "Những yếu tố nào giúp thông tin trở nên đáng tin cậy hơn? (Chọn nhiều)",
    "options": ["Nguồn gốc uy tín (cơ quan, tổ chức chính thống)", "Có dẫn chứng và trích nguồn rõ ràng", "Được nhiều người thích và chia sẻ", "Tác giả, ngày đăng minh bạch"],
    "correct": [0,1,3],
    "type": "multiple",
    "level": "TH"
  },
  {
    "question": "Một trong những lợi ích lớn của thông tin số là gì?",
    "options": ["Khó tìm kiếm và xử lí", "Chỉ tồn tại trong thời gian ngắn", "Có thể chia sẻ nhanh chóng và rộng rãi", "Không thể lưu trữ lâu dài"],
    "correct": 2,
    "type": "single",
    "level": "TH"
  }
]
};

window.questionsByLesson = questionsByLesson;

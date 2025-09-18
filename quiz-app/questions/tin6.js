const questionsByLesson = {
  bai1: [
    {
      "question": "Thông tin là gì?",
      "options": ["Những con số và ký hiệu thô", "Những điều con người nhận biết được về sự vật, hiện tượng", "Một loại máy tính", "Một trò chơi"],
      "correct": 1,
      "type": "single",
      "level": "NB"
    },
    {
      "question": "Dữ liệu là gì?",
      "options": ["Những con số, ký hiệu, âm thanh, hình ảnh được ghi lại", "Những kiến thức đã được hiểu", "Một loại phần mềm", "Một trò chơi điện tử"],
      "correct": 0,
      "type": "single",
      "level": "NB"
    },
    {
      "question": "Trong các ví dụ sau, đâu là dữ liệu? (Chọn nhiều)",
      "options": ["Bảng điểm 9, 8, 7", "Hình ảnh chụp mặt trăng", "Câu nhận xét: Bạn Nam học rất chăm chỉ", "Âm thanh tiếng chim hót"],
      "correct": [0, 1, 3],
      "type": "multiple",
      "level": "TH"
    },
    {
      "question": "Trong các ví dụ sau, đâu là thông tin?",
      "options": ["Kết quả: Nam đạt học sinh giỏi", "Dãy số: 2, 4, 6, 8", "Bức ảnh đen trắng", "File âm nhạc chưa nghe"],
      "correct": 0,
      "type": "single",
      "level": "TH"
    },
    {
      "question": "Vật mang tin là gì?",
      "options": ["Vật chứa dữ liệu để con người tiếp nhận được thông tin", "Một loại máy vi tính", "Một loại phần mềm lưu trữ", "Một loại sóng điện từ"],
      "correct": 0,
      "type": "single",
      "level": "NB"
    },
    {
      "question": "Trong đời sống, đâu là ví dụ về vật mang tin? (Chọn nhiều)",
      "options": ["Sách giáo khoa", "Máy tính", "USB", "Vở ghi chép", "Lời nói"],
      "correct": [0, 2, 3, 4],
      "type": "multiple",
      "level": "TH"
    },
    {
      "question": "Tại sao thông tin quan trọng đối với con người?",
      "options": ["Giúp giải trí tốt hơn", "Giúp con người hiểu biết, ra quyết định và giao tiếp hiệu quả", "Chỉ dùng để tính toán", "Không quan trọng lắm"],
      "correct": 1,
      "type": "single",
      "level": "NB"
    },
    {
      "question": "Thông tin có những đặc tính nào? (Chọn nhiều)",
      "options": ["Đa dạng", "Phong phú", "Có thể đúng hoặc sai", "Không bao giờ thay đổi"],
      "correct": [0, 1, 2],
      "type": "multiple",
      "level": "NB"
    },
    {
      "question": "Phân biệt đúng giữa dữ liệu và thông tin là gì?",
      "options": ["Dữ liệu là con số, ký hiệu… chưa được xử lý; Thông tin là ý nghĩa rút ra từ dữ liệu", "Dữ liệu luôn chính xác, thông tin thì không", "Thông tin chỉ có trong sách, dữ liệu chỉ có trong máy tính", "Không có sự khác biệt"],
      "correct": 0,
      "type": "single",
      "level": "TH"
    },
    {
      "question": "Nếu một học sinh ghi điểm 7, 8, 9 vào vở, thì đó là dữ liệu. Khi giáo viên kết luận: 'Em học khá', thì đây là gì?",
      "options": ["Vẫn là dữ liệu", "Thông tin", "Vật mang tin", "Máy tính"],
      "correct": 1,
      "type": "single",
      "level": "TH"
    }
  ],
  bai2: [
    {
      "question": "Quá trình xử lí thông tin gồm những hoạt động nào? (Chọn nhiều)",
      "options": ["Thu nhận thông tin", "Xử lí thông tin", "Lưu trữ thông tin", "Truyền thông tin", "Hiểu thông tin"],
      "correct": [0, 1, 2, 3],
      "type": "multiple",
      "level": "NB"
    },
    {
      "question": "Thiết bị nào sau đây là thiết bị nhập liệu (thu nhận thông tin) của máy tính? (Chọn nhiều)",
      "options": ["Bàn phím", "Chuột", "Máy in", "Máy quét", "Webcam"],
      "correct": [0, 1, 3, 4],
      "type": "multiple",
      "level": "TH"
    },
    {
      "question": "Thiết bị nào sau đây không phải là thiết bị xuất liệu (truyền thông tin) của máy tính?",
      "options": ["Màn hình", "Loa", "Máy in", "Chuột"],
      "correct": 3,
      "type": "single",
      "level": "TH"
    },
    {
      "question": "Máy tính gồm mấy thành phần cơ bản để thực hiện các hoạt động xử lí thông tin?",
      "options": ["3", "4", "5", "6"],
      "correct": 1,
      "type": "single",
      "level": "NB"
    },
    {
      "question": "Hoạt động lưu trữ thông tin trong máy tính có đặc điểm nào sau đây? (Chọn nhiều)",
      "options": ["Thông tin được giữ trong bộ nhớ bên trong hoặc bên ngoài", "Thông tin bị mất ngay sau khi tắt máy", "Dung lượng lưu trữ lớn", "Có thể truy xuất lại thông tin sau khi đã lưu"],
      "correct": [0, 2, 3],
      "type": "multiple",
      "level": "NB"
    },
    {
      "question": "Hoạt động truyền thông tin của máy tính là gì?",
      "options": ["Hiển thị kết quả lên màn hình", "Gửi tài liệu bằng máy in", "Lưu file vào ổ cứng", "Gửi email hoặc chia sẻ qua mạng"],
      "correct": [0, 1, 3],
      "type": "multiple",
      "level": "NB"
    },
    {
      "question": "Trong quá trình xử lí thông tin, hoạt động thu nhận thông tin tương ứng với việc nào dưới đây?",
      "options": ["Nhập dữ liệu từ bàn phím", "Lưu file vào USB", "Gửi thư điện tử", "Xem nội dung trên màn hình"],
      "correct": 0,
      "type": "single",
      "level": "TH"
    },
    {
      "question": "Hoạt động xử lí trong máy tính bao gồm những việc nào? (Chọn nhiều)",
      "options": ["Tính toán", "Phân loại dữ liệu", "Sắp xếp danh sách", "Ghi nhớ thông tin mãi mãi"],
      "correct": [0, 1, 2],
      "type": "multiple",
      "level": "NB"
    },
    {
      "question": "Thiết bị nào sau đây là bộ nhớ của máy tính?",
      "options": ["Ổ cứng (HDD/SSD)", "RAM", "CPU", "Thẻ nhớ USB"],
      "correct": [0, 1, 3],
      "type": "multiple",
      "level": "NB"
    },
    {
      "question": "Điều nào sau đây là lợi ích khi máy tính hỗ trợ xử lí thông tin so với làm thủ công? (Chọn nhiều)",
      "options": ["Tính toán nhanh và chính xác", "Lưu trữ được nhiều thông tin", "Có thể làm việc liên tục", "Không cần người kiểm tra"],
      "correct": [0, 1, 2],
      "type": "multiple",
      "level": "TH"
    }
  ]
};

window.questionsByLesson = questionsByLesson;

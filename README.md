# Lối Đi Ngôn Ngữ

Ứng dụng học ngôn ngữ chạy trực tiếp trên trình duyệt, gồm ba lộ trình:

- Tiếng Anh
- Tiếng Trung (Hán tự + pinyin)
- Làm quen Ngôn ngữ ký hiệu Việt Nam (VSL)

## Tính năng

- 36 bài học, 180 thẻ nội dung.
- Học bằng thẻ trước khi làm trắc nghiệm.
- Phát âm bằng Web Speech API cho tiếng Anh và tiếng Trung.
- Luyện tập ngẫu nhiên, XP, chuỗi ngày và mục tiêu hằng ngày.
- Lưu tiến độ bằng `localStorage`; không cần tài khoản hoặc máy chủ.
- Dark mode, responsive và hỗ trợ thao tác bàn phím cơ bản.
- Tách HTML, CSS và JavaScript để dễ mở rộng.

## Chạy dự án

Mở `index.html` trực tiếp hoặc dùng một static server:

```bash
python -m http.server 8000
```

Sau đó truy cập `http://localhost:8000`.

## Lưu ý về VSL

Phần VSL hiện là nội dung nhập môn và khung kỹ thuật để tích hợp video. Ngôn ngữ ký hiệu tại Việt Nam có khác biệt giữa các cộng đồng TP.HCM, Hà Nội và Hải Phòng. Mô tả bằng chữ không thể thay thế video mẫu hoặc hướng dẫn trực tiếp từ người Điếc/giáo viên VSL.

Trước khi dùng trong giảng dạy chính thức, từng video và mô tả ký hiệu cần được người có chuyên môn tại khu vực xác nhận. Có thể tham khảo [Vietnamese Sign Language Dictionary](https://www.endangeredlanguages.com/) và các công trình được liệt kê trong tài liệu về [Vietnamese sign languages](https://en.wikipedia.org/wiki/Vietnamese_sign_languages) để bắt đầu quá trình kiểm chứng.

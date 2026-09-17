# Lối Đi Ngôn Ngữ

Ứng dụng học ngôn ngữ chạy trực tiếp trên trình duyệt, tập trung vào hai lộ trình:

- Tiếng Anh
- Tiếng Trung (Hán tự + pinyin)

## Tính năng

- 24 bài học, 120 thẻ từ tiếng Anh và tiếng Trung.
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

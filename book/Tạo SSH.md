
# Hướng Dẫn Tạo SSH Keys trên Termux

## Giới thiệu

SSH key là một phương pháp xác thực bảo mật, thường được sử dụng để kết nối với các dịch vụ như GitHub mà không cần phải nhập mật khẩu. Bài viết này sẽ hướng dẫn bạn cách tạo SSH key trên ứng dụng **Termux**.

## Các Bước Thực Hiện

### 1. Cài Đặt Termux

Trước hết, nếu bạn chưa cài đặt **Termux**, bạn có thể tải ứng dụng từ [Google Play Store](https://play.google.com/store/apps/details?id=com.termux) hoặc từ [F-Droid](https://f-droid.org/packages/com.termux/).

### 2. Cập Nhật Các Gói Cần Thiết

Mở Termux và cập nhật các gói cài đặt hiện tại:

```bash
pkg update && pkg upgrade
```

### 3. Cài Đặt OpenSSH

Tiếp theo, cài đặt **OpenSSH**, gói cần thiết để tạo và sử dụng SSH key:

```bash
pkg install openssh
```

### 4. Tạo SSH Key

Sử dụng lệnh sau để tạo một SSH key mới:

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

- `-t rsa`: Chọn thuật toán RSA cho SSH key.
- `-b 4096`: Chỉ định độ dài của khóa (4096 bit).
- `-C "your_email@example.com"`: Thêm chú thích cho SSH key, thường là địa chỉ email của bạn.

Sau khi thực hiện lệnh trên, bạn sẽ nhận được thông báo yêu cầu chỉ định đường dẫn để lưu SSH key:

```
Enter file in which to save the key (/data/data/com.termux/files/home/.ssh/id_rsa):
```

Nhấn **Enter** để lưu SSH key vào vị trí mặc định (`/data/data/com.termux/files/home/.ssh/id_rsa`).

### 5. Thiết Lập Mật Khẩu Cho SSH Key (Tùy Chọn)

Khi được yêu cầu, bạn có thể nhập mật khẩu cho SSH key (hoặc bỏ qua bằng cách nhấn **Enter** mà không nhập gì).

### 6. Kiểm Tra SSH Key

Để kiểm tra SSH key vừa tạo, bạn có thể sử dụng lệnh:

```bash
ls ~/.ssh
```

Bạn sẽ thấy hai tệp tin mới: `id_rsa` (private key) và `id_rsa.pub` (public key).

### 7. Sao Chép SSH Public Key

Sử dụng lệnh sau để sao chép nội dung của SSH public key vào clipboard:

```bash
cat ~/.ssh/id_rsa.pub
```

Copy toàn bộ nội dung hiển thị (bắt đầu bằng `ssh-rsa` và kết thúc bằng email của bạn).

### 8. Thêm SSH Key Vào GitHub (hoặc Dịch Vụ Khác)

- Truy cập vào GitHub.
- Vào **Settings** -> **SSH and GPG keys** -> **New SSH key**.
- Dán public key mà bạn vừa sao chép vào trường "Key" và đặt một tên cho key này (ví dụ: "Termux").
- Nhấn **Add SSH Key**.

### 9. Kiểm Tra Kết Nối SSH

Để kiểm tra kết nối SSH với GitHub, chạy lệnh sau:

```bash
ssh -T git@github.com
```

Nếu mọi thứ đã được thiết lập đúng, bạn sẽ nhận được thông báo:

```
Hi username! You've successfully authenticated, but GitHub does not provide shell access.
```

## Kết Luận

Bây giờ, bạn đã tạo và cấu hình thành công SSH key trên Termux. Bạn có thể sử dụng SSH key này để kết nối với các dịch vụ như GitHub mà không cần phải nhập mật khẩu mỗi lần.

Nếu có bất kỳ câu hỏi hoặc vấn đề nào, hãy tham khảo tài liệu chính thức của GitHub về SSH key hoặc tìm kiếm sự trợ giúp từ cộng đồng.

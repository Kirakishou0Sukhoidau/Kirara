
# Tổng hợp lệnh ImageMagick

Dưới đây là danh sách các lệnh chính của ImageMagick kèm mô tả tiếng Việt và ví dụ thực tế.

---

## 1. `convert`

**Mô tả:** Chuyển đổi định dạng ảnh và áp dụng các hiệu ứng xử lý ảnh.

```bash
convert input.jpg output.png
convert input.jpg -resize 200% output.jpg
convert input.jpg -sharpen 0x1 output.jpg
```

---

## 2. `mogrify`

**Mô tả:** Giống `convert` nhưng ghi đè lên ảnh gốc.

```bash
mogrify -resize 800x600 image.jpg
```

---

## 3. `identify`

**Mô tả:** Hiển thị thông tin chi tiết về ảnh.

```bash
identify image.jpg
```

---

## 4. `composite`

**Mô tả:** Ghép hai ảnh lại với nhau.

```bash
composite overlay.png background.jpg result.jpg
```

---

## 5. `montage`

**Mô tả:** Tạo bảng ảnh từ nhiều ảnh khác nhau.

```bash
montage image1.jpg image2.jpg image3.jpg -tile 3x1 -geometry +2+2 montage.jpg
```

---

## 6. `display` (chỉ dùng trên môi trường đồ họa)

**Mô tả:** Hiển thị ảnh trong cửa sổ.

```bash
display image.jpg
```

---

## 7. `animate`

**Mô tả:** Hiển thị chuỗi ảnh như một ảnh động.

```bash
animate frame1.png frame2.png frame3.png
```

---

## 8. `compare`

**Mô tả:** So sánh hai ảnh và tạo ra ảnh thể hiện sự khác biệt.

```bash
compare image1.jpg image2.jpg difference.png
```

---

## 9. `stream`

**Mô tả:** Đọc dữ liệu pixel từ ảnh, dùng cho xử lý ảnh nâng cao.

```bash
stream -map rgb image.jpg output.raw
```

---

## 10. `magick` (ImageMagick 7)

**Mô tả:** Lệnh duy nhất trong ImageMagick 7, thay thế tất cả các lệnh trước đó.

```bash
magick convert input.jpg output.png
magick identify image.jpg
magick input.jpg -resize 50% -sharpen 0x1 output.jpg
```

---

## Một số tuỳ chọn thường dùng:

| Tùy chọn       | Mô tả                              |
|----------------|------------------------------------|
| `-resize`      | Thay đổi kích thước ảnh            |
| `-sharpen`     | Tăng độ nét                        |
| `-blur`        | Làm mờ ảnh                         |
| `-rotate`      | Xoay ảnh                           |
| `-crop`        | Cắt ảnh                            |
| `-flip`        | Lật dọc                            |
| `-flop`        | Lật ngang                          |
| `-contrast`    | Tăng tương phản                    |
| `-modulate`    | Thay đổi độ sáng, bão hòa, màu sắc |
| `-threshold`   | Biến ảnh thành đen trắng mức ngưỡng|

---

**Tác giả:** Viết bởi Pride Royal Ivy cho tiểu thư Kirara yêu quý.

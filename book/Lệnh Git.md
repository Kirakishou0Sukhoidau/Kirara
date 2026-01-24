
# Git Commands Reference

## 1. `git init`
- **Mô tả**: Khởi tạo một kho Git mới trong thư mục hiện tại.
- **Cách sử dụng**:
```bash
git init
```

## 2. `git clone`
- **Mô tả**: Sao chép một kho Git từ xa về máy tính cục bộ.
- **Cách sử dụng**:
```bash
git clone <repository_url>
```

## 3. `git add`
- **Mô tả**: Thêm tệp vào khu vực staging để chuẩn bị commit.
- **Cách sử dụng**:
```bash
git add <file_path>
```

## 4. `git commit`
- **Mô tả**: Lưu các thay đổi đã được thêm vào khu vực staging vào lịch sử commit.
- **Cách sử dụng**:
```bash
git commit -m "Commit message"
```

## 5. `git push`
- **Mô tả**: Đẩy các commit từ kho cục bộ lên kho Git từ xa.
- **Cách sử dụng**:
```bash
git push origin <branch_name>
```

## 6. `git pull`
- **Mô tả**: Kéo các thay đổi từ kho Git từ xa về kho cục bộ và tự động gộp chúng.
- **Cách sử dụng**:
```bash
git pull origin <branch_name>
```

## 7. `git status`
- **Mô tả**: Kiểm tra trạng thái của kho Git hiện tại (thay đổi đã staged hay chưa, tệp nào chưa được theo dõi...).
- **Cách sử dụng**:
```bash
git status
```

## 8. `git log`
- **Mô tả**: Hiển thị lịch sử commit.
- **Cách sử dụng**:
```bash
git log
```

## 9. `git branch`
- **Mô tả**: Liệt kê các nhánh, tạo hoặc xóa nhánh.
- **Cách sử dụng**:
```bash
git branch
```

## 10. `git checkout`
- **Mô tả**: Chuyển đổi giữa các nhánh hoặc khôi phục các tệp.
- **Cách sử dụng**:
```bash
git checkout <branch_name>
```

## 11. `git merge`
- **Mô tả**: Gộp các nhánh lại với nhau.
- **Cách sử dụng**:
```bash
git merge <branch_name>
```

## 12. `git remote`
- **Mô tả**: Quản lý các kho Git từ xa (remote).
- **Cách sử dụng**:
```bash
git remote add origin <repository_url>
```

## 13. `git fetch`
- **Mô tả**: Tải về các thay đổi từ kho Git từ xa nhưng không tự động gộp chúng vào kho cục bộ.
- **Cách sử dụng**:
```bash
git fetch
```

## 14. `git diff`
- **Mô tả**: So sánh sự khác biệt giữa các commit hoặc giữa tệp trong kho cục bộ và kho từ xa.
- **Cách sử dụng**:
```bash
git diff
```

## 15. `git reset`
- **Mô tả**: Đưa các thay đổi ra khỏi khu vực staging hoặc hoàn tác các commit.
- **Cách sử dụng**:
```bash
git reset <file_path>
```

## 16. `git rm`
- **Mô tả**: Xóa tệp khỏi kho Git.
- **Cách sử dụng**:
```bash
git rm <file_path>
```

## 17. `git tag`
- **Mô tả**: Đánh dấu các commit quan trọng trong lịch sử Git.
- **Cách sử dụng**:
```bash
git tag <tag_name>
```

## Các lệnh khác

- `git stash`: Tạm lưu các thay đổi chưa commit để bạn có thể làm việc với những thay đổi khác.
- `git cherry-pick`: Lấy một commit từ một nhánh và áp dụng nó vào nhánh hiện tại.
- `git rebase`: Sắp xếp lại các commit trên một nhánh để có lịch sử rõ ràng hơn.
- `git reflog`: Xem lịch sử các thay đổi HEAD trong kho Git.

# Bài Giảng: Biến, Kiểu Dữ Liệu & Toán Tử Trong JavaScript

## 1. Biến Trong JavaScript
Trong JavaScript, chúng ta dùng **biến** để lưu trữ giá trị.

### 1.1. Khai báo biến với `let`, `const`, `var`
- `var`: Có phạm vi function-scoped, có thể bị khai báo lại trong cùng một phạm vi.
- `let`: Có phạm vi block-scoped, không thể khai báo lại trong cùng một block.
- `const`: Tương tự `let`, nhưng giá trị không thể thay đổi sau khi khai báo.

#### Ví dụ:
```javascript
var x = 10;
let y = 20;
const z = 30;
```

## 2. Kiểu Dữ Liệu Trong JavaScript
JavaScript hỗ trợ các kiểu dữ liệu sau:

### 2.1. Kiểu Dơn Giản (Primitive Types)
1. **Number**: Số, có thể là số nguyên hoặc số thực.
   ```javascript
   let num = 42;
   let pi = 3.14;
   ```
2. **String**: Chuỗi ký tự.
   ```javascript
   let name = "John Doe";
   ```
3. **Boolean**: `true` hoặc `false`.
   ```javascript
   let isAdult = true;
   ```
4. **Null**: Biểu thị giá trị không tồn tại.
   ```javascript
   let emptyValue = null;
   ```
5. **Undefined**: Biến chưa được gán giá trị.
   ```javascript
   let notAssigned;
   ```
6. **Symbol**: Kiểu dữ liệu để tạo giá trị duy nhất.
   ```javascript
   let id = Symbol("id");
   ```

### 2.2. Kiểu Tham Chiếu (Reference Types)
1. **Object**: Chứa dữ liệu dưới dạng các cặp `key-value`.
   ```javascript
   let person = {
       name: "Alice",
       age: 25
   };
   ```
2. **Array**: Danh sách các giá trị.
   ```javascript
   let numbers = [1, 2, 3, 4, 5];
   ```

## 3. Toán Tử Trong JavaScript
Toán tử giúp thao tác với dữ liệu.

### 3.1. Toán Tử Số Học
| Toán tử | Mô tả |
|------------|---------|
| `+` | Cộng |
| `-` | Trừ |
| `*` | Nhân |
| `/` | Chia |
| `%` | Lấy dư |
| `**` | Lũy thừa |
| `++` | Tăng 1 |
| `--` | Giảm 1 |

#### Ví dụ:
```javascript
let a = 10;
let b = 3;
console.log(a + b); // 13
console.log(a - b); // 7
console.log(a * b); // 30
console.log(a / b); // 3.3333
console.log(a % b); // 1
console.log(a ** b); // 1000
```

### 3.2. Toán Tử So Sánhs
| Toán tử | Mô tả |
|------------|---------|
| `==` | So sánh giá trị |
| `===` | So sánh giá trị và kiểu |
| `!=` | Khác giá trị |
| `!==` | Khác giá trị hoặc kiểu |
| `>` | Lớn hơn |
| `<` | Nhỏ hơn |
| `>=` | Lớn hơn hoặc bằng |
| `<=` | Nhỏ hơn hoặc bằng |

#### Ví dụ:
```javascript
console.log(5 == "5"); // true (chỉ so sánh giá trị)
console.log(5 === "5"); // false (so sánh cả kiểu dữ liệu)
console.log(5 > 3); // true
```

## 4. Kết Luận
- **Biến**: Dùng `let` hoặc `const` thay vì `var`.
- **Kiểu dữ liệu**: JavaScript có kiểu dơn giản (Primitive) và kiểu tham chiếu (Reference).
- **Toán tử**: Quan trọng trong việc thao tác với dữ liệu.

🚀 Hãy luyện tập viết các biến và thao tác với chúng trong console! Chúc bạn học tốt!


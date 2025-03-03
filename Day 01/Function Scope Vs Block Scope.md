### Function Scope vs. Block Scope trong JavaScript

Trong JavaScript, phạm vi của biến ảnh hưởng đến cách chúng có thể được truy cập trong mã nguồn. Hai khái niệm quan trọng là **Function Scope** và **Block Scope**.

---

## **1. Function Scope (Phạm vi hàm)**

- Các biến được khai báo bằng `var` có phạm vi trong **toàn bộ hàm** chứa chúng.
- Không quan tâm đến việc chúng được khai báo trong một khối `{}` bên trong hàm, chúng vẫn có thể được truy cập trong toàn bộ hàm đó.

### 🔹 Ví dụ:

```javascript
function exampleFunction() {
    if (true) {
        var x = 10; // var có phạm vi trong toàn bộ function
    }
    console.log(x); // ✅ Vẫn truy cập được
}

exampleFunction();
console.log(x); // ❌ Lỗi vì x không tồn tại ngoài hàm
```

**Giải thích:**
- Dù `x` được khai báo trong một khối `if`, nhưng vì sử dụng `var`, nó vẫn thuộc phạm vi của toàn bộ hàm `exampleFunction`.
- Khi gọi `console.log(x)` bên ngoài hàm, chương trình báo lỗi vì `x` không tồn tại ngoài phạm vi của `exampleFunction`.

---

## **2. Block Scope (Phạm vi khối)**

- Các biến khai báo bằng `let` hoặc `const` có phạm vi trong **khối `{}` chứa chúng**.
- Không thể truy cập biến bên ngoài khối `{}` mà nó được khai báo.

### 🔹 Ví dụ:

```javascript
function exampleBlockScope() {
    if (true) {
        let y = 20; // let chỉ có phạm vi trong khối này
        const z = 30; // const cũng có phạm vi trong khối này
        console.log(y); // ✅ Truy cập được
    }
    console.log(y); // ❌ Lỗi: y không được định nghĩa ngoài khối
}

exampleBlockScope();
```

**Giải thích:**
- Biến `y` và `z` chỉ tồn tại trong khối `if {}`.
- Khi truy cập `console.log(y)` ngoài khối `{}`, chương trình báo lỗi vì `y` không tồn tại ngoài phạm vi khối.

---

## **3. So sánh Function Scope và Block Scope**

| Đặc điểm       | Function Scope (`var`) | Block Scope (`let`, `const`) |
|--------------|--------------------|--------------------|
| Phạm vi     | Trong toàn bộ hàm chứa nó | Chỉ trong khối `{}` chứa nó |
| Có thể truy cập ngoài khối `{}` không? | ✅ Có thể | ❌ Không thể |
| Khả năng khai báo lại | ✅ Có thể khai báo lại trong cùng phạm vi | ❌ Không thể khai báo lại trong cùng một khối |

---

## **4. Lưu ý Quan Trọng**

- **Luôn sử dụng `let` hoặc `const` thay vì `var`** để tránh lỗi do biến bị ghi đè ngoài ý muốn.
- **Dùng `const` nếu giá trị không thay đổi**, chỉ dùng `let` khi cần gán lại giá trị.

---

💡 **Tóm tắt:**  
- `var` có **function scope**, nghĩa là nó tồn tại trong toàn bộ hàm.
- `let` và `const` có **block scope**, nghĩa là chúng chỉ tồn tại trong khối `{}` chứa chúng.
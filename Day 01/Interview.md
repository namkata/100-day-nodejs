Câu Hỏi Phỏng Vấn JavaScript

> Câu Hỏi Về Biến và Kiểu Dữ Liệu

1. Sự khác nhau giữa var, let, và const là gì?

    - var có phạm vi **function-scoped**, có thể khai báo lại.

    - let có phạm vi **block-scoped**, không thể khai báo lại trong cùng block.

    - const giống let nhưng không thể thay đổi giá trị.

    

2. JavaScript có bao nhiêu kiểu dữ liệu?

    - Primitive: Number, String, Boolean, Null, Undefined, Symbol.
    
    - Reference: Object, Array.
    
3. Sự khác biệt giữa null và undefined?

    - null là một giá trị trống do lập trình viên gán. 
    - undefined là giá trị mặc định khi biến chưa được gán giá trị.

4. Toán tử typeof trả về gì cho từng kiểu dữ liệu?

    ```javascript
        console.log(typeof 42); // "number"
        console.log(typeof "Hello"); // "string"
        console.log(typeof true); // "boolean"
        console.log(typeof null); // "object" (lỗi của JavaScript)
        console.log(typeof undefined); // "undefined"
        console.log(typeof {}); // "object"
    ```

> Câu Hỏi Về Toán Tử

1. Phân biệt == và === trong JavaScript?

    - **==** chỉ so sánh giá trị.
  
    - **===** so sánh cả giá trị và kiểu dữ liệu.

2. Điều gì xảy ra khi cộng một số với một chuỗi? (5 + "5")?

    - JavaScript sẽ chuyển số thành chuỗi và thực hiện phép nối: "55".

3. Giá trị của biểu thức true + false là gì?

    - true được chuyển thành 1, false thành 0 → 1 + 0 = 1.
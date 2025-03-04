# Conditional Statements & Loops in JavaScript

## 1. Conditional Statements (Câu điều kiện)
### 1.1. `if-else`
Câu lệnh `if` cho phép JavaScript thực thi một khối mã nếu điều kiện được xác định là đúng.

**Cú pháp:**
```javascript
if (condition) {
    // Mã lệnh chạy nếu điều kiện đúng
} else if (anotherCondition) {
    // Mã lệnh chạy nếu anotherCondition đúng
} else {
    // Mã lệnh chạy nếu không có điều kiện nào đúng
}
```

**Ví dụ:**
```javascript
let age = 20;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}
```

### 1.2. `switch-case`
Câu lệnh `switch` được sử dụng để thực thi một khối mã trong nhiều lựa chọn dựa trên giá trị cho trước.

**Cú pháp:**
```javascript
switch (expression) {
    case value1:
        // Mã lệnh cho value1
        break;
    case value2:
        // Mã lệnh cho value2
        break;
    default:
        // Mã lệnh nếu không khớp với case nào
}
```

**Ví dụ:**
```javascript
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the work week!");
        break;
    case "Friday":
        console.log("Weekend is near!");
        break;
    default:
        console.log("Just another day.");
}
```

## 2. Loops (Vòng lặp)
Vòng lặp giúp chúng ta thực thi một khối mã nhiều lần.

### 2.1. `for` Loop
Dùng khi biết trước số lượt lặp.

**Cú pháp:**
```javascript
for (initialization; condition; update) {
    // Mã lệnh thực thi trong từng lần lặp
}
```

**Ví dụ:**
```javascript
for (let i = 1; i <= 5; i++) {
    console.log("Iteration: ", i);
}
```

### 2.2. `while` Loop
Dùng khi số lượt lặp không biết trước, nhưng phụ thuộc vào một điều kiện.

**Cú pháp:**
```javascript
while (condition) {
    // Mã lệnh thực thi
}
```

**Ví dụ:**
```javascript
let count = 1;
while (count <= 5) {
    console.log("Count: ", count);
    count++;
}
```

### 2.3. `do-while` Loop
Thực thi mã **ít nhất một lần** trước khi kiểm tra điều kiện.

**Cú pháp:**
```javascript
do {
    // Mã lệnh thực thi
} while (condition);
```

**Ví dụ:**
```javascript
let number = 1;
do {
    console.log("Number: ", number);
    number++;
} while (number <= 5);
```

### 2.4. `forEach` Loop (Array Loop)
Dùng để duyệt qua một mảng.

**Ví dụ:**
```javascript
let fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach(fruit => console.log(fruit));
```

---

## 3. Common Interview Questions (Câu hỏi phỏng vấn)

### 3.1. Conditional Statements Questions
1. **Sự khác nhau giữa `if-else` và `switch-case`?**
   - `if-else` dùng cho điều kiện phức tạp, còn `switch-case` tốt hơn cho giá trị cố định.
2. **`switch` có thể dùng với giá trị chuỗi không?**
   - Có, `switch` hỗ trợ so sánh chuỗi.
3. **Chuyện gì xảy ra nếu bỏ qua `break` trong `switch`?**
   - Mã sẽ "rượt xuống" case tiếp theo.

### 3.2. Loop Questions
4. **Khác nhau giữa `for`, `while`, và `do-while`?**
   - `for` dùng khi biết trước số lần lặp, `while` chạy khi điều kiện đúng, `do-while` luôn chạy ít nhất một lần.
5. **Khác nhau giữa `forEach` và `for`?**
   - `forEach` dùng cho array và không dùng được `break` hoặc `continue`.
6. **Chuyện gì xảy ra nếu vòng lặp luôn true?**
   - Tạo vòng lặp vô tận, có thể khiến chương trình treo.

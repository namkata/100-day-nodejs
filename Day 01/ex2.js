`
Exercise 2: Differentiate Between let, const, and var (ex2.js)

"""
Description: Understand the differences between let, const, and var.

Requirements:

- Declare variables using let, const, and var and reassign values.
- Observe and explain the results.
"""

function exampleFunction() {
    if (true) {
        var x = 10; // var có phạm vi trong toàn bộ function
    }
    console.log(x); // ✅ Vẫn truy cập được
}

exampleFunction();
console.log(x); // ❌ Lỗi vì x không tồn tại ngoài hàm


function exampleBlockScope() {
  if (true) {
    let y = 20; // let chỉ có phạm vi trong khối này
    const z = 30; // const cũng có phạm vi trong khối này
    console.log(y); // ✅ Truy cập được
  }
  console.log(y); // ❌ Lỗi: y không được định nghĩa ngoài khối
}

exampleBlockScope();
`

var score = 10;
score = 20;
console.log("Điểm:", score) //✅ In ra là 20, vì var có thể update, vẫn trong phạm vy xử lý

//const PI = 3.14;
//PI=3.145;  // ❌ Sẽ báo lỗi vì const không thể thay đổi giá trị
//console.log("PI vẫn là 3.145?", PI) // ❌ Vì chúng ta đang dùng const để xét giá trị, nên giá trị vẫn là 3.14

let PI=3.14;
PI=3.145;
console.log("PI vẫn là 3.145?", PI); //✅ In ra là 3.145
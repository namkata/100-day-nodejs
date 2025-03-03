`
Exercise 5: Data Type Conversion (ex5.js)

"""
Description: Convert values between different data types.

Requirements:

- Convert a string to a number.
- Convert a number to a string.
- Print the results and their data types to the console.
"""
`
let num = "100";
let convertedNum = Number(num);

console.log(typeof convertedNum); // number

let numToString = String(123);
console.log(typeof numToString); // string

let abc = 'abc';
let convertToNum = Number(abc);

console.log(typeof convertToNum, convertToNum); // Lỗi, vẫn hiện thị kiểu giá trị là number, nhưng giá trị NaN
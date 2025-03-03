`
Exercise 6: User Input Program (ex6.js)

"""
Description: Write a program that asks for the user's name and age, then prints a greeting message.

Requirements:

- Use prompt() to get input (browser environment).
- Output information in the format: "Hello, I am [name], and I am [age] years old!".
"""

`;

// let name = prompt("Mời nhập tên của bạn:");
// let age = prompt("Tuổi hiện tại của bạn:");
// console.log("Hello, I am "+name+", and I am "+ age+" years old!");
// console.log(`Hello, I am ${name} ,and I am ${age} years old!`);

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter your name: ", function (name) {
  rl.question("Enter your age: ", function (age) {
    console.log(`Hello, I am ${name}, and I am ${age} years old!`);
    rl.close();
  });
});

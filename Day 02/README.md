# Conditional Statements & Loops in JavaScript

## 1. Conditional Statements (Câu điều kiện)
### 1.1. `if-else`
The `if` statement allows JavaScript to execute a block of code if a specified condition is true.

**Syntax:**
```javascript
if (condition) {
    // Code runs if condition is true
} else if (anotherCondition) {
    // Code runs if anotherCondition is true
} else {
    // Code runs if none of the above conditions are true
}
```

**Example:**
```javascript
let age = 20;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}
```

### 1.2. `switch-case`
The `switch` statement is used to execute one block of code out of multiple options based on a given value.

**Syntax:**
```javascript
switch (expression) {
    case value1:
        // Code for value1
        break;
    case value2:
        // Code for value2
        break;
    default:
        // Code if no case matches
}
```

**Example:**
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
Loops allow us to execute a block of code multiple times.

### 2.1. `for` Loop
Used when the number of iterations is known.

**Syntax:**
```javascript
for (initialization; condition; update) {
    // Code to execute in each loop
}
```

**Example:**
```javascript
for (let i = 1; i <= 5; i++) {
    console.log("Iteration: ", i);
}
```

### 2.2. `while` Loop
Used when the number of iterations is unknown but based on a condition.

**Syntax:**
```javascript
while (condition) {
    // Code to execute
}
```

**Example:**
```javascript
let count = 1;
while (count <= 5) {
    console.log("Count: ", count);
    count++;
}
```

### 2.3. `do-while` Loop
Executes the block of code **at least once** before checking the condition.

**Syntax:**
```javascript
do {
    // Code to execute
} while (condition);
```

**Example:**
```javascript
let number = 1;
do {
    console.log("Number: ", number);
    number++;
} while (number <= 5);
```

### 2.4. `forEach` Loop (Array Loop)
Used to iterate over arrays.

**Example:**
```javascript
let fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach(fruit => console.log(fruit));
```

---

## 3. Common Interview Questions (Câu hỏi phỏng vấn)

### 3.1. Conditional Statements Questions
1. **What is the difference between `if-else` and `switch-case`?**
   - `if-else` is used for complex conditions, while `switch-case` is better for fixed values.
2. **Can a `switch` statement work with string values?**
   - Yes, `switch` can handle string comparisons.
3. **What happens if `break` is omitted in a `switch` case?**
   - The execution will "fall through" to the next case.

### 3.2. Loop Questions
4. **What is the difference between `for`, `while`, and `do-while` loops?**
   - `for` is used when the number of iterations is known, `while` runs as long as a condition is true, and `do-while` ensures at least one execution.
5. **What is the difference between `forEach` and `for` loops?**
   - `forEach` is specifically for arrays and does not work with `break` or `continue` statements.
6. **What happens if a loop condition is always true?**
   - It creates an infinite loop, potentially crashing the program.

---

### 💡 Pro Tip
- Always use `break` in `switch-case` to prevent unintended fall-through.
- Use `let` instead of `var` to avoid scope-related bugs.
- Be cautious with infinite loops, especially in `while` loops.
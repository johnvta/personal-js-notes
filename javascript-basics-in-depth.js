//  variables
// let (preferred, lets you change value later)
// const (constant, value cannot change)
// var 

// creating variable using var
// var variableName = "test";
// creating variable using let
// let variableName = "test";
// creating variable using const
// const variableName = "test";


//  data types
// strings ("Hello, World")
// numbers (1, 4, 8) float = decimal, int = whole
// booleans (true or false)
// null (can store value but value is nonexistent)
// undefined (no var or value)
// symbol
// object (most important data type)

//  String
// EX1
// const name = 'John';
// const backticks = `Hello, ${name}, welcome!`;
// console.log(backticks); = Hello, John, welcome!
// EX2
// const backticks = `${2 + 2}`;
// console.log(backticks); = 4


//  Numbers
// EX1
// const firstNum = 5;
// const secondNum = 10;
// const result = firstNum + secondNum;
// console.log(result); = 15


//  Booleans
// EX1
// const isCool = true;
// if(isCool) {
//    console.log("Hi man, you're cool");
// } else {
//    console.log("Oh, hi ..");
// }
// console.log(isCool); = Hi man, you're cool
// EX2
// const age = 20;
// console.log(age > 15); = true
// console.log(age < 15); = false


//  Null (empty, unknown)
// EX1
// constant age = null;
// console.log(age); = null
// EX2
// let age = null; (dont know value of age yet so use null)
// let age = 9; (now you know value)
// console.log(age); = 9


//  Undefined (a variable that has not been assigned a value is undefined)
// EX1
// let x;
// console.log(x); = undefined

//  Objects (most important), dot notation
// EX1
// const person = { 
//    name: "John",
//    age: 25,
// }
// console.log(person.name); = John

//  Array
// EX1
// const arr = [1, 2, 3, 4];
// console.log(arr); = [1, 2, 3, 4]


//  Statically typed
// EX1
// let message = "Hello, World";
// console.log(typeof message); = string;
// let message = 5;
// console.log(typeof message); = number;


//  Comparison Operators => true/false
// EX1 (greater than)
// const a = 5;
// const b = 10;
// console.log(a > b); = false
// EX2 (greater than or equal)
// const a = 10;
// const b = 10;
// console.log(a >= b); = true
// EX3 (less than)
// const a = 5;
// const b = 10;
// console.log(a < b); = true
// EX4 (less than or equal)
// const a = 10;
// const b = 10;
// console.log(a <= b); = true
// EX5 (is equal)
// const a = 5;
// const b = 10;
// console.log(a == b); = false
// EX6 (not equal)
// const a = 5;
// const b = 10;
// console.log(a != b); = true
// EX7 (strict equality)
// const a = 5;
// const b = 10;
// console.log(a === b); = false
// EX8 (strict inequality)
// const a = 5;
// const b = 10;
// console.log(a !=== b); = true

//  Strict Equality (always use)
// Compares VALUES and DATA TYPES
// return true only if both are the same
// EX1
// console.log(20 === "20"); = false
// console.log(20 === 20); = true

//  Loose Equality (avoid)
// Doesn't compare DATA TYPES
// EX1
// console.log(20 === "20"); = true


//  Logical Operators
// AND && => ALL OPERANDS ARE TRUE => TRUE
// EX1
// console.log(true && false); = false
// console.log(true && true); = true
// console.log(false && false); = false
// console.log(true && false && true); = false
// OR || => AT LEAST ONE OPERAND IS TRUE => TRUE
// EX2
// console.log(true || false); = true
// console.log(true || true); = true
// console.log(false || false); = false
// NOT !
// EX3
// console.log(!true); = false
// console.log(!false); = true


//  while loop
// EX1
let i = 0;

while (i < 10) {    // starts at 0 - 9
    console.log(i);
    i++;
}

//  for loop
// EX1
for (let i = 0; i < 10; i++) {
    console.log(i);
}


//  if/else
// EX1
const age = 15;

if (age > 18) {
    console.log("You may enter!");
} else if (age === 18) {
    console.log("You just turned 18, welcome!")
} else {
    console.log("Sorry, too young")
}


//  functions
// A BLOCK OF CODE => PERFORMS A TASK


// A FUNCTION DECLARATION (defining a function)
function square(number) {
   return number * number;
}

// A FUNCTION CALL (calling/executing a function)
//const result = square(5)

//console.log(result)


// STEPS FOR FUNCTION
// A function declaratiom
//function name(params) {
      // statements
//}

// A function expression
//const name = function(params) {
      // statements
//}

// An arrow function 
//const name = (params) => {
      // statements
//}

//
function sayHi(name) {
    console.log(`Hi, ${name}`);
}

sayHi("Joe");
sayHi("Tien")

//
function add(a, b) {
    return a + b;
}

const sum = add(2, 2);

console.log(sum);


// Arrow Function
const square = (number) => {
    return number * number;
}

const result = square(10);

console.log(result);

// Arrow Function but cleaner
const square1 = number => number * number;

const result1 = square1(10);

console.log(result);
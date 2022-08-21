// console.log - printing
console.log("Hello World");

// alert - pop-up box in browser
alert("Hello World");

// confirm - pop-up box, yes or no, yes is true, no is false (boolean)
confirm("Are you good at Valorant");

// how to decalre a variable -
let h = 10; // making a variable, always use let
const w = 11; // making a permanent variable
w = 9;

// notes data types 
// number
let y = 20;

// string
let i = "Hi";
let j = "Mom";
let s = i + " " + j;

// boolean
let o = true;
let x = false;

// null (empty)
let p = null;

// undefined (nothing there because nothings declared)
let b;

// array  (0 , 1 , 2 index)
let arr = ["Hi", "Hello", "Bye"];
console.log(arr[2]); // prints out the 2nd index only in array


// if/ else if/ else
if (1 > 2) {
    console.log("First condition");
} else if (1 > 5) {  
    console.log("Second condition");
} else {
    console.log("Last choice");
}

// functions
// a function that does something
function noReturn() {
    console.log("Hello World");
}
// a function that takes in something and returns
function takesSomething(x) {
    return x * 5;
}

function name(str) {
    return "Hi " + str + " nice to meet you."
}
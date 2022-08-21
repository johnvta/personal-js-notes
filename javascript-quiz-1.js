// 1. Name all data types in JavaScript (Excluding Arrays and Objects):
// numbers, strings, boolean, null, undefined, symbol


// 2. Create 2 variables, one for your first name and one for your last:
const firstName = "John";
const lastName = "Ta"


// 3. Make a condition for either you like dogs or nah:
const likeDogs = true;

if (likeDogs) {
    console.log("I like dogs")
} else {
    console.log("I don't like dogs")
}

console.log(likeDogs);


// 4. Make a function to multiply a number by 10:
function value(number) {
    return number * 10;
}

console.log(value(5));


// 5. Make a function that takes in a boolean and determines if you like valorant or nah:
function likeValorant(bool) {
  if (bool === true) {
      return "I like valorant";
  } else {
      return "I don't like valorant"
  }
}

console.log(likeValorant(false));


// 6. Make an array from 1 - 10 and give print me the 5th value:
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arr[4]);


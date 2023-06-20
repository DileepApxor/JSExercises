// Convert the below functions into arrow functions.

/*const greetings = function () {
  return "Hello World";
};*/

const greetings = () => "Hello World"; 

/*const isEven = function (num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
};*/

const isEven = num => num%2==0;   //this arrow function returns true if num is divisible by 2 or it returns false

console.log(greetings())
console.log(isEven(6))
console.log(isEven(9))
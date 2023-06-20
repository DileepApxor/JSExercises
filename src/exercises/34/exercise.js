// Default parameters
// - Read : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters

function multiply(num1, num2) {
  return num1 * num2;
}

// multiply(2,3) - returns 6
// multiple(4) - return NaN

// Update the above function to consider a missing numbers default value as 1

// After the change
// multiply(4) - Should return 4
// multiply() - Should return 1
function multiply1(num1=1, num2=1) {  //here i've declared that the num1 and num2 as 1, so that it will not return NaN if the one of the argument is empty
  return num1 * num2;
}

console.log(multiply(2,3));
console.log(multiply1(2,3));

console.log(multiply(4));
console.log(multiply1(4));

console.log(multiply());
console.log(multiply1());
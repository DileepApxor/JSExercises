// Complete the below function. Find if an input is array or not.
//  - Comment what is the operator that you have used.

function checkIfArray(input) {
  let isInputAnArray = false; 

  if(input instanceof Array){   // we can check the input is an array or not by using instanceof operator in JS
    isInputAnArray = true;      // if it is an array then change the isInputAnArray from false to true
  }

  if (isInputAnArray) {
    console.log("Given input is an Array");
  } else {
    console.log("Given input is not an Array");
  }
}
 

checkIfArray([1,5,8,7,9])       //we should call the function passing an array to it
checkIfArray(6)                 // we calling the function passing a number in it

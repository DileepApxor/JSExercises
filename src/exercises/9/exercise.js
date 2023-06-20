// Complete the below function.
// - Use Array methods.
// - Do not use loops

function multiplyArrayByTwo(inputArray) {
  
  let multipliedArray = inputArray.map((element)=>element*2);  //the array method which is used to do any operation for all elements in an array at ar time

  console.log(`The input array is ${inputArray}`);
  console.log(`Multiplied array is ${multipliedArray}`);
}


multiplyArrayByTwo([1,2,3,4,5]) // calling the function passing an array as input
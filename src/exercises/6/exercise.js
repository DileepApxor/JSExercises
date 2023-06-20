// Complete the below function. Find the length of the given array.
// - Also validate the input. Accept the input only if its an array.

function findTheLength(inputArray) {

  if(inputArray instanceof Array){            // i checked the inputArray is an Array or not by using instanceof in the if conditional statment accepting if it is an array 
    let lengthOfArray = inputArray.length;    // there is an inbuilt function called length to find the length of any array, strings and maps
    console.log(`Length of the given input array is ${lengthOfArray}`);
  }
  else{
    console.log(`It's not an array`);
  }

}

findTheLength(9)                // call the function with a number passing through it to check our condition working or not     
findTheLength([1,2,3,5,4,7,6])  // call the function passing an array as an input to check the size of an array
 
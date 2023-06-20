// Complete the below function.
// - Find the easiest way to do it.
// - Comment the function that you used.

function binaryToDecimal(binaryString) {
  let decimalValue = parseInt(binaryString,2);

  // i have used parseInt function to convert the binary to decimal on radix of 2 
  // if we give 3 in the parseint function then the decimal value of binary string "111" will be 1*3^2 + 1*3^1 + 1*3^0 = 13

  console.log(
    `Decimal for the given binary string ${binaryString} is ${decimalValue}`
  );
}

binaryToDecimal(111) //// calling the function with binary inputs as "111" 
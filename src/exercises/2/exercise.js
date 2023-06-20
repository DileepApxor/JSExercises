// Execute this function,
//  - comment the reason for failure.
//  - Fix the issue.

function divideTenByNumber(number) {
  let result;  
  if (number != 0) {
     result = 10 / number;
  } else {
     result = "Indeterminate";
  }

  console.log(`Result after dividing 10 by ${number} is ${result}`);
}

// the issue is we declared the result variable in the if-else statements because,
//we can't access the variable outside the conditional statements which are declared inside the conditional statements

divideTenByNumber(30) //we should call the function here with some input in it 
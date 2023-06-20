// Complete the below function.
// - Use Array methods

function commaSeparatedString(inputArray) {
  // Given an Array like ["firstName","lastName"]
  // Return a comma separated String like "firstName,lastName"


  let commaSep = inputArray.join(','); //by using the join arraymethod we can join all the arrayelements with the separation element as (',')
  console.log(commaSep);               // as the commaSep is a string we can print in the terminal easily

}

commaSeparatedString(['Dileep','Chandra']) 
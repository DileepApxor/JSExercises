// Execute this function,
//  - comment the reason for failure.
//  - Fix the issue.

function printOneToTen() {
  for (let number = 1; number <= 10; number++) {
    console.log(`\n${number}`);
  }
}
// In the for loop before it was mentioned 'const number', const cannot be changed so we have to replace with 'let'

printOneToTen()  //We should call the function
// At each of the statements in the statements in the below function
// - Use debugging techniques to find the values of x,y
// - What is "Watch" in chrome debugging console. Share a screenshot of the watch variables at each step.

function randomCalculator() {
  debugger;  //when the debugger attached to this code we can access through every breakpoint from start to end of the code execution
             // i've attached some screenshot pngs when im running the code going through every breakpoint
  let x = 10, y = 0;
  x = x * 10 + 1 - (2 / 2) * 3; //98
  y = x - 1 + 3 * 10 - 2;       //125
  x = x * 2 - (1 / 3) * 3;      //195
  x = x + 10 - 2 - 3 * 2;       //197
  console.log(x);
}

randomCalculator()
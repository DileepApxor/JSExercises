// What is a callback?  

// callback function is a function that is passed as an argument to another function and is executed inside that function. 
// The function receiving the callback can then invoke the callback at any given time or condition.

function welcome(name,callback) {
  setTimeout(() => {                   //this function will executed after one second
    console.log(`Welcome ${name}`);    //it will print the name of the person which is passing as an argument 
    callback();                        //it is a callback function it will be executed after the printing of the above content in the terminal
  }, 1000);
}

function success() {
  console.log("Greetings successful!!");  //its a success function which prints Greetings successfull 
}

welcome("Dileep",success);     // here we called welcome function with passing an argument name and calling the callback function success

// In the above example:
// - Before welcoming, success message is printed.
// - Use callbacks to fix the problem.
// - If needed, update the function definition.

//   Create a Counter using closures.
// - counter should have "increment","decrement" and "value" functions.
// - Is there a anonymus function used here? Is so where is it?
// - What is an IIFE? Have we used one here?
// - Discuss about "Revealing Module Pattern" and how we have used it.
// - What are higher order functions?

const counter = (function () {
  //Your code goes here.
  let count = 0;  // the count variable here acts as a private variable, it cannot be accessed outside this IIEF function
  function increment() {
    count++;
  }

  function decrement() {
    count--;
  }

  function value() {
    return count;
  }

  return {increment,decrement,value}  //here we've returned the object containing increment,decrement and value function
  
})();

//IIFE means immediately invoked function expression is used to create the function with private variables and functions
//we cant access the varaibles which are declared inside the IIFE outisde the scope of the function

//here the anonymous function is used which is nothing but ({....})() this is the IIFE function which can be executed as soon as defined

counter.increment();
console.log(counter.value());
counter.decrement();
counter.decrement();
counter.decrement();
console.log(counter.value());

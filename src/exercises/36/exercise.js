// Null coalescing
// - Read : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing

function A() {
  console.log("A was called");
  return undefined;
}
function B() {
  console.log("B was called");
  return false;
}
function C() {
  console.log("C was called");
  return null;
}
function D() {
  console.log("D was called");
  return "foo";
}
console.log(A() ?? C() ?? D()); 
/* it will print 'A was called C was called D was called foo' because coalescing operator(??) is used to 
execute the next function if the present function returns the null/undefined value. If the last executed 
function returns a null value then at last it will print 'null' at the end */

console.log(B() ?? D());    
/* in this only B is executed as it returns the non-nullified value so that it terminates all the 
functions/processes which are going to be executed next. It prints 'B was called false' and terminates*/

//Comment the outputs below and reason

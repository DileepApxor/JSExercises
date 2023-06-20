// Destructuring & Spread Operator
// - Read : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// - Complete the Try it secion in the above article
// - Read : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

// Given an object
// 	{
// 		name: "Ravi",
// 		id : 1122,
// 		age : 29
// 	}

// Create a two variables
// 1. name - Its value should be "Ravi"
// 2. otherProperties - Its value should be {
// 	id : 1122,
// 	age : 29
// }

const obj = {               // here i've created an object which contains name, id and age
    name: "Ravi",
    id: 1112,
    age:29
};


const {name,...otherProperties} = obj;  // this line is used for destructing to extract the name property from the obj 
                                        // and assigning the remaining (id,age) to the otherProperties

console.log("Name:", name)

console.log("Other Properties:", otherProperties)
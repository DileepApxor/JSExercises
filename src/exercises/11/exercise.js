// Complete the below function. Print the sum of the elements in the given array.
// - Use Array methods
// - Do not use loops

function sumOfArray(inputArray) {
    
    let sum = inputArray.reduce((a,b)=>a+b); 
    //here we are reducing the elements one-by-one after calling the function called (a,b) as a+b
    //first a is assigned to '0' and the b is assigned as the first element in the array then 'a' is 
    //as the first element of array is gonna reduce and the 'a' is updated as sum of a,b and again b is assigned to the next element of array
    //at last the array will contain no element then the value of 'a' is assigned to sum
    //its more like for loop as we declare a=0, b=arr[i] then a += a+b

    console.log(sum);
}

sumOfArray([1,2,3,4,5])


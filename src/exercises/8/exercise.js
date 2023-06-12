// Complete the below function.
// - Print the given Array. One element in one line
// - Use loops

function printArray(inputArray) {

    for(let i=0;i<inputArray.length;i++){  // by using the for loop it starts with '0' and ends with 'length_of_input_array-1' 

        console.log(inputArray[i]);        // we can print one element in one line
    }
}

printArray([1,2,5,4,7,8])  // calling the function with passing some imput array

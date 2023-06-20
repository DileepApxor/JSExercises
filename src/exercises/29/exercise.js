// - Explain currying.
// - Convert the below function to curry function
function calculateVolume(length) {
  
  return function(breadth){

    return function(height){

      return length * breadth * height;
    }
  } 
}
//if we want to use partially applied functions or we want to make more specialised version of the functions by passing different arguments
//then the currying is the better choice

//we can also make the non-curry version of the above function
// function calculateVol(height,length,breadth){
//      return height*length*breadth;
// }

let area = calculateVolume(3)(4)(5);
console.log(area);




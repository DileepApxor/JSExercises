// Read what is a closure and give an example here


function outerFunc(){
    var outerVariable = "Hello";

    function innerFunc(){
        var innerVariable = "World..!";
        console.log(outerVariable+' '+innerVariable);
    }
    return innerFunc;
}


//closure is nothing but we can call the outside variables which are declared outside the function(innerFunc) which is declared inside
//the function called outerFunc. by calling the function declared with an object we can able to access the content in the both functions

var closure = outerFunc();
closure();
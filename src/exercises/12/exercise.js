// Gracefully handle the error in the errorCaller function

function errorFunction() {
  throw "This is a random error";
}

function errorCaller() {
  try{
    errorFunction();    // here we are using try catch to check whether the errorFunction() throws an error or not
                        // if an error occurs in the try block, the execution of the code in it will be stopped and catch will be executed
  }
  catch(error){
    console.log("Error Occured: ",error)  // the errorFunction() throws an error so that the code in the catch will executed 
  }
}

errorCaller();  
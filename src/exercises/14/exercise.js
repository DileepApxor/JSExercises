// Get the full name of the new employee. See how you can execute the function "getFullName" on newEmployee object.
// - Comment your findings

const employee = {
  firstName: "Ravi",
  lastName: "Teja",
  age: 29,
  id: 1122,
  getFullName: function () {
    //Copy the solution from the exercise before this.
    console.log("Full Name: "+this.firstName+" "+this.lastName)  // this is the code i've used in 13th question for getFullName function
  },
};

const newEmployee = {
  firstName: "New",
  lastName: "Employee",
  getFullName : employee.getFullName,   //it is a reference of getFullName function which is mentioned in the employee object
                                        //when we call the getFullName function in newEmployee object, it will acquire the properties of function defined in employee object
};

newEmployee.getFullName()
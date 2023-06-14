// Complete the function "getFullName", "checkVoteEligiblity" in the below object

const employee = {
  firstName: "Ravi",
  lastName: "Teja",
  age: 29,
  id: 1122,

  getFullName: function () {
    console.log("Full Name: "+this.firstName+" "+this.lastName) // in this function we using 'this' keyword to refer the employee object
                                                                // we can able to call the object in every function mentioned below
  },

  checkVoteEligiblity: function () {
    if(this.age>=18){                              // here we are checking whether the age of the employee object is greater than 18 or not
      console.log("Eligible for vote")
    }
    else{
      console.log("Not Eligible for vote")
    }
  },
};

employee.getFullName()                       // here we are accessing the getFullName function 
employee.checkVoteEligiblity()
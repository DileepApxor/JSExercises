// Create a "Leave" class.
// - Identify the class variables
// - Create function for all the possible functionalities.

class Leave {
  constructor(employeeName, startDate, endDate){
      this.employeeName = employeeName;
      this.startDate = startDate;
      this.endDate = endDate;
  }

  requestLeave(){
    console.log(`Leave requested by ${this.employeeName} from the date ${this.startDate} to ${this.endDate}`);
  }
  approveLeave(){
    console.log(`Leave approved for ${this.employeeName}`);
  }
  rejectLeave(){
    console.log(`Leave rejected for ${this.employeeName}`);
  }
}

const newPerson = new Leave("Dileep Chandra","29th June 2023","31st June 2023");
newPerson.requestLeave();
newPerson.approveLeave();
newPerson.rejectLeave();
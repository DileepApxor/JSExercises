// Extend the Leave class, to create different classes for different Leave types.
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

// there will be some types of leaves: sick leave, vacation leave, maternity leave
class sickLeave extends Leave{
    constructor(employeeName, startDate, endDate, sick){
        super(employeeName, startDate, endDate);
        this.sick = sick;
    }

    leaveforSick(){
        console.log(`Leave requested by ${this.employeeName} for being Sick from the date ${this.startDate} to ${this.endDate}, suffering from ${this.sick}`);
    }
}

class vacLeave extends Leave{
    constructor(employeeName,startDate,endDate,place){
        super(employeeName, startDate, endDate);
        this.place = place;
    }
    leaveforVac(){
        console.log(`Leave requested by ${this.employeeName} to go ${this.place} for vacation from the date ${this.startDate} to ${this.endDate}`);

    }
}

class maternityLeave extends Leave{
    constructor(employeeName,startDate,endDate){
        super(employeeName, startDate, endDate);
    }

    leaveforMaternity(){
        console.log(`Maternity Leave requested by ${this.employeeName} from the date ${this.startDate} to ${this.endDate}`);

    }
}
  
const newPerson = new Leave("Dileep","29th June 2023","31st June 2023");
const person1 = new sickLeave("Surya","29th july 2023","31st july 2023", "Fever");
const person2 = new vacLeave("Venky","29th May 2023","31st may 2023", "Ooty");
const person3 = new maternityLeave("Anu","29th Aug 2023","31st Aug 2023");

newPerson.requestLeave();
newPerson.approveLeave();
newPerson.rejectLeave();

person1.leaveforSick();
person2.leaveforVac();
person2.rejectLeave();
person3.leaveforMaternity();
person3.approveLeave();
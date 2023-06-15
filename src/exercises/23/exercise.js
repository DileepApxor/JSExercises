// What does a call to the noDelayPrint() do.
// Is 'this' inside print function referrring to an instance of Printer
// Is the correct sheet printed?
//  Comment your understanding
//  Provide a fix.

class Printer {
  constructor() {
    this.index = 0;
  }

  print() {
    console.log(`Printing sheet number ${this.index}`);
  }

  noDelayPrint() {
    console.log(`You asked me to print the 1sheet ${this.index}`);
    setTimeout(this.print, 0); // 0 milli-sec delay
    this.index++;
  }

  noDelayPrint() {
    console.log(`You asked me to print the 2sheet ${this.index}`);
    setTimeout(this.print, 1000); //1 sec dely
    this.index++;
  }

}

let k = new Printer();
k.print()
k.noDelayPrint()

//here two noDelayPrint functions have been written, the second one is overwritten on the first one 
//after calling the noDelayPrint, it will print "You asked me to print the 2sheet 0" as the value of the index=0
//after printing the whole thing which is in the console log it will wait for 1 second then it will call print function which is declared in
//starting of the class itself and returns undefined value as the index is declared in the constructor
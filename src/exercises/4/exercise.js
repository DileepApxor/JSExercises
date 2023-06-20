// Complete the below function. Print welcome greetings to a person.
//  - Use string template literal
//  - Comment its uses.

function greeting(firstName, lastName) {
  let welcomeGreeting = 'Welcome, ' + firstName + ' ' + lastName; 
  // here I used the string template as the welcomegreeting is equal to string "welcome" and 
  // the "+" operator concatenates the strings and the ' ' is for spcae between the first name and the last name

  console.log(welcomeGreeting);
}


greeting('Dileep','Chandra')
// calling the function with the inputs as my first name and last name  
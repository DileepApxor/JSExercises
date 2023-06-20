// Create a timer
// - Timer should tick for every 1sec
// - Stop the timer at exactly 1min
// - Display it on a HTML page
// - What is the function that you have used?

let timerSecs = 0;
let timerId;
function startTimer(){
    timerId = setInterval(() => {

        console.log(timerSecs);
        timerSecs++;
        if(timerSecs == 60){
            stopTimer();
        }
    },1000)
}

function stopTimer(){
    clearInterval(timerId);
    console.log("Timer has been stopped");
}

startTimer();

//here i have used a function called setInterval() which can do its task repeatedly till the clearInterval() function called 
//by using the setInterval() function, the timer runs upto the limit we set(1 minute here) then after counting 60 seconds it will 
//go to the stopTimer() function then the timer will be stopped as I used clearInterval for the the variable 'timerId' i assigned
//for the setInterval() function. In the setInterval function we will write a function to perform the repeated operations and 
//time(1000 milliseconds here), it performs the all operations with 1 second delay.
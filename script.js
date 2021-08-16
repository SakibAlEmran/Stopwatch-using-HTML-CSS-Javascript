// declare variables
let hours = 0;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let timer;

// select element where the result will go. 
let stopwatchVal = document.querySelector('.stopwatch');
let lapsContainer = document.querySelector('.laps'); 

function displayTimer(){
    miliseconds+=10;
    if(miliseconds == 1000){
        miliseconds = 0;
        seconds++;
        if(seconds == 60){
            seconds = 0;
            minutes++;
            if(minutes == 60){
                minutes = 0;
                hours++;
            }
        }
    }
    
    stopwatchVal.innerHTML = getTimer();
}


function getTimer(){
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = miliseconds < 10 ? "00" + miliseconds : miliseconds < 100 ? "0" + miliseconds : miliseconds;

    return ` ${h} : ${m} : ${s} : ${ms}`;
}

//start the timer
function start(){
    if(!timer){
        timer = setInterval(displayTimer, 10);
    }
}

//stop the timer
function stopTimer(){
    clearInterval(timer);
    timer = false;
}

//to pause the timer  just stop the timer
function pause(){
    stopTimer();
}

//reset the timer
function reset(){
    stopTimer();
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    stopwatchVal.innerHTML = '00 : 00 : 00 : 000 ';
}

//lap count 
function lap() {
    if(timer) {
        var li = document.createElement('li');
        li.innerText = getTimer();
        lapsContainer.append(li);
    }
    console.log(li);
}

//reset value
function resetLaps() {
    lapsContainer.innerHTML = '';
}










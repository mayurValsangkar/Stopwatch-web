// define variables to store stopwatch time and interval ID
let seconds = 0;
let minutes = 0;
let hours = 0;
let intervalID;

// get elements from HTML
const display = document.getElementById('display');
const startStopBtn = document.getElementById('start-stop-btn');
const resetBtn = document.getElementById('reset-btn');

// function to start/stop stopwatch
function startStop() {
  // if intervalID is undefined (stopwatch not running), start the stopwatch
  if (!intervalID) {
    startStopBtn.innerHTML = 'Stop'; // change button text to 'Stop'
    intervalID = setInterval(() => {
      // increment seconds and check for rollover to minutes/hours
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
          minutes = 0;
          hours++;
        }
      }

      // update display with current stopwatch time
      display.innerHTML = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000); // update every 1000ms (1 second)
  }
  // if intervalID is defined (stopwatch running), stop the stopwatch
  else {
    startStopBtn.innerHTML = 'Start'; // change button text to 'Start'
    clearInterval(intervalID); // clear the interval to stop the stopwatch
    intervalID = undefined; // set intervalID back to undefined to indicate stopwatch is stopped
  }
}

// function to reset stopwatch
function reset() {
  startStopBtn.innerHTML = 'Start'; // change button text to 'Start'
  clearInterval(intervalID); // clear the interval to stop the stopwatch
  intervalID = undefined; // set intervalID back to undefined to indicate stopwatch is stopped
  seconds = 0; // reset seconds
  minutes = 0; // reset minutes
  hours = 0; // reset hours
  display.innerHTML = '00:00:00'; // reset display to '00:00:00'
}
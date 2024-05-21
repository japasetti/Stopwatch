// accessing the elements
const timer = document.getElementById("timer");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

// milSecond, second, minutes, hours, days, years variables
let milseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let days = 0;

// time reference variable
let timeRef;

// start button listener

start.addEventListener("click", () => {
  clearInterval(timeRef);
  timeRef = setInterval(updateTime, 10);
});

// updateTime function implementation
function updateTime() {
  milseconds = milseconds + 10;
  if (milseconds === 1000) {
    seconds = seconds + 1;
    milseconds = 0;
    if (seconds === 60) {
      minutes = minutes + 1;
      seconds = 0;
      if (minutes === 60) {
        hours = hours + 1;
        minutes = 0;
      }
    }
  }
  updateDisplay();
}
// function to update the display

function updateDisplay() {
  // variables to add the prefix
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let mil =
    milseconds < 10
      ? "00" + milseconds
      : milseconds < 100
      ? "0" + milseconds
      : milseconds;

  timer.innerHTML = `${h} : ${m} : ${s}   : ${mil}`;
}

// listener to stop the timer

stop.addEventListener("click", () => {
  clearInterval(timeRef);
});

// listener to reset the timer

reset.addEventListener("click", () => {
  clearInterval(timeRef);
  hours = 0;
  minutes = 0;
  seconds = 0;
  milseconds = 0;
  updateDisplay();
});

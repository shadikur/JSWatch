// All the DOM elements
const timer = document.getElementById("timer");
const start = document.getElementById("start");
const play = document.getElementById("play");
const reset = document.getElementById("reset");
let appendTens = document.getElementById("tens");
let appendSeconds = document.getElementById("seconds");
let appendMins = document.getElementById("mins");
let Interval;
let seconds = 00;
let tens = 00;
let mins = 00;

// Start the timer in every seconds
start.addEventListener("click", () => {
  clearInterval(Interval);
  Interval = setInterval(startTimer, 10);
});

// Play / Pause button
play.addEventListener("click", () => {
  clearInterval(Interval);
});

// Reset button
reset.addEventListener("click", () => {
  clearInterval(Interval);
  mins = "00";
  tens = "00";
  seconds = "00";
  appendTens.innerHTML = tens;
  appendSeconds.innerHTML = seconds;
  appendMins.innerHTML = mins;
});

function startTimer() {
  tens++;
  if (tens <= 9) {
    appendTens.innerHTML = "0" + tens;
  }

  if (tens > 9) {
    appendTens.innerHTML = tens;
  }
  if (mins <= 9) {
    appendMins.innerHTML = "0" + mins;
  }
  if (tens > 9) {
    appendMins.innerHTML = mins;
  }
  if (tens > 99) {
    console.log("seconds");
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
  }
  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }
}

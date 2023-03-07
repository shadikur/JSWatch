// All the DOM elements
const timer = document.getElementById("timer");
const start = document.getElementById("start");
const play = document.getElementById("play");
const reset = document.getElementById("reset");
let appendTens = document.getElementById("tens");
let appendSeconds = document.getElementById("seconds");
let Interval;
let seconds = 00;
let tens = 00;

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
  tens = "00";
  seconds = "00";
  appendTens.innerHTML = tens;
  appendSeconds.innerHTML = seconds;
});

function startTimer() {
  tens++;
  if (tens <= 9) {
    appendTens.innerHTML = "0" + tens;
  }

  if (tens > 9) {
    appendTens.innerHTML = tens;
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

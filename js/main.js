// Timer fields
const hourEl = document.querySelector(`.hour`);
const minuteEl = document.querySelector(`.minute`);
const secondEl = document.querySelector(`.second`);
const millisecondEl = document.querySelector(`.millisecond`);

// Bottons
const startButton = document.querySelector(`.start`);
const pauseButton = document.querySelector(`.pause`);
const stopButton = document.querySelector(`.stop`);
const newButton = document.querySelector(`.new`);

// Listeners
startButton.addEventListener(`click`, () => {
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
});

pauseButton.addEventListener(`click`, () => {
  clearInterval(interval);
});

stopButton.addEventListener(`click`, () => {
  clearInterval(interval);
  clearFields();
  newButton.disabled = true;
});

newButton.addEventListener(`click`, () => {
  clearInterval(interval);
  counter++;
  const results = document.querySelector(`.results`);
  const block = document.createElement(`div`);
  block.classList.add(`results__info`);
  block.innerText = `Result ${counter}: ${"0" + hour}:${"0" + minute}:${
    "0" + second
  }:${"0" + millisecond}`;
  results.append(block);
  clearFields();
  clearInterval(interval);
  interval = setInterval(startTimer, 10);
});

// Variables
let hour = 00,
  minute = 00,
  second = 00,
  millisecond = 00,
  interval,
  counter = 0,
  disabled = true;

function startTimer() {
  millisecond++;

  // Millisecond
  if (millisecond < 9) {
    millisecondEl.innerText = "0" + millisecond;
  }
  if (millisecond > 9) {
    millisecondEl.innerText = millisecond;
  }
  if (millisecond > 99) {
    second++;
    secondEl.innerText = "0" + second;
    millisecond = 0;
    millisecondEl.innerText = "0" + millisecond;
  }

  // Second
  if (second < 9) {
    secondEl.innerText = "0" + second;
  }
  if (second > 9) {
    secondEl.innerText = second;
  }
  if (second > 59) {
    minute++;
    minuteEl.innerText = "0" + minute;
    second = 0;
    secondEl.innerText = "0" + second;
  }

  // Minute
  if (minute < 9) {
    minuteEl.innerText = "0" + minute;
  }
  if (minute > 9) {
    minuteEl.innerText = minute;
  }
  if (minute > 59) {
    hour++;
    hourEl.innerText = "0" + hour;
    minute = 0;
    minuteEl.innerText = "0" + minute;
  }

  // Hour
  if (hour < 9) {
    hourEl.innerText = "0" + hour;
  }
  if (hour > 9) {
    hourEl.innerText = hour;
  }
  if (hour > 24) {
    hourEl.innerText = "0" + hour;
    hour = 0;
    hourEl.innerText = "0" + hour;
  }

  newButton.disabled = false;
}

function clearFields() {
  hour = 00;
  minute = 00;
  second = 00;
  millisecond = 00;
  hourEl.textContent = "00";
  minuteEl.textContent = "00";
  secondEl.textContent = "00";
  millisecondEl.textContent = "00";
}

function disableBtn() {
  if (disabled) {
    newButton.disabled = true;
  }
}

disableBtn();

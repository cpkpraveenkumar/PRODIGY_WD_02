let timer;
let isRunning = false;
let seconds = 0, minutes = 0, hours = 0;

function updateDisplay() {
  document.getElementById('display').textContent =
    `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startStop() {
  if (!isRunning) {
    timer = setInterval(() => {
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
          minutes = 0;
          hours++;
        }
      }
      updateDisplay();
    }, 1000);
    isRunning = true;
  }
}

function pause() {
  clearInterval(timer);
  isRunning = false;
}

function reset() {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  updateDisplay();
  document.getElementById('laps').innerHTML = '';
}

function lap() {
  if (isRunning) {
    const lapTime = document.createElement('li');
    lapTime.textContent = document.getElementById('display').textContent;
    document.getElementById('laps').appendChild(lapTime);
  }
}

updateDisplay();

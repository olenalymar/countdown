const countdown = document.querySelector('.countdown');

// set the event date
const launchDate = new Date('Jan 1, 2019 00:00:00').getTime();
console.log(launchDate);

// update every second
const int = setInterval(() => {
  // get today's date and time (ms)
  const now = new Date().getTime();

  // calc the distance between now and the event date
  const distance = launchDate - now;

  // time calculations
  const days = Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // display the result
  countdown.innerHTML = `
    <div>${days}<span>Days</span></div>
    <div>${hours}<span>Hours</span></div>
    <div>${minutes}<span>Minutes</span></div>
    <div>${seconds}<span>Seconds</span></div>
  `;

  // if the event date passed
  if (distance < 0) {
    clearInterval(int);
    countdown.innerHTML = 'Launched!';
  }
}, 1000);

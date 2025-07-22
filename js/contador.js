const targetDate = new Date("2026-05-09T15:00:00").getTime();
setInterval(() => {
  const now = new Date().getTime();
  const distance = targetDate - now;
  document.getElementById('days').innerText = Math.floor(distance / (1000 * 60 * 60 * 24));
  document.getElementById('hours').innerText = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.getElementById('minutes').innerText = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  document.getElementById('seconds').innerText = Math.floor((distance % (1000 * 60)) / 1000);
}, 1000);
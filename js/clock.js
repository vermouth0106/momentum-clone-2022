const dateToday = document.querySelector(".dateToday");
const clock = document.querySelector(".clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
  dateToday.innerText = date.toISOString().slice(0, 10);
}

getClock();
setInterval(getClock, 1000);

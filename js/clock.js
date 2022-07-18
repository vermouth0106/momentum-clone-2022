const dateToday = document.querySelector(".dateToday");
const clock = document.querySelector(".clock");
const weeks = ["일", "월", "화", "수", "목", "금", "토"];

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const week = date.getDay();

  dateToday.innerText = `${year}년 ${month}월 ${day}일 ${weeks[week]}요일`;
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);

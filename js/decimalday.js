const dateHeader = document.querySelector(".d-day__text");
const dateResult = document.querySelector(".d-day__result");
const dateForm = document.querySelector(".d-day__form");
const dateInput = document.querySelector(".d-day__form input");
const dateResetBtn = document.querySelector(".reset__d-day");

const DECIMALDAY_KEY = "decimal-day";

dateInput.value = new Date().toISOString().slice(0, 10);

function paintDay(day) {
  localStorage.setItem(DECIMALDAY_KEY, day);

  dateHeader.classList.add(HIDDEN_CLASSNAME);
  dateForm.classList.add(HIDDEN_CLASSNAME);
  dateResetBtn.classList.remove(HIDDEN_CLASSNAME);

  dateResult.innerText = `D-${day}`;
}

function onClickDateSubmit(event) {
  event.preventDefault();

  const setDay = new Date(dateInput.value);
  const today = new Date();

  const diffDay = Math.round((setDay - today) / (1000 * 60 * 60 * 24));

  if (diffDay <= -1 || diffDay === 0) {
    paintDay("day");
  } else {
    paintDay(diffDay);
  }
}

const savedDecimalDay = localStorage.getItem(DECIMALDAY_KEY);

if (savedDecimalDay === null) {
  dateForm.addEventListener("submit", onClickDateSubmit);
} else {
  paintDay(savedDecimalDay);
}

function resetDecimalDay() {
  localStorage.removeItem(DECIMALDAY_KEY);

  dateResetBtn.classList.add(HIDDEN_CLASSNAME);
  dateHeader.classList.remove(HIDDEN_CLASSNAME);
  dateForm.classList.remove(HIDDEN_CLASSNAME);
  dateResult.innerText = "";
}

dateResetBtn.addEventListener("click", resetDecimalDay);

const dateForm = document.querySelector(".d-day__form");
const dateInput = document.querySelector(".d-day__form input");
const dateResult = document.querySelector(".d-day span:last-child");

function onClickDateSubmit(event) {
  event.preventDefault();

  const setDay = new Date(dateInput.value);
  const today = new Date();

  const diff = setDay - today;
  const diffDay = Math.round(diff / (1000 * 60 * 60 * 24));

  console.log(diffDay);

  if (diffDay <= -1) {
    dateResult.innerText = "Error! 이미 지난 날입니다.";
  } else if (diffDay === 0) {
    dateResult.innerText = `D-Day`;
  } else {
    dateResult.innerText = `D-${diffDay}`;
  }
}

dateForm.addEventListener("submit", onClickDateSubmit);

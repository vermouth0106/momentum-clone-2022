const loginWindow = document.querySelector(".login-window");
const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-form input");
const paintUsername = document.querySelector(".username__name");
const resetUsername = document.querySelector(".username__reset");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();

  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  // hide login screen
  loginWindow.classList.add(HIDDEN_CLASSNAME);
  loginWindow.classList.remove("login-window");

  paintUsername.innerText = username;
  paintUsername.classList.remove(HIDDEN_CLASSNAME);
  resetUsername.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}

function onResetClick() {
  localStorage.removeItem(USERNAME_KEY);
  window.location.reload();
}

resetUsername.addEventListener("click", onResetClick);

const loginScreen = document.querySelector(".login-screen");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const resetUser = document.querySelector("#reset__user");

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
  loginScreen.classList.add(HIDDEN_CLASSNAME);
  loginScreen.classList.remove("login-screen");

  greeting.innerText = username;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  resetUser.classList.remove(HIDDEN_CLASSNAME);
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

resetUser.addEventListener("click", onResetClick);

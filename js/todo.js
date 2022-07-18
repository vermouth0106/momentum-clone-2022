const toDoForm = document.querySelector(".todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoAlert = toDoForm.querySelector(".todo__alert");
const toDoList = document.querySelector(".todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintTodo(newTodo) {
  if (toDos.length > 5) {
    toDoAlert.classList.remove(HIDDEN_CLASSNAME);
    setTimeout(function () {
      toDoAlert.classList.add(HIDDEN_CLASSNAME);
    }, 3000);
    toDos.pop();
  } else {
    const li = document.createElement("li");
    li.id = newTodo.id;
    li.classList.add("box__shadow");

    const buttonDel = document.createElement("button");
    buttonDel.innerText = "V";
    buttonDel.addEventListener("click", deleteToDo);

    const span = document.createElement("span");
    span.innerText = newTodo.text;

    li.appendChild(buttonDel);
    li.appendChild(span);

    toDoList.appendChild(li);
  }
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

function sayHello() {
  console.log("Hello");
}

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintTodo);
}

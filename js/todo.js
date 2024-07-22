const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
// const toDoInput = document.querySelector("#todo-form input") 하고 같은 기능을 함
const toDoList = document.getElementById("todo-list");

let toDos = [];
//새로고침하면 사라지는 todos의 기존 내용을 저장하기 위해 변경 가능한 let으로 설정하고 밑에서 추가하는 함수를 작성한다
const TODOS_KEY = "todos";

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const deleteList = event.target.parentElement;
  deleteList.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(deleteList.id));
  // list의 id는 string이므로 숫자로 형변환을 해준뒤 비교하여  삭제하게 한다
  saveToDos(); // 삭제하여 만들어진 새로운 toDos의 배열을 다시 localstorage에 저장한다
}

function checkToDo(event) {
  const checkList = event.target.parentElement;
  if (checkList.classList.contains("checkTodoList")) {
    checkList.classList.remove("checkTodoList");
  } else {
    checkList.classList.add("checkTodoList");
  }
}

function paintToDo(newTodo) {
  const createList = document.createElement("li");
  createList.id = newTodo.id;
  // <li>에 객체로 생성했던 id값을 id로 지정하게 함
  const createSpan = document.createElement("span");
  createSpan.innerText = newTodo.text;
  const createdeleteButton = document.createElement("button");
  const createcheckButton = document.createElement("button");
  createdeleteButton.innerText = "❌";
  createcheckButton.innerText = "☑️";
  createdeleteButton.addEventListener("click", deleteToDo);
  createcheckButton.addEventListener("click", checkToDo);
  createList.appendChild(createSpan);
  createList.appendChild(createdeleteButton);
  createList.appendChild(createcheckButton);
  toDoList.appendChild(createList);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  // 원래 입력된 값을 newTodo에 저장하고 입력값에는 다시 공백을 넣어 입력창을 비게한다
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  }; // 객체로 생성해서 todo리스트의 각 요소에 id를 갖게 한다 그리고 만들어진 객체자체를 toDos 배열에 객체를 원소로하여 저장하게한다
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  //새로 고침할때마다 localstorage에서 사라지는 내용을 위와 같이하여 todos에 저장하게 해서 새로고침해도 화면에 나와있게 한다
  parsedToDos.forEach(paintToDo);
}

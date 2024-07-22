const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// 본인이 생성한 string이 여러번 쓰일 경우 대문자 변수로 저장하는것으로 실수를 만들지 않는 스펠링을 틀리면 안되는 string임을 상기시키게 하자
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const FLEX_CLASSNAME = "flex";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  loginForm.classList.remove(FLEX_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}

function paintGreeting(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.classList.add(FLEX_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // show the form
  loginForm.classList.add(FLEX_CLASSNAME);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greeting
  loginForm.classList.remove(FLEX_CLASSNAME);
  paintGreeting(savedUsername);
}

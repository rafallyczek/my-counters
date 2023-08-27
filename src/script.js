//Imports
import './style.css';

//DOM
const dividend = document.querySelector("#dividend");
const divisor = document.querySelector("#divisor");
const calculateBtn = document.querySelector("#calculate");
const result = document.querySelector("#result");

const value = document.querySelector("#value");
const incrementBtn = document.querySelector("#increment");
const decrementBtn = document.querySelector("#decrement");

//Listeners
calculateBtn.addEventListener("click", calculate);
incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);

//Functions
function calculate() {
  const firstNumber = +dividend.value;
  const secondNumber = +divisor.value;
  value.textContent = Math.ceil(firstNumber / secondNumber);
  saveData();
}

function increment() {
  let number = +value.textContent;
  value.textContent = number + 1;
  saveData();
}

function decrement() {
  let number = +value.textContent;
  value.textContent = number - 1;
  saveData();
}

function init() {
  if (isEmpty()) {
    saveData();
  } else {
    value.textContent = localStorage.getItem("counter");
  }
}

//Localstorage
function isEmpty() {
  if (localStorage.getItem("counter") == null) {
    return true;
  }
  return false;
}

function saveData() {
  localStorage.setItem("counter", +value.textContent);
}

init();
//Imports
import './style.css';
import "@fortawesome/fontawesome-free/js/fontawesome.js";
import "@fortawesome/fontawesome-free/js/solid.js";

//DOM
const dividend = document.querySelector("#dividend");
const divisor = document.querySelector("#divisor");
const calculateBtn = document.querySelector("#calculate");
const navToggleBtn = document.querySelector(".nav-toggle");

const content = document.querySelector(".content");
const navContent = document.querySelector(".nav-content");
const value = document.querySelector("#value");
const incrementBtn = document.querySelector("#increment");
const decrementBtn = document.querySelector("#decrement");

//Listeners
calculateBtn.addEventListener("click", calculate);
incrementBtn.addEventListener("click", increment);
decrementBtn.addEventListener("click", decrement);
navToggleBtn.addEventListener("click", toggleNav);

//Variables
let counters = [];
let currentCounter = 0;

//Functions
function calculate() {
  const firstNumber = +dividend.value;
  const secondNumber = +divisor.value;
  const result = Math.ceil(firstNumber / secondNumber);
  counters[currentCounter].val = result;
  value.textContent = result;
  saveData();
}

function increment() {
  let number = +value.textContent;
  let incremented = number + 1;
  counters[currentCounter].val = incremented;
  value.textContent = incremented;
  saveData();
}

function decrement() {
  let number = +value.textContent;
  let decremented = number - 1;
  counters[currentCounter].val = decremented;
  value.textContent = decremented;
  saveData();
}

function init() {
  if (isEmpty()) {
    saveData();
  } else {
    counters = JSON.parse(localStorage.getItem("counters"));
    value.textContent = counters[currentCounter].val;
  }
}

//Localstorage
function isEmpty() {
  if (localStorage.getItem("counters") == null) {
    return true;
  }
  return false;
}

function saveData() {
  localStorage.setItem("counters", JSON.stringify(counters));
}

//Display
function toggleNav() {

  const icon = document.createElement("i");
  icon.classList.add("fa-solid");
  icon.classList.add("fa-2xl");

  if(content.classList.contains("nav-expanded")){
    content.classList.remove("nav-expanded");
    content.classList.add("nav-hidden");
    icon.classList.add("fa-caret-right");
    navToggleBtn.title = "Show navigation";
    navContent.style.display = "none";
  } else {
    content.classList.remove("nav-hidden");
    content.classList.add("nav-expanded");
    icon.classList.add("fa-caret-left");
    navToggleBtn.title = "Hide navigation";
    navContent.style.display = "grid";
  }

  navToggleBtn.textContent = "";
  navToggleBtn.appendChild(icon);

}

init();
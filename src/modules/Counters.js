import { Display } from "./Display";
import { Localstorage } from "./Localstorage";

export class Counters {
  
  static counters = [];
  static currentCounter = 0;

  static init() {
    const calculateBtn = document.querySelector("#calculate");
    const incrementBtn = document.querySelector("#increment");
    const decrementBtn = document.querySelector("#decrement");
    calculateBtn.addEventListener("click", () => { this.calculate(); });
    incrementBtn.addEventListener("click", () => { this.increment(); });
    decrementBtn.addEventListener("click", () => { this.decrement(); });
  }

  static getCounters() {
    return this.counters;
  }

  static setCounters(counters) {
    this.counters = counters;
  }

  static getCurrentCounter() {
    return this.currentCounter;
  }

  static setCurrentCounter(currentCounter) {
    this.currentCounter = currentCounter;
  }

  static calculate() {
    const dividend = document.querySelector("#dividend");
    const divisor = document.querySelector("#divisor");
    const firstNumber = +dividend.value;
    const secondNumber = +divisor.value;
    const result = Math.ceil(firstNumber / secondNumber);
    this.counters[this.currentCounter].val = result;
    Display.setCounterValue(result);
    Localstorage.saveData();
  }

  static increment() {
    let number = Display.getCounterValue();
    let incremented = number + 1;
    this.counters[this.currentCounter].val = incremented;
    Display.setCounterValue(incremented);
    Localstorage.saveData();
  }

  static decrement() {
    let number = Display.getCounterValue();
    let decremented = number - 1;
    this.counters[this.currentCounter].val = decremented;
    Display.setCounterValue(decremented);
    Localstorage.saveData();
  }

}

import { Counters } from "./Counters";
import { Display } from "./Display";

export class Localstorage {

  static init() {
    if (this.isEmpty()) {
      this.saveData();
    } else {
      Counters.setCounters(JSON.parse(localStorage.getItem("counters")));
      Display.displayCounterValue(Counters.getCounters()[Counters.getCurrentCounter()].val);
    }
  }

  static isEmpty() {
    if (localStorage.getItem("counters") == null) {
      return true;
    }
    return false;
  }

  static saveData() {
    localStorage.setItem("counters", JSON.stringify(Counters.getCounters()));
  }

}

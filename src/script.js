//Imports
import './style.css';
import "@fortawesome/fontawesome-free/js/fontawesome.js";
import "@fortawesome/fontawesome-free/js/solid.js";
import { Display } from './modules/Display';
import { Localstorage } from './modules/Localstorage';
import { Counters } from './modules/Counters';

Localstorage.init();
Counters.init();
Display.init();
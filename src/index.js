import addEvents from './eventListeners';
import { getData, delayRender } from './functions';

function init() {
  delayRender();
  addEvents();
  getData('Tbilisi', 'metric');
}

init();

import cacheDom from './cacheDom';
import { getUserInput, toggleUnits } from './functions';

function addEvents() {
  cacheDom.search.addEventListener('click', getUserInput);
  cacheDom.location.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
      cacheDom.search.click();
    }
  });
  cacheDom.f.addEventListener('click', toggleUnits);
  cacheDom.c.addEventListener('click', toggleUnits);
}

export default addEvents;

import cacheDom from './cacheDom';

/* eslint-disable no-console */
function renderInfo(data) {
  cacheDom.city.textContent = `${data.location}, ${data.country}`;
  cacheDom.description.textContent = data.description.split(' ').map((word) => word.charAt(0).toUpperCase() + word.substring(1)).join(' ');
  cacheDom.temp.textContent = data.temp;
  cacheDom.feelsLike.textContent = data.feelsLike;
  cacheDom.windSpeed.textContent = data.windSpeed;
  cacheDom.humidity.textContent = data.humidity;
  cacheDom.icon.src = `http://openweathermap.org/img/wn/${data.icon}@2x.png`;
  cacheDom.icon.alt = data.description;
}

export default renderInfo;

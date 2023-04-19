/* eslint-disable no-param-reassign */
/* eslint-disable no-console */
import cacheDom from './cacheDom';
import renderInfo from './render';

function parseInfo(data) {
  const { description } = data.weather[0];
  const location = data.name;
  const temp = Math.round(data.main.temp);
  const feelsLike = Math.round(data.main.feels_like);
  const humidity = Math.round(data.main.humidity);
  let windSpeed = Math.round(data.wind.speed).toFixed(1) * 3.6;
  if (cacheDom.windSpeedSymbol.textContent === 'm/h') {
    windSpeed = Math.round(data.wind.speed).toFixed(1);
  }
  const { icon } = data.weather[0];
  const { country } = data.sys;
  const obj = {
    description,
    location,
    temp,
    feelsLike,
    humidity,
    windSpeed,
    icon,
    country,
  };
  renderInfo(obj);
}

async function getData(city, unit) {
  try {
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&APPID=30c59b2e3bfc741d690d7d8f9e001f1a`, { mode: 'cors' });
    if (!response.ok) {
      const text = 'city not found';
      throw Error(text);
    }
    const data = await response.json();
    cacheDom.error.classList.add('hidden');
    parseInfo(data);
  } catch (error) {
    cacheDom.error.classList.remove('hidden');
  }
}

function getUserInput() {
  getData(cacheDom.location.value, 'metric');
}

function hideLoader() {
  cacheDom.loader.classList.add('display');
  cacheDom.container.classList.toggle('display');
  cacheDom.location.focus();
}

function delayRender() {
  cacheDom.container.classList.toggle('display');
  setTimeout(hideLoader, 1000);
}

function toggleUnits() {
  if (this.id === 'f') {
    if (cacheDom.location.value === '') {
      getData('Tbilisi', 'imperial');
    } else {
      getData(cacheDom.location.value, 'imperial');
    }
    cacheDom.f.classList.toggle('display');
    cacheDom.c.classList.toggle('display');
    cacheDom.symbol.forEach((item) => {
      item.textContent = '°F';
    });
    cacheDom.windSpeedSymbol.textContent = 'm/h';
  } else if (this.id === 'c') {
    if (cacheDom.location.value === '') {
      getData('Tbilisi', 'metric');
    } else {
      getData(cacheDom.location.value, 'metric');
    }
    cacheDom.f.classList.toggle('display');
    cacheDom.c.classList.toggle('display');
    cacheDom.symbol.forEach((item) => {
      item.textContent = '°C';
    });
    cacheDom.windSpeedSymbol.textContent = 'km/h';
  }
}

export {
  parseInfo, getUserInput, getData, delayRender, toggleUnits,
};

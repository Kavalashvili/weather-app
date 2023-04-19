const cacheDom = (() => {
  const loader = document.querySelector('#loader-container');
  const container = document.querySelector('#container');
  const location = document.querySelector('#location');
  const search = document.querySelector('#search');
  const searchContainer = document.querySelector('#search-container');
  const description = document.querySelector('#description');
  const city = document.querySelector('#city');
  const temp = document.querySelector('#temp');
  const feelsLike = document.querySelector('#feels-like');
  const humidity = document.querySelector('#humidity');
  const windSpeed = document.querySelector('#wind-speed');
  const currentDate = document.querySelector('#current-date');
  const currentTime = document.querySelector('#current-time');
  const error = document.querySelector('#error');
  const icon = document.querySelector('#icon-img');
  const f = document.querySelector('#f');
  const c = document.querySelector('#c');
  const symbol = document.querySelectorAll('.symbol');
  const windSpeedSymbol = document.querySelector('#wind-speed-symbol');

  return {
    loader,
    container,
    location,
    search,
    searchContainer,
    description,
    city,
    temp,
    feelsLike,
    humidity,
    windSpeed,
    currentDate,
    currentTime,
    error,
    icon,
    f,
    c,
    symbol,
    windSpeedSymbol,
  };
})();

export default cacheDom;

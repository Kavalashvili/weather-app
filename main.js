/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/cacheDom.js":
/*!*************************!*\
  !*** ./src/cacheDom.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst cacheDom = (() => {\n  const loader = document.querySelector('#loader-container');\n  const container = document.querySelector('#container');\n  const location = document.querySelector('#location');\n  const search = document.querySelector('#search');\n  const searchContainer = document.querySelector('#search-container');\n  const description = document.querySelector('#description');\n  const city = document.querySelector('#city');\n  const temp = document.querySelector('#temp');\n  const feelsLike = document.querySelector('#feels-like');\n  const humidity = document.querySelector('#humidity');\n  const windSpeed = document.querySelector('#wind-speed');\n  const currentDate = document.querySelector('#current-date');\n  const currentTime = document.querySelector('#current-time');\n  const error = document.querySelector('#error');\n  const icon = document.querySelector('#icon-img');\n  const f = document.querySelector('#f');\n  const c = document.querySelector('#c');\n  const symbol = document.querySelectorAll('.symbol');\n  const windSpeedSymbol = document.querySelector('#wind-speed-symbol');\n\n  return {\n    loader,\n    container,\n    location,\n    search,\n    searchContainer,\n    description,\n    city,\n    temp,\n    feelsLike,\n    humidity,\n    windSpeed,\n    currentDate,\n    currentTime,\n    error,\n    icon,\n    f,\n    c,\n    symbol,\n    windSpeedSymbol,\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cacheDom);\n\n\n//# sourceURL=webpack://weather-app/./src/cacheDom.js?");

/***/ }),

/***/ "./src/eventListeners.js":
/*!*******************************!*\
  !*** ./src/eventListeners.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _cacheDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cacheDom */ \"./src/cacheDom.js\");\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ \"./src/functions.js\");\n\n\n\nfunction addEvents() {\n  _cacheDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].search.addEventListener('click', _functions__WEBPACK_IMPORTED_MODULE_1__.getUserInput);\n  _cacheDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].location.addEventListener('keyup', (event) => {\n    if (event.key === 'Enter') {\n      _cacheDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].search.click();\n    }\n  });\n  _cacheDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].f.addEventListener('click', _functions__WEBPACK_IMPORTED_MODULE_1__.toggleUnits);\n  _cacheDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].c.addEventListener('click', _functions__WEBPACK_IMPORTED_MODULE_1__.toggleUnits);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addEvents);\n\n\n//# sourceURL=webpack://weather-app/./src/eventListeners.js?");

/***/ }),

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"delayRender\": () => (/* binding */ delayRender),\n/* harmony export */   \"getData\": () => (/* binding */ getData),\n/* harmony export */   \"getUserInput\": () => (/* binding */ getUserInput),\n/* harmony export */   \"parseInfo\": () => (/* binding */ parseInfo),\n/* harmony export */   \"toggleUnits\": () => (/* binding */ toggleUnits)\n/* harmony export */ });\n/* harmony import */ var _cacheDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cacheDom */ \"./src/cacheDom.js\");\n/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render */ \"./src/render.js\");\n/* eslint-disable no-param-reassign */\n/* eslint-disable no-console */\n\n\n\nfunction parseInfo(data) {\n  const { description } = data.weather[0];\n  const location = data.name;\n  const temp = Math.round(data.main.temp);\n  const feelsLike = Math.round(data.main.feels_like);\n  const humidity = Math.round(data.main.humidity);\n  let windSpeed = Math.round(data.wind.speed).toFixed(1) * 3.6;\n  if (_cacheDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].windSpeedSymbol.textContent === 'm/h') {\n    windSpeed = Math.round(data.wind.speed).toFixed(1);\n  }\n  const { icon } = data.weather[0];\n  const { country } = data.sys;\n  const obj = {\n    description,\n    location,\n    temp,\n    feelsLike,\n    humidity,\n    windSpeed,\n    icon,\n    country,\n  };\n  (0,_render__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(obj);\n}\n\nasync function getData(city, unit) {\n  try {\n    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&APPID=30c59b2e3bfc741d690d7d8f9e001f1a`, { mode: 'cors' });\n    if (!response.ok) {\n      const text = 'city not found';\n      throw Error(text);\n    }\n    const data = await response.json();\n    _cacheDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].error.classList.add('hidden');\n    parseInfo(data);\n  } catch (error) {\n    _cacheDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].error.classList.remove('hidden');\n  }\n}\n\nfunction getUserInput() {\n  getData(_cacheDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].location.value, 'metric');\n}\n\nfunction hideLoader() {\n  _cacheDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loader.classList.add('display');\n  _cacheDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].container.classList.toggle('display');\n  _cacheDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].location.focus();\n}\n\nfunction delayRender() {\n  _cacheDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].container.classList.toggle('display');\n  setTimeout(hideLoader, 1000);\n}\n\nfunction toggleUnits() {\n  if (this.id === 'f') {\n    if (_cacheDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].location.value === '') {\n      getData('Tbilisi', 'imperial');\n    } else {\n      getData(_cacheDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].location.value, 'imperial');\n    }\n    _cacheDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].f.classList.toggle('display');\n    _cacheDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].c.classList.toggle('display');\n    _cacheDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].symbol.forEach((item) => {\n      item.textContent = '°F';\n    });\n    _cacheDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].windSpeedSymbol.textContent = 'm/h';\n  } else if (this.id === 'c') {\n    if (_cacheDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].location.value === '') {\n      getData('Tbilisi', 'metric');\n    } else {\n      getData(_cacheDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].location.value, 'metric');\n    }\n    _cacheDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].f.classList.toggle('display');\n    _cacheDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].c.classList.toggle('display');\n    _cacheDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].symbol.forEach((item) => {\n      item.textContent = '°C';\n    });\n    _cacheDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].windSpeedSymbol.textContent = 'km/h';\n  }\n}\n\n\n\n\n//# sourceURL=webpack://weather-app/./src/functions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./eventListeners */ \"./src/eventListeners.js\");\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions */ \"./src/functions.js\");\n\n\n\nfunction init() {\n  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.delayRender)();\n  (0,_eventListeners__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  (0,_functions__WEBPACK_IMPORTED_MODULE_1__.getData)('Tbilisi', 'metric');\n}\n\ninit();\n\n\n//# sourceURL=webpack://weather-app/./src/index.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _cacheDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cacheDom */ \"./src/cacheDom.js\");\n\n\n/* eslint-disable no-console */\nfunction renderInfo(data) {\n  _cacheDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].city.textContent = `${data.location}, ${data.country}`;\n  _cacheDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].description.textContent = data.description.split(' ').map((word) => word.charAt(0).toUpperCase() + word.substring(1)).join(' ');\n  _cacheDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].temp.textContent = data.temp;\n  _cacheDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].feelsLike.textContent = data.feelsLike;\n  _cacheDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].windSpeed.textContent = data.windSpeed;\n  _cacheDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].humidity.textContent = data.humidity;\n  _cacheDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].icon.src = `http://openweathermap.org/img/wn/${data.icon}@2x.png`;\n  _cacheDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].icon.alt = data.description;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderInfo);\n\n\n//# sourceURL=webpack://weather-app/./src/render.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
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

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ \"./src/js/utils/index.js\");\n/* harmony import */ var _starsConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./starsConfig */ \"./src/js/starsConfig.js\");\n\n\nconst sourceCanvas = document.getElementById('source');\nconst sourceCtx = sourceCanvas.getContext('2d');\nconst sourceCanvasWidth = sourceCanvas.offsetWidth;\nconst sourceCanvasHeight = sourceCanvas.offsetHeight;\nconst targetCanvas = document.getElementById('target');\n_starsConfig__WEBPACK_IMPORTED_MODULE_1__.STARS_CONFIG.map(star => {\n  const starConfig = {\n    ctx: sourceCtx,\n    cx: sourceCanvasWidth * star.cxFactor,\n    cy: sourceCanvasHeight * star.cyFactor,\n    ...star\n  };\n  (0,_utils__WEBPACK_IMPORTED_MODULE_0__.drawStar)(starConfig);\n});\n\nfunction pick(event) {\n  const x = event.layerX;\n  const y = event.layerY;\n  const pixel = sourceCtx.getImageData(x, y, 1, 1);\n  const data = pixel.data;\n  return `rgba(${data[0]}, ${data[1]}, ${data[2]}, ${data[3] / 255})`;\n}\n\nsourceCanvas.addEventListener('click', function (event) {\n  const sourceColor = pick(event);\n  targetCanvas.style.backgroundColor = sourceColor;\n});\n\n//# sourceURL=webpack://task1/./src/js/index.js?");

/***/ }),

/***/ "./src/js/starsConfig.js":
/*!*******************************!*\
  !*** ./src/js/starsConfig.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SPIKES_COUNT\": () => (/* binding */ SPIKES_COUNT),\n/* harmony export */   \"OUTER_RADIUS\": () => (/* binding */ OUTER_RADIUS),\n/* harmony export */   \"INNER_RADIUS\": () => (/* binding */ INNER_RADIUS),\n/* harmony export */   \"STAR_BASE_PROPS\": () => (/* binding */ STAR_BASE_PROPS),\n/* harmony export */   \"STARS_CONFIG\": () => (/* binding */ STARS_CONFIG)\n/* harmony export */ });\n/**\n * Вынес сюда основные настройки и параметры для отрисовки звезд\n */\nconst SPIKES_COUNT = 5;\nconst OUTER_RADIUS = 90;\nconst INNER_RADIUS = 40;\nconst STAR_BASE_PROPS = {\n  spikes: SPIKES_COUNT,\n  outerRadius: OUTER_RADIUS,\n  innerRadius: INNER_RADIUS\n};\n/**\n * Массив с настройками для отрисовки каждой звезды\n */\n\nconst STARS_CONFIG = [{\n  cxFactor: 0.5,\n  cyFactor: 0.5,\n  fillColor: 'red',\n  ...STAR_BASE_PROPS\n}, {\n  cxFactor: 0.25,\n  cyFactor: 0.75,\n  fillColor: 'blue',\n  ...STAR_BASE_PROPS\n}, {\n  cxFactor: 0.25,\n  cyFactor: 0.25,\n  fillColor: 'green',\n  ...STAR_BASE_PROPS\n}, {\n  cxFactor: 0.75,\n  cyFactor: 0.25,\n  fillColor: 'yellow',\n  ...STAR_BASE_PROPS\n}, {\n  cxFactor: 0.75,\n  cyFactor: 0.75,\n  fillColor: 'black',\n  ...STAR_BASE_PROPS\n}];\n\n//# sourceURL=webpack://task1/./src/js/starsConfig.js?");

/***/ }),

/***/ "./src/js/utils/drawStar.js":
/*!**********************************!*\
  !*** ./src/js/utils/drawStar.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drawStar\": () => (/* binding */ drawStar)\n/* harmony export */ });\n/**\n * Фукнция рисует на холсте, переданном в ключе ctx параметра settings,\n * звезду с заданными в параметрами:\n * spikes - количество лучей у звезды\n * outerRadius - радиус окружности, на которой располагаются вершины лучей звезды\n * innerRadius - радиус окружности, на которой располагаются внутренних углов звезды\n * fillColor - цвет заливки звезды\n */\nconst drawStar = settings => {\n  const {\n    ctx,\n    cx,\n    cy,\n    spikes,\n    outerRadius,\n    innerRadius,\n    fillColor\n  } = settings;\n  let rot = Math.PI / 2 * 3;\n  let x = cx;\n  let y = cy;\n  const step = Math.PI / spikes;\n  ctx.beginPath();\n  ctx.moveTo(cx, cy - outerRadius);\n\n  for (let i = 0; i < spikes; i++) {\n    x = cx + Math.cos(rot) * outerRadius;\n    y = cy + Math.sin(rot) * outerRadius;\n    ctx.lineTo(x, y);\n    rot += step;\n    x = cx + Math.cos(rot) * innerRadius;\n    y = cy + Math.sin(rot) * innerRadius;\n    ctx.lineTo(x, y);\n    rot += step;\n  }\n\n  ctx.lineTo(cx, cy - outerRadius);\n  ctx.closePath();\n  ctx.fillStyle = fillColor;\n  ctx.fill();\n};\n\n//# sourceURL=webpack://task1/./src/js/utils/drawStar.js?");

/***/ }),

/***/ "./src/js/utils/index.js":
/*!*******************************!*\
  !*** ./src/js/utils/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drawStar\": () => (/* reexport safe */ _drawStar__WEBPACK_IMPORTED_MODULE_0__.drawStar)\n/* harmony export */ });\n/* harmony import */ var _drawStar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawStar */ \"./src/js/utils/drawStar.js\");\n\n\n//# sourceURL=webpack://task1/./src/js/utils/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;
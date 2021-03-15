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

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst about = () => {\n    return (`\n    <h3>ABOUT US</h3>\n    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ullam commodi. Nobis distinctio accusamus quos autem<br> similique aliquam tenetur vel sunt atque amet! Laudantium itaque labore et quibusdam qui suscipit!</p>\n    \n    <h3>ABOUT THIS SITE</h3>\n    <p><a href=\"https://www.theodinproject.com/courses/javascript/lessons/restaurant-page\">The Odin Project</a>'\n    <p><a href=\"https://github.com/jasont01/restaurant-page\">github repo</a></p>\n    <p>Background Photo by <a href=\"https://unsplash.com/photos/UkudQyyeovs\">Alexandra Tran on Unsplash</a></p>\n    `)\n}\n\nconst renderAbout = () => {\n    const main = document.getElementById('main');\n    main.innerHTML = about();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderAbout);\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst contact = () => {\n    return (`\n    <h3>CONTACT US</h3>\n    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ullam commodi. Nobis distinctio accusamus quos autem<br> similique aliquam tenetur vel sunt atque amet! Laudantium itaque labore et quibusdam qui suscipit!</p>\n    `)\n}\n\nconst renderContact = () => {\n    const main = document.getElementById('main');\n    main.innerHTML = contact();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderContact);\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n\n\nconst home = () => {\n    return (`\n    <div class=\"hero-content\">\n        <h1>Not just appetizers.</h1>\n        <p class=\"lead\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni corrupti quaerat quia at iusto minima facilis rem, aliquid libero impedit, reprehenderit provident id tempora eaque possimus repellat unde expedita ratione!</p>\n        <p class=\"lead\">\n            <a href=\"#\" id=\"menu-cta\" class=\"btn btn-lg btn-secondary fw-bold border-white bg-white\">Menu</a>\n        </p>\n    </div>\n    `)\n}\n\nconst renderHome = () => {\n    const main = document.getElementById('main');\n    main.innerHTML = home();\n\n    const menuCta = document.getElementById('menu-cta')\n    menuCta.addEventListener('click', _menu_js__WEBPACK_IMPORTED_MODULE_0__.default)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHome);\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ \"./src/main.js\");\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n\n\n(0,_main_js__WEBPACK_IMPORTED_MODULE_0__.default)()\n\nconst homeBtn = document.getElementById('home')\nconst menuBtn = document.getElementById('menu')\nconst aboutBtn = document.getElementById('about')\nconst contactBtn = document.getElementById('contact')\n\nhomeBtn.addEventListener('click', _home_js__WEBPACK_IMPORTED_MODULE_1__.default)\nmenuBtn.addEventListener('click', _menu_js__WEBPACK_IMPORTED_MODULE_2__.default)\naboutBtn.addEventListener('click', _about_js__WEBPACK_IMPORTED_MODULE_3__.default)\ncontactBtn.addEventListener('click', _contact_js__WEBPACK_IMPORTED_MODULE_4__.default)\n\n;(0,_home_js__WEBPACK_IMPORTED_MODULE_1__.default)()\n\n// FIXME: navbar indicators\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst navBar = () => {\n    return (`\n    <header class=\"mb-auto p-3\">\n        <div>\n            <h3 class=\"float-md-start mb-0\">Eggroll Restaurant</h3>\n            <nav class=\"nav nav-masthead justify-content-center float-md-end px-5\">\n                <a id=\"home\" class=\"nav-link active\" aria-current=\"page\" href=\"#\">Home</a>\n                <a id=\"menu\" class=\"nav-link\" href=\"#\">Menu</a>\n                <a id=\"about\" class=\"nav-link\" href=\"#\">About</a>\n                <a id=\"contact\" class=\"nav-link\" href=\"#\">Contact</a>\n            </nav>\n        </div>\n    </header>\n    `)\n}\n\nconst main = () => {\n    return (`\n    <main id='main' class=\"row align-items-center justify-content-center px-3 mt\"></main>\n    `)\n}\n\nconst footer = () => {\n    return (`\n    <footer class=\"mt-auto text-white-50 p-3\">\n    <p>&copy2021 <a href=\"#\" class=\"text-white\">Eggroll Restaurant</a></p>\n</footer>\n    `)\n}\n\nconst renderPage = () => {\n    const content = document.getElementById('content');\n    content.innerHTML = navBar() + main() + footer();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderPage); \n\n//# sourceURL=webpack://restaurant-page/./src/main.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n\n    let menuItems = [\n\n    { name: 'Ruben',\n    description: 'Corned beef, Swiss Cheese, Saurkraut. Served with 1000 Island',\n    price: 5.99},\n\n    { name: 'Southwestern',\n    description: 'Grilled Chicken, Black Beans Dip. Served with Avocado Ranch',\n    price: 5.99},\n\n    { name: 'BBQ',\n    description: 'Pulled Pork, Coleslaw. Served with Smokey Ranch',\n    price: 5.99},\n\n    { name: 'Roasted Pork',\n    description: 'Pork, Cabbage, Carrots. Served with Sweet n Sour',\n    price: 5.99},\n\n    { name: 'Roasted Chicken',\n    description: 'Chicken, Cabbage, Carrots. Served with Sweet n Sour',\n    price: 5.99},\n\n    { name: 'Cheeseburger',\n    description: 'Ground Beef, Onions, Cheddar Cheese. Served with Ketchup',\n    price: 5.99},\n\n    { name: 'Meatball',\n    description: 'Ground Beef & Mozzarella. Served with Marinara',\n    price: 5.99},\n\n    { name: 'Crab Rangoon',\n    description: 'Crab, Cream Cheese. Served with Sweet n Sour',\n    price: 5.99},\n\n    { name: 'Buffalo Chicken',\n    description: 'Buffalo Chicken Dip. Served with Ranch',\n    price: 5.99},\n\n    { name: 'Mac n Cheees',\n    description: 'Mac n Cheese. Served with Ranch',\n    price: 5.99},\n\n    { name: 'Avocado',\n    description: 'Avocado, Bacon, Pepperjack Cheese. Served with Ranch',\n    price: 5.99},\n\n    { name: 'Steak & Cheese',\n    description: 'Sliced Steak, Onions, Swiss Cheese. Serverd with Cipotle Mayo',\n    price: 5.99},\n\n    { name: 'Chicken Cordon Bleu',\n    description: 'Grilled Chicken, Ham, Swiss Cheese. Served with Honey Mustard',\n    price: 5.99},\n\n    { name: 'California',\n    description: 'Avocado, Sun Dried Tomatoes, Cilantro. Served with Ranch',\n    price: 5.99},\n\n    ]\n\n    let listItems = ''\n    let menuLeft = ''\n    let menuRight = ''\n\n    menuItems.forEach((item, index) => {\n        if (index % 2 == 0) {\n            menuLeft += `\n                <li>\n                <b>${item.name}</b><br>\n                ${item.description}<br>\n                ${item.price}\n                </li>\n                `\n        } else {\n            menuRight += `\n                <li>\n                <b>${item.name}</b><br>\n                ${item.description}<br>\n                ${item.price}\n                </li>\n                `\n        }\n    })\n\n    return (`\n    <h3>MENU</h3>\n    <div id='menu'>\n        <div id='menu-left'>\n            <ul>\n            ${menuLeft}\n            </ul>\n        </div>\n        <div id='menu-right'>\n            <ul>\n            ${menuRight}\n            </ul>\n        </div>\n    </div>\n    `)\n}\n\nconst renderMenu = () => {\n    const main = document.getElementById('main');\n    main.innerHTML = menu();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_initial_page_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/initial-page-load */ \"./src/modules/initial-page-load.js\");\n/* harmony import */ var _modules_home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/home-page */ \"./src/modules/home-page.js\");\n/* harmony import */ var _modules_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/contact */ \"./src/modules/contact.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/menu */ \"./src/modules/menu.js\");\n// NARAYAN\r\n\r\n\r\n\r\n\r\n\r\n\r\ndisplay();\r\nfunction dis(a,b,c){\r\n    const home=document.querySelector('#about');\r\n    const contact=document.querySelector('#contact');\r\n    const food=document.querySelector('#food');\r\n    home.style.display=a;\r\n    contact.style.display=b; \r\n    food.style.display=c;\r\n\r\n    if(home.style.display===\"block\"){\r\n        const foot=document.querySelector('#footer');\r\n        foot.style.position=\"absolute\";\r\n       }\r\n       if(contact.style.display===\"block\"){\r\n        const foot=document.querySelector('#footer');\r\n        foot.style.position=\"absolute\";\r\n       }\r\n       if(food.style.display===\"block\"){\r\n        const foot=document.querySelector('#footer');\r\n        foot.style.position=\"relative\";\r\n       }\r\n}\r\n\r\nconst homebtn=document.querySelector('.homebtn a');\r\nconst contactbtn=document.querySelector('.contactbtn a');\r\nconst menubtn=document.querySelector('.menubtn a');\r\n\r\nhomebtn.addEventListener(\"click\",function(){\r\n   dis(\"block\",\"none\",\"none\");\r\n});\r\n\r\ncontactbtn.addEventListener(\"click\",function(){\r\n    dis(\"none\",\"block\",\"none\");\r\n});\r\nmenubtn.addEventListener(\"click\",function(){\r\n    dis(\"none\",\"none\",\"block\");\r\n});\r\n\r\n function display(){\r\n    (0,_modules_initial_page_load__WEBPACK_IMPORTED_MODULE_0__.default)();\r\n    (0,_modules_home_page__WEBPACK_IMPORTED_MODULE_1__.default)();\r\n    (0,_modules_contact__WEBPACK_IMPORTED_MODULE_2__.default)();\r\n    (0,_modules_menu__WEBPACK_IMPORTED_MODULE_3__.default)();\r\n}\r\n\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/modules/contact.js":
/*!********************************!*\
  !*** ./src/modules/contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction contact(){\r\n    const contact=document.createElement('div');\r\n    contact.setAttribute('id','contact');\r\n    const call=document.createElement('h1');\r\n    call.textContent=\"Phone:\";\r\n    const para1=document.createElement('p');\r\n    para1.textContent=\"48934u493\";\r\n    const para2=document.createElement('p');\r\n    para2.textContent=\"48583439irj\";\r\n    const address=document.createElement('h3');\r\n    address.textContent=\"ADDRESS:NOT FIXED\";\r\n    contact.appendChild(call);\r\n    contact.appendChild(para1);\r\n    contact.appendChild(para2);\r\n    contact.appendChild(address);\r\nreturn contact;\r\n}\r\nfunction loadContact(){\r\n    const mai=document.querySelector('.main');\r\n    const cont=contact();\r\n    mai.appendChild(cont);\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\r\n\n\n//# sourceURL=webpack://restaurant-page/./src/modules/contact.js?");

/***/ }),

/***/ "./src/modules/home-page.js":
/*!**********************************!*\
  !*** ./src/modules/home-page.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction addContent(){\r\n    const about=document.createElement('div');\r\n    about.setAttribute('id','about');\r\n    const h1=document.createElement('h1');\r\n    h1.textContent='About';\r\n    const para=document.createElement('p');\r\n    para.textContent='Narayan Narayan Narayan Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo.we are going to be using JavaScript alone to generate the entire contents of the website!';\r\n    about.appendChild(h1);\r\n    about.appendChild(para);\r\n    return about;\r\n}\r\nfunction loadHome(){\r\n    const mai=document.querySelector('.main');\r\n    const add=addContent();\r\n    mai.appendChild(add);\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/home-page.js?");

/***/ }),

/***/ "./src/modules/initial-page-load.js":
/*!******************************************!*\
  !*** ./src/modules/initial-page-load.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n    function createHeader(text,id){\r\n        const header=document.createElement(\"header\");\r\n        header.setAttribute('id',id);\r\n        const heading=document.createElement('h1');\r\n         heading.textContent=text;\r\n       header.appendChild(heading);\r\n       return header;\r\n    }\r\n    function createBtn(text,id){\r\n    const item=document.createElement('li');\r\n    const link=document.createElement('a');\r\n    link.setAttribute('href','#');\r\n    link.textContent=text;\r\n    item.appendChild(link);\r\n   item.classList.add('tab');\r\n   item.classList.add(id);\r\n  \r\n    return item;\r\n    }\r\n    function nav(){\r\nconst nav=document.createElement('nav');\r\nconst items=document.createElement('ul');\r\nconst home=createBtn('Home','homebtn');\r\nconst menu=createBtn('Menu','menubtn');\r\nconst contact=createBtn('Contact','contactbtn');\r\nitems.appendChild(home);\r\nitems.appendChild(menu);\r\nitems.appendChild(contact);\r\nnav.appendChild(items);\r\nreturn nav;\r\n    }\r\n    function main(){\r\n        const main=document.createElement('main');\r\n        main.classList.add('main');\r\n        return main;\r\n    }\r\n    function footer(){\r\n        const footer=document.createElement('footer');\r\n        footer.setAttribute('id','footer')\r\n        const h2=document.createElement('h2');\r\n        h2.textContent=\"Narayan Foods\";\r\n        footer.appendChild(h2);\r\n        return footer;\r\n    }\r\n    function loadPage(){\r\n        const content=document.getElementById(\"content\");\r\n           //header\r\n   const header=createHeader('Narayan Foods','header');\r\n   content.appendChild(header);\r\n\r\n   //navbar'\r\n  \r\n   const navbar=nav();\r\n   content.appendChild(navbar);\r\n   //main\r\n   const mainsec=main();\r\n   content.appendChild(mainsec);\r\n   //footer\r\n   const footersec=footer();\r\n   content.appendChild(footersec);\r\n    }\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/initial-page-load.js?");

/***/ }),

/***/ "./src/modules/menu.js":
/*!*****************************!*\
  !*** ./src/modules/menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction  foodcard(src,text){\r\n    \r\nconst subfood=document.createElement('div');\r\nsubfood.classList.add('subfood');\r\nconst img=document.createElement('img');\r\nimg.setAttribute('src',src);\r\nconst para=document.createElement('p');\r\npara.textContent=text;\r\nsubfood.appendChild(img);\r\nsubfood.appendChild(para);\r\nreturn subfood;\r\n}\r\n\r\n\r\nfunction Menu(){\r\n    const addcard=[\r\n        foodcard('/src/images/dosa.jpg','DOSA'),\r\n        foodcard('/src/images/app.jpg','idli'),\r\n        foodcard('/src/images/idli.jpg','idli'),\r\n        foodcard('/src/images/curry.jpg','CURRY')\r\n    ];\r\n    \r\n    const food=document.createElement('div');\r\n    food.setAttribute('id','food');\r\n    const foodItem=document.createElement('div');\r\n    foodItem.setAttribute('id','foodItem');\r\n    for(var i=0;i<addcard.length;i++){\r\n       \r\n        foodItem.appendChild(addcard[i]);\r\n       \r\n    }\r\n    food.appendChild(foodItem);\r\n    return food;\r\n}\r\nfunction loadMenu(){\r\nconst main=document.querySelector(\".main\");\r\nconst total=Menu();\r\nmain.appendChild(total);\r\n\r\n}\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurant-page/./src/modules/menu.js?");

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
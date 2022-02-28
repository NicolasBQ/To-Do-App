/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/js/domElements.js":
/*!*******************************!*\
  !*** ./src/js/domElements.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "domElements": () => (/* binding */ domElements)
/* harmony export */ });
const domElements = () => {
	const form = document.querySelector('.main__form');
	const input = document.querySelector('.main__form-input');

	return {
		form,
		input,
	};
};




/***/ }),

/***/ "./src/js/tasksController.js":
/*!***********************************!*\
  !*** ./src/js/tasksController.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTodo": () => (/* binding */ addTodo),
/* harmony export */   "tasksController": () => (/* binding */ tasksController)
/* harmony export */ });
const tasksController = (array = todoArray(), container = 'all-tasks') => {
    display(array, container);
};

const todoArray = () => JSON.parse(localStorage.getItem('todoArr')) || [];

const saveArray = (array) => {
    localStorage.setItem('todoArr', JSON.stringify(array));
};

const addTodo = (taskName) => {
    const array = todoArray();

    array.push({
        taskName,
        status: 'active',
        dataAtr: todoArray().length,
    });

    saveArray(array);
    tasksController(array);
};

const display = (array, container) => {
    const arrayTemplate = array.map((item) => createUI(item));

    const sectionContainer = document.querySelector(`.${container}`);

    sectionContainer.innerHTML = arrayTemplate.join('');
};

const createUI = (item) => {
    return `<li class="list-item text-font font-500 medium-font">
    	<input type="checkbox" class="list-checkbox" />
    	<p>${item.taskName}</p>
            </li>`;
};




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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ "./src/scss/main.scss");
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domElements */ "./src/js/domElements.js");
/* harmony import */ var _tasksController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasksController */ "./src/js/tasksController.js");




const appInit = () => {
    (0,_tasksController__WEBPACK_IMPORTED_MODULE_2__.tasksController)();

    (0,_domElements__WEBPACK_IMPORTED_MODULE_1__.domElements)().form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!(0,_domElements__WEBPACK_IMPORTED_MODULE_1__.domElements)().input.value) return;

        const inputValue = (0,_domElements__WEBPACK_IMPORTED_MODULE_1__.domElements)().input.value;
        (0,_tasksController__WEBPACK_IMPORTED_MODULE_2__.addTodo)(inputValue);
    });
};

document.addEventListener('DOMContentLoaded', appInit);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguODZkMDZmYmUzNjBjZDdjNWM2ODQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDdUI7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELFVBQVU7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGNBQWM7QUFDeEI7QUFDQTtBQUNBO0FBQ29DOzs7Ozs7O1VDdENwQztVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOMkI7QUFDaUI7QUFDaUI7QUFDN0Q7QUFDQTtBQUNBLElBQUksaUVBQWU7QUFDbkI7QUFDQSxJQUFJLHlEQUFXO0FBQ2Y7QUFDQSxhQUFhLHlEQUFXO0FBQ3hCO0FBQ0EsMkJBQTJCLHlEQUFXO0FBQ3RDLFFBQVEseURBQU87QUFDZixLQUFLO0FBQ0w7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJveWVjdG8tdG9kby1hcHAvLi9zcmMvc2Nzcy9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vcHJveWVjdG8tdG9kby1hcHAvLi9zcmMvanMvZG9tRWxlbWVudHMuanMiLCJ3ZWJwYWNrOi8vcHJveWVjdG8tdG9kby1hcHAvLi9zcmMvanMvdGFza3NDb250cm9sbGVyLmpzIiwid2VicGFjazovL3Byb3llY3RvLXRvZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb3llY3RvLXRvZG8tYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm95ZWN0by10b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb3llY3RvLXRvZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJveWVjdG8tdG9kby1hcHAvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiY29uc3QgZG9tRWxlbWVudHMgPSAoKSA9PiB7XHJcblx0Y29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX19mb3JtJyk7XHJcblx0Y29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbl9fZm9ybS1pbnB1dCcpO1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0Zm9ybSxcclxuXHRcdGlucHV0LFxyXG5cdH07XHJcbn07XHJcblxyXG5leHBvcnQgeyBkb21FbGVtZW50cyB9O1xyXG4iLCJjb25zdCB0YXNrc0NvbnRyb2xsZXIgPSAoYXJyYXkgPSB0b2RvQXJyYXkoKSwgY29udGFpbmVyID0gJ2FsbC10YXNrcycpID0+IHtcclxuICAgIGRpc3BsYXkoYXJyYXksIGNvbnRhaW5lcik7XHJcbn07XHJcblxyXG5jb25zdCB0b2RvQXJyYXkgPSAoKSA9PiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvQXJyJykpIHx8IFtdO1xyXG5cclxuY29uc3Qgc2F2ZUFycmF5ID0gKGFycmF5KSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb0FycicsIEpTT04uc3RyaW5naWZ5KGFycmF5KSk7XHJcbn07XHJcblxyXG5jb25zdCBhZGRUb2RvID0gKHRhc2tOYW1lKSA9PiB7XHJcbiAgICBjb25zdCBhcnJheSA9IHRvZG9BcnJheSgpO1xyXG5cclxuICAgIGFycmF5LnB1c2goe1xyXG4gICAgICAgIHRhc2tOYW1lLFxyXG4gICAgICAgIHN0YXR1czogJ2FjdGl2ZScsXHJcbiAgICAgICAgZGF0YUF0cjogdG9kb0FycmF5KCkubGVuZ3RoLFxyXG4gICAgfSk7XHJcblxyXG4gICAgc2F2ZUFycmF5KGFycmF5KTtcclxuICAgIHRhc2tzQ29udHJvbGxlcihhcnJheSk7XHJcbn07XHJcblxyXG5jb25zdCBkaXNwbGF5ID0gKGFycmF5LCBjb250YWluZXIpID0+IHtcclxuICAgIGNvbnN0IGFycmF5VGVtcGxhdGUgPSBhcnJheS5tYXAoKGl0ZW0pID0+IGNyZWF0ZVVJKGl0ZW0pKTtcclxuXHJcbiAgICBjb25zdCBzZWN0aW9uQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Y29udGFpbmVyfWApO1xyXG5cclxuICAgIHNlY3Rpb25Db250YWluZXIuaW5uZXJIVE1MID0gYXJyYXlUZW1wbGF0ZS5qb2luKCcnKTtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZVVJID0gKGl0ZW0pID0+IHtcclxuICAgIHJldHVybiBgPGxpIGNsYXNzPVwibGlzdC1pdGVtIHRleHQtZm9udCBmb250LTUwMCBtZWRpdW0tZm9udFwiPlxyXG4gICAgXHQ8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgY2xhc3M9XCJsaXN0LWNoZWNrYm94XCIgLz5cclxuICAgIFx0PHA+JHtpdGVtLnRhc2tOYW1lfTwvcD5cclxuICAgICAgICAgICAgPC9saT5gO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgYWRkVG9kbywgdGFza3NDb250cm9sbGVyIH07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuLi9zY3NzL21haW4uc2Nzcyc7XHJcbmltcG9ydCB7IGRvbUVsZW1lbnRzIH0gZnJvbSAnLi9kb21FbGVtZW50cyc7XHJcbmltcG9ydCB7IGFkZFRvZG8sIHRhc2tzQ29udHJvbGxlciB9IGZyb20gJy4vdGFza3NDb250cm9sbGVyJztcclxuXHJcbmNvbnN0IGFwcEluaXQgPSAoKSA9PiB7XHJcbiAgICB0YXNrc0NvbnRyb2xsZXIoKTtcclxuXHJcbiAgICBkb21FbGVtZW50cygpLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKCFkb21FbGVtZW50cygpLmlucHV0LnZhbHVlKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGlucHV0VmFsdWUgPSBkb21FbGVtZW50cygpLmlucHV0LnZhbHVlO1xyXG4gICAgICAgIGFkZFRvZG8oaW5wdXRWYWx1ZSk7XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBhcHBJbml0KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!***********************************!*\
  !*** ./src/js/tasksController.js ***!
  \***********************************/
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



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza3NDb250cm9sbGVyLjlkMTg0NDRkNjM1Yzg2YzQ0NWY5LmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RCxVQUFVO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxjQUFjO0FBQ3hCO0FBQ0E7QUFDQTtBQUNvQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb3llY3RvLXRvZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Byb3llY3RvLXRvZG8tYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wcm95ZWN0by10b2RvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Byb3llY3RvLXRvZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcHJveWVjdG8tdG9kby1hcHAvLi9zcmMvanMvdGFza3NDb250cm9sbGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgdGFza3NDb250cm9sbGVyID0gKGFycmF5ID0gdG9kb0FycmF5KCksIGNvbnRhaW5lciA9ICdhbGwtdGFza3MnKSA9PiB7XHJcbiAgICBkaXNwbGF5KGFycmF5LCBjb250YWluZXIpO1xyXG59O1xyXG5cclxuY29uc3QgdG9kb0FycmF5ID0gKCkgPT4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb0FycicpKSB8fCBbXTtcclxuXHJcbmNvbnN0IHNhdmVBcnJheSA9IChhcnJheSkgPT4ge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9BcnInLCBKU09OLnN0cmluZ2lmeShhcnJheSkpO1xyXG59O1xyXG5cclxuY29uc3QgYWRkVG9kbyA9ICh0YXNrTmFtZSkgPT4ge1xyXG4gICAgY29uc3QgYXJyYXkgPSB0b2RvQXJyYXkoKTtcclxuXHJcbiAgICBhcnJheS5wdXNoKHtcclxuICAgICAgICB0YXNrTmFtZSxcclxuICAgICAgICBzdGF0dXM6ICdhY3RpdmUnLFxyXG4gICAgICAgIGRhdGFBdHI6IHRvZG9BcnJheSgpLmxlbmd0aCxcclxuICAgIH0pO1xyXG5cclxuICAgIHNhdmVBcnJheShhcnJheSk7XHJcbiAgICB0YXNrc0NvbnRyb2xsZXIoYXJyYXkpO1xyXG59O1xyXG5cclxuY29uc3QgZGlzcGxheSA9IChhcnJheSwgY29udGFpbmVyKSA9PiB7XHJcbiAgICBjb25zdCBhcnJheVRlbXBsYXRlID0gYXJyYXkubWFwKChpdGVtKSA9PiBjcmVhdGVVSShpdGVtKSk7XHJcblxyXG4gICAgY29uc3Qgc2VjdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NvbnRhaW5lcn1gKTtcclxuXHJcbiAgICBzZWN0aW9uQ29udGFpbmVyLmlubmVySFRNTCA9IGFycmF5VGVtcGxhdGUuam9pbignJyk7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVVSSA9IChpdGVtKSA9PiB7XHJcbiAgICByZXR1cm4gYDxsaSBjbGFzcz1cImxpc3QtaXRlbSB0ZXh0LWZvbnQgZm9udC01MDAgbWVkaXVtLWZvbnRcIj5cclxuICAgIFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwibGlzdC1jaGVja2JveFwiIC8+XHJcbiAgICBcdDxwPiR7aXRlbS50YXNrTmFtZX08L3A+XHJcbiAgICAgICAgICAgIDwvbGk+YDtcclxufTtcclxuXHJcbmV4cG9ydCB7IGFkZFRvZG8sIHRhc2tzQ29udHJvbGxlciB9O1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
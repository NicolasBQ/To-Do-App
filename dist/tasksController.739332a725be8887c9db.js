/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
    const allTasks = document.querySelector('.all-tasks');
    const activeTasks = document.querySelector('.active-tasks');
    const completedTasks = document.querySelector('.completed-tasks');
    const allList = document.querySelector('.all-list');
    const activeList = document.querySelector('.active-list');
    const completedList = document.querySelector('.completed-list');
    const mainSections = document.querySelector('.main__sections');
    const checkboxInputs = document.querySelectorAll('.list-checkbox');

    return {
        form,
        input,
        allTasks,
        activeTasks,
        completedTasks,
        allList,
        activeList,
        completedList,
        mainSections,
        checkboxInputs,
    };
};




/***/ }),

/***/ "./src/js/filter.js":
/*!**************************!*\
  !*** ./src/js/filter.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filterActive": () => (/* binding */ filterActive),
/* harmony export */   "filterCompleted": () => (/* binding */ filterCompleted)
/* harmony export */ });
/* harmony import */ var _tasksController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasksController */ "./src/js/tasksController.js");


const filterActive = () => {
    const activeArr = (0,_tasksController__WEBPACK_IMPORTED_MODULE_0__.todoArray)().filter((item) => {
        return item.status === 'active';
    });

    (0,_tasksController__WEBPACK_IMPORTED_MODULE_0__.display)(activeArr, 'active-list');
};

const filterCompleted = () => {
    const completedArr = (0,_tasksController__WEBPACK_IMPORTED_MODULE_0__.todoArray)().filter((item) => {
        return item.status === 'completed';
    });

    (0,_tasksController__WEBPACK_IMPORTED_MODULE_0__.display)(completedArr, 'completed-list');
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
/* harmony export */   "tasksController": () => (/* binding */ tasksController),
/* harmony export */   "todoArray": () => (/* binding */ todoArray),
/* harmony export */   "display": () => (/* binding */ display)
/* harmony export */ });
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements */ "./src/js/domElements.js");
/* harmony import */ var _filter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./filter */ "./src/js/filter.js");



const tasksController = (array = todoArray(), container = 'all-list') => {
    display(array, container);
    (0,_filter__WEBPACK_IMPORTED_MODULE_1__.filterActive)();
    (0,_filter__WEBPACK_IMPORTED_MODULE_1__.filterCompleted)();
    checkboxEvents();
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
    tasksController();
};

const display = (array, container) => {
    const arrayTemplate = array.map((item) => createUI(item));

    const sectionContainer = document.querySelector(`.${container}`);

    sectionContainer.innerHTML = arrayTemplate.join('');
};

const createUI = (item) => {
    return `<li class="list-item text-font font-500 medium-font" data-item="${item.dataAtr}">
    	<input type="checkbox" class="list-checkbox" ${checkedStatus(item.status)}/>
    	<p>${item.taskName}</p>
            </li>`;
};

const checkedStatus = (itemStatus) => {
    if (itemStatus === 'completed') {
        return 'checked';
    }

    return;
};

const checkboxEvents = () => {
    const checkboxItems = (0,_domElements__WEBPACK_IMPORTED_MODULE_0__.domElements)().checkboxInputs;
    const array = todoArray();

    Array.from(checkboxItems).forEach((item) => {
        item.addEventListener('click', () => {
            if (array[item.parentElement.dataset.item].status === 'active') {
                array[item.parentElement.dataset.item].status = 'completed';
            } else {
                array[item.parentElement.dataset.item].status = 'active';
            }

            saveArray(array);
            tasksController();
        });
    });
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/tasksController.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza3NDb250cm9sbGVyLjczOTMzMmE3MjViZTg4ODdjOWRiLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUN1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxQmdDO0FBQ3ZEO0FBQ0E7QUFDQSxzQkFBc0IsMkRBQVM7QUFDL0I7QUFDQSxLQUFLO0FBQ0w7QUFDQSxJQUFJLHlEQUFPO0FBQ1g7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDJEQUFTO0FBQ2xDO0FBQ0EsS0FBSztBQUNMO0FBQ0EsSUFBSSx5REFBTztBQUNYO0FBQ0E7QUFDeUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJHO0FBQ2E7QUFDekQ7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxREFBWTtBQUNoQixJQUFJLHdEQUFlO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBd0QsVUFBVTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEVBQThFLGFBQWE7QUFDM0Ysb0RBQW9ELDJCQUEyQjtBQUMvRSxVQUFVLGNBQWM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHlEQUFXO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ3dEOzs7Ozs7O1VDdEV4RDtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Byb3llY3RvLXRvZG8tYXBwLy4vc3JjL2pzL2RvbUVsZW1lbnRzLmpzIiwid2VicGFjazovL3Byb3llY3RvLXRvZG8tYXBwLy4vc3JjL2pzL2ZpbHRlci5qcyIsIndlYnBhY2s6Ly9wcm95ZWN0by10b2RvLWFwcC8uL3NyYy9qcy90YXNrc0NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vcHJveWVjdG8tdG9kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcHJveWVjdG8tdG9kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Byb3llY3RvLXRvZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcHJveWVjdG8tdG9kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wcm95ZWN0by10b2RvLWFwcC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3Byb3llY3RvLXRvZG8tYXBwL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9wcm95ZWN0by10b2RvLWFwcC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZG9tRWxlbWVudHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fX2Zvcm0nKTtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW5fX2Zvcm0taW5wdXQnKTtcclxuICAgIGNvbnN0IGFsbFRhc2tzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFsbC10YXNrcycpO1xyXG4gICAgY29uc3QgYWN0aXZlVGFza3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlLXRhc2tzJyk7XHJcbiAgICBjb25zdCBjb21wbGV0ZWRUYXNrcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wbGV0ZWQtdGFza3MnKTtcclxuICAgIGNvbnN0IGFsbExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLWxpc3QnKTtcclxuICAgIGNvbnN0IGFjdGl2ZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlLWxpc3QnKTtcclxuICAgIGNvbnN0IGNvbXBsZXRlZExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29tcGxldGVkLWxpc3QnKTtcclxuICAgIGNvbnN0IG1haW5TZWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluX19zZWN0aW9ucycpO1xyXG4gICAgY29uc3QgY2hlY2tib3hJbnB1dHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGlzdC1jaGVja2JveCcpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgZm9ybSxcclxuICAgICAgICBpbnB1dCxcclxuICAgICAgICBhbGxUYXNrcyxcclxuICAgICAgICBhY3RpdmVUYXNrcyxcclxuICAgICAgICBjb21wbGV0ZWRUYXNrcyxcclxuICAgICAgICBhbGxMaXN0LFxyXG4gICAgICAgIGFjdGl2ZUxpc3QsXHJcbiAgICAgICAgY29tcGxldGVkTGlzdCxcclxuICAgICAgICBtYWluU2VjdGlvbnMsXHJcbiAgICAgICAgY2hlY2tib3hJbnB1dHMsXHJcbiAgICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IHsgZG9tRWxlbWVudHMgfTtcclxuIiwiaW1wb3J0IHsgdG9kb0FycmF5LCBkaXNwbGF5IH0gZnJvbSAnLi90YXNrc0NvbnRyb2xsZXInO1xyXG5cclxuY29uc3QgZmlsdGVyQWN0aXZlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgYWN0aXZlQXJyID0gdG9kb0FycmF5KCkuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0uc3RhdHVzID09PSAnYWN0aXZlJztcclxuICAgIH0pO1xyXG5cclxuICAgIGRpc3BsYXkoYWN0aXZlQXJyLCAnYWN0aXZlLWxpc3QnKTtcclxufTtcclxuXHJcbmNvbnN0IGZpbHRlckNvbXBsZXRlZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGNvbXBsZXRlZEFyciA9IHRvZG9BcnJheSgpLmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgICAgIHJldHVybiBpdGVtLnN0YXR1cyA9PT0gJ2NvbXBsZXRlZCc7XHJcbiAgICB9KTtcclxuXHJcbiAgICBkaXNwbGF5KGNvbXBsZXRlZEFyciwgJ2NvbXBsZXRlZC1saXN0Jyk7XHJcbn07XHJcblxyXG5leHBvcnQgeyBmaWx0ZXJBY3RpdmUsIGZpbHRlckNvbXBsZXRlZCB9O1xyXG4iLCJpbXBvcnQgeyBkb21FbGVtZW50cyB9IGZyb20gJy4vZG9tRWxlbWVudHMnO1xyXG5pbXBvcnQgeyBmaWx0ZXJBY3RpdmUsIGZpbHRlckNvbXBsZXRlZCB9IGZyb20gJy4vZmlsdGVyJztcclxuXHJcbmNvbnN0IHRhc2tzQ29udHJvbGxlciA9IChhcnJheSA9IHRvZG9BcnJheSgpLCBjb250YWluZXIgPSAnYWxsLWxpc3QnKSA9PiB7XHJcbiAgICBkaXNwbGF5KGFycmF5LCBjb250YWluZXIpO1xyXG4gICAgZmlsdGVyQWN0aXZlKCk7XHJcbiAgICBmaWx0ZXJDb21wbGV0ZWQoKTtcclxuICAgIGNoZWNrYm94RXZlbnRzKCk7XHJcbn07XHJcblxyXG5jb25zdCB0b2RvQXJyYXkgPSAoKSA9PiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvQXJyJykpIHx8IFtdO1xyXG5cclxuY29uc3Qgc2F2ZUFycmF5ID0gKGFycmF5KSA9PiB7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb0FycicsIEpTT04uc3RyaW5naWZ5KGFycmF5KSk7XHJcbn07XHJcblxyXG5jb25zdCBhZGRUb2RvID0gKHRhc2tOYW1lKSA9PiB7XHJcbiAgICBjb25zdCBhcnJheSA9IHRvZG9BcnJheSgpO1xyXG5cclxuICAgIGFycmF5LnB1c2goe1xyXG4gICAgICAgIHRhc2tOYW1lLFxyXG4gICAgICAgIHN0YXR1czogJ2FjdGl2ZScsXHJcbiAgICAgICAgZGF0YUF0cjogdG9kb0FycmF5KCkubGVuZ3RoLFxyXG4gICAgfSk7XHJcblxyXG4gICAgc2F2ZUFycmF5KGFycmF5KTtcclxuICAgIHRhc2tzQ29udHJvbGxlcigpO1xyXG59O1xyXG5cclxuY29uc3QgZGlzcGxheSA9IChhcnJheSwgY29udGFpbmVyKSA9PiB7XHJcbiAgICBjb25zdCBhcnJheVRlbXBsYXRlID0gYXJyYXkubWFwKChpdGVtKSA9PiBjcmVhdGVVSShpdGVtKSk7XHJcblxyXG4gICAgY29uc3Qgc2VjdGlvbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2NvbnRhaW5lcn1gKTtcclxuXHJcbiAgICBzZWN0aW9uQ29udGFpbmVyLmlubmVySFRNTCA9IGFycmF5VGVtcGxhdGUuam9pbignJyk7XHJcbn07XHJcblxyXG5jb25zdCBjcmVhdGVVSSA9IChpdGVtKSA9PiB7XHJcbiAgICByZXR1cm4gYDxsaSBjbGFzcz1cImxpc3QtaXRlbSB0ZXh0LWZvbnQgZm9udC01MDAgbWVkaXVtLWZvbnRcIiBkYXRhLWl0ZW09XCIke2l0ZW0uZGF0YUF0cn1cIj5cclxuICAgIFx0PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwibGlzdC1jaGVja2JveFwiICR7Y2hlY2tlZFN0YXR1cyhpdGVtLnN0YXR1cyl9Lz5cclxuICAgIFx0PHA+JHtpdGVtLnRhc2tOYW1lfTwvcD5cclxuICAgICAgICAgICAgPC9saT5gO1xyXG59O1xyXG5cclxuY29uc3QgY2hlY2tlZFN0YXR1cyA9IChpdGVtU3RhdHVzKSA9PiB7XHJcbiAgICBpZiAoaXRlbVN0YXR1cyA9PT0gJ2NvbXBsZXRlZCcpIHtcclxuICAgICAgICByZXR1cm4gJ2NoZWNrZWQnO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybjtcclxufTtcclxuXHJcbmNvbnN0IGNoZWNrYm94RXZlbnRzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY2hlY2tib3hJdGVtcyA9IGRvbUVsZW1lbnRzKCkuY2hlY2tib3hJbnB1dHM7XHJcbiAgICBjb25zdCBhcnJheSA9IHRvZG9BcnJheSgpO1xyXG5cclxuICAgIEFycmF5LmZyb20oY2hlY2tib3hJdGVtcykuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChhcnJheVtpdGVtLnBhcmVudEVsZW1lbnQuZGF0YXNldC5pdGVtXS5zdGF0dXMgPT09ICdhY3RpdmUnKSB7XHJcbiAgICAgICAgICAgICAgICBhcnJheVtpdGVtLnBhcmVudEVsZW1lbnQuZGF0YXNldC5pdGVtXS5zdGF0dXMgPSAnY29tcGxldGVkJztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFycmF5W2l0ZW0ucGFyZW50RWxlbWVudC5kYXRhc2V0Lml0ZW1dLnN0YXR1cyA9ICdhY3RpdmUnO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzYXZlQXJyYXkoYXJyYXkpO1xyXG4gICAgICAgICAgICB0YXNrc0NvbnRyb2xsZXIoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IHsgYWRkVG9kbywgdGFza3NDb250cm9sbGVyLCB0b2RvQXJyYXksIGRpc3BsYXkgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9qcy90YXNrc0NvbnRyb2xsZXIuanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
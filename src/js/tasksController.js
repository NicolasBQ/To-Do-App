import { domElements } from './domElements';
import { filterActive, filterCompleted } from './filter';

const tasksController = (array = todoArray(), container = 'all-list') => {
    display(array, container);
    filterActive();
    filterCompleted();
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
    const checkboxItems = domElements().checkboxInputs;
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

export { addTodo, tasksController, todoArray, display };

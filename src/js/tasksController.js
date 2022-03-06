import { domElements } from './domElements';
import { filterActive, filterCompleted } from './filter';
import { display } from './userInterface';
import { deleteTaskItem } from './removeTasks';

// Manage all the interactions of the Tasks
const tasksController = (array = todoArray(), container = 'all-list') => {
    display(array, container);
    filterActive();
    filterCompleted();
    checkboxEvents();
    deleteTaskItem();
};

// Return the Array saved in the local Storage
const todoArray = () => JSON.parse(localStorage.getItem('todoArr')) || [];

// Save in the localStorage all the changes that are made in the Array (Remove tasks, change status)
const saveArray = (array) => {
    localStorage.setItem('todoArr', JSON.stringify(array));
};

// Create the Tasks Object and push it into the tasks array
const addTodo = (taskName) => {
    domElements().input.value = '';
    const array = todoArray();

    array.push({
        taskName,
        status: 'active',
        dataAtr: todoArray().length, // Identify the number of the task to synchronize it to the DOM elements and the index of the array
    });

    saveArray(array);
    tasksController();
};

// Change the status of the task, onces the user click the checkbox
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

export { addTodo, tasksController, todoArray, saveArray };

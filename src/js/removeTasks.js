import { todoArray, saveArray, tasksController } from './tasksController';
import { domElements } from './domElements';

// Remove 'completed tasks' items
const deleteTaskItem = () => {
    const deleteTasksBtn = domElements().deleteItems;
    const array = todoArray();

    Array.from(deleteTasksBtn).forEach((button) => {
        button.addEventListener('click', () => {
            button.parentElement.remove();
            array.splice(button.parentElement.dataset.item, 1);
            saveArray(array);
            resetDataAtr();
            tasksController();
        });
    });
};

// Reset the Data attributes once an item is deleted
const resetDataAtr = () => {
    const array = todoArray();

    for (let i = 0; i < array.length; i++) {
        array[i].dataAtr = i;
    }

    saveArray(array);
};

// Rewrite and display only the items that have an active status (Delete completed);
const deleteAllTasks = () => {
    const array = todoArray().filter((item) => item.status === 'active');

    saveArray(array);
    resetDataAtr();
    tasksController();
};

export { deleteTaskItem, deleteAllTasks };

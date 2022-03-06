import '../scss/main.scss';
import { domElements } from './domElements';
import { addTodo, tasksController } from './tasksController';
import { activeFun, activeSection } from './toggleSections';
import { deleteAllTasks } from './removeTasks';

const appInit = () => {
    tasksController(); // Loads the tasks and it's interactions that are saved in the localStorage

    // Form Submit Event
    domElements().form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!domElements().input.value) return;

        const inputValue = domElements().input.value;
        addTodo(inputValue);
    });

    // Event to change between 'All', 'Active' and 'Completed' tasks
    domElements().mainSections.addEventListener('click', activeSection);

    // Evento remove all the 'completed' tasks
    domElements().deleteBtn.addEventListener('click', deleteAllTasks);
};

document.addEventListener('DOMContentLoaded', appInit);

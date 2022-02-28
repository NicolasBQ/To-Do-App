import '../scss/main.scss';
import { domElements } from './domElements';
import { addTodo, tasksController } from './tasksController';

const appInit = () => {
    tasksController();

    domElements().form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!domElements().input.value) return;

        const inputValue = domElements().input.value;
        addTodo(inputValue);
    });
};

document.addEventListener('DOMContentLoaded', appInit);

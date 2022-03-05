import '../scss/main.scss';
import { domElements } from './domElements';
import { addTodo, tasksController } from './tasksController';
import { activeFun } from './toggleSections';

const appInit = () => {
    tasksController();

    domElements().form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!domElements().input.value) return;

        const inputValue = domElements().input.value;
        addTodo(inputValue);
    });

    domElements().mainSections.addEventListener('click', activeFun);
};

document.addEventListener('DOMContentLoaded', appInit);

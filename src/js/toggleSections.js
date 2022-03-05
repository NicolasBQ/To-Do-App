import { domElements } from './domElements';

const activeFun = (e) => {
    if (e.target === domElements().allTasks) {
        addBorder(domElements().allTasks);
        removeBorder(domElements().activeTasks);
        removeBorder(domElements().completedTasks);
        sectionDisplay(domElements().allList);
        removeSectionDisplay(domElements().activeList);
        removeSectionDisplay(domElements().completedList);
    }

    if (e.target === domElements().activeTasks) {
        addBorder(domElements().activeTasks);
        removeBorder(domElements().allTasks);
        removeBorder(domElements().completedTasks);
        sectionDisplay(domElements().activeList);
        removeSectionDisplay(domElements().allList);
        removeSectionDisplay(domElements().completedList);
    }

    if (e.target === domElements().completedTasks) {
        addBorder(domElements().completedTasks);
        removeBorder(domElements().activeTasks);
        removeBorder(domElements().allTasks);
        sectionDisplay(domElements().completedList);
        removeSectionDisplay(domElements().activeList);
        removeSectionDisplay(domElements().allList);
    }

    return;
};

const addBorder = (element) => {
    element.nextElementSibling.classList.add('active-border');
};

const removeBorder = (element) => {
    element.nextElementSibling.classList.remove('active-border');
};

const sectionDisplay = (element) => {
    element.classList.add('active-section');
    element.classList.remove('inactive-section');
};

const removeSectionDisplay = (element) => {
    element.classList.add('inactive-section');
    element.classList.remove('active-section');
};

export { activeFun };

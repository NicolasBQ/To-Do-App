import { domElements } from './domElements';

// Depending on the target clicked, show a section
const activeSection = (e) => {
    if (e.target === domElements().allTasks) {
        addBorder(domElements().allTasks);
        removeBorder(domElements().activeTasks);
        removeBorder(domElements().completedTasks);
        sectionDisplay(domElements().allList);
        removeSectionDisplay(domElements().activeList);
        removeSectionDisplay(domElements().completedList);
        deleteBtnDisable();
    }

    if (e.target === domElements().activeTasks) {
        addBorder(domElements().activeTasks);
        removeBorder(domElements().allTasks);
        removeBorder(domElements().completedTasks);
        sectionDisplay(domElements().activeList);
        removeSectionDisplay(domElements().allList);
        removeSectionDisplay(domElements().completedList);
        deleteBtnDisable();
    }

    if (e.target === domElements().completedTasks) {
        addBorder(domElements().completedTasks);
        removeBorder(domElements().activeTasks);
        removeBorder(domElements().allTasks);
        sectionDisplay(domElements().completedList);
        removeSectionDisplay(domElements().activeList);
        removeSectionDisplay(domElements().allList);
        deleteBtnActive();
    }

    return;
};

// Add the border bottom to the Item selected in the menu.
const addBorder = (element) => {
    element.nextElementSibling.classList.add('active-border');
};

// Remove the border bottom to the rest of the items in the menu
const removeBorder = (element) => {
    element.nextElementSibling.classList.remove('active-border');
};

// Load the cointainter that was selected
const sectionDisplay = (element) => {
    element.classList.add('active-section');
    element.classList.remove('inactive-section');
};

// Hide the rest of the container thar are not selected
const removeSectionDisplay = (element) => {
    element.classList.add('inactive-section');
    element.classList.remove('active-section');
};

// Show the delete all button just if the completed container is loaded
const deleteBtnActive = () => {
    domElements().deleteBtn.classList.add('delete-all-active');
};

// Hide the delete all button if the completed container is not loaded
const deleteBtnDisable = () => {
    domElements().deleteBtn.classList.remove('delete-all-active');
};
export { activeSection };

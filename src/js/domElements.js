// Take all the HTML elements that are goint to interact in the app
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
    const deleteBtn = document.querySelector('.delete-all');
    const deleteItems = document.querySelectorAll('.delete-item');

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
        deleteBtn,
        deleteItems,
    };
};

export { domElements };

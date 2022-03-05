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

export { domElements };

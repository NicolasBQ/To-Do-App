import { todoArray } from './tasksController';
import { display, filterUI } from './userInterface';

// Filter the items in the todoArray that have satatus active
const filterActive = () => {
    const activeArr = todoArray().filter((item) => {
        return item.status === 'active';
    });

    display(activeArr, 'active-list');
};

// Filter the items in the todoArray that have satatus completed
const filterCompleted = () => {
    const completedArr = todoArray().filter((item) => {
        return item.status === 'completed';
    });

    filterUI(completedArr);
};

export { filterActive, filterCompleted };

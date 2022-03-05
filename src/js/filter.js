import { todoArray, display } from './tasksController';

const filterActive = () => {
    const activeArr = todoArray().filter((item) => {
        return item.status === 'active';
    });

    display(activeArr, 'active-list');
};

const filterCompleted = () => {
    const completedArr = todoArray().filter((item) => {
        return item.status === 'completed';
    });

    display(completedArr, 'completed-list');
};

export { filterActive, filterCompleted };

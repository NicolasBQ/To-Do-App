const tasksController = (array = todoArray(), container = 'all-tasks') => {
    display(array, container);
};

const todoArray = () => JSON.parse(localStorage.getItem('todoArr')) || [];

const saveArray = (array) => {
    localStorage.setItem('todoArr', JSON.stringify(array));
};

const addTodo = (taskName) => {
    const array = todoArray();

    array.push({
        taskName,
        status: 'active',
        dataAtr: todoArray().length,
    });

    saveArray(array);
    tasksController(array);
};

const display = (array, container) => {
    const arrayTemplate = array.map((item) => createUI(item));

    const sectionContainer = document.querySelector(`.${container}`);

    sectionContainer.innerHTML = arrayTemplate.join('');
};

const createUI = (item) => {
    return `<li class="list-item text-font font-500 medium-font">
    	<input type="checkbox" class="list-checkbox" />
    	<p>${item.taskName}</p>
            </li>`;
};

export { addTodo, tasksController };

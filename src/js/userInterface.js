// For each item in the array passed, create an user interface
const display = (array, container) => {
    const arrayTemplate = array.map((item) => createUI(item));
    const sectionContainer = document.querySelector(`.${container}`);
    sectionContainer.innerHTML = arrayTemplate.join('');
};

// HTML User Interface
const createUI = (item) => {
    return `<li class="list-item text-font font-500 medium-font" data-item="${item.dataAtr}">
    	<input type="checkbox" class="list-checkbox" ${checkedStatus(item.status)}/>
    	<p class="${item.status === 'completed' ? 'underline' : ''}">${item.taskName}</p>
            </li>`;
};

// For each item in the filter 'Completed tasks' create an user interface
const filterUI = (array) => {
    const filterArr = array.map((item) => {
        return `<li class="list-item text-font font-500 medium-font" data-item="${item.dataAtr}">
    	<input type="checkbox" class="list-checkbox" checked/>
    	<p class="underline">${item.taskName}</p>
        <button class="delete-item"><span class="material-icons gray">
        delete_outline
        </span></button>
            </li>`;
    });

    const sectionContainer = document.querySelector('.completed-list');

    sectionContainer.innerHTML = filterArr.join('');
};

// Return checked once tha page is loaded and a tasks is completed
const checkedStatus = (itemStatus) => {
    if (itemStatus === 'completed') {
        return 'checked';
    }

    return;
};

export { display, filterUI };

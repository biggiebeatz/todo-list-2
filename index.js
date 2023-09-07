const listContainer = document.querySelector('.js-list-container');
const inputElement = document.querySelector('.js-input');
const btn = document.querySelector('.js-btn');
btn.addEventListener('click', addTask);



function addTask(){
    let li = document.createElement('li');
    li.innerHTML = inputElement.value
    listContainer.appendChild(li);
    const span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span)
    saveTask()
    inputElement.value = '';
}

listContainer.addEventListener('click', (e) => {
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveTask()
    }else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveTask()
    }
})

function saveTask(){
    localStorage.setItem('data', listContainer.innerHTML)
}
function displayTask(){
    listContainer.innerHTML = localStorage.getItem('data')
}
displayTask()
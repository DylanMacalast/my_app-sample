// 4 functions needed ...

// 1. Show -> display the current todo items

// 2. add -> will add the text from input into the localstorage database

// 3. remove -> will remove the selected item from the todos in db

// 4. getTodo -> retrieve the list of todos from the db.


//getTodo function
const getTodo = () => {
    let todos = [];
    const todoStr = localStorage.getItem('todo');
    // if the array todos in local storage is not empty change the JSON string back to js data and return it.
    if(todoStr !== null) {
        todos = JSON.parse(todoStr);
    }
    return todos;
}

// add function
const add = () => {
    const todoItem = document.getElementById('inputTodo').value;

    const todos = getTodo();
    todos.push(todoItem);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();
    return false;
}

const remove = () =>  {
    const id = this.getAttribute('id');
    const todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    console.log(localStorage);
    show();
 
    return false;
}

const show = () => {
    const todos = getTodo();
    let html = '<ul>';

    for(let i=0; i < todos.length; i ++){
        html = html + `<hr><li class="todo__item"> ${todos[i]} <button class="remove btn btn-danger pl-2" id="${i}">x</button> </li><hr>`;
    };
    html = html + '</ul>';

    document.getElementById('todos').innerHTML = html;

    const deleteTodo = document.querySelector('.remove');
    for (let i = 0; i < deleteTodo.length; i++) {
        deleteTodo[i].addEventListener('click', remove);
    }
}


document.getElementById('add__todo--item').addEventListener('click', add);
show();


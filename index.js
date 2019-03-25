// 4 functions needed ...

// 1. Show -> display the current todo items

// 2. add -> will add the text from input into the localstorage database

// 3. remove -> will remove the selected item from the todos in db

// 4. getTodo -> retrieve the list of todos from the db.


//getTodo function
const getTodo = () => {
    const todos = [];
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

    console.log(todos);
    return false;
}


const todoList = [
  {
    name: 'make dinner',
    dueDate: '2025-10-08'
  }, 
  {
    name: 'wash dishes',
    dueDate: '2025-10-08'
  }
];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const {name, dueDate} = todoObject;
    const html = `
        <div>${name}</div>
        <div>${dueDate}</div>
        <button onclick="
          todoList.splice(${i}, 1);
          renderTodoList();
        " class="delete-todo-button">Delete</button> 
    `; // This is called generating the html
    todoListHTML += html;
  }
  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const dateInputElement = document.querySelector('.js-due-date-input');
  todoList.push({name: inputElement.value, dueDate: dateInputElement.value});
  inputElement.value = '';
  dateInputElement.value = '';
  renderTodoList();
}

// Main idea of Javascript(see below)

// Save the data
// Generate HTML
// Make it interactive

const todoList = ['make dinner', 'wash dishes'];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`; // This is called generating the html s
    todoListHTML += html;
  }
  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  todoList.push(inputElement.value);
  inputElement.value = '';
  renderTodoList();
}

// Main idea of Javascript(see below)

// Save the data
// Generate HTML
// Make it interactive
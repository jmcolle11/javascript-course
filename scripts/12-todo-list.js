const todoList = [{
  name: 'watch movie',
  dueDate: '1999-12-11'
}];

renderTodoList()

function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach(function(todoObject, index) {
    const {name, dueDate} = todoObject;
    todoListHTML += `
      <div>${name}</div>
      <div>${dueDate}</div>
      <button class="delete-todo-btn" onclick="
        todoList.splice(${index}, 1);
        renderTodoList();
      ">Delete</button>
    `; //Generating the HTML 

  })
  document.querySelector('.js-todo-list')
      .innerHTML = todoListHTML;
}

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const dueDateInputElement = document.querySelector('.js-due-date-input')
  const name  = inputElement.value;
  const dueDate = dueDateInputElement.value;

  todoList.push({
    name,
    dueDate
  });
  inputElement.value = '';
  dueDateInputElement.value = '';

  renderTodoList()
  
}

function nameOnKeyDown(event) {
  if(event.key === 'Enter') {
    addTodo();
  }

}
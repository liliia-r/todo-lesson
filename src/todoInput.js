export function getTodoInputItems(todoInputWrapper) {
  const todoInput = todoInputWrapper.querySelector(".todo-input");
  const todoHelper = todoInputWrapper.querySelector(".todo-helper");
  const todoButton = todoInputWrapper.querySelector(".todo-button");

  return {
    todoInput,
    todoHelper,
    todoButton,
  };
}

export function validateTodoInput(todoInputWrapper) {
  const { todoInput, todoHelper, todoButton } =
    getTodoInputItems(todoInputWrapper);

  if (todoInput.value.length >= 3) {
    todoButton.classList.remove("todo-button_disabled");
    todoHelper.classList.remove("todo-helper_visible");
  } else {
    todoButton.classList.add("todo-button_disabled");
    todoHelper.classList.add("todo-helper_visible");
  }
}

// forbid form submit with enter key, when input value is less than 3 characters
export function forbidSubmitWithEnter(event) {
  console.log("forbidSubmitWithEnter", "works");
  if (event.keyCode === 13 && event.target.value.length < 3) {
    event.preventDefault();
    return false;
  }
}

export function clearTodoInput(todoInputWrapper) {
  const { todoInput, todoHelper, todoButton } =
    getTodoInputItems(todoInputWrapper);

  todoInput.value = "";
  todoButton.classList.add("todo-button_disabled");
  todoHelper.classList.add("todo-helper_visible");
}

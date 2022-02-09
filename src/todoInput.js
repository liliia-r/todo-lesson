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

// when todoInput is not in focus, helper text should not be displayed
export function inputInFocus(todoInputWrapper) {
  const { todoInput, todoHelper } = getTodoInputItems(todoInputWrapper);

  todoInput.value.length >= 3
    ? todoHelper.classList.remove("todo-helper_visible")
    : todoHelper.classList.add("todo-helper_visible");
}

export function inputNotInFocus(todoInputWrapper) {
  const { todoHelper } = getTodoInputItems(todoInputWrapper);

  todoHelper.classList.remove("todo-helper_visible");
}

// validation
export function validateTodoInput(todoInputWrapper) {
  const { todoInput, todoButton } = getTodoInputItems(todoInputWrapper);

  if (todoInput.value.length >= 3) {
    todoButton.classList.remove("todo-button_disabled");
  } else {
    todoButton.classList.add("todo-button_disabled");
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

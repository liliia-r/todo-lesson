import { getTodosFromSStorage } from "./sessionStorage";
import { todoSelect } from "./index.js";

const SELECT_OPTIONS = {
  COMPLETED: "completed",
  UNCOMPLETED: "uncompleted",
  ALL: "all",
};

export function filterTodoItems(todoItems, optionValue) {
  if (todoItems.length) {
    todoItems.forEach((todoItem) => {
      switch (optionValue) {
        case SELECT_OPTIONS.COMPLETED:
          if (todoItem.classList.contains("todo-item_completed")) {
            todoItem.style.display = "flex";
          } else {
            todoItem.style.display = "none";
          }
          break;
        case SELECT_OPTIONS.UNCOMPLETED:
          if (!todoItem.classList.contains("todo-item_completed")) {
            todoItem.style.display = "flex";
          } else {
            todoItem.style.display = "none";
          }
          break;
        case SELECT_OPTIONS.ALL:
        default:
          todoItem.style.display = "flex";
          return;
      }
    });
  }
}

// The selector should be disabled when no todos are displayed
export function disableSelector() {
  const todoExists = getTodosFromSStorage();

  if (!todoExists.length) {
    todoSelect.setAttribute("disabled", "disabled");
  } else {
    todoSelect.removeAttribute("disabled");
  }
}

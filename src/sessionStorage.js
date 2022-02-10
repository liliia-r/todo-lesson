const TODOS = "todos";

export function removeTodoFromSStorage(todoItem) {
  let todos = getTodosFromSStorage();

  const todoText = Array.from(todoItem.childNodes).find((node) =>
    node.classList.contains("todo-text")
  );

  if (todoText) {
    const filtredTodos = todos.filter(
      (item) => item.whatToDo !== todoText.innerText
    );
    sessionStorage.setItem(TODOS, JSON.stringify(filtredTodos));
  }
}

export function saveTodoToSStorage(todo, status = "uncompleted") {
  let todos = getTodosFromSStorage();
  todos.push({ whatToDo: todo, state: status });
  sessionStorage.setItem(TODOS, JSON.stringify(todos));
}

export function getTodosFromSStorage() {
  const storageTodos = sessionStorage.getItem(TODOS);
  return storageTodos ? JSON.parse(storageTodos) : [];
}

export function changeTodoState(todo) {
  let todos = getTodosFromSStorage();
  const todoText = Array.from(todo.childNodes).find((node) =>
    node.classList.contains("todo-text")
  );

  if (todoText) {
    todos.forEach((todoElement) => {
      if (todoElement.whatToDo === todoText.innerText) {
        todoElement.state === "uncompleted"
          ? (todoElement.state = "completed")
          : (todoElement.state = "uncompleted");
      }
    });
  }
  sessionStorage.setItem(TODOS, JSON.stringify(todos));
}

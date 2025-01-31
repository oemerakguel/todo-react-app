import { useState } from "react";
import useTodoStore from "../store/todoStore";
import TodoItem from "./TodoItem";
import Filter from "./Filter";

const TodoList = () => {
  const [filter, setFilter] = useState("all");

  const store = useTodoStore();
  console.log("Store:", store);

  const { todos = [], deletedTodos = [], restoreTodo } = store;

  console.log("Todos:", todos);
  console.log("Deleted Todos:", deletedTodos);
  console.log("Filter:", filter);

  const filteredTodos =
    filter === "active"
      ? todos.filter((todo) => !todo.completed)
      : filter === "completed"
      ? todos.filter((todo) => todo.completed)
      : filter === "deleted"
      ? deletedTodos
      : todos;

  return (
    <div>
      <Filter setFilter={setFilter} />
      <div className="todo-list">
        {filteredTodos.map((todo) => (
          <div key={todo.id} className="todo-wrapper">
            {filter === "deleted" ? (
              <div className="deleted-todo">
                <span>{todo.text}</span>
                <button onClick={() => restoreTodo(todo.id)}>Wiederherstellen</button>
              </div>
            ) : (
              <TodoItem todo={todo} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;

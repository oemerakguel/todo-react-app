import useTodoStore from "../store/todoStore";

const TodoItem = ({ todo }) => {
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const removeTodo = useTodoStore((state) => state.removeTodo);

  return (
    <div
      className={`todo-item ${todo.completed ? "completed" : "active"}`}
      onClick={() => toggleTodo(todo.id)}
    >
      <span>{todo.text}</span>
      <button
        onClick={(e) => {
          e.stopPropagation();
          removeTodo(todo.id);
        }}
      >
        Löschen
      </button>
    </div>
  );
};

export default TodoItem;

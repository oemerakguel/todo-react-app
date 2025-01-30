import useTodoStore from "../store/todoStore";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useTodoStore((state) => state.todos);

  return (
    <div className="todo-list">
      {todos.length === 0 ? <p>Keine Todos</p> : todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
    </div>
  );
};

export default TodoList;

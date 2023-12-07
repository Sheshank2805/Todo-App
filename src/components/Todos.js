import React from "react";
import TodoList from "./TodoList";

const Todos = ({ todos, setTodos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoList key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
};

export default Todos;

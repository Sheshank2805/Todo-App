import React, { useState } from "react";

const TodoList = ({ todo, todos, setTodos }) => {
  const [editing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);

  const handleCompletedToggle = () => {
    const updatedTodos = todos.map((item) =>
      item.id === todo.id ? { ...item, completed: !item.completed } : item
    );
    setTodos(updatedTodos);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleEditChange = (e) => {
    setEditedTitle(e.target.value);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const updatedTodos = todos.map((item) =>
      item.id === todo.id ? { ...item, title: editedTitle } : item
    );
    setTodos(updatedTodos);
    setEditing(false);
  };

  const handleDelete = () => {
    const updatedTodos = todos.filter((item) => item.id !== todo.id);
    setTodos(updatedTodos);
  };

  return (
    <div className="flex justify-center mt-2 px-2">
      {editing ? (
        <form onSubmit={handleEditSubmit}>
          <input
            type="text"
            value={editedTitle}
            onChange={handleEditChange}
            className="mr-2 rounded-lg"
          />
          <button
            type="submit"
            className="text-gray-300 bg-red-500 rounded-2xl p-3 hover:bg-orange-400"
          >
            Save
          </button>
        </form>
      ) : (
        <div>
          <span
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
            className="px-2 text-gray-100 md:w-full sm:w-full"
          >
            {todo.title}
          </span>
          <input
            className="mr-2"
            type="checkbox"
            checked={todo.completed}
            onChange={handleCompletedToggle}
          />
          <button
            onClick={handleEdit}
            className="text-gray-300 px-2 bg-slate-950 rounded-3xl hover:bg-blue-800 p-2 mr-2"
          >
            Edit
          </button>
          <button
            onClick={handleDelete}
            className="text-gray-300 bg-cyan-950 rounded-2xl p-2 hover:bg-red-600"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default TodoList;

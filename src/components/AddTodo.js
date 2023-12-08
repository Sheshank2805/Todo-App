import React, { useState } from "react";

const AddTodo = ({ todos, setTodos }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      const newTask = {
        id: todos.length + 1,
        title: newTodo,
        completed: false,
      };
      setTodos([...todos, newTask]);
      setNewTodo("");
    }else{
      alert("please Enter A Valid Todo")
    }   
  };

  return (
    <div className="flex justify-center mt-4 bg-gray-900">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out flex mr-2 justify-center"
        placeholder="Enter a Todo..."
        value={newTodo}
        onChange={handleInputChange}
      />
      <button
        onClick={handleAddTodo}
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg "
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;

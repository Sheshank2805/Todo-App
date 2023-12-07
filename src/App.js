import logo from "./logo.svg";
import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1/todos")
      .then((response) => {
        const initialTodos = response.data.map((todo) => ({
          ...todo,
          completed: false,
        }));
        setTodos(initialTodos);
        console.log(response.data);
      })
      .catch((error) => {
        console.log("Error fetching data", error);
      });
  }, []);

  return (
    <div className=" bg-gray-900">
      <h1 className="flex justify-center text-6xl text-gray-100">TODO App</h1>
      <AddTodo todos={todos} setTodos={setTodos} />
      <Todos todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;

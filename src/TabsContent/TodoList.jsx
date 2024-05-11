import React, { useEffect } from "react";
import { useState } from "react";
import { trash } from "../assets";

const TodoList = () => {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState([]);
  const [id, setId] = useState(0);
  const [status, setStatus] = useState(null);
  const [count, setCount] = useState(0);
  // const [completed, setCompleted] = useState(0);

  const addNewItem = () => {
    if (newItem === "") {
      alert("Please enter a Task");
    } else {
      setId((previd) => previd + 1);
      setTodos((prevTodos) => [
        ...prevTodos,
        { id: id, title: newItem, status: false },
      ]);
      setCount((c) => c + 1);
    }
    setNewItem("");
  };

  function toggleTodo(index, val) {
    setTodos((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === index) {
          return { ...todo, status: val };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setCount((c) => c - 1);
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <div className=" flex flex-col  items-center m-8">
      <div>
        <input
          type="text"
          placeholder="Enter your Task here"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          className="rounded-lg p-2 m-4 shadow-lg focus: outline-none focus:outline-blue-500"
        />
        <button
          onClick={() => addNewItem()}
          className="bg-lime-400 shadow-lg hover:scale-110 hover:-translate-y-1 hover:transition ease-in-out  font-bold p-2 rounded-md text-white"
        >
          Add Task
        </button>
      </div>
      <div className="">
        <ul>
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex m-4 hover:-translate-y-1 hover:scale-110 hover:transition ease-in-out justify-between items-center bg-slate-50 rounded-lg h-8 px-6 py-5 shadow-lg w-[400px]"
            >
              <div className="space-x-6 flex items-center">
                <input
                  type="checkbox"
                  className={`appearance-none border-2 border-gray-400 ${
                    todo.status ? " bg-blue-400 border-none " : null
                  } rounded-full h-4 w-4`}
                  onChange={(e) => {
                    toggleTodo(todo.id, e.target.checked);
                  }}
                />

                <span
                  className={`  ${
                    todo.status ? "line-through text-slate-400" : null
                  }`}
                >
                  {todo.title}
                </span>
              </div>
              <img
                src={trash}
                alt=""
                className="h-4 w-auto"
                onClick={() => deleteTodo(todo.id)}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="font-extrabold text-white fixed bottom-8">
        Total Tasks:
        <span className="text-red-400 font-bold text-[30px] p-2 -mt-4 inline-block">
          {count}
        </span>
      </div>

      {/* <div>Tasks Completed:{completed}</div> */}
    </div>
  );
};

export default TodoList;

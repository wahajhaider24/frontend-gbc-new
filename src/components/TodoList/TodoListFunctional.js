import React, { useState } from "react";
import "./Todolist.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = (task) => {
    setTodos((prev) => [...prev, task]);
    setNewTodo("");
  };

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const addList = () => {
    if (newTodo.trim() === "") {
      return;
    }
    addTodo(newTodo);
  };

  const removeList = (index) => {
    const updatedArray = [...todos];
    updatedArray.splice(index, 1);
    setTodos(updatedArray);
  };

  return (
    <>
      <div className="todoListBox">
        <h1 style={{ textAlign: "center", color: "black" }}>My To Do List</h1>
        <div style={{ textAlign: "center" }}>
          <input
            type="text"
            placeholder="Enter Your Task"
            style={{ padding: "10px" }}
            value={newTodo}
            onChange={handleChange}
          />
          <button
            style={{
              backgroundColor: "darkblue",
              border: "1px",
              color: "white",
              height: "40px",
            }}
            onClick={addList}
          >
            Add
          </button>
          <div className="list">
            <ul style={{ listStyleType: "circle" }}>
              {todos.map((todo, index) => (
                <li key={index}>
                  {todo}
                  <button
                    className="removeButton"
                    onClick={() => {
                      removeList(index);
                    }}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoList;
"use client"
import { useState, useEffect, useRef } from "react";

interface Todo {
  text: string;
  done: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const newTodoRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodo: string) => {
    setTodos([...todos, { text: newTodo, done: false }]);
  };

  const toggleDone = (index: number) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return (
    <div className="todo-list-container">
      <h1 className="text-2xl font-bold mb-4">Todo List</h1>
      <div className="todo-list-header flex items-center mb-4">
        <input
          type="text"
          id="new-todo"
          placeholder="Add a new todo..."
          className="todo-list-input px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 flex-grow text-black"
          ref={newTodoRef}
        />
        <button
          id="add-todo"
          onClick={() => addTodo(newTodoRef.current!.value)}
          className="todo-list-add-button px-4 py-2 rounded-md bg-green-500 text-white hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 ml-2"
        >
          Add
        </button>
      </div>
      <ul id="todo-list" className="todo-list">
        {todos.map((todo, index) => (
          <li
            key={index}
            className={`todo-list-item flex items-center justify-between px-4 py-2 rounded-md border border-gray-300 mb-2 ${
              todo.done ? "bg-gray-200" : "bg-white"
            }`}
          >
            <span
              className={`todo-list-item-text ${
                todo.done ? "line-through text-gray-500" : ""
              }`}
            >
              {todo.text}
            </span>
            <div className="flex space-x-2">
              <button
                onClick={() => toggleDone(index)}
                className="todo-list-item-button px-2 py-1 rounded-md bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Done
              </button>
              <button
                onClick={() => deleteTodo(index)}
                className="todo-list-item-button px-2 py-1 rounded-md bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

import { useState, useEffect } from "react";

interface Todo {
  text: string;
  done: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

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
      <h1>Todo List</h1>
      <div className="todo-list-header">
        <input
          type="text"
          id="new-todo"
          placeholder="Add a new todo..."
          className="todo-list-input"
        />
        <button id="add-todo" onClick={() => addTodo(document.getElementById("new-todo")!.value)}>
          Add
        </button>
      </div>
      <ul id="todo-list" className="todo-list">
        {todos.map((todo, index) => (
          <li
            key={index}
            className={`todo-list-item ${todo.done ? "done" : ""}`}
          >
            {todo.text}
            <button onClick={() => toggleDone(index)}>Done</button>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;

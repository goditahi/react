import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTodo = [...todos, { text: task, complete: false }];
    setTodos(newTodo);
    setTask("");
  };

  const handleDelete = (id) => {
    console.log(id, todos[id]);

    setTodos(todos.filter((todo, index) => index !== id));
  };

  const handleChange = (id) => {
    const newTodo = [...todos];
    newTodo[id].complete = !newTodo[id].complete;
    console.log(newTodo[id]);
    setTodos(newTodo);
  };

  const handleEdit = (id) => {
    setEditIndex(id);
    setEditText(todos[id].text);
  };

  const handleSaveEdit = () => {
    const newTodos = [...todos];
    newTodos[editIndex].text = editText;
    newTodos[editIndex].complete = false;
    setTodos(newTodos);
    setEditIndex(null);
    setEditText("");
  };

  const handleCancelEdit = () => {
    newTodos[editIndex].complete = false;
    setEditIndex(null);
    setEditText("");
  };

  return (
    <>
      <h1>Todo List</h1>
      <br />
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder="Enter the task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {editIndex === index ? (
              <>
                <input
                  type="text"
                  onChange={(e) => setEditText(e.target.value)}
                  value={editText}
                />
                <button onClick={handleSaveEdit}>Save</button>
                <button onClick={handleCancelEdit}>Cancel</button>
              </>
            ) : (
              <>
                <span
                  style={{
                    textDecoration: todo.complete ? "line-through" : "none",
                  }}
                >
                  {todo.text}
                </span>
                <button onClick={() => handleDelete(index)}>Delete</button>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <input type="checkbox" onChange={() => handleChange(index)} />
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;

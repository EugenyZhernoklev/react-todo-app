import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
      setInput('');
    }
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo App Demo</h1>
        <div>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task..."
            onKeyPress={(e) => e.key === 'Enter' && addTodo()}
          />
          <button onClick={addTodo}>Add Task</button>
        </div>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              <input 
                type="checkbox" 
                checked={todo.completed} 
                onChange={() => toggleTodo(todo.id)} 
              />
              <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
              </span>
              <button onClick={() => deleteTodo(todo.id)} style={{ marginLeft: '10px' }}>Delete</button>
            </li>
          ))}
        </ul>
        <p>Total tasks: {todos.length}</p>
      </header>
    </div>
  );
}

export default App;
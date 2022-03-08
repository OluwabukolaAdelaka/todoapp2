import React, {useState} from 'react';
import Form from './components/Form';
import './App.css';
import TodoList from './components/TodoList';


function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  
  return (
    <div className="App">
      <header>
        <h2>Todo List</h2>
      </header>
      <Form input={input} setInput={setInput} todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo}/>
      <TodoList todos={todos} setTodos={setTodos} editTodo={editTodo} setEditTodo={setEditTodo} />
    </div>
  );
}

export default App;

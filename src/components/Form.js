import React from 'react';

const Form = ({input, setInput, todos, setTodos, editTodo, setEditTodo}) => {
  const updateTodo = (text, id, completed) => {
    const newTodo = todos.map(todo => todo.id === id ? {text, id, completed} : todo)
    setTodos(newTodo);
    setEditTodo('');
    setInput('');
  }
  const handleChange = (e) => {
    setInput(e.target.value);
  }
  const onSubmit = (e) => {
    e.preventDefault();
      if (!editTodo) {
        setTodos([
          ...todos, {text: input, completed: false, id: Math.floor(Math.random() * 10000)}]);
        setInput('');
      } else {
        updateTodo(input, editTodo.id, editTodo.completed);
      }
    
    
  }
  return (
    <form>
      <input type="text" placeholder='Enter a task...' className='todo-input' value={input} onChange={handleChange}/>
      <button onClick={onSubmit} className='todo-btn'>Add Task</button>
    </form>
  );
}

export default Form;
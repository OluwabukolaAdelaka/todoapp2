import React from 'react';

const Todo = ({text, todo, todos, setTodos, setEditTodo}) => {
  const handleComplete = (todo) => {
    setTodos(todos.map(item => {
      if (item.id === todo.id) {
        return {...item, completed: !item.completed}
      }
      return item;
    }))
  }

  const handleEdit = ({id}) => {
    const findTodo = todos.find(todo => todo.id === id);
    setEditTodo(findTodo);
  }
  
  const handleDelete = () => {
    setTodos(todos.filter(t => t.id !== todo.id));
  }

  return (
    <div className='todo'>
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>{text}</li>
      <button onClick={() => handleEdit(todo)} className='complete-btn'><i className="fas fa-edit"></i></button>
      <button onClick={() => handleComplete(todo)} className='complete-btn'><i className="fas fa-check"></i></button>
      <button onClick={handleDelete} className='delete-btn'><i className="fas fa-trash"></i></button>
    </div>
  )
}

export default Todo;
import React from 'react';
import Todo from './Todo';


const TodoList = ({todos, setTodos, setEditTodo}) => {
  return (
    <div className='todolist-container'>
     <ul className='todolist-item'>
      {todos.map(todo => (
        <Todo
        key={todo.id} text={todo.text} todo={todo} todos={todos} setTodos={setTodos} setEditTodo={setEditTodo} />
      ))}
     </ul>
    </div>
  );
}

export default TodoList;
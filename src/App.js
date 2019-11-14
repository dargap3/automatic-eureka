import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/ToDoItem';
import ToDoItem from './components/ToDoItem';
import todosData from './data/todosData'

function App() {
  const todoItems = todosData.map(item => <ToDoItem key={item.id} item={item}  />)

  return (
    <div className="todo-list">
      {todoItems}       
    </div>
  );
}

export default App;

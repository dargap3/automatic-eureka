import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/ToDoItem';
import ToDoItem from './components/ToDoItem';

function App() {
  return (
    <div className="todo-list">
      <ToDoItem />
      <ToDoItem />  
      <ToDoItem />  
      <ToDoItem />       
    </div>
  );
}

export default App;

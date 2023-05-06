import TodoField from './components/TodoField'
import TodoItem from './components/TodoItem'
import TodoDone from './components/TodoDone'

import './App.css';
import { useState } from 'react'

function App() {
  const [todoList, setTodoList] = useState([]);
  const [doneList, setDoneList] = useState([]);

  const getCompleted = (id) => {
    setTodoList((prevState) => {
      return prevState.filter((item, idx) => {
        return idx !== id
      })
    })
    setDoneList((prevState) => {
      return [...prevState, todoList[id]]
    })
  }


  return (
    <div className="App">
      <TodoField setTodoList={setTodoList} />
      {todoList && todoList.map((item, idx) => {
        return (<TodoItem id={idx} item={item} getCompleted={getCompleted}/>)
      })}
      <p>done list</p>
      {doneList && doneList.map((item) => <TodoDone item={item} />)}
    </div>
  );
}

export default App;

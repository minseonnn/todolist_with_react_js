import { useState, useEffect } from "react";
import styles from "./App.module.css"

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if(todo === "") {
      return
    }
    setTodos((currentArray) => [todo, ...currentArray]);
    setTodo("");
  };
  const deleteTodo = (index) => {
    setTodos(todos.filter((item,fIndex) => index !== fIndex));
  };
  return (
    <div className={styles.wrap}>
      <div className={styles.title}>My To Dos ({todos.length})</div>
      <form onSubmit={onSubmit}>
      <input 
        onChange={onChange} 
        value={todo} 
        type="text" 
        placeholder="Write your todos"
        className={styles.todoInput}>
      </input>
      <button className={styles.btn}>Add todo</button>
      </form>
      <ul className={styles.list}>
      {todos.map((item,index) => (
      <li key={index}>
        {item}
        <button className={styles.delete_btn} onClick={()=>deleteTodo(index)}>❌</button>
      </li>))
      }
      </ul>
    </div>
  );
}

export default App;


import { useState, useEffect } from "react";

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
    <div>
      <h1>My To Dos ({todos.length})</h1>
      <form onSubmit={onSubmit}>
      <input 
        onChange={onChange} 
        value={todo} 
        type="text" 
        placeholder="Write your todos">
      </input>
      <button>Add todo</button>
      </form>
      <hr />
      <ul>
      {todos.map((item,index) => (
      <li key={index}>
        {item}
        <button onClick={()=>deleteTodo(index)}>❌</button>
      </li>))
      }
      </ul>
    </div>
  );
}

export default App;

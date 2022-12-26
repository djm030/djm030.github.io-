import { useState } from "react";
import TodoItem from "./TodoItem";
function Todo() {
  const [time, setTime] = useState();
  const [times, setTimes] = useState([]);
  const [toDo, setTodo] = useState();
  const [toDos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();

    if (toDo === "") {
      return;
    }
    setTodos((currentArray) => [toDo, ...currentArray]);
    setTodo("");
    const date = new Date();
    setTime(date.toLocaleString("ko-kr"));

    setTimes((currentArray) => [time, ...currentArray]);
    if(date===""){
      setTime(date.toLocaleString("ko-kr"));
    setTimes((currentArray) => [time, ...currentArray]);
    }
    console.log(toDos, time);
  };
  return (
    
    <div>
      <h1>To-Do App {toDos.length}</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="input todo"
        />
        <button>추가하기</button>
        <hr />
        <ul>
          {toDos.map((item, index) => (
            <TodoItem
              key={index}
              item={item}
              index={index}
              name=""
              times={times}
            />
          ))}
        </ul>
      </form>
    </div>
  );
}

export default Todo;

import React from "react";
import { useState, useEffect } from "react";

// import 부분

function TodoList() {
  const [loading, setLoading] = useState(true);
  const [todos, setTodo] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => {
        setTodo(data);
        setLoading(false);
      });
    console.log("API call");
  }, []); // 빈 배열을 넣으면 한번만 실행 다른 값을 넣으면 업데이트 될떄 실행

  return (
    <div>
      <h1>UserList</h1>
      {loading ? <h1>loading...</h1> : <h1>"로딩완료"</h1>}
      {todos.map((item) => {
        return (
          <Todos
            Obj={item}
            UserId={item.userId}
            Id={item.id}
            todo={item.title}
            chk={item.completed}
          />
        );
      })}
    </div>
  );
}

const Todos = (props) => {
  // const obj = JSON.parse(props.obj);
  console.log(props.Obj.parse)
  // for (var i = 1; i < props.obj.map + 1; i++) {
   
  //   if (props.UserId[i - 1] === props.UserId[i]) {
  //     return (
  //       <div>
  //         <li key={props.Id}>
  //           <p>아이디 : {props.UserId}</p>
  //           <p>할것 : {props.todo}</p>
  //           <p>활동 : {props.chk}</p>
  //         </li>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div>
  //         <p>다음 사람</p>;
  //       </div>
  //     );
  //   }
  // }
};

export default TodoList;

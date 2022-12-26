import React, { useEffect, useState } from "react";

function Users() {
  const [loading, setLoading] = useState(true);
  const [Users, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false)
      });
    console.log("API call");
  }, []);

  console.log("UI REFRESH");

  return (
    <div>
      <h1>UserList</h1>
      {loading ? <h1>loading...</h1> : "로딩완료"}
      {Users.map((item) => {
        return <User id= {item.id}name={item.name} username={item.username} email ={item.email} />
      })}
    </div>
  );
}

const User = (props) =>{

  return(
    <div>
      <li key={props.id}>
       {props.id},
     {props.name},
       {props.username},
       {props.email}
      </li>
   

    </div>
  )



}

export default Users;

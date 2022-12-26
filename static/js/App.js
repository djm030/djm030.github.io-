import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// UI 컴포넌트 Import
// import Count from "./Count";
// import Effect from "./Effect";
// import Todo from "./Todo";
// import BookList from "./BookList";
// import Users from "./Users";
// import Button from "./Button";
import TodoList from "./TodoList";
import Movie from "./Movie";
import Home from "./Home";
import Movie_detail from "./Movie_detail";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
              <Home />
            }></Route>
        <Route
          path="/movie"
          element={
            <div>
              <Movie />
            </div>
          }
        ></Route>
           <Route
          path="/movie/detail/:id"
          element={
            <div>
              <Movie_detail />
            </div>
          }
        ></Route>
        <Route
          path="/todolist"
          element={
            <div>
              <TodoList />
            </div>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;

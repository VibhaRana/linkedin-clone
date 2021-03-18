import React from "react";
// import { Counter } from './features/counter/Counter';
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Login from "./Login";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";

function App() {
  //pull user from selector/data store.
  const user = useSelector(selectUser);
  return (
    <div className="app">
      <Header />
      {/* If there is no user, render the login page so that user can login first. But if there 
      is a user, then render rest of the app*/}
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />

          <Feed />
        
        </div>
      )}
    </div>
  );
}

export default App;

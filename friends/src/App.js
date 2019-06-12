import React from 'react';
import logo from './logo.svg';
import styled from "styled-components";
import './App.css';
import FriendList from "./components/FriendList";
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from "./components/Header/Header";
import NewFriend from "./components/NewFriend";

function App() {
  const Main = styled.main `
    border: 1px solid maroon;
    min-height: 100vh;
    background-color: #f7f7f7;
  `
  return (
    <Router>
      <div className="App">
        <Header />
        <Main>
        <Route exact path = "/" component = {FriendList}/>
        <Route exact path = "/add_new" component = {NewFriend}/>
        </Main>
      </div>
    </Router>
  );
}

export default App;

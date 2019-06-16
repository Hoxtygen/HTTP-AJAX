import React, { Component } from 'react';
import axios from "axios";
import styled from "styled-components";
import './App.css';
import FriendList from "./components/FriendList";
import { BrowserRouter as Router, Route } from "react-router-dom"
import Header from "./components/Header/Header";
import NewFriend from "./components/NewFriend";

class App extends Component {
  constructor(props)  {
    super(props);
    this.state = {
      friends: [],
      errorMessage: "",
      spinner: false
    }
  }

  handleDelete = async(id) => {
    try {
      const FriendList = await axios.delete(`http://localhost:5000/friends/${id}`)
      this.fetchData()
    } catch (e) {
      this.setState({
        errorMessage: e.message
      })
    }
  }


/*

*/
  componentDidMount() {
    this.fetchData()
  }

    fetchData =  async() => {
      this.setState({ spinner: true });
      try {
        const friendsData = await axios.get('http://localhost:5000/friends');
        this.setState({
          friends: friendsData.data
        })
        //debugger
      } catch (e) {
        this.setState({
          errorMessage: e.message
        })

      } finally {
        this.setState({ spinner: false });
      }
    }

  render() {
    return (
      <Router>

        <div className="App">
          <Header />
          <Main>
          <Route exact path = "/"
            render = {props => <FriendList
              friends = {this.state.friends}
              handleDelete = {this.handleDelete}
              />}/>
            <Route exact path = "/add_new" render = {props => <NewFriend
                {...props}
                fetchData = {this.fetchData}
                />} />
          </Main>
        </div>
      </Router>
    );
  }

}

const Main = styled.main `
  border: 1px solid maroon;
  min-height: 100vh;
  background-color: #f7f7f7;
`

export default App;

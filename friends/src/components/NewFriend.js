import React, { Component } from 'react';
import styled from "styled-components";
import axios from "axios";

export class NewFriend extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      age: "",
      currentFriendId: null,
      isEditing: false
    }
  }

  handlechange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    })
  }

  handleAddFriend = (e) => {
      e.preventDefault()
      axios.post("http://localhost:5000/friends/", {
        name: this.state.name,
        email: this.state.email,
        age: this.state.age
      })
      .then(res =>{
        this.props.history.push('/');
        this.props.fetchData();
      })
      .catch(err => console.log(err))



  }


  render() {
    const { name, email, age, isEditing, currentFriendId } = this.state;
    return (
      <FormWapper>
          {
            isEditing
              ? <h3>Edit Friend</h3>
              : <h3>Add a new friend!</h3>
          }
        <form action="">
          <div>
            <input type="text" value = {name} name = "name" placeholder = 'Enter your name' onChange = {this.handlechange}/>
          </div>
          <div>
            <input type="email" value = {email} name = "email" placeholder = "Enter your email" onChange = {this.handlechange}/>
          </div>
          <div>
            <input type="number" value = {age} name = "age" placeholder = "Enter your age" onChange = {this.handlechange}/>
          </div>
          <ButtonContainer>
              {
            isEditing
              ? <button>Update Friend!</button>
              : <button onClick = {this.handleAddFriend} type = "submit">Add Friend</button>
          }
        </ButtonContainer>
        </form>
    </FormWapper>
    );
  }
}

const FormWapper = styled.div`
  border: 1px solid #222;
  width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  div {
    width: 80%;
    margin: 0 auto;
  }

  input {
    width: 100%;
    padding: 0;
    height: 48px;
    box-sizing: border-box;
    padding: 10px;
    font-size: 1.1rem;
    outline: none;
    margin-bottom: 10px;
  }
`

const ButtonContainer = styled.div `
  display: inline-flex;
  justify-content: center;

  button {
    width: 50%;
    padding: 5px 10px;
    height: 40px;
    background: green;
    color: #fff;
    font-size: 1rem;
  }
`

export default NewFriend;

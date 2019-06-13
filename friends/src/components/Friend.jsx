import React from 'react'
import styled from "styled-components";

const Friend = ({friend, handleDelete, id}) => {
  const { name, age, email} = friend;
  const SingleFriend = styled.div `
    border: 1px solid maroon;
    min-width: 30%;
    margin-bottom: 10px;
    background-color: mediumseagreen;

    button {
      padding: 5px 15px;
      margin-right: 3px;
      border-radius: 3px;
      font-size: .8rem;
      background: #777;
      color: #fff;

    }
  `
    return (
    <SingleFriend>
      <h3>Name: {name}</h3>
      <h4>Email: {email}</h4>
      <h4>Age: {age}</h4>
      <button onClick = {() => handleDelete(id)}>Delete</button>
      <button>Edit</button>
    </SingleFriend>
  )
}

export default Friend

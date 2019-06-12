import React from 'react'
import PropTypes from 'prop-types'
import styled from "styled-components";

const Friend = ({friend, handleDelete, id}) => {
  const { name, age, email} = friend;
  const SingleFriend = styled.div `
    border: 1px solid maroon;
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

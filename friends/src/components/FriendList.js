import React from 'react';
import styled from "styled-components";
import Friend from "./Friend";


  const FriendList = (props) => {
    return (
      <FriendContainer>
        {
          props.friends.map(friend => {
            return <Friend
              friend = { friend }
              id = {friend.id}
              key = {friend.id}
              handleDelete = {props.handleDelete}
              />
          })
        }
      </FriendContainer>
    );
  }

const FriendContainer = styled.div `
  display: flex;
  width: 80%;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: space-between;
`

export default FriendList;

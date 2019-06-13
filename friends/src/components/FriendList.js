import React, { Component} from 'react';
import styled from "styled-components";
import axios from "axios";
import Friend from "./Friend";
import NewFriend from "./NewFriend";

/**
 * FriendList
 */
 const FriendContainer = styled.div `
   display: flex;
   width: 80%;
   margin: 0 auto;
   flex-wrap: wrap;
   justify-content: space-between;
 `

class FriendList extends Component { // eslint-disable-line react/prefer-stateless-function
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
    const friends = this.state.friends
    return (
      <FriendContainer>
        {
          friends.map(friend => {
            return <Friend
              friend = { friend }
              id = {friend.id}
              key = {friend.id}
              handleDelete = {this.handleDelete}
              />
          })
        }

      </FriendContainer>
    );
  }
}

// FriendList.propTypes = {
//   prop: PropTypes.type.isRequired
// }

export default FriendList;

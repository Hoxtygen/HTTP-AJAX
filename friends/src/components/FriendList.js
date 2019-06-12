import React, { Component} from 'react';
import axios from "axios";
import Friend from "./Friend";

/**
 * FriendList
 */
class FriendList extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props)  {
    super(props);
    this.state = {
      friends: [],
      errorMessage: "",
      spinner: false
    }
  }


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
      <div>
        {
          friends.map(friend => {
            return <Friend
              friend = { friend }
              key = {friend.id}
              />
          })
        }
      </div>
    );
  }
}

// FriendList.propTypes = {
//   prop: PropTypes.type.isRequired
// }

export default FriendList;

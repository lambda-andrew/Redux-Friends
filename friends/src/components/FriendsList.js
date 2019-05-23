import React from "react";
import { connect } from "react-redux";


import { withRouter } from "react-router-dom";

import { getFriends } from '../actions'

class FriendsList extends React.Component {
    componentDidMount() {
        this.props.getFriends()
    }

    render() {
        if(this.props.fetching){
            return ( 
            <div>
                {this.props.fetching && <h2>We Are Loading Your Friends Now...</h2>}
            </div>
            )
        }
        return (
            <div>
                <div>
                {this.props.friends.map(friend => (
                    <div key={friend.id}>
                        <h4>{friend.name}</h4>
                        <p>{friend.age}</p>
                        <p>{friend.email}</p>
                    </div>
                ))}
                </div> 
                <div>
                    <form>
                        <input
                            type="text"
                            name="newFriendName"
                            placeholder="Name"
                            value={this.props.newFriend}
                            onChange={this.handleChanges}
                        />
                        <input
                            type="text"
                            name="newFriendAge"
                            placeholder="Age"
                            value={this.props.newFriend}
                            onChange={this.handleChanges}
                        />
                        <input
                            type="text"
                            name="newFriendEmail"
                            placeholder="Email"
                            value={this.props.newFriend}
                            onChange={this.handleChanges}
                        />
                        <button>Add Friend</button>
                    </form>
                </div>
            </div>
        ) 
    }
}
const mapStateToProps = state => ({
    friends: state.friendsReducer.friends,
    fetching: state.friendsReducer.fetching
  });
  
  export default withRouter(
    connect(
      mapStateToProps,
      { getFriends }
    )(FriendsList)
  );
  
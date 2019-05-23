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
            <div className="loadingPage">
                {this.props.fetching && <h2>We Are Loading Your Friends Now...</h2>}
            </div>
            )
        }
        return (
            <div className="friendsListDiv">
                <div className="friendsCards">
                {this.props.friends.map(friend => (
                    <div className="friendCard" key={friend.id}>
                        <h4>{friend.name}</h4>
                        <p>{friend.age}</p>
                        <p>{friend.email}</p>
                    </div>
                ))}
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
  
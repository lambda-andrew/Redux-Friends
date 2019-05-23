import React from 'react';
import {connect} from 'react-redux';

import {getFriends} from "../actions";

import Friend from './Friend'

class FriendsList extends React.Component {
    componentDidMount(){
        this.props.getFriends();
    }
    render(){
    return(
        <div>
            {this.props.friends.map(friend => {
                return <Friend key={friend.name} friendProps={friend} />
            })}
        </div>
    )
    }
}

const mapStateToProps = state => ({
    friends: state.friends,
    fetchingData: state.friends
})
const mapActionsToProps = {
    getFriends
}

export default connect(mapStateToProps, mapActionsToProps)(FriendsList);
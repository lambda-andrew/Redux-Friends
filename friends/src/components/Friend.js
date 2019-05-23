import React from 'react';

class Friend extends React.Component {
    render() {
        return(
            <div className="friend">
                <p>Name: {this.props.friend.name}</p>
                <p>Age: {this.props.friend.age}</p>
                <p>Email: {this.props.friend.email}</p>
            <button > Delete</button>

            </div>
        )
    }
}

export default Friend;
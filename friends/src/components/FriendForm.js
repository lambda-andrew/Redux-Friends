import React from 'react';
import { connect } from 'react-redux';

import { addFriend } from '../actions';

class FriendForm extends React.Component {
    state = {
      friend: {
        name: '',
        email: '',
        age: ''
      }
    };

    handleChanges = e => {
        let value = e.target.value;
        if (e.target.name === 'age') {
          value = parseInt(value, 10);
        }
        this.setState({
            friend: {
              ...this.state.friend,
              [e.target.name]: value
            }
        });
    };

    addFriend = e => {
        e.preventDefault()
        this.props.addFriend(this.state.friend).then(() => {
            this.props.history.push('/protected')
        })
        this.setState({
            friends: {
                name: '',
                age: '',
                email: ''
            }
        })
    }

    render() {
        return (
            <div>
                    <form onSubmit={this.addFriend}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={this.state.friend.name}
                            onChange={this.handleChanges}
                        />
                        <input
                            type="text"
                            name="age"
                            placeholder="Age"
                            value={this.state.friend.age}
                            onChange={this.handleChanges}
                        />
                        <input
                            type="text"
                            name="email"
                            placeholder="Email"
                            value={this.state.friend.email}
                            onChange={this.handleChanges}
                        />
                        <button>{this.props.addingFriend ? (
                        <h2>Please Wait While We Add Your New Friend..</h2>) : ('Add Friend')}</button>
                    </form>
                </div>
        )
    }
}

const mapStateToProps = ({ addingFriend }) => ({
    addingFriend
  });

export default connect(mapStateToProps, { addFriend })(FriendForm)
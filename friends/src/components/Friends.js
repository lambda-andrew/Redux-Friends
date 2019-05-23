import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { getFriends } from '../actions';
import Friend from './Friend';

class Friends extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: [],
            name: '',
            age: '',
            email: '',
            id: ''
        }
    }
    componentDidMount() {
        this.props.getFriends()
    }

    createFriend = event => {
        event.preventDefault();

        let newFriend = {
            name: this.state.name,
            age: this.state.age,
            email: this.state.email
        }

        axios
            .post('http://localhost:3000/friends', newFriend)
            .then(response => {
                this.setState({
                    friends: response.data
                })
            })
            .catch(error => {
                console.log('Server Error', error)
            })
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    // updateFriend = event => {
    //     event.preventDefault();
    //     let newFriend = {
    //         name: this.state.name,
    //         age: this.state.age,
    //         email: this.state.email
    //     }
    //     axios
    //         .put(`http://localhost:3000/friends/${this.state.id}`, newFriend)
    //         .then(response => {
    //             this.setState({
    //                 friends: response.data
    //             })
    //         })
    //         .catch(error => {
    //             console.log('Server Error', error);
    //         })
    // }

    // deleteFriend = (event, id) => {
    //     event.preventDefault();

    //     axios
    //         .delete(`http://localhost:3000/friends/${id}`)
    //         .then(response => {
    //             this.setState({
    //                 friends: response.data
    //             });
    //         })
    //         .catch(error => {
    //             console.error('Server Error', error);
    //         });
    // }

    render() {
        console.log("this is what friends looks like in Friends", this.props.friends);

        return (
            <div className="friendsForm">

                <form onSubmit={this.createFriend}>
                    <p>NAME</p>
                    <input
                        onChange={this.handleChange}
                        placeholder="name"
                        value={this.state.name}
                        name="name"
                    />
                    <p>AGE</p>
                    <input
                        onChange={this.handleChange}
                        placeholder="age"
                        value={this.state.age}
                        name="age"
                    />
                    <p>EMAIL</p>
                    <input
                        onChange={this.handleChange}
                        placeholder="email"
                        value={this.state.email}
                        name="email"
                    />
                    <button type="submit" onClick={(event) => this.createFriend(event)}> ADD FRIEND</button>
                </form>



                <div className="listOfFriends">
                    <p>{this.props.friends.map(friend => <Friend friend={friend} />)}</p>
                </div>
            </div>
        )
        }
    }

    const mapStateToProps = (state) => ({
        friends: state.friends
    });



    export default connect(
        mapStateToProps,
        { getFriends }
    )(Friends);

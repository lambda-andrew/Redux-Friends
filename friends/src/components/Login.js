import React from 'react';
import { connect } from 'react-redux';
import { login } from '../actions';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChanges = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        this.props.login(this.state.credentials);
    };

    render() {
        if (localStorage.getItem('userToken')) {
            this.props.history.push('/friends')
        }

        return (
            <div className="login-form">
                <h1>Login Form</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={this.state.credentials.username}
                    onChange={this.handleChanges}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={this.state.credentials.password}
                    onChange={this.handleChanges}
                />
                <button onClick={this.login}>Login</button>
                <p>{'i<3Lambd4'}</p>
                {/* <p>Token in localStorage:</p>
                <p>
                    {localStorage.getItem('userToken')
                        ? 'Token is in localStorage!'
                        : 'Nothing in localStorage yet'}
                </p> */}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isLoggedIn: state.isLoggedIn
});

export default connect(
    mapStateToProps,
    { login }
)(Login);

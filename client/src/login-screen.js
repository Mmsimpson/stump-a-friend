import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class LoginScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    render() {
        return <div>
            <h1>Please Login</h1>
            <form 
            onSubmit={event => {
                event.preventDefault();
                this.props.dispatch({
                    type: 'USER_LOGIN',
                    userLogin: this.state
                })
            }}>
                <input placeholder="Insert Username" 
                type="text"
                value={this.state.username}
                onChange={event => {
                    this.setState({username: event.target.value})
                }} />
                <input placeholder="Insert Password" 
                type="password"
                value={this.state.password}
                onChange={event => {
                    this.setState({password: event.target.value})
                }} />
                <button type="submit"> 
                Login
                </button>
            </form>
        </div>
    }
}
export default LoginScreen;
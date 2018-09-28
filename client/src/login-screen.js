import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './stylesheets/loginScr.css';


class LoginScreen extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    render() {

        let myStorage = window.localStorage;

        let checkLogin = () => {
            fetch('http://localhost:5000/checktoken', {
                method: 'POST',
                body: JSON.stringify(myStorage),
                headers: {'Content-Type': 'application/json'}
            })
            .then(data => {
                return data.json()})     
            }
        
        checkLogin();

        let loginFetch = () => {
            fetch('http://localhost:5000/login',{
            method: 'POST',
            body: JSON.stringify(this.state),
            headers:{"Content-Type": "application/json"
            }})
            .then(responseObject => {
                return    responseObject.json()
                
            })
            .then(data => {
                // console.log(data)
                myStorage.setItem('webtoken', data.token);
                this.props.history.push(`/user/${data.user.id}`);
                this.props.dispatch({
                    type: 'UPDATE_CURRENT_USER',
                    user: data.user
                });
                // console.log(this.state);
            })

        }

        return <div className="loginPage">
            <h1>Please Login</h1>
            <form className="loginForm"
            onSubmit={event => {
                event.preventDefault();
                loginFetch()
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

                <button type="submit" to="/users/1"> 
                Go to Dashboard
                </button>
            </form>
        </div>
    }
}




export default connect(state => state)(LoginScreen)
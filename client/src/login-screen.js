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
            headers:{
                "Content-Type": "application/json"
            }})
            .then(responseObject => {
                return    responseObject.json()
                
            })
            .then(data => {
                myStorage.setItem('webtoken', data);
                
            })
        }

        return <div>
            <h1>Please Login</h1>
            <form 
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
                <button type="submit"> 
                Login
                </button>
            </form>
        </div>
    }
}




export default connect(state => state)(LoginScreen)
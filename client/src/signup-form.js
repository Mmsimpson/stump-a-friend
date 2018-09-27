import React from 'react';
import fetchUserSignUp from './signupfetch';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: ''
        }
    }

    render() {
        
        let userSignUp = () => {
            fetch('http://localhost:5000/signup', {
            method: 'POST', 
            body: JSON.stringify(this.state),
            headers: {'Content-Type': 'application/JSON'
            }})
            .then(response => {
                return response.json()
            })
            .then(data => {
                this.props.history.push('/login')
            })
            
        }

        return <form 
        className='signup-form'
        onSubmit={ (event) => {
            event.preventDefault();
            userSignUp()
            }
        }>
            <input
                type='text'
                className='signup-form-input'
                placeholder='username'
                value={this.state.username}
                onChange={ (event)  => {
                    this.setState({ username: event.target.value })
                    } }
            />
            <input
                type='password'
                className='signup-form-input'
                placeholder='password'
                value={this.state.password}
                onChange={ (event)  => {
                    this.setState({ password: event.target.value })
                    } }
            />
            <input
                type='email'
                className='signup-form-input'
                placeholder='email'
                value={this.state.email}
                onChange={ (event)  => {
                    this.setState({ email: event.target.value })
                    } }
            />
            <button 
                className='signup-form-submit' 
                type='submit'>Sign up
            </button>
        </form>
    }
};

export default SignupForm;
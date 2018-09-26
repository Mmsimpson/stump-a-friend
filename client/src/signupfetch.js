import React from 'react';
import SignupForm from './signup-form';

let fetchUserSignUP = (props) => {
    // componentDidMount() {
    //     fetch('http://localhost:3000/#/signup')
    //         .then(res => res.json())
    //         .then(users => {
    //             console.log(users);
    //             this.props.dispatch({
    //                 type: 'CHANGE_USERS',
    //                 users: users
    //             });
    //         });
    //}

    
        return <SignupForm users={this.state} />
    
};
  
  export default fetchUserSignUP;


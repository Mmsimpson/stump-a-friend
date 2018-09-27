import React from 'react';
import AppHeader from './app-header';
import SignupForm from './signup-form';

let SignupScreen = (props) =>
   <div>
       <AppHeader />
       <h2>Sign Up</h2>
       <SignupForm history={props.history} />
    </div>

export default SignupScreen;
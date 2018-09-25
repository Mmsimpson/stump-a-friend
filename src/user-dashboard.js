import React from 'react';
import { connect } from 'react-redux';
import AppHeader from './app-header';
import './stylesheets/user-dashboard.css';

let UserDashboardScreen = (props) => (
    <div>
        <AppHeader />
        <div className='user-dashboard'>
            <h3>Greetings: {props.username}</h3>
            <div className='dashboard-link'>Create Quiz</div>
            <div className='dashboard-link'>My Quizzes</div>
        </div>
    </div>
)

export default connect(state => 
    ({username: state.currentUser.userName}))(UserDashboardScreen);
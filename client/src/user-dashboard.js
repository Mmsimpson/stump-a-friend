import React from 'react';
import { connect } from 'react-redux';
import AppHeader from './app-header';
import './stylesheets/user-dashboard.css';
import { Link } from 'react-router-dom';

let UserDashboardScreen = (props) => (
    <div>
        <AppHeader />
        <div className='user-dashboard'>
            <h3>Greetings: {props.username}</h3>
            <Link to='/quizzes/new'>
                <div className='dashboard-link'>Create Quiz</div>
            </Link>
            <div className='dashboard-link'>My Quizzes</div>
        </div>
    </div>
)

export default connect(state => 
    ({username: state.currentUser.userName}))(UserDashboardScreen);
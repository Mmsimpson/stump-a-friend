import React from 'react';
import { connect } from 'react-redux';
import AppHeader from './app-header';
import './stylesheets/user-dashboard.css';
import { Link } from 'react-router-dom';

let UserDashboardScreen = (props) => (
    <div>
        <AppHeader />
        <div className='user-dashboard'>
            <h3>Greetings: {props.user.userName}</h3>
            <Link to='/quizzes/new'>
                <div className='dashboard-link'>Create Quiz</div>
            </Link>
            <Link to={`/users/${props.user.id}/quizzes/created`}>
                <div className='dashboard-link'>Quizzes Created</div>
            </Link>
                <div className='dashboard-link'>Quizzes Received</div>
        </div>
    </div>
)

export default connect(state => 
    ({ user: state.currentUser }))(UserDashboardScreen);
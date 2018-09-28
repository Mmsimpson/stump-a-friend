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
                <div className='dashboard-link'>Create Quiz
                    <img src="http://blogs.edweek.org/edweek/finding_common_ground/Question%20Mark%20-%20Tumisu.jpg"></img>
                </div>
            </Link>
            <Link to={`/users/${props.user.id}/quizzes/created`}>
                <div className='dashboard-link'>Quizzes Created
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCni3UDaBBz8RbJwcCj5SsCymB7Ydd-gD8y8FPrJCBDNvR6ZaO"></img>
                </div>
            </Link>
            <Link to={`/users/${props.user.id}/quizzes/recieved`}>
                <div className='dashboard-link'>Quizzes Received
                    <img src="https://steamcdn-a.akamaihd.net/steam/apps/425770/header.jpg?t=1533207997"></img>
                </div>
            </Link>
        </div>
    </div>
)

export default connect(state => 
    ({ user: state.currentUser }))(UserDashboardScreen);
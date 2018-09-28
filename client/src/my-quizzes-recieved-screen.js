import React from 'react';
import AppHeader from './app-header';
import QuizzesRecievedList from './quizzes-recieved-list';
import { connect } from 'react-redux';
import fetchQuizzesRecieved from './fetch-quizzes-recieved';

let MyQuizzesRecievedScreen = (props) => 
    <div>
        <AppHeader />
        <h2>You Have Unanswered Quizzes! </h2>
        <QuizzesRecievedList quizzes={props.quizzes} user={props.user} />
    </div>

export default connect(
    state => ({ quizzes: state.quizzesRecieved, user: state.currentUser })
)(fetchQuizzesRecieved(MyQuizzesRecievedScreen));
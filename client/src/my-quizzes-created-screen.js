import React from 'react';
import AppHeader from './app-header';
import QuizzesCreatedList from './quizzes-created-list';
import { connect } from 'react-redux';
import fetchQuizzesCreated from './fetch-quizzes-created';

let MyQuizzesCreatedScreen = (props) => 
    <div>
        <AppHeader />
        <h2>My Quizzes Created</h2>
        <QuizzesCreatedList quizzes={props.quizzes} user={props.user} />
    </div>

export default connect(
    state => ({ quizzes: state.quizzesCreated, user: state.currentUser })
)(fetchQuizzesCreated(MyQuizzesCreatedScreen));
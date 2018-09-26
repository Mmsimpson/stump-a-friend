import React from 'react';
import AppHeader from './app-header';
import QuizzesCreatedList from './quizzes-created-list';

let MyQuizzesCreatedScreen = () =>
    <div>
        <AppHeader />
        <h2>List of Quizzes Created</h2>
        <QuizzesCreatedList />
    </div>

export default MyQuizzesCreatedScreen;
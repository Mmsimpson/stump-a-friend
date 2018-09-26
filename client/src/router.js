import React from 'react';
import Homepage from './homepage';
import LoginScreen from './login-screen';
import SignupScreen from './signup-screen';
import NotFound from './not-found';
import { HashRouter, Route, Switch } from 'react-router-dom';
import UserDashboardScreen from './user-dashboard';
import MyQuizzesCreatedScreen from './my-quizzes-created-screen';
import NewQuizFormContainer from './new-quiz-screen';

let Router = () =>
    <HashRouter>
        <div>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/login" component={LoginScreen} />
                <Route exact path="/signup" component={SignupScreen} />
                <Route exact path="/users/:id" component={UserDashboardScreen} />
                <Route exact path="/quizzes/new" component={NewQuizFormContainer} />
                <Route exact path="/quizzes/created" component={MyQuizzesCreatedScreen} />
                <Route path="*" component={NotFound} />
            </Switch>
        </div>
    </HashRouter>

export default Router;
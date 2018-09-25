import React from 'react';
import Homepage from './homepage';
import LoginScreen from './login-screen';
import SignupScreen from './signup-screen';
import NotFound from './not-found';
import { HashRouter, Route, Switch } from 'react-router-dom';

let Router = () =>
    <HashRouter>
        <div>
            <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/login" component={LoginScreen} />
                <Route exact path="/signup" component={SignupScreen} />
                <Route path="*" component={NotFound} />
            </Switch>
        </div>
    </HashRouter>

export default Router;
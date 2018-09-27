import React from 'react';
import { connect } from 'react-redux';
import fetchUsers from './fetch-users';

let AllUsers = (props) => {
    let displayUsers = props.users.filter(user => user.id !== props.currentUser.id);
    return (
        <div>
            <p>Recipient</p>
            <select value={props.newQuiz.recipient}
                    onChange={ event => {
                        props.dispatch({type: 'UPDATE_QUIZ_RECIPIENT', recipient: event.target.value})
                    }}>
                    {displayUsers.map( user => 
                        <option key={user.id} value={user.id}>{user.username}</option>    
                    )}
            </select>
        </div>
    );
};

export default connect(
    state => ({users: state.users, currentUser: state.currentUser, newQuiz: state.newQuiz})
)(fetchUsers(AllUsers));
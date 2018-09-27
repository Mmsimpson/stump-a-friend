import React from 'react';
import {API_URL} from './variables';

let fetchUsers = (Component) => 
    class FetchProducts extends React.Component {
        componentDidMount() {
            fetch(API_URL + '/users')
            .then(res => res.json())
            .then(result => {
                console.log(result.data);
                this.props.dispatch({
                    type: 'GET_USERS',
                    result: result.data
                })
            })
        }
        render() {
            return <Component {...this.props}/>
        }
    };

export default fetchUsers;
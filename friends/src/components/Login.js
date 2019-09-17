import React, { useState, useReducer } from 'react';
import { reducer, initialState } from './reducers/LoginReducer';
import axios from 'axios';

const Login = () => {
    const [user, setNewUser] = useState({username: '', password: ''});

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChanges = e => {
    setNewUser({...user, [e.target.name]: e.target.value});        
    };

    const login = e => {
        e.preventDefault();

        axios.post('http://localhost:5000/api/login', user)
            .then(res => {
                console.log('Login api', res.data)
                dispatch({ type: 'LOGIN', payload: res.data})
            })
            .catch(err => {
                console.log('Error in login api', err.response)
            })
        setNewUser('');
    }
    console.log('State', state);

    return (
        <form>
            <div className="user-form">
                <label>Username: </label>
                <input 
                    className="user-form"
                    type="text"
                    name="username"
                    placeholder="Add a username"
                    value={user.username} required
                    onChange={handleChanges}
                />
            </div>

            <div className="user-form">
                <label>Password:</label>
                <input 
                    className="user-form"
                    type="password"
                    name="password"
                    placeholder="Create a password"
                    value={user.password} required
                    onChange={handleChanges}
                />
            </div>

            <button onClick={login}>Submit</button>
        </form>
    )
}

export default Login;
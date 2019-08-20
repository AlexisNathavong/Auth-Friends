import React,{ useState, useReducer } from 'react';
import { reducer, initialState } from '../reducer/LoginReducer';

import axios from 'axios';

const Login = () => {
    const [user, setNewUser] = useState({username: '', passowrd: ''});

    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChanges = e => {
        setNewUser({...user, [e.target.name]: e.target.value});

    };

   const login = e => {
        e.preventDefault();

        axios.post('http://localhost:5000/api/login', user)
            .then(res => {
                console.log(res)

                localStorage.setItem('token', res.data.payload);

                dispatch({ type: 'LOGIN', payload: res.data});
            })

            .catch(err => {
                console.log(err.response)
            })

        setNewUser('');
    };

    console.log(state);

    return (
        <form>
            <div className="form-group">
                <label>Username: </label>

                <input
                    className="form-group"
                    type="username"
                    name="username"
                    value={user.username}
                    onChange={handleChanges}
                />


            </div>

            <div className="form-group">
                <label>Passowrd: </label>

                <input
                    className="form-group"
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleChanges}
                />

            </div>

            <button onClick={login}>Submit</button>
        </form>
    )
}

export default Login;
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
        e.target.preventDefault();

        axios.post('http://localhost:5000/api/login', user)
            .then(res => {
                console.log(res.data)
            })

            .catch(err => {
                console.log(err.response)
            })
    }
}


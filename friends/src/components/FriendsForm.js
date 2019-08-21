import React, { useState, useEffect } from 'react';
// import { reducer, initialState } from '../reducer/FriendReducer';

import Friend from './Friend';

import { axiosWithAuth } from './utils/axiosWithAuth';

const FriendsForm = () => {

    const [newFriend, setNewFriend] = useState({name: '', age: '', email: ''});

    const [friends, setFriends] = useState([]);

    const getFriend = () => {
        axiosWithAuth().get('http://localhost:5000/api/friends')
            .then(res => {
                console.log(res)
                setFriends(res.data);

            })
            .catch(err => {
                console.log(err.response)
            })
    }

    useEffect(() => {
        getFriend();

    }, [])  

    

    // const [state, dispatch] = useReducer(reducer, initialState);

    const handleChanges = event => {
        setNewFriend({...newFriend, [event.target.name]: event.target.value});
    };



    const addFriend = event => {
        event.preventDefault();
        axiosWithAuth().post('http://localhost:5000/api/friends', newFriend)
            .then(res => {
                console.log(res)
                setFriends(res.data);
                // dispatch({ type: 'ADD_FRIEND', payload: res.data});
            })
            .catch(err => {
                console.log(err.response)
                // dispatch({ type: 'FAILURE'})
            })

            setNewFriend('');
    };

    

    return (
        <>
            <form>
                <div className="form-group">
                    <label>Name: </label>
                        <input
                            className="form-group"
                            type="text"
                            name="name"
                            value={friends.name}
                            onChange={handleChanges}
                        />
                </div>

                <div className="form-group">
                    <label>Age: </label>
                        <input
                            className="form-group"
                            type="text"
                            name="age"
                            value={friends.age}
                            onChange={handleChanges}
                        />
                </div>

                <div className="form-group">
                    <label>Email: </label>
                        <input
                            className="form-group"
                            type="text"
                            name="email"
                            value={friends.email}
                            onChange={handleChanges}
                        />
                </div>

                <button onClick={addFriend}>Add</button>
            </form>

            {friends.map(friend => (<Friend friend={friend} />))}
        </>
    )
}

export default FriendsForm;
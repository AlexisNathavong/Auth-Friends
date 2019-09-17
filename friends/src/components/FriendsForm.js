import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from './utils/axiosWithAuth';

//Components
import Friend from './Friend';

const FriendForm = () => {
    const [newFriend, setNewFriend] = useState({name: '', age: '', email: '' });
    const [friends, setFriends] = useState([]);

    const getFriend = () => {
        //* GET request for getting friends data goes here */

        axiosWithAuth.get('http://localhost:5000/api/friends')
            .then(res => {
                console.log('Friends api', res.data)
                setFriends(res.data)
            })
            .catch(err => {
                console.log('Error in friends api', err.response)
            })
    }

    useEffect(() => {
        getFriend();
    }, [])

    const handleChanges = e => {
        setNewFriend({...newFriend, [e.target.name]: e.target.value});
    };

    const addFriend = e => {
        e.preventDefault();
        //* POST request for adding a friend goes here */
        axiosWithAuth.post('http://localhost:5000/api/friends', friends)
            .then(res => {
                console.log('Add friend api', res.data)
                setFriends(res.data)
            })
            .catch(err => {
                console.log('Error in add friends api', err.response)
            })
        setNewFriend('');
    };

    return (
        <>
        <form>
            <div className="friends-form">
                <label>Name: </label>
                <input
                    className="friends-form"
                    type="text"
                    name="name"
                    placeholder="Add a name"
                    value={friends.name} required
                    onChange={handleChanges}
                />
            </div>

            <div className="friends-form">
                <label>Age: </label>
                <input
                    className="friends-form"
                    type="number"
                    name="age"
                    placeholder="Add your age"
                    value={friends.age} required
                    onChange={handleChanges}
                />
            </div>

            <div className="friends-form">
                <label>Email: </label>
                <input
                    className="friends-form"
                    type="text"
                    name="email"
                    placeholder="Add an email address"
                    value={friends.email} required
                    onChange={handleChanges}
                />
            </div>

            <button onClick={addFriend}>Add</button>
        </form>

        {friends.map(friend => (
            <Friend friend={friend} />
        ))}

        </>
    )

}

export default FriendForm;
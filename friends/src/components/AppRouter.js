import React from 'react';
import { Switch, Route } from 'react-router-dom';

export default function AppRouter() {

    return <div>
        <nav>
            <ul>
                <li>
                    <Link to ='/'>Login</Link>
                </li>

                <li>
                    <Link to ='/friendslist'>Friends List</Link>
                </li>
            </ul>
        </nav>

    <Switch>
        <Route path='/login' component={Login} />
        <Route path='/friendslist' component={FriendsList} />
    </Switch>

    </div>
}
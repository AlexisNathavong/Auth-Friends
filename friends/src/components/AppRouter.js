import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Login from './Login';
import FriendsList from './FriendsList';
import FriendsForm from './FriendsForm';
import PrivateRoute from './PrivateRoute';

function AppRouter() {

    return (

        <Router>
            <div className="app-router">
                
                    <ul>
                        <li>
                            <Link to ='/login'>Login</Link>
                        </li>

                        <li>
                            <Link to='/friendsform'>Friends Form</Link>
                        </li>

                    </ul>
                

            <Switch>
                <Route path='/login' component={Login} />
                <PrivateRoute exact path='/friendsform' component={FriendsForm} />
            </Switch>

            </div>
        </Router>
    );
}

export default AppRouter;
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Login from './Login';
import FriendsList from './FriendsList';

function AppRouter() {

    return (

        <Router>
            <div className="app-router">
                
                    <ul>
                        <li>
                            <Link to ='/'>Login</Link>
                        </li>

                        <li>
                            <Link to ='/friendslist'>Friends List</Link>
                        </li>
                    </ul>
                

            <Switch>
                <Route path='/login' component={Login} />
                <Route exact path='/protected' component={FriendsList} />
            </Switch>

            </div>
        </Router>
    );
}

export default AppRouter;
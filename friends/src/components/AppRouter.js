import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

//Components
import Login from './Login';
import FriendsForm from './FriendsForm';
import PrivateRoute from './PrivateRoute';
import { Nav } from './StyledWidgets';

const AppRouter = () => {
    return (
        <Router>
            <div className="app-router">
                <Nav>
                    <Link to='/'>Login</Link>
                    <Link to='/friendsform'>Friends Form</Link>
                </Nav>

                <Switch>
                    <Route path='/' component={Login} />
                    <PrivateRoute exact path='/friendsform' component={FriendsForm} />
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter;
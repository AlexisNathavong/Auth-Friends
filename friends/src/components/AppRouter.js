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
                    <Link to='/login'>Login</Link>
                    <Link to='/protected'>Protected Page</Link>
                </Nav>

                <Switch>
                    <PrivateRoute exact path='/protected' component={FriendsForm} />
                    <Route path='/' component={Login} />
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter;
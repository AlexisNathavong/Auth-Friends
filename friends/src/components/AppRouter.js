import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

//Components
import Login from './Login';

const AppRouter = () => {
    return (
        <Router>
            <div className="app-router">
                <nav>
                    <Link to='/'>Login</Link>
                </nav>

                <Switch>
                    <Route path='/' component={Login} />
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter;
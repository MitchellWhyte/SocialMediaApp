import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/auth';

// Prevents the user from accessing /login and /register routes when logged in

function AuthRoute({ component: Component, ...rest }) {
    const { user } = useContext(AuthContext);

    return <Route {...rest} render={(props) => (user ? <Redirect to='/' /> : <Component {...props} />)} />;
}

export default AuthRoute;

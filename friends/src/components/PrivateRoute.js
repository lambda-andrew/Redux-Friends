import React from 'react';
import {Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route 
        {...rest}
        render={() => {
            if (localStorage.getItem("token")) {
                return <Component />
            }
            console.log("Failed to login, redirecting!");
            return <Redirect to="/login" />
        }}
        />
    )
}

export default PrivateRoute;
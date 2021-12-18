import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth';





const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth()

    if (isLoading) {
        return 'Loading'
    }
    return (
        <div>

            <Route
                {...rest}

                render={({ location }) => user.email ? children : <Redirect
                    to={{
                        pathname: "/",
                        state: { from: location }
                    }}
                ></Redirect>}
            >

            </Route>

        </div>
    );
};

export default PrivateRoute;
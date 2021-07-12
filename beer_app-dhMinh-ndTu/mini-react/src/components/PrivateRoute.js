import React from 'react';
import {
    Route,
    Redirect
} from "react-router-dom";

function PrivateRoute({ children, ...rest }) {
    console.log(children)
    console.log(rest)
    const authFakeLocal = localStorage.getItem('user');
    var tamp = true
    return (
        <Route
            {...rest}
            render={({ location }) =>
                authFakeLocal != null ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                        }}
                    />
                )
            }
        />

    );
}

export default PrivateRoute;
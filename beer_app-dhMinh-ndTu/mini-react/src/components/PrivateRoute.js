import React from 'react';
import {
    Route,
    Redirect
} from "react-router-dom";

function PrivateRoute({ children, ...rest }) {
    const authFakeLocal = JSON.parse(localStorage.getItem('authLogin'));
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
import React, { useEffect } from 'react';
import {
    Route,
    Redirect
} from "react-router-dom";

function PrivateRoute({ children, ...rest }) {
    useEffect(() => {
        if (rest.location.state !== undefined) {
            rest.setCartItem(rest.location.state.dataOrder)

        }
    }, [rest.location.state])

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
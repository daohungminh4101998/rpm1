import React from 'react';
import {
    Route,
    Redirect
} from "react-router-dom";

function AuthAdminLogin({ children, ...rest }) {
    const authFakeLocal = JSON.parse(localStorage.getItem('authLogin'));
    return (
        <Route
            {...rest}
            render={({ location }) =>
                authFakeLocal !== null && authFakeLocal.role >= 2 && authFakeLocal.user === 'admin' ? (
                    children
                )
                    :
                    (
                        <Redirect
                            to={{
                                pathname: `/`,
                            }}
                        />
                    )
            }
        />

    );
}

export default AuthAdminLogin;
import React from 'react';
import {
    Route,
    Redirect,
    useLocation,
    useHistory
} from "react-router-dom";

function AuthAdminLogin({ children, ...rest }) {
    const location = useLocation();

    const history = useHistory();
    console.log(history)
    const authFakeLocal = JSON.parse(localStorage.getItem('authLogin'));
    console.log(authFakeLocal)
    return (
        <Route
            {...rest}
            render={({ location }) =>
                authFakeLocal != null && authFakeLocal.role >= 2 && authFakeLocal.user == 'admin' ? (
                    children
                ) : (
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
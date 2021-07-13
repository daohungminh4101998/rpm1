import { useState } from "react";

import { useHistory } from "react-router-dom";


function Login() {
    let history = useHistory(); // hoc ve router
    const [loginForm, setLoginForm] = useState({
        userName: '',
        password: '',
    });

    const handleLoginUser = (event) => {
        setLoginForm({ ...loginForm, [event.target.name]: event.target.value })
    }
    const handleLoginForm = () => {
        // var authLogin = { 'user': 'admin', 'role': 2 };
        var authLogin = []
        if ((loginForm.userName === 'admin' && loginForm.password === 'admin')) {
            // authLogin.push()
            localStorage.setItem('authLogin', JSON.stringify({ 'user': loginForm.userName, 'role': 2 }));
            history.push("/processpro");
        }
        else if ((loginForm.userName === 'user' && loginForm.password === 'user')) {
            // authLogin.push()
            localStorage.setItem('authLogin', JSON.stringify({ 'user': loginForm.userName, 'role': 1 }));
            history.push("/");
        }

        if (loginForm.userName === '' || loginForm.password === '') { //Logical OR (||) - JavaScript | MDN
            //validate Styles
        }
        else {
            //validate Styles
        }
    }
    return (
        <div className="container">
            <div className="auth-form">
                <div className="text-top">
                    <h2>Beer Bar App</h2>
                </div>
                <div className="switch_button">
                    <div className="btn_login"><button>Đăng Ký</button></div>
                    <div className="btn_or"> <span>Hoặc</span></div>
                </div>
                <div className="auth-form__form">
                    <div className="auth-form__group">
                        <input onChange={handleLoginUser} name="userName" type="text" className="auth-form__input" placeholder="Tên đăng nhập" />
                    </div>
                    <div className="auth-form__group">
                        <input onChange={handleLoginUser} name="password" type="password" className="auth-form__input" placeholder="Mật khẩu" />
                    </div>

                </div>
                <div className="footer_btn">
                    <button onClick={handleLoginForm} className="login">Đăng Nhập</button>
                </div>
            </div>
        </div>
    );
}
export default Login;
import { useState } from "react";

import { useHistory } from "react-router-dom";

function Register() {
    let history = useHistory(); // hoc ve router
    const [loginForm, setLoginForm] = useState({
        userName: '',
        password: '',
    });

    const handleLoginUser = (event) => {
        setLoginForm({ ...loginForm, [event.target.name]: event.target.value })
    }
    const handleLoginForm = () => {
        if (loginForm.userName === 'admin' && loginForm.password === 'admin') {
            localStorage.setItem("user", 'admin');
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
                    <h2>Register Beer Bar App</h2>
                </div>
                <div className="switch_button">
                    <div className="btn_login"><button>Đăng nhập</button></div>
                    <div className="btn_or"> <span>Hoặc</span></div>
                </div>
                <div className="auth-form__form">
                    <div className="auth-form__group">
                        <input onChange={handleLoginUser} name="userName" type="text" className="auth-form__input" placeholder="Tên đăng nhập" />
                    </div>
                    <div className="auth-form__group">
                        <input onChange={handleLoginUser} name="password" type="password" className="auth-form__input" placeholder="Mật khẩu" />
                    </div>
                    <div className="auth-form__group">
                        <input name="mailAddress" type="text" className="auth-form__input" placeholder="Địa chỉ Email" />
                    </div>
                    <div className="auth-form__group">
                        <input name="phoneNumber" type="text" className="auth-form__input" placeholder="Số điện thoại" />
                    </div>

                </div>
                <div className="footer_btn">
                    <button onClick={handleLoginForm} className="register">Đăng ký</button>
                </div>
            </div>
        </div>
    );
}

export default Register;
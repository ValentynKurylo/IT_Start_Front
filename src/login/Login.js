import React, {useState, useRef} from 'react';
import {observer} from "mobx-react-lite";

import "./Auth.css"
import UserService from "../services/userService";
import UserStore from "../store/userStore";

const Login = observer(() => {
    let emailRef = useRef('')
    let passwordRef = useRef('')
    let [body, setBody] = useState({})

    function login() {
        setBody(body.email = emailRef.current.value)
        setBody(body.password = passwordRef.current.value)
        try {
            UserService.login(body).then(value => {
                console.log(value)
                if(value.data.token){
                    localStorage.setItem("token", value.data.token)
                    UserStore.setIsAuth(true)
                    UserStore.setCurrentUser(value.data.user)
                }
                else {
                    alert(value.data.message)
                }
            })
        } catch (e) {
            alert("bad")
        }
    }

    return (
        <div>
            <center>
                <div className='registration'>
                    <div className="header1">Login</div>
                    <input ref={emailRef} type="text" placeholder="Enter email..."/>
                    <hr/>
                    <input ref={passwordRef} type="password" placeholder="Enter password..."/>
                    <button className="registration_btn" onClick={login}>Enter
                    </button>
                </div>
            </center>
        </div>
    );
});

export default Login;
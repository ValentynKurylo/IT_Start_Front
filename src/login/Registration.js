import React, {useRef, useState} from 'react';
import {observer} from "mobx-react-lite";

import "./Auth.css"
import UserService from "../services/userService";
import UserStore from "../store/userStore";

const Registration = observer(() => {
    let usernameRef = useRef('')
    let emailRef = useRef('')
    let passwordRef = useRef('')
    let [user, setUser] = useState({})
    function registr() {
        setUser(user.username = usernameRef.current.value)
        setUser(user.email = emailRef.current.value)
        setUser(user.password = passwordRef.current.value)
        UserService.registration(user).then(value => {
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
    }

    return (
        <div >
            <center>
                <div className='registration'>
                    <div className="header1">Registration</div>
                    <input ref={usernameRef}  type="text" placeholder="Enter fullName..."/>
                    <hr/>
                    <input ref={emailRef}  type="text" placeholder="Enter email..."/>
                    <hr/>
                    <input ref={passwordRef} type="password" placeholder="Enter password..."/>
                    <button className="registration_btn" onClick={registr}>Submit
                    </button>
                </div>
            </center>
        </div>
    );
});

export default Registration;
import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {observer} from "mobx-react-lite";

import './Navbar.css'
import UserStore from "../store/userStore";

const Navbar = observer(() => {

    function logout() {
        localStorage.removeItem("token")
        UserStore.setIsAuth(false)
    }

    return (
        <div className={"main"}>
            <div className="container">
                <div className={"left"}>
                    <div className="header">KURYLO PROJECT</div>
                </div>

                <div className={"right"}>
                    {!UserStore.isAuth && <div className="login"><Link to="/login">Login</Link></div>}
                    {!UserStore.isAuth && <div className="registration_link"><Link to="/registration">Registration</Link></div>}
                    {UserStore.isAuth && <div className="login" onClick={logout}><Link to="/">Logout</Link></div>}
                </div>
            </div>
        </div>
    );
});

export default Navbar;
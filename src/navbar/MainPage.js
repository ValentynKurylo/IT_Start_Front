import React from 'react';
import {observer} from "mobx-react-lite";
import Navbar from "./Navbar";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Login from "../login/Login";
import Registration from "../login/Registration";
import UserStore from "../store/userStore";
import FileComponent from "../components/FileComponent";

const MainPage = observer(() => {
    return (
        <div>
            <BrowserRouter>
                <Navbar/>
                {!UserStore.isAuth ?
                <Switch>
                    <Route exact={true} path={'/'} component={Login}/>
                    <Route exact={true} path={'/login'} component={Login}/>
                    <Route exact={true} path={'/registration'} component={Registration}/>
                </Switch> :
                <Switch>
                    <Route exact={true} path={''} component={FileComponent}/>
                </Switch>
                }
            </BrowserRouter>
        </div>
    );
});

export default MainPage;
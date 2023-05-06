import React from 'react';
import {Switch,Route} from 'react-router-dom'
import  Register from '../pages/sing-up'
import Login from '../pages/login';
import DashboardPage from '../pages/Dashboard';

const RouterApp = ()=>{
    return(
        <Switch>
            <Route exact path={'/'} component={DashboardPage}></Route>
            <Route exact path={'/register'} component={Register}></Route>
            <Route exact path={'/login'} component={Login}></Route>
        </Switch>
    )
}
export default RouterApp;
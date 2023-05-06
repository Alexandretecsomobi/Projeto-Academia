import React from 'react';
import {Switch,Route} from 'react-router-dom'
import  Register from '../pages/sing-up'
import Login from '../pages/login';

const RouterApp = ()=>{
    return(
        <Switch>
            <Route exact path={'/register'} component={Register}></Route>
            <Route exact path={'/login'} component={Login}></Route>
        </Switch>
    )
}
export default RouterApp;
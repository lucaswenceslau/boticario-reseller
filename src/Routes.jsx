import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import CreateAccount from './pages/CreateAccount';
import Buy from './pages/Buy/index'
import ListBuy from './pages/ListBuy';
import MyAccount from './pages/MyAccount';
import Dev from './pages/Dev';

const Routes = () => (
    <Switch >
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route path="/create" component={CreateAccount} />
        <Route path="/listbuy" component={ListBuy} />
        <Route path="/buy" component={Buy} />
        <Route path="/account" component={MyAccount} />
        <Route path="/dev" component={Dev} />
    </Switch>
);

export default Routes;

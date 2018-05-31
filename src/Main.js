import React from 'react';
import { Route, Switch } from "react-router-dom";
import Pending from './Pending';
import Consider from './Consider';
import OnHold from './OnHold';
import home from './Home';

const Main = () => (


    <Switch>
        <Route exact path='/' component={home} />
        <Route path='/pending' component={Pending} />
        <Route path='/consider' component={Consider} />
        <Route path='/onhold' component={OnHold} />

    </Switch>


)

export default Main;


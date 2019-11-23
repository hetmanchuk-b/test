import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './../components/Home';
import Contacts from './../components/Contacts';
import Promotions from './../components/Promotions';
import Search from './../containers/Search';
import Train from './../containers/Train/Wrapper';
import Tasks from './../containers/Tasks';
import Alarm from './../containers/Alarm';
import Package from './../containers/Package';
import Bag from './../containers/Bag';
import Cabinet from './Cabinet';

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/contacts" component={Contacts} />
    <Route exact path="/search" component={Search} />
    <Route exact path="/train" component={Train} />
    <Route exact path="/tasks" component={Tasks} />
    <Route exact path="/alarm" component={Alarm} />
    <Route exact path="/promotions" component={Promotions} />
    <Route exact path="/package" component={Package} />
    <Route exact path="/bag" component={Bag} />
    <Route path="/cabinet" component={Cabinet} />
  </Switch>
);
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
import Conditions from '../components/Conditions';
import PublicOffer from '../components/PublicOffer';
import PaymentSuccess from '../components/PaymentSuccess';
import RequestSuccess from '../components/RequestSuccess';

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
    <Route exact path="/conditions" component={Conditions} />
    <Route exact path="/public-offer" component={PublicOffer} />
    <Route exact path="/payment-success" component={PaymentSuccess} />
    <Route exact path="/request-success" component={RequestSuccess} />
    <Route path="/cabinet" component={Cabinet} />
  </Switch>
);

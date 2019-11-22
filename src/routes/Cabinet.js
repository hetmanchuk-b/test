import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { getReservations } from './../actions/User';
import { getList as getPassengers } from './../actions/Passengers';
import { Switch, Route } from 'react-router-dom';
import Navigation from './../containers/Navigation/Cabinet';
import Account from './../containers/Cabinet/Account';
import Tickets from './../containers/Cabinet/Tickets';
import Archive from './../containers/Cabinet/Archive';
import Passengers from './../containers/Cabinet/Passengers';
import Tasks from './../containers/Cabinet/Tasks';
import Auth from './../containers/Auth';

class Cabinet extends PureComponent {
  constructor(props) {
    super(props);
    props.getReservations();
    props.getPassengers();
  }

  render() {
    return (
      <Auth>
        <Navigation title="Личный кабинет" />
        <main className="main">
          <div className="inner-page cabinet-page">
            <Switch>
              <Route exact path="/cabinet" component={Account} />
              <Route exact path="/cabinet/account" component={Account} />
              <Route exact path="/cabinet/tickets" component={Tickets} />
              <Route exact path="/cabinet/archive" component={Archive} />
              <Route exact path="/cabinet/passengers" component={Passengers} />
              <Route exact path="/cabinet/tasks" component={Tasks} />
            </Switch>
          </div>
        </main>
      </Auth>
    );
  }
}

export default connect(null, { getReservations, getPassengers })(Cabinet);

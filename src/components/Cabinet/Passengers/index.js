import React, { PureComponent, Fragment } from 'react';
import Passenger from './Passenger';
import Create from './Create';
import Tabs from './../Tabs';

class Passengers extends PureComponent {
  render() {
    const { list, update, remove, create } = this.props;

    return (
      <Fragment>
        <Tabs tab="passengers" />
        <div className="cabinet-page__content">
          <Fragment>
            {list.map(el => (<Passenger data={el} key={el.id} update={update} remove={remove} />))}
            <Create handleCreate={create} />
          </Fragment>
        </div>
      </Fragment>
    );
  }
}

export default Passengers;

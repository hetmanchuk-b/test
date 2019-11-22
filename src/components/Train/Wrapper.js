import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import Navigation from './../../containers/Navigation/Large';
import Train from './../../containers/Train';
import Loader from 'react-loaders';

export default props => {
  const content = (
    props.loader
      ? (<Loader type="line-scale-pulse-out" active={true} />)
      : props.dataEmpty
        ? (<p>О данном поезде нет данных</p>)
        : (<Train />)
  );

  if ( ! props.trainSelected && ! props.bagEmpty ) return (<Redirect to="/bag" />);

  if ( ! props.trainSelected ) return (<Redirect to="/" />);

  return (
    <Fragment>
      <Navigation />
      {content}
    </Fragment>
  );
}

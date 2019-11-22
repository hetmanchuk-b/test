import React, { Fragment } from 'react';
import Navigation from './../../containers/Navigation/Cabinet';
import {Helmet} from 'react-helmet';

export default () => (
  <Fragment>
    <Helmet>
      <title>Акции</title>
      <meta name="description" content="описание" />
    </Helmet>
    <Navigation title="Акции" />
    <main className="main">
      <div className="inner-page apply-page">
        <p className="error-block">На текущий момент акций нет.</p>
      </div>
    </main>
  </Fragment>
);

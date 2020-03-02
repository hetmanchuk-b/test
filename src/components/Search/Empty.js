import React from 'react';
import { Link } from 'react-router-dom';
import {Helmet} from 'react-helmet';

export default () => {
  return (
    <div className="search-empty">
      <Helmet>
        <title>Свободных мест нет</title>
      </Helmet>
      <h3>К сожалению, свободных мест нет :(</h3>
      <p>Оставьте заявку, и мы выкупим нужный Вам билет, как только он появится.</p>
      <Link className="btn btn__main" to="/tasks">Оставить заявку</Link>
    </div>
  );
}


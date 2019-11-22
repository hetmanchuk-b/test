import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default props => {
  if ( props.jwt !== null ) return (
    <Fragment>
      <Link className="nav-item nav-link user-name" to="/cabinet">{props.user.firstName} {props.user.lastName}</Link>
      <button type="button" className="btn btn__transparent" onClick={props.signOut}>Выйти</button>
    </Fragment>
  );

  return (
    <Fragment>
      <button type="button" className="btn btn__transparent" onClick={() => props.modalOpen('signUp')}>Регистрация</button>
      <button type="button" className="btn btn__transparent" onClick={() => props.modalOpen('signIn')}>Вход</button>
    </Fragment>
  );
};

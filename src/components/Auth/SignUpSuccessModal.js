import React, { Fragment } from 'react';

export default props => (
  <Fragment>
    <div className="modal show" id="sign-up-success">
      <div className="modal-dialog">
        <div className="modal-content">
          <button type="button" className="close" onClick={props.modalClose}>
            <i className="fas fa-times"></i>
          </button>
          <div className="modal-header">
            <h5 className="modal-title">Успешная регистрация</h5>
          </div>
          <div className="modal-body pb-3">
            <p>Поздравляем! Вы зарегистрировали личный кабинет в сервисе Sapsan.express!</p>
          </div>
        </div>
      </div>
    </div>
    <div className="overlay show"></div>
  </Fragment>
);

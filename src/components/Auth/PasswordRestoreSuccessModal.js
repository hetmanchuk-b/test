import React, { Fragment } from 'react';

export default props => (
  <Fragment>
    <div className="modal show" id="recover-pass-accept">
      <div className="modal-dialog">
        <div className="modal-content">
          <button type="button" className="close" onClick={props.modalClose}>
            <i className="fas fa-times"></i>
          </button>
          <div className="modal-header">
            <h5 className="modal-title">Восстановить пароль</h5>
          </div>
          <div className="modal-body">
            <img className="recover-pass-icon" src="../img/icons/accept.jpg" alt="" />
            <p>На указанный вами адрес  отправлено письмо с  новым паролем.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="overlay show"></div>
  </Fragment>
);

import React, { PureComponent, Fragment } from 'react';

class Modal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      validationError: null
    };
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  validation = () => {
    const { email } = this.state;
    let validationError = null;

    if ( email.length < 1 ) validationError = 'Введите Ваш email';

    if ( validationError === null ) return true;

    this.setState({ validationError: validationError });
    return false;
  }

  handleSubmit = e => {
    e.preventDefault();
    const { email } = this.state;

    if ( this.validation() ) this.props.passwordRestore({ email });
  }

  render() {
    const { email, validationError } = this.state;
    const error = this.props.error;

    return (
      <Fragment>
        <div className="modal show" id="recover-pass">
          <div className="modal-dialog" >
            <div className="modal-content">
              <button type="button" className="close" onClick={this.props.modalClose}>
                <i className="fas fa-times"></i>
              </button>
              <div className="modal-header">
                <h5 className="modal-title">Восстановить пароль</h5>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group-wrap">
                    <div className="form-group">
                      <input type="text" className="form-control" id="email-for-recover" placeholder="Адрес электронной почты"
                        name="email" value={email} onChange={this.handleInput}
                      />
                    </div>
                  </div>
                  <button type="submit" className="btn" onClick={this.handleSubmit}>Восстановить пароль</button>

                  {validationError !== null ? (<p>{validationError}</p>) : null}
                  {error !== null ? (<p>{error}</p>) : null}
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="overlay show"></div>
      </Fragment>
    );
  }
}

export default Modal;

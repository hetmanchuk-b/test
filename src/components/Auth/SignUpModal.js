import React, { PureComponent, Fragment } from 'react';
import InputMask from 'react-input-mask';
import { Link } from 'react-router-dom';

class Modal extends PureComponent
{
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      phone: '',
      firstName: '',
      lastName: '',
      password: '',
      passwordRepeat: '',
      accept: false,
      validationError: null,
      passwordType: true,
      confirmPasswordType: true
    };
  }

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleAccept = e => {
    this.setState({ accept: ! this.state.accept });
  }

  validation = () => {
    const { email, phone, firstName, lastName, password, passwordRepeat, accept } = this.state;
    let validationError = null;

    if ( ! accept ) validationError = 'Дайте согласие на обработку ваших персональных даннных';

    if ( email.length < 1 ) validationError = 'Введите Ваш email';

    if ( phone.length < 1 ) validationError = 'Введите Ваш номер телефона';

    if ( firstName.length < 1 ) validationError = 'Введите Ваше имя';

    if ( lastName.length < 1 ) validationError = 'Введите Вашу фамилию';

    if ( password.length < 1 ) validationError = 'Введите Ваш пароль';

    if ( password !== passwordRepeat ) validationError = 'Пароли не совпадают';

    if ( validationError === null ) return true;

    this.setState({ validationError: validationError });
    return false;
  }

  handleSubmit = e => {
    e.preventDefault();
    const { email, phone, password, firstName, lastName } = this.state;

    if ( this.validation() ) this.props.signUp({ email, phone, password, firstName, lastName });
  }

  handlePasswordType = event => {
    this.setState({
      passwordType: !this.state.passwordType
    });
  }
  handleConfirmPasswordType = event => {
    this.setState({
      confirmPasswordType: !this.state.confirmPasswordType
    });
  }

  render() {
    const { email, phone, firstName, lastName, password, passwordRepeat, accept, validationError } = this.state;
    const error = this.props.error;

    return (
      <Fragment>
        <div className="modal show modal-register" id="register">
          <div className="modal-dialog">
            <div className="modal-content">
              <button type="button" className="close" onClick={this.props.modalClose}>
                <i className="fas fa-times"></i>
              </button>
              <div className="row">
                <div className="col-md-6 col-left">
                  <div className="modal-header">
                    <h5>Регистрация</h5>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="form-group-wrap">
                        <div className="form-group">
                          <input type="text" className="form-control" id="email-for-reg" placeholder="Адрес электронной почты"
                            name="email" value={email} onChange={this.handleInput}
                          />
                        </div>
                        <hr />
                        <div className="form-group">
                          {/* <input type="text" className="form-control" id="phone-for-reg" placeholder="+7 (__) ___-__-__"
                            name="phone" value={phone} onChange={this.handleInput}
                          /> */}
                          <InputMask type="text" className="form-control" id="phone-for-reg" placeholder="+7 (___) ___-__-__"
                            name="phone" value={phone} onChange={this.handleInput} mask="+9 (999) 999-99-99" />
                        </div>
                        <hr />
                        <div className="form-group eye-wrap">
                          <input type="text" className="form-control" id="firstname-for-reg" placeholder="Имя"
                            name="firstName" value={firstName} onChange={this.handleInput}
                          />
                        </div>
                        <hr />
                        <div className="form-group eye-wrap">
                          <input type="text" className="form-control" id="lastname-for-reg" placeholder="Фамилия"
                            name="lastName" value={lastName} onChange={this.handleInput}
                          />
                        </div>
                        <hr />
                        <div className="form-group eye-wrap">
                          <input type={this.state.passwordType ? "password" : "text"} className="form-control" id="pass-for-reg" placeholder="Пароль"
                            name="password" value={password} onChange={this.handleInput}
                          />
                          <span className="eye-icon" onClick={event => this.handlePasswordType(event)}>
                             <i className="fas fa-eye"></i> 
                          </span>
                        </div>
                        <hr />
                        <div className="form-group eye-wrap">
                          <input type={this.state.confirmPasswordType ? "password" : "text"} className="form-control" id="confirm-pass" placeholder="Повторите пароль"
                            name="passwordRepeat" value={passwordRepeat} onChange={this.handleInput}
                          />
                          <span className="eye-icon" onClick={event => this.handleConfirmPasswordType(event)}>
                             <i className="fas fa-eye"></i> 
                          </span>
                        </div>
                      </div>
                      <div className="accept-wrap">
                        <input type="checkbox" id="accept" placeholder="Повторите пароль" checked={accept} onChange={this.handleAccept} />
                        <label htmlFor="accept">Я соглашаюсь с&nbsp;
                          <Link to="/conditions" target="_blank" >обработкой моих персональных данных</Link>
                          &nbsp;и&nbsp;<Link to="/public-offer" target="_blank" >публичной офертой</Link>
                        </label>
                      </div>

                      <button type="submit" className="btn reg-btn" onClick={this.handleSubmit}>Зарегистрироваться</button>

                      {validationError !== null ? (<p className="signup-error-block">{validationError}</p>) : null}
                      {error !== null ? (<div className="signup-error-block">
                            <p>{error}</p>
                        <a className="" href="#"
                           onClick={() => this.props.modalOpen('passwordRestore')}>Забыли пароль?</a>
                      </div>) : null}
                    </form>
                  </div>
                  <div className="modal-footer">
                    {/* <p>Вы также можете зайти <br /> через свой профиль в социальных сетях</p>
                    <div className="social-btn-wrap">
                      <a href="#" className="fb">
                        <svg className="img-fluid" height="512pt" viewBox="0 0 512 512" width="512pt"
                           xmlns="http://www.w3.org/2000/svg">
                          <path d="m297.277344 508.667969c-2.132813.347656-4.273438.667969-6.421875.960937 2.148437-.292968 4.289062-.613281 6.421875-.960937zm0 0"/>
                          <path d="m302.398438 507.792969c-1.019532.1875-2.039063.359375-3.058594.535156 1.019531-.175781 2.039062-.347656 3.058594-.535156zm0 0"/>
                          <path d="m285.136719 510.339844c-2.496094.28125-5.007813.53125-7.527344.742187 2.519531-.210937 5.03125-.460937 7.527344-.742187zm0 0"/>
                          <path d="m290.054688 509.738281c-1.199219.160157-2.40625.308594-3.609376.449219 1.203126-.140625 2.410157-.289062 3.609376-.449219zm0 0"/>
                          <path d="m309.367188 506.410156c-.898438.191406-1.800782.382813-2.703126.566406.902344-.183593 1.804688-.375 2.703126-.566406zm0 0"/>
                          <path d="m326.664062 502.113281c-.726562.207031-1.453124.402344-2.179687.605469.726563-.203125 1.453125-.398438 2.179687-.605469zm0 0"/>
                          <path d="m321.433594 503.542969c-.789063.207031-1.582032.417969-2.375.617187.792968-.199218 1.585937-.40625 2.375-.617187zm0 0"/>
                          <path d="m314.589844 505.253906c-.835938.195313-1.679688.378906-2.523438.566406.84375-.1875 1.6875-.371093 2.523438-.566406zm0 0"/>
                          <path d="m277.527344 511.089844c-1.347656.113281-2.695313.214844-4.046875.304687 1.351562-.089843 2.699219-.191406 4.046875-.304687zm0 0"/>
                          <path d="m512 256c0-141.363281-114.636719-256-256-256s-256 114.636719-256 256 114.636719 256 256 256c1.503906 0 3-.03125 4.5-.058594v-199.285156h-55v-64.097656h55v-47.167969c0-54.703125 33.394531-84.476563 82.191406-84.476563 23.367188 0 43.453125 1.742188 49.308594 2.519532v57.171875h-33.648438c-26.546874 0-31.6875 12.617187-31.6875 31.128906v40.824219h63.476563l-8.273437 64.097656h-55.203126v189.453125c107.003907-30.675781 185.335938-129.257813 185.335938-246.109375zm0 0"/>
                          <path d="m272.914062 511.429688c-2.664062.171874-5.339843.308593-8.023437.398437 2.683594-.089844 5.359375-.226563 8.023437-.398437zm0 0"/>
                          <path d="m264.753906 511.835938c-1.414062.046874-2.832031.082031-4.25.105468 1.417969-.023437 2.835938-.058594 4.25-.105468zm0 0"/>
                        </svg>
                      </a>
                      <a href="#" className="twitter">
                        <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                           width="49.652px" height="49.652px" viewBox="0 0 49.652 49.652"
                           style={{enableBackground: 'new 0 0 49.652 49.652'}} xmlSpace="preserve">
                      <path d="M24.826,0C11.137,0,0,11.137,0,24.826c0,13.688,11.137,24.826,24.826,24.826c13.688,0,24.826-11.138,24.826-24.826
                        C49.652,11.137,38.516,0,24.826,0z M35.901,19.144c0.011,0.246,0.017,0.494,0.017,0.742c0,7.551-5.746,16.255-16.259,16.255
                        c-3.227,0-6.231-0.943-8.759-2.565c0.447,0.053,0.902,0.08,1.363,0.08c2.678,0,5.141-0.914,7.097-2.446
                        c-2.5-0.046-4.611-1.698-5.338-3.969c0.348,0.066,0.707,0.103,1.074,0.103c0.521,0,1.027-0.068,1.506-0.199
                        c-2.614-0.524-4.583-2.833-4.583-5.603c0-0.024,0-0.049,0.001-0.072c0.77,0.427,1.651,0.685,2.587,0.714
                        c-1.532-1.023-2.541-2.773-2.541-4.755c0-1.048,0.281-2.03,0.773-2.874c2.817,3.458,7.029,5.732,11.777,5.972
                        c-0.098-0.419-0.147-0.854-0.147-1.303c0-3.155,2.558-5.714,5.713-5.714c1.644,0,3.127,0.694,4.171,1.804
                        c1.303-0.256,2.523-0.73,3.63-1.387c-0.43,1.335-1.333,2.454-2.516,3.162c1.157-0.138,2.261-0.444,3.282-0.899
                        C37.987,17.334,37.018,18.341,35.901,19.144z"/>
                    </svg>

                      </a>
                      <a href="#" className="vk">
                        <svg className="img-fluid" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px"
                           y="0px" width="97.75px" height="97.75px" viewBox="0 0 97.75 97.75"
                           style={{enableBackground: 'new 0 0 97.75 97.75'}} xmlSpace="preserve">
                    <path d="M48.875,0C21.883,0,0,21.882,0,48.875S21.883,97.75,48.875,97.75S97.75,75.868,97.75,48.875S75.867,0,48.875,0z
                       M73.667,54.161c2.278,2.225,4.688,4.319,6.733,6.774c0.906,1.086,1.76,2.209,2.41,3.472c0.928,1.801,0.09,3.776-1.522,3.883
                      l-10.013-0.002c-2.586,0.214-4.644-0.829-6.379-2.597c-1.385-1.409-2.67-2.914-4.004-4.371c-0.545-0.598-1.119-1.161-1.803-1.604
                      c-1.365-0.888-2.551-0.616-3.333,0.81c-0.797,1.451-0.979,3.059-1.055,4.674c-0.109,2.361-0.821,2.978-3.19,3.089
                      c-5.062,0.237-9.865-0.531-14.329-3.083c-3.938-2.251-6.986-5.428-9.642-9.025c-5.172-7.012-9.133-14.708-12.692-22.625
                      c-0.801-1.783-0.215-2.737,1.752-2.774c3.268-0.063,6.536-0.055,9.804-0.003c1.33,0.021,2.21,0.782,2.721,2.037
                      c1.766,4.345,3.931,8.479,6.644,12.313c0.723,1.021,1.461,2.039,2.512,2.76c1.16,0.796,2.044,0.533,2.591-0.762
                      c0.35-0.823,0.501-1.703,0.577-2.585c0.26-3.021,0.291-6.041-0.159-9.05c-0.28-1.883-1.339-3.099-3.216-3.455
                      c-0.956-0.181-0.816-0.535-0.351-1.081c0.807-0.944,1.563-1.528,3.074-1.528l11.313-0.002c1.783,0.35,2.183,1.15,2.425,2.946
                      l0.01,12.572c-0.021,0.695,0.349,2.755,1.597,3.21c1,0.33,1.66-0.472,2.258-1.105c2.713-2.879,4.646-6.277,6.377-9.794
                      c0.764-1.551,1.423-3.156,2.063-4.764c0.476-1.189,1.216-1.774,2.558-1.754l10.894,0.013c0.321,0,0.647,0.003,0.965,0.058
                      c1.836,0.314,2.339,1.104,1.771,2.895c-0.894,2.814-2.631,5.158-4.329,7.508c-1.82,2.516-3.761,4.944-5.563,7.471
                      C71.48,50.992,71.611,52.155,73.667,54.161z"/>
                  </svg>
                      </a>
                      <a href="#" className="ok">
                        <svg className="img-fluid" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                           width="97.75px" height="97.75px" viewBox="0 0 97.75 97.75"
                           style={{enableBackground: 'new 0 0 97.75 97.75'}} xmlSpace="preserve">
                      <path d="M48.921,40.507c4.667-0.017,8.384-3.766,8.367-8.443c-0.017-4.679-3.742-8.402-8.411-8.406
                        c-4.708-0.005-8.468,3.787-8.432,8.508C40.48,36.826,44.239,40.524,48.921,40.507z"/>
                          <path d="M48.875,0C21.882,0,0,21.883,0,48.875S21.882,97.75,48.875,97.75S97.75,75.867,97.75,48.875S75.868,0,48.875,0z
                         M48.945,14.863c9.52,0.026,17.161,7.813,17.112,17.438c-0.048,9.403-7.814,17.024-17.318,16.992
                        c-9.407-0.032-17.122-7.831-17.066-17.253C31.726,22.515,39.445,14.837,48.945,14.863z M68.227,56.057
                        c-2.105,2.161-4.639,3.725-7.453,4.816c-2.66,1.031-5.575,1.55-8.461,1.896c0.437,0.474,0.642,0.707,0.914,0.979
                        c3.916,3.937,7.851,7.854,11.754,11.802c1.33,1.346,1.607,3.014,0.875,4.577c-0.799,1.71-2.592,2.834-4.351,2.713
                        c-1.114-0.077-1.983-0.63-2.754-1.407c-2.956-2.974-5.968-5.895-8.862-8.925c-0.845-0.882-1.249-0.714-1.994,0.052
                        c-2.973,3.062-5.995,6.075-9.034,9.072c-1.365,1.346-2.989,1.59-4.573,0.82c-1.683-0.814-2.753-2.533-2.671-4.262
                        c0.058-1.166,0.632-2.06,1.434-2.858c3.877-3.869,7.742-7.75,11.608-11.628c0.257-0.257,0.495-0.53,0.868-0.93
                        c-5.273-0.551-10.028-1.849-14.099-5.032c-0.506-0.396-1.027-0.778-1.487-1.222c-1.783-1.711-1.962-3.672-0.553-5.69
                        c1.207-1.728,3.231-2.19,5.336-1.197c0.408,0.191,0.796,0.433,1.168,0.689c7.586,5.213,18.008,5.356,25.624,0.233
                        c0.754-0.576,1.561-1.05,2.496-1.289c1.816-0.468,3.512,0.201,4.486,1.791C69.613,52.874,69.6,54.646,68.227,56.057z"/>

                    </svg>

                      </a>
                    </div> */}
                    <p>У меня уже есть личный кабинет, <a href="#" onClick={() => this.props.modalOpen('signIn')}>войти</a></p>
                  </div>
                </div>
                <div className="col-md-6 col-right">
                  <div className="modal-header">
                    <h5>Зачем мне<br /> личный кабинет?</h5>
                  </div>
                  <div className="modal-body">
                    <p>Тестовый текст. Конечно, вы без всякой регистрации можете покупать билеты, узнавать
                      расписания, бронировать отели и т.п.</p>
                    <p>Но псоле реистрации всё это станет удобнее и быстрее</p>
                    <ul>
                      <li>
                        <i className="fas fa-check"></i>
                        <p>В любой момент вы сможете бланк заказа или маршрутной квитанции,</p>
                      </li>
                      <li>
                        <i className="fas fa-check"></i>
                        <p>заказать звонок оператора и т.п.,</p>
                      </li>
                      <li>
                        <i className="fas fa-check"></i>
                        <p>просмотреть историю заказов.</p>
                      </li>
                    </ul>
                    <p>Тестовый текст. Конечно, вы без всякой регистрации можете покупать билеты, узнавать
                      расписания.</p>
                  </div>
                </div>
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

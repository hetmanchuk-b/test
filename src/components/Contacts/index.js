import React, { PureComponent, Fragment } from 'react';
import { contactFormSend } from './../../actions/App';
import Navigation from './../../containers/Navigation/Cabinet';
import FormErrors from './FormErrors';
import {Helmet} from 'react-helmet';
import InputMask from 'react-input-mask';
import { connect } from 'react-redux';

class Contacts extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '', 
      phone: '', 
      email: '', 
      message: '',
      formErrors: { firstName: '', phone: '', email: '', message: '' },
      firstNameValid: false,
      emailValid: false,
      messageValid: false,
      formValid: false,
      messageSent: false
    };
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let firstNameValid = this.state.firstNameValid;
    let emailValid = this.state.emailValid;
    let messageValid = this.state.messageValid;

    switch(fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : 'Введите корректный email';
        break;
      case 'firstName':
        firstNameValid = value.trim() !== '';
        fieldValidationErrors.firstName = firstNameValid ? '' : 'Введите своё имя';
        break;
      case 'message':
        messageValid = value.trim().length >= 10;
        fieldValidationErrors.message = messageValid ? '' : 'Минимальная длина сообщения 10 символов';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      firstNameValid: firstNameValid,
      emailValid: emailValid,
      messageValid: messageValid
    }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.firstNameValid && this.state.emailValid && this.state.messageValid});
  }


  handleInput = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => { this.validateField(name, value) });
  }

  handleSend = () => {
    this.props.contactFormSend({
      firstName: this.state.firstName,
      phone: this.state.phone,
      email: this.state.email,
      message: this.state.message
    }).then(data => {
      // Success handler
      console.log('SUCCESS', data);
    }).catch(error => {
      // Error handler
      console.log('ERROR', error);
    });

    // Это думаю лучше перенести на 75 строку в Success handler
    this.setState({ messageSent: true });
    this.setState({ firstName: '', phone: '', email: '', message: '' });
  }

  errorClass(error) {
    return(error.length === 0 ? '' : 'has-error');
  }

  fillInputs() {
    const userFirstName = this.props.data.user.data.firstName;
    const userLastName = this.props.data.user.data.lastName;
    const userPhone = this.props.data.user.data.phone;
    const userEmail = this.props.data.user.data.email;

    if (userFirstName && userLastName && userPhone && userEmail) {
      this.setState({
        firstName: (userFirstName && userLastName) ? `${userFirstName} ${userLastName}` : '',
        phone: userPhone ? userPhone : '', 
        email: userEmail ? userEmail : '',
        emailValid: true,
        firstNameValid: true
      });
    }
  }

  componentDidMount(prevProps) {
    if (this.props.data.user.data.firstName) {
      this.fillInputs();
    }    
  }

  componentDidUpdate(prevProps) {
    if (this.props.data.user.data.firstName) {
      this.fillInputs();
    }    
  }

  render() {
    const { firstName, phone, email, message } = this.state;
    

    return (
      <Fragment>
        <Helmet>
          <title>Обратная связь</title>
          <meta name="description" content="123" />
        </Helmet>
        <Navigation title="Обратная связь" />
        <main className="main">
          <div className="inner-page apply-page">
            <div>
              <FormErrors formErrors={this.state.formErrors} />
            </div>
            <form>
              <div className="form">
                <div className="box-info">
                  <div className="desc-info d-flex align-items-center f-wrap">
                    <div className="desc-info__item">
                      <input className={`input input__first-name ${this.errorClass(this.state.formErrors.firstName)}`} required name="firstName" placeholder="Имя:"
                        onChange={(event) => this.handleInput(event)} value={firstName}
                      />
                    </div>
                    <div className="desc-info__item">
                      {/* <input className="input input__first-name" type="tel" name="phone" placeholder="+7 985 000 0000"
                        onChange={(event) => this.handleInput(event)} value={phone}
                      /> */}
                      <InputMask maskChar="0" 
                        className="input input__first-name" type="tel" name="phone" placeholder="+7 985 000 0000"
                        onChange={(event) => this.handleInput(event)} value={phone}
                        mask="+9 999 999 9999"
                      />
                    </div>
                    <div className="desc-info__item">
                      <input className={`input input__first-name ${this.errorClass(this.state.formErrors.email)}`} type="email" required name="email" placeholder="E-mail:"
                        onChange={(event) => this.handleInput(event)} value={email}
                      />
                    </div>
                  </div>
                </div>
                <div className="box-info">
                  <textarea className={`input input__first-name contacts_message ${this.errorClass(this.state.formErrors.message)}`} name="message" required placeholder="Ваше сообщение"
                    rows="5" onChange={(event) => this.handleInput(event)} value={message}></textarea>
                </div>
              </div>
              <div className="btn-wrap text-center">
                <div className="box-info">
                  <button type="submit" disabled={!this.state.formValid} className="btn btn__main" onClick={this.handleSend}>Отправить</button>
                </div>
                { this.state.messageSent ? (
                  <div className="box-info message-sent">
                    <p>Ваше обращение направлено в службу технической поддержки. С Вами мы становимся лучше. Спасибо!</p>
                  </div>
                ) : null }
              </div>
            </form>
          </div>
        </main>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state
  }
}

export default connect(mapStateToProps, { contactFormSend })(Contacts);

import React, { Component } from 'react';
import DatePicker from 'react-date-picker';
import Select from 'react-select';
import SelectSaved from './../../containers/Passengers/SelectSaved';
import nationalityOptions from './_nationalityOptions';
import documentOptions from './_documentOptions';
import genderOptions from './_genderOptions';
import InputMask from 'react-input-mask';
import { connect } from 'react-redux';

class Form extends Component
{
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  componentDidUpdate(prevProps) {
    if ( prevProps.passenger.error !== this.props.passenger.error )
      this.setState({ error: this.props.passenger.error });
  }

  handleInput = e => {
    this.props.fieldUpdate(e.target.name, e.target.value);
  }

  handleInputDate = birthdate => {
    this.props.fieldUpdate('birthdate', birthdate);
  }

  handleSelect = key => option => {
    this.props.fieldUpdate(key, option.value);
  }

  handleCheckbox = key => e => {
    this.props.fieldUpdate(key, e.target.checked);
  }

  handleSelectSaved = el => {
    Object.keys(el).map(key => this.props.fieldUpdate(key, el[key]));

    if ( el.email === null ) {
      this.props.fieldUpdate('email', this.props.data.email);
    }

    if ( el.phone === null ) {
      this.props.fieldUpdate('phone', this.props.data.phone);
    }
  }

  renderDocumentNumber = documentType => {
    const { documentNumber } = this.props.passenger;

    if ( documentType === 'RussianPassport' || documentType === undefined ) {
      return (
        <InputMask maskChar="0" className="input input__first-name" type="text" name="documentNumber" placeholder="№ документа:"
          onChange={this.handleInput} value={documentNumber || ''}
          mask="9999 999999"
          maskChar={null}
        />
      )
    }

    if ( documentType === 'UssrPassport' ) {
      return (
        <input className="input input__first-name" type="text" name="documentNumber" placeholder="№ документа:"
          onChange={this.handleInput} value={documentNumber || ''}
        />
      )
    }

    if ( documentType === 'BirthCertificate' ) {
      return (
        <input className="input input__first-name" type="text" name="documentNumber" placeholder="№ документа:"
          onChange={this.handleInput} value={documentNumber || ''}
        />
      )
    }

    if ( documentType === 'ForeignPassport' ) {
      return (
        <input className="input input__first-name" type="text" name="documentNumber" placeholder="№ документа:"
          onChange={this.handleInput} value={documentNumber || ''}
        />
      )
    }

    if ( documentType === 'RussianForeignPassport' ) {
      return (
        <InputMask maskChar="0" className="input input__first-name" type="text" name="documentNumber" placeholder="№ документа:"
          onChange={this.handleInput} value={documentNumber || ''}
          mask="999999999"
          maskChar={null}
        />
      )
    }

    return (
      <input className="input input__first-name" type="text" name="documentNumber" placeholder="№ документа:"
        onChange={this.handleInput} value={documentNumber || ''}
      />
    )
  }


  render() {
    const { title = null, passenger = {}, passengers = [], saveOption = false, selectSavedOption = false, handleRemove = null, error = null } = this.props;
    const { email, phone, lastName, firstName, middleName, documentType, nationality, gender, documentNumber, birthdate, rzhdBonus, universalRzhdCard, businessTravel } = passenger;

    return (
      <div className="inner-page apply-page">
        <div className="form train-form">
          {title ? ( <div className="title">{title}</div>) : null}
          {handleRemove === null ? null : (
            <div className="deletePassenger" onClick={this.props.handleRemove}>
              <span>&times;</span>
            </div>
          )}
          <div className="box-info">
            <div className="desc-info d-flex align-items-center f-wrap">
              <div className="desc-info__item">
                <span className="desc-info__item-required">*</span>
                <input className="input input__last-name" type="text" name="lastName" placeholder="Фамилия:"
                  onChange={this.handleInput} value={lastName || ''}
                />
              </div>
              <div className="desc-info__item">
                <span className="desc-info__item-required">*</span>
                <input className="input input__first-name" type="text" name="firstName" placeholder="Имя:"
                  onChange={this.handleInput} value={firstName || ''}
                />
              </div>
              <div className="desc-info__item">
                <span className="desc-info__item-required">*</span>
                <input className="input input__first-name" type="text" name="middleName" placeholder="Отчество:"
                  onChange={this.handleInput} value={middleName || ''}
                />
              </div>
              <div className="desc-info__item">
                <span className="desc-info__item-required desc-info__item-required--select">*</span>
                <Select options={documentOptions} placeholder="Вид документа"
                  onChange={this.handleSelect('documentType')} value={documentOptions.find(el => el.value === documentType)}
                />
              </div>
              <div className="desc-info__item">
                <span className="desc-info__item-required desc-info__item-required--select">*</span>
                <Select options={nationalityOptions} placeholder="Гражданство"
                  value={nationalityOptions.find(el => el.value === nationality)}
                  //  || ( nationality === undefined && el.value === 'RU' )
                  onChange={this.handleSelect('nationality')}
                />
              </div>
              <div className="desc-info__item">
                <span className="desc-info__item-required desc-info__item-required--select">*</span>
                <Select options={genderOptions} placeholder="Пол"
                  onChange={this.handleSelect('gender')} value={genderOptions.find(el => el.value === gender)}
                />
              </div>
              <div className="desc-info__item">
                <span className="desc-info__item-required">*</span>

                { 
                  this.renderDocumentNumber(documentType)
                }

              </div>
              <div className="desc-info__item desc-info__item--birthdate">
                
                <span className="title">Дата рождения: <span className="required-item">*</span></span>
                <DatePicker 
                  className="input input__first-name input__birthdate" name="birthdate"
                  onChange={birthdate => this.handleInputDate(birthdate)}
                  value={birthdate || ''}
                  minDate={new Date(1900, 0, 0)}
                  maxDate={new Date()}
                  yearPlaceholder="гггг"
                  monthPlaceholder="мм"
                  dayPlaceholder="дд"
                  disableCalendar={true}
                  format="d-M-y"
                  showLeadingZeros={false}
                />
              </div>
            </div>

            <div className="box-info user-data mt-25">
              <div className="desc-info d-flex align-items-center">
                <div className="title phone">Телефон: <span className="required-item">*</span></div>

                  <InputMask maskChar="0" className="input input__phone" type="tel" name="phone" 
                    placeholder="+7 985 000 0000"
                    mask="+9 999 999 9999"
                    onChange={this.handleInput}
                    value={phone || ''}
                    maskChar={null}
                  />

                
                <div className="title email">E-mail: <span className="required-item">*</span></div>

                  <input className="input input__email" type="email" name="email" placeholder="E-mail:"
                    onChange={this.handleInput} value={email || ''}
                  />
               
              </div>

              {saveOption === false ? null : (
                <div className="save-data">
                  <label className="checkbox">
                    <span className="icon-item">
                      <i className="fa fa-check" aria-hidden="true"></i>
                    </span>
                    <input type="checkbox" onChange={this.handleCheckbox('isSaved')} />
                    <div className="checkbox__text">
                      Сохранить данные пассажира в моём профиле
                    </div>
                  </label>
                </div>
              )}

              {selectSavedOption === false ? null : (
                <div className="mt-25">
                  <SelectSaved onSelect={this.handleSelectSaved} />
                </div>
              )}
            </div>
          </div>

          <div className="box-info mt-25">
            <div className="title">Дорожная карта:</div>
            <div className="desc-info d-flex align-items-center f-wrap">
              <div className="desc-info__item">
                <InputMask maskChar="x" className="input input__last-name" type="text" name="rzhdBonus" placeholder="Карта «РЖД Бонус»" mask="9999999999999" onChange={this.handleInput} value={rzhdBonus || ''} />
              </div>
              <div className="desc-info__item">
                <InputMask maskChar="x" className="input input__first-name" type="text" name="universalRzhdCard" placeholder="Универсальная карта РЖД" mask="9999999999999" onChange={this.handleInput} value={universalRzhdCard || ''} />
              </div>
              <div className="desc-info__item">
                <InputMask maskChar="x" className="input input__first-name" type="text" name="businessTravel" placeholder="Деловой проездной" mask="9999999999999" onChange={this.handleInput} value={businessTravel || ''} />
              </div>   
            </div>
          </div>

          {( error !== null || this.state.error !== null ) ? (<p className="error-block">{error}{this.state.error}</p>) : null}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    data: state.user.data
  }
}


export default connect(mapStateToProps)(Form);
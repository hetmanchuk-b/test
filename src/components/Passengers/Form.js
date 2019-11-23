import React, { Component } from 'react';
import DatePicker from 'react-date-picker';
import Select from 'react-select';
import SelectSaved from './../../containers/Passengers/SelectSaved';
import nationalityOptions from './_nationalityOptions';
import documentOptions from './_documentOptions';
import genderOptions from './_genderOptions';
import InputMask from 'react-input-mask';

class Form extends Component
{
  constructor(props) {
    super(props);
    this.state = {}
  }


  handleInput = e => {
    this.props.fieldUpdate(e.target.name, e.target.value);
  }

  handleInputDate = e => {
    let str = e.target.value;
    // let rv = '';

    // for ( let i = 0; i < str.length; i++ ) {

    //   if ( ( i === 2 || i === 5 ) && str[i] !== '.' ) rv += '.';

    //   rv += str[i];
    // }

    this.props.fieldUpdate('birthdate', str);
  }

  handleSelect = key => option => {
    this.props.fieldUpdate(key, option.value);
  }

  handleCheckbox = key => e => {
    this.props.fieldUpdate(key, e.target.checked);
  }

  handleSelectSaved = el => {
    Object.keys(el).map(key => this.props.fieldUpdate(key, el[key]));
  }

  render() {
    const { title = null, passenger = {}, passengers = [], saveOption = false, selectSavedOption = false, handleRemove = null, error = null } = this.props;
    const { email, phone, lastName, firstName, middleName, documentType, nationality, gender, documentNumber, birthdate, rzhdBonus, universalRzhdCard, businessTravel } = passenger;

    return (
      <div className="inner-page apply-page">
        <div className="form">
          {title ? ( <div className="title">{title}</div>) : null}
          {handleRemove === null ? null : (
            <div className="deletePassenger" onClick={this.props.handleRemove}>
              <span>&times;</span>
            </div>
          )}
          <div className="box-info">
            <div className="desc-info d-flex align-items-center f-wrap">
              <div className="desc-info__item">
                <input className="input input__last-name" type="text" name="lastName" placeholder="Фамилия:"
                  onChange={this.handleInput} value={lastName || ''}
                />
              </div>
              <div className="desc-info__item">
                <input className="input input__first-name" type="text" name="firstName" placeholder="Имя:"
                  onChange={this.handleInput} value={firstName || ''}
                />
              </div>
              <div className="desc-info__item">
                <input className="input input__first-name" type="text" name="middleName" placeholder="Отчество:"
                  onChange={this.handleInput} value={middleName || ''}
                />
              </div>
              <div className="desc-info__item">
                <Select options={documentOptions} placeholder="Вид документа"
                  onChange={this.handleSelect('documentType')} value={documentOptions.find(el => el.value === documentType)}
                />
              </div>
              <div className="desc-info__item">
                <Select options={nationalityOptions} placeholder="Гражданство"
                  value={nationalityOptions.find(el => el.value === nationality || ( nationality === undefined && el.value === 'RU' ))}
                  onChange={this.handleSelect('nationality')}
                />
              </div>
              <div className="desc-info__item">
                <Select options={genderOptions} placeholder="Пол"
                  onChange={this.handleSelect('gender')} value={genderOptions.find(el => el.value === gender)}
                />
              </div> 
              <div className="desc-info__item">
                <input className="input input__first-name" type="text" name="documentNumber" placeholder="№ документа:"
                  onChange={this.handleInput} value={documentNumber || ''}
                />
              </div>
              <div className="desc-info__item">
                {/* <input className="input input__first-name" type="text" name="birthdate" placeholder="Дата рождения: 19.11.1991"
                  onChange={this.handleInputDate} value={birthdate || ''}
                /> */}
                <InputMask className="input input__first-name" type="text" name="birthdate" placeholder="Дата рождения: 19.11.1991" mask="99.99.9999" onChange={this.handleInputDate} value={birthdate || ''} />
              </div>
            </div>

            <div className="box-info user-data mt-25">
              <div className="desc-info d-flex align-items-center">
                <div className="title phone">Телефон:</div>
                {/* <input className="input input__phone" type="tel" name="phone" placeholder="+7 985 000 0000"
                  onChange={this.handleInput} value={phone || ''}
                /> */}
                <InputMask className="input input__phone" type="tel" name="phone" placeholder="+7 985 000 0000" mask="+9 999 999 9999" onChange={this.handleInput} value={phone || ''} />
                
                <div className="title email">E-mail:</div>
                <input className="input input__email" type="email" name="email" placeholder="e-mail"
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
                {/* <input className="input input__last-name" type="text" name="rzhdBonus" placeholder="Карта «РЖД Бонус»"
                  onChange={this.handleInput} value={rzhdBonus || ''}
                /> */}
                <InputMask className="input input__last-name" type="text" name="rzhdBonus" placeholder="Карта «РЖД Бонус»" mask="9999999999999" onChange={this.handleInput} value={rzhdBonus || ''} />
              </div>
              <div className="desc-info__item">
                {/* <input className="input input__first-name" type="text" name="universalRzhdCard" placeholder="Универсальная карта РЖД"
                  onChange={this.handleInput} value={universalRzhdCard || ''}
                /> */}
                <InputMask className="input input__first-name" type="text" name="universalRzhdCard" placeholder="Универсальная карта РЖД" mask="9999999999999" onChange={this.handleInput} value={universalRzhdCard || ''} />
              </div>
              <div className="desc-info__item">
                {/* <input className="input input__first-name" type="text" name="businessTravel" placeholder="Деловой проездной"
                  onChange={this.handleInput} value={businessTravel || ''}
                /> */}
                <InputMask className="input input__first-name" type="text" name="businessTravel" placeholder="Деловой проездной" mask="9999999999999" onChange={this.handleInput} value={businessTravel || ''} />
              </div>   
            </div>
          </div>

          {error !== null ? (<p className="error-block">{error}</p>) : null}
        </div>
      </div>
    );
  }
}

export default Form;

import React, { PureComponent } from 'react';
import Edit from './Edit';
import nationalityOptions from '../../Passengers/_nationalityOptions';

class Passenger extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      info: false
    };
  }

  toggleEdit = () => {
    this.setState({ edit: ! this.state.edit });
  }

  toggleInfo = () => {
    this.setState({ info: ! this.state.info })
  }

  renderBithdate = date => {
    let arr = date.split('-');
    return arr[2] + '.' + arr[1] + '.' + arr[0];
  }  

  renderDocumentType = type => {
    const types = [
      { value: 'RussianPassport', label: 'Общегражданский паспорт' },
      { value: 'RussianForeignPassport', label: 'Общегражданский заграничный паспорт' },
      { value: 'ForeignPassport', label: 'Национальный паспорт' },
      { value: 'BirthCertificate', label: 'Свидетельство о рождении' },
      { value: 'MilitaryCard', label: 'Военный билет военнослужащего срочной службы' },
      { value: 'MilitaryOfficerCard', label: 'Удостоверение личности для военнослужащих' },
      { value: 'ReturnToCisCertificate', label: 'Свидетельство на возвращение' },
      { value: 'DiplomaticPassport', label: 'Дипломатический паспорт' },
      { value: 'ServicePassport', label: 'Служебный паспорт' },
      { value: 'SailorPassport', label: 'Паспорт моряка' },
      { value: 'StatelessPersonIdentityCard', label: 'Удостоверение личности лица без гражданства' },
      { value: 'ResidencePermit', label: 'Вид на жительство' },
      { value: 'RussianTemporaryIdentityCard', label: 'Временное удостоверение личности' },
      { value: 'UssrPassport', label: 'Паспорт СССР' },
      { value: 'MedicalBirthCertificate', label: 'Медицинское свидетельство о рождении (для детей не старше 1 мес.)' },
      { value: 'LostPassportCertificate', label: 'Справка об утере паспорта' },
      { value: 'PrisonReleaseCertificate', label: 'Справка об освобождении из мест лишения свободы' }
    ];
    const obj = types.find(item => {
      return item.value === type;
    });
    return obj.label;
  }

  renderNationality = nationality => {
    const obj = nationalityOptions.find(item => {
      return item.value === nationality;
    });

    return obj.label;
  }

  render() {
    const { id, lastName, firstName, middleName, email, phone, documentType, documentNumber, nationality, birthdate, gender, rzhdBonus, universalRzhdCard, businessTravel } = this.props.data;


    return (
      <div className="user user-box user-box__passengers">
        <div className="user-box__wrap d-flex j-content-between align-items-center">
          <div className="user-box__item">
            <div className="text">
              Пассажир
            </div>
            <div className="user__name" onClick={this.toggleInfo} title="Подробнее о пассажире">
              {lastName}, {firstName} {middleName}
            </div>
          </div>
          <div className="icon-box d-flex align-items-center">
            <div className="icon-item icon-item__edit" onClick={this.toggleEdit}></div>
            <div className="icon-item icon-item__delete" onClick={() => this.props.remove(id)}></div>
          </div>
        </div>
        { this.state.info ? (
          <div className="user-box__user-info">
            <div className="user-box__info-item">
              <p>
                <b>Имя:</b>
                <strong>{firstName}</strong>
              </p>
            </div>
            <div className="user-box__info-item">
              <p>
                <b>Отчество:</b>
                <strong>{middleName}</strong>
              </p>
            </div>
            <div className="user-box__info-item">
              <p>
                <b>Фамилия:</b>
                <strong>{lastName}</strong>
              </p>
            </div>
            <div className="user-box__info-item">
              <p>
                <b>Почта:</b>
                <strong>{email}</strong>
              </p>
            </div>
            <div className="user-box__info-item">
              <p>
                <b>Телефон:</b>
                <strong>{phone}</strong>
              </p>
            </div>
            <div className="user-box__info-item">
              <p>
                <b>Тип документа:</b>
                <strong>
                  { this.renderDocumentType(documentType) }
                </strong>
              </p>
            </div>
            <div className="user-box__info-item">
              <p>
                <b>Номер документа:</b>
                <strong>{documentNumber}</strong>
              </p>
            </div>
            <div className="user-box__info-item">
              <p>
                <b>Гражданство:</b>
                <strong>
                  { this.renderNationality(nationality) }
                </strong>
              </p>
            </div>
            <div className="user-box__info-item">
              <p>
                <b>Дата рождения:</b>
                <strong>{this.renderBithdate(birthdate)}</strong>
              </p>
            </div>
            <div className="user-box__info-item">
              <p>
                <b>Пол:</b>
                <strong>{gender === 'Male' ? 'Мужской' : 'Женский'}</strong>
              </p>
            </div>
            <div className="user-box__info-item">
              <p>
                <b>Карта "РЖД Бонус":</b>
                <strong>{rzhdBonus}</strong>
              </p>
            </div>
            <div className="user-box__info-item">
              <p>
                <b>Универстальная карта РЖД:</b>
                <strong>{universalRzhdCard}</strong>
              </p>
            </div>
            <div className="user-box__info-item">
              <p>
                <b>Деловой проездной:</b>
                <strong>{businessTravel}</strong>
              </p>
            </div>
          </div>
          ) : null }

        <Edit data={this.props.data} handleCancel={this.toggleEdit} handleUpdate={this.props.update} visible={this.state.edit} />
      </div>
    );
  }
}

export default Passenger;
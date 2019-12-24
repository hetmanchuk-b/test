import React, { PureComponent } from 'react';
import Edit from './Edit';

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
                <strong>{documentType}</strong>
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
                <strong>{nationality}</strong>
              </p>
            </div>
            <div className="user-box__info-item">
              <p>
                <b>Дата рождения:</b>
                <strong>{birthdate}</strong>
              </p>
            </div>
            <div className="user-box__info-item">
              <p>
                <b>Пол:</b>
                <strong>{gender}</strong>
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
    // id: 408
// email: "testst@test.com"
// phone: "+7 777 777 7777"
// firstName: "Ye"
// lastName: "Ye"
// middleName: "Yeich"
// documentType: "RussianPassport"
// documentNumber: "9999999999"
// nationality: "RU"
// birthdate: "1991-11-13"
// gender: "Male"
// rzhdBonus: "6666666666666"
// universalRzhdCard: "6666666666666"
// businessTravel: "6666666666666"
import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Bag from './../../containers/Bag/Nav';
import Auth from './../../containers/Auth/Nav';
import DatePicker from 'react-date-picker';
import Select from 'react-select';

class Navigation extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      menu: false
    }
    this.fromRef = React.createRef();
    this.toRef = React.createRef();
  }
  handleSet = (key, value) => {
    const { destinationFrom, destinationTo, dateFrom, dateTo } = this.props.booking;
    let params = {};

    this.props.paramSet(key, value);

    if ( key === 'dateTo' ) {
      this.props.paramSet('isSearchBack', true);
      params = {
        destinationFrom: destinationTo,
        destinationTo: destinationFrom,
        date: value
      };
    } else {
      this.props.paramSet('isSearchBack', false);
      params = {
        destinationFrom: ( key === 'destinationFrom' ) ? value : destinationFrom,
        destinationTo: ( key === 'destinationTo' ) ? value : destinationTo,
        date: ( key === 'dateFrom' ) ? value : dateFrom
      };
    }

    this.props.getList(params);
  }

  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu
    });
  }
  handleDestinationSwap = event => {
    event.preventDefault();
    let fromValue = this.fromRef.current.props.value;
    let toValue = this.toRef.current.props.value;
    if (toValue !== undefined && fromValue !== undefined) {
      this.handleSet('destinationFrom', toValue.value);
      this.handleSet('destinationTo', fromValue.value);
    }
  }

  render() {
    const cities = this.props.cities;
    const { destinationFrom, destinationTo, dateFrom, dateTo } = this.props.booking;
    const dateNow = new Date();
    const dateNextYear = new Date(dateNow.getFullYear() + 1, dateNow.getMonth(), dateNow.getDate());

    const menuCls = ['header__nav-menu', 'overflow-vsbl'];
    const burgerCls = ['nav-burger'];
    if (this.state.menu) {
      menuCls.push('open-mobile');
    }
    if (this.state.menu) {
      burgerCls.push('open');
    }

    return (
      <header className="header header__search-result">
        <div className="container">
          <div className="row header__top">
            <div className="col-lg-2 col-6">
              <Link to="/" className="logo"> 
                <img src="img/logo.png" alt="" className="img-fluid" />
              </Link>
            </div>
            <div className="col-lg-10 col-6">
              <nav className="header__nav">
                 <div className={burgerCls.join(' ')} onClick={this.toggleMenuHandler}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div className={menuCls.join(' ')}>
                  <div className="header__nav-list overflow-vsbl">
                    <div className="row header__search">
                      <div className="col-lg-3 col-sm-6 col-parent col-item">
                        <Select
                          className="header__select"
                          classNamePrefix="header__select"
                          options={cities} placeholder="Откуда"
                          onChange={option => this.handleSet('destinationFrom', option.value)}
                          value={cities.find(el => el.value === destinationFrom)}
                          ref={this.fromRef}
                        />
                        <div className="swap"><a href="#" onClick={event => this.handleDestinationSwap(event)} className="swap-btn"><img src="img/icons/search-arrows.png" alt="" /></a></div>
                      </div>
                      <div className="col-lg-3 col-sm-6 col-last col-item">
                        <Select
                          className="header__select"
                          classNamePrefix="header__select"
                          options={cities} placeholder="Куда"
                          onChange={option => this.handleSet('destinationTo', option.value)}
                          value={cities.find(el => el.value === destinationTo)}
                          ref={this.toRef}
                        />
                      </div>
                      <div className="col-lg-3 col-sm-6 col-item">
                        <div className="title-info">Дата</div>
                        <DatePicker className={dateFrom ? "small-datepicker show" : "small-datepicker"} onChange={date => this.handleSet('dateFrom', date)} value={dateFrom} minDate={dateNow} maxDate={dateNextYear} />
                        {/* <i className="far fa-calendar-alt"></i> */}
                      </div>
                      <div className="col-lg-3 col-sm-6 col-last col-item">
                        <div className="title-info">Обратно</div>
                        <DatePicker className={dateTo ? "small-datepicker show" : "small-datepicker"} onChange={date => this.handleSet('dateTo', date)} value={dateTo} minDate={dateFrom ? dateFrom : dateNow} maxDate={dateNextYear} />
                        {/* <i className="far fa-calendar-alt"></i> */}
                      </div>
                    </div>
                    <Bag />
                    <Auth />
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
        {/* <div className="lang d-flex">
          <a href="#" className="lang__item">En</a>
          <a href="#" className="lang__item">Ru</a>
        </div> */}
      </header>
    );
  }
}

export default Navigation;

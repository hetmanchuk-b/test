import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
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
  }

  handleSet = (key, value) => {
    this.props.paramSet(key, value);
  }

  handleSearch = () => {
    const { destinationFrom, destinationTo, dateFrom } = this.props.booking;

    this.props.paramSet('isSearchBack', false);
    this.props.getList({ destinationFrom, destinationTo, date: dateFrom });
    this.props.history.push('/search');
  }

  toggleMenuHandler = () => {
    this.setState({
      menu: !this.state.menu
    });
  }

  render() {
    const cities = this.props.cities;
    const { destinationFrom, destinationTo, dateFrom, dateTo } = this.props.booking;
    const url = new URL(window.location.href);
    const dateNow = new Date();
    const dateNextYear = new Date(dateNow.getFullYear() + 1, dateNow.getMonth(), dateNow.getDate());

    // Mobile menu
    const menuCls = ['header__nav-menu'];
    const burgerCls = ['nav-burger'];
    if (this.state.menu) {
      menuCls.push('open-mobile');
    }
    if (this.state.menu) {
      burgerCls.push('open');
    }

    return (
      <header className="header">
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
                  <div className="header__nav-list">
                    <Link className={(url.pathname === '/tasks' ? 'active' : '') +' nav-item nav-link'} to="/tasks">Лист ожидания</Link>
                    <Link className={(url.pathname === '/alarm' ? 'active' : '') +' nav-item nav-link'} to="/alarm">Будильник</Link>
                    <Link className={(url.pathname === '/package' ? 'active' : '') +' nav-item nav-link'} to="/package">Пакетное оформление</Link>
                    <Link className={(url.pathname === '/promotions' ? 'active' : '') +' nav-item nav-link'} to="/promotions">Акции</Link>
                    <Link className={(url.pathname === '/contacts' ? 'active' : '') +' nav-item nav-link'} to="/contacts">Обратная связь</Link>
                    <Bag />
                    <Auth />
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div className="row header__search">
            <div className="col-lg-3 col-sm-6 col-parent">
              <Select
                className="header__select"
                classNamePrefix="header__select"
                options={cities} placeholder="Откуда"
                onChange={option => this.handleSet('destinationFrom', option.value)}
                value={cities.find(el => el.value === destinationFrom)}
              />
              <div className="towns ">
                <a href="#" onClick={() => this.handleSet('destinationFrom', '2000000')}>Москва</a>
                <a href="#" onClick={() => this.handleSet('destinationFrom', '2004600')}>Тверь</a>
                <a href="#" onClick={() => this.handleSet('destinationFrom', '2004000')}>Санкт-Петербург</a>
              </div>
              <div className="swap"><a href="#" className="swap-btn"><img src="img/icons/search-arrows.png" alt="" /></a></div>
            </div>

            <div className="col-lg-3 col-sm-6 col-last">
              <Select options={cities} placeholder="Куда"
                className="header__select"
                classNamePrefix="header__select"
                onChange={option => this.handleSet('destinationTo', option.value)}
                value={cities.find(el => el.value === destinationTo)}
              />
              <div className="towns">
                <a href="#" onClick={() => this.handleSet('destinationTo', '2000000')}>Москва</a>
                <a href="#" onClick={() => this.handleSet('destinationTo', '2004600')}>Тверь</a>
                <a href="#" onClick={() => this.handleSet('destinationTo', '2004000')}>Санкт-Петербург</a>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6">
              <div className="header__datepicker-wrapper">
                <DatePicker className={dateFrom ? "header__datepicker opened" : "header__datepicker"} onChange={date => this.handleSet('dateFrom', date)} value={dateFrom} minDate={dateNow} maxDate={dateNextYear} />
              </div>
            </div>
            <div className="col-lg-2 col-sm-6 col-last">
              <div className="header__datepicker-wrapper">
                <DatePicker className={dateTo ? "header__datepicker opened" : "header__datepicker"} onChange={date => this.handleSet('dateTo', date)} value={dateTo} minDate={dateFrom ? dateFrom : dateNow} maxDate={dateNextYear} />
              </div>
            </div>
            <div className="col">
              <button className="btn btn__main" type="button" onClick={this.handleSearch}>Найти билеты</button>
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

export default withRouter(Navigation);

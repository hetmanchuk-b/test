import React from 'react';
import { Link } from 'react-router-dom';
import Auth from './../../containers/Auth/Nav';
import Bag from './../../containers/Bag/Nav';

export default props => {

  const url = new URL(window.location.href);

  function handleMenu() {
    document.querySelector('.nav-burger').classList.toggle('open');
    document.querySelector('.header__nav-menu').classList.toggle('open-mobile');
  }

  return (
    <header className="header header__cart header__cabinet">
      <div className="container">
        <div className="row header__top">
          <div className="col-lg-2 col-6">
            <Link to="/" className="logo"> 
              <img src="/img/logo.png" alt="" className="img-fluid" />
            </Link>
          </div>
          <div className="col-lg-10 col-6">
            <nav className="header__nav">
               <div className="nav-burger" onClick={() => handleMenu()}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="header__nav-menu">
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
            <div className="title-cart">
              {props.title}
            </div>
          </div>
        </div>
      </div>
      <div className="lang d-flex">
        {/*
        <a href="#" className="lang__item">En</a>
        <a href="#" className="lang__item">Ru</a>
        */}
      </div>
    </header>
  );
}

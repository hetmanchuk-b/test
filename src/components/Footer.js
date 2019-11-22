import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
  <footer className="footer">
    <div className="container">
      <div className="footer__content"> 
        <div className="row align-items-center">
          <div className="col-md-4 col-first">
            <div className="footer__text">
              Вопросы, жалобы, пожелания!
            </div>
            <div className="footer__link footer__link-first">
              <Link to="/contacts">Напишите нам</Link>
            </div>
          </div>
          <div className="col-md-4">
            <a href="#" className="footer__logo"> 
              <img src="img/logo.png" alt="" className="img-fluid" />
            </a>
          </div>
          <div className="col-md-4 col-last">
            <div className="footer__text">
              Телефон горячей линии:
            </div>
            <div className="footer__link footer__link-phone">
              <a href="tel:8 800 111 22 33">8 800 111 22 33</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container-fluid">
      <div className="row copyright align-items-center">
        <div className="col-12">
          <div className="text">&#9400; Copyright</div>
        </div>
      </div>
    </div>
  </footer>
);

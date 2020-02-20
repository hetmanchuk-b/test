import React from 'react';
import Content from './components/Content';
import PasswordRestore from './containers/Auth/PasswordRestoreModal';
import PasswordRestoreSuccess from './containers/Auth/PasswordRestoreSuccessModal';
import SignUpSuccess from './containers/Auth/SignUpSuccessModal';
import SignIn from './containers/Auth/SignInModal';
import SignUp from './containers/Auth/SignUpModal';
import SearchErrorDate from './containers/Auth/SearchErrorDate';
import SearchErrorTown from './containers/Auth/SearchErrorTown';
import Footer from './components/Footer';
import './assets/synced/css/vendor/bootstrap.min.css';
import './assets/synced/css/style.css';
import './assets/custom-styles.css';
import 'loaders.css/src/animations/line-scale-pulse-out.scss';

export default () => (
  <div className="wrapper">
    <div className="content">
      <Content />
    </div>
    <Footer />
    <SignIn />
    <SignUp />
    <PasswordRestore />
    <PasswordRestoreSuccess />
    <SignUpSuccess />
    <SearchErrorTown />
    <SearchErrorDate />
  </div>
);

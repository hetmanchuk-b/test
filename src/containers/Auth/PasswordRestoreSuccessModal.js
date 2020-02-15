import React from 'react';
import { connect } from 'react-redux';
import { modalClose } from './../../actions/Auth';
import Modal from './../../components/Auth/PasswordRestoreSuccessModal';

const mapStateToProps = state => state.auth;

export default connect(mapStateToProps, { modalClose })(props => props.modal === 'passwordRestoreSuccess' ? <Modal {...props} /> : null);
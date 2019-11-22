import React from 'react';
import { connect } from 'react-redux';
import { passwordRestore, modalClose } from './../../actions/Auth';
import Modal from './../../components/Auth/PasswordRestoreModal';

const mapStateToProps = state => state.auth;

export default connect(mapStateToProps, { passwordRestore, modalClose })(props => props.modal === 'passwordRestore' ? <Modal {...props} /> : null);

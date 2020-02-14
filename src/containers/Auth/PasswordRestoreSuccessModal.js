import React from 'react';
import { connect } from 'react-redux';
import { modalClose, modalOpen } from './../../actions/Auth';
import Modal from './../../components/Auth/PasswordRestoreSuccessModal';

const mapStateToProps = state => state.auth;

export default connect(mapStateToProps, { modalClose, modalOpen })(props => props.modal === 'passwordRestoreSuccess' ? <Modal {...props} /> : null);
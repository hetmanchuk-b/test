import React from 'react';
import { connect } from 'react-redux';
import { modalClose } from './../../actions/Auth';
import Modal from './../../components/Auth/SignUpSuccessModal';

const mapStateToProps = state => state.auth;

export default connect(mapStateToProps, { modalClose })(props => props.modal === 'signUpSuccess' ? <Modal {...props} /> : null);
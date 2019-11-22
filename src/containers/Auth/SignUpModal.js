import React from 'react';
import { connect } from 'react-redux';
import { signUp, modalOpen, modalClose } from './../../actions/Auth';
import Modal from './../../components/Auth/SignUpModal';

const mapStateToProps = state => state.auth;

export default connect(mapStateToProps, { signUp, modalOpen, modalClose })(props => props.modal === 'signUp' ? <Modal {...props} /> : null);

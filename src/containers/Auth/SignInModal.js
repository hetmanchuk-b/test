import React from 'react';
import { connect } from 'react-redux';
import { signIn, modalOpen, modalClose } from './../../actions/Auth';
import Modal from './../../components/Auth/SignInModal';

const mapStateToProps = state => state.auth;

export default connect(mapStateToProps, { signIn, modalOpen, modalClose })(props => props.modal === 'signIn' ? <Modal {...props} /> : null);

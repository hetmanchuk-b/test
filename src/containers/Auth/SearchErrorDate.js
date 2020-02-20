import React from 'react';
import {connect} from 'react-redux';
import {modalOpen, modalClose} from './../../actions/Auth';
import Modal from './../../components/Auth/SearchErrorDate';

const mapStateToProps = state => state.auth;
export default connect(mapStateToProps, {modalOpen, modalClose})
(props => props.modal === 'SearchErrorDate' ?
    <Modal {...props} /> : null);


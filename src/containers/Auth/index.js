import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const mapStateToProps = state => state.auth;

export default connect(mapStateToProps)(props => props.jwt === null ? <Redirect to="/" /> : props.children);

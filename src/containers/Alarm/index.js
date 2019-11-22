import { connect } from 'react-redux';
import { create } from './../../actions/Tasks';
import { authorizePayment } from './../../actions/User';
import { modalOpen } from './../../actions/Auth';
import Alarm from './../../components/Alarm';

const mapStateToProps = state => ({
  cities: state.cities,
  jwt: state.auth.jwt
});

export default connect(mapStateToProps, { create, authorizePayment, modalOpen })(Alarm);

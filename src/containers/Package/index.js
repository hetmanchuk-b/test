import { connect } from 'react-redux';
import { create } from './../../actions/Tasks';
import { authorizePayment } from './../../actions/User';
import { modalOpen } from './../../actions/Auth';
import Package from './../../components/Package';

const mapStateToProps = state => ({
  user: state.user.data,
  cities: state.cities,
  jwt: state.auth.jwt
});

export default connect(mapStateToProps, { create, authorizePayment, modalOpen })(Package);

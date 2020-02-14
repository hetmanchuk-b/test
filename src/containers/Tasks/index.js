import { connect } from 'react-redux';
import { create } from './../../actions/Tasks';
import { authorizePayment } from './../../actions/User';
import { modalOpen } from './../../actions/Auth';
import Tasks from './../../components/Tasks';

const mapStateToProps = state => ({
  user: state.user.data,
  cities: state.cities,
  jwt: state.auth.jwt,
  booking: state.booking
});

export default connect(mapStateToProps, { create, authorizePayment, modalOpen })(Tasks);

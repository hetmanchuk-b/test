import { connect } from 'react-redux';
import { paramSet } from './../../actions/Booking';
import { getList } from './../../actions/Trains';
import Nav from './../../components/Navigation/Large';

const mapStateToProps = state => ({
  booking: state.booking,
  cities: state.cities,
  auth: state.auth
});

export default connect(mapStateToProps, { paramSet, getList })(Nav);

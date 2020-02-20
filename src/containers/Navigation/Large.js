import { connect } from 'react-redux';
import { paramSet } from './../../actions/Booking';
import { getList } from './../../actions/Trains';
import Nav from './../../components/Navigation/Large';
import {modalOpen} from './../../actions/Auth';


const mapStateToProps = state => ({
  booking: state.booking,
  cities: state.cities,
  auth: state.auth
});

export default connect(mapStateToProps, { modalOpen, paramSet, getList })(Nav);

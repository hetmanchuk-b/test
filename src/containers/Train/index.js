import { connect } from 'react-redux';
import { create } from './../../actions/Bag';
import { selectSeat, fetchList, removeSeat, paramSet, clear, seatDataUpdate } from './../../actions/Booking';
import { getList } from './../../actions/Trains';
import Train from './../../components/Train';

const mapStateToProps = state => ({
  selectedSeats: state.booking.selectedSeats,
  destinationFrom: state.booking.destinationFrom,
  destinationTo: state.booking.destinationTo,
  isSearchBack: state.booking.isSearchBack,
  trainNumber: state.booking.trainNumber,
  dateFrom: state.booking.dateFrom,
  dateTo: state.booking.dateTo,
  train: state.train,
  user: state.user.data
});

export default connect(mapStateToProps, { getList, create, selectSeat, fetchList, removeSeat, paramSet, clear, seatDataUpdate })(Train);

import { connect } from 'react-redux';
import { seatDataUpdate } from './../../actions/Booking';
import Form from './../../components/Passengers/Form';

const mapStateToProps = (state, ownProps) => {
  return {
    passenger: { ...state.booking.selectedSeats[ownProps.car][ownProps.seat] },
    title: `Вагон: ${ownProps.car} Место: ${ownProps.seat}`,
    data: state.user.data
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  fieldUpdate: (key, value) => dispatch(seatDataUpdate(ownProps.car, ownProps.seat, key, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
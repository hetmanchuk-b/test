import { connect } from 'react-redux';
import Wrapper from './../../components/Train/Wrapper';

const mapStateToProps = state => {
  return {
    loader: state.app.loader,
    bagEmpty: ( state.bag.orderId === null ? true : false ),
    trainSelected: ( state.booking.trainNumber !== null ? true : false ),
    dataEmpty: ( Object.keys(state.train).length === 0 ? true : false)
  };
}

export default connect(mapStateToProps)(Wrapper);

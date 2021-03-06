import { connect } from 'react-redux';
import Tickets from './../../components/Cabinet/Tickets';
import { refund } from '../../actions/Bag';

const mapStateToProps = state => {
  let dateNow = new Date();

  return { list: state.user.reservations.filter(el => el.state === 'success' && dateNow < new Date(el.date)) };
}

export default connect(mapStateToProps, { refund })(Tickets);

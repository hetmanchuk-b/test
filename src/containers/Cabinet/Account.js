import { connect } from 'react-redux';
import { update, authorizePayment } from './../../actions/User';
import Account from './../../components/Cabinet/Account';

const mapStateToProps = state => ({
  ...state.user.data,
  ticketsCount: state.user.reservations.length,
  amount: state.user.reservations.reduce((accumulator, el) => {
    return el.state === 'success'
      ? ( accumulator + parseFloat(el.amount) )
      : accumulator;
  }, 0)
});

export default connect(mapStateToProps, { update, authorizePayment })(Account);

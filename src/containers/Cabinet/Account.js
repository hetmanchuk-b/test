import {connect} from 'react-redux';
import {updatePass, update, authorizePayment} from './../../actions/User';
import Account from './../../components/Cabinet/Account';

const mapStateToProps = state => ({
    ...state.user.data,
    message: state.user.message,
    ticketsCount: state.user.reservations.length,
    amount: state.user.reservations.reduce((accumulator, el) => {
        return el.state === 'success'
            ? (accumulator + parseFloat(el.amount))
            : accumulator;
    }, 0)
});

export default connect(mapStateToProps, {updatePass, update, authorizePayment})(Account);

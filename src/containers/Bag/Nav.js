import { connect } from 'react-redux';
import Nav from './../../components/Bag/Nav';

const mapStateToProps = state => ({ ticketsCount: state.bag.ticketsCount });

export default connect(mapStateToProps)(Nav);

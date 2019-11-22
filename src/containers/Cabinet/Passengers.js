import { connect } from 'react-redux';
import { update, remove, create } from './../../actions/Passengers';
import Passengers from './../../components/Cabinet/Passengers';

const mapStateToProps = state => ({ list: state.passengers });

export default connect(mapStateToProps, { update, remove, create })(Passengers);

import { connect } from 'react-redux';
import SelectSaved from './../../components/Passengers/SelectSaved';

const mapStateToProps = state => ({ list: state.passengers });

export default connect(mapStateToProps)(SelectSaved);

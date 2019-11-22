import { connect } from 'react-redux';
import Archive from './../../components/Cabinet/Archive';

const mapStateToProps = state => {
  let dateNow = new Date();

  return { list: state.user.reservations.filter(el => el.state === 'success' && dateNow > new Date(el.date)) };
}

export default connect(mapStateToProps)(Archive);

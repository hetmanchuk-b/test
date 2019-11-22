import { connect } from 'react-redux';
import { remove } from './../../actions/Tasks';
import Tasks from './../../components/Cabinet/Tasks';

const mapStateToProps = state => {
  let dateNow = new Date();

  return { list: state.user.reservations.filter(el => el.type === 'task' && el.state === 'new' ) };
}

export default connect(mapStateToProps, { remove })(Tasks);

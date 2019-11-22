import { connect } from 'react-redux';
import { signOut, modalOpen } from './../../actions/Auth';
import Nav from './../../components/Auth/Nav';

const mapStateToProps = state => ({
  jwt: state.auth.jwt,
  user: state.user.data
});

export default connect(mapStateToProps, { signOut, modalOpen })(Nav);

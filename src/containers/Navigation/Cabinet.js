import { connect } from 'react-redux';
import { signOut } from './../../actions/Auth';
import Nav from './../../components/Navigation/Cabinet';

export default connect(null, { signOut })(Nav);

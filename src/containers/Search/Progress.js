import {connect} from "react-redux";
import Progress from "../../components/Search/Progress";

const mapStateToProps = state => ({
  steps: state.steps,
  booking: state.booking
});

export default connect(mapStateToProps)(Progress);

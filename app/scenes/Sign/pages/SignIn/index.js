import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestLogin } from 'scenes/Sign/redux/actions';
import SignIn from './SignIn';

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      requestLogin,
    },
    dispatch,
  );
const connectProps = connect(null, mapDispatchToProps)(SignIn);
export default connectProps;

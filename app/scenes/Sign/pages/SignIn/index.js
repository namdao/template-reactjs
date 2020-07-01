import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestLogin } from 'scenes/Sign/redux/actions';
import SignIn from './SignIn';

const mapDispatchToProps = (dispatch) => {
  const binActionCreators = bindActionCreators(
    {
      requestLogin,
    },
    dispatch,
  );
  return {
    ...binActionCreators,
  };
};
const connectProps = connect(null, mapDispatchToProps)(SignIn);
export default connectProps;

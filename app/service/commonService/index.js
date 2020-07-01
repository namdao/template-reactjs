import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { checkAutoLogin, updateToken, resetAllApp } from './actions';
import selectors from './selectors';
import CommonService from './CommonService';

const mapStateToProps = (state) => ({
  token: selectors.getToken(state),
});
const mapDispatchToProps = (dispatch) => {
  const binActionCreators = bindActionCreators(
    {
      checkAutoLogin,
      resetAllApp,
      updateToken,
    },
    dispatch,
  );
  return {
    ...binActionCreators,
  };
};

const connectProps = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CommonService);
export default connectProps;

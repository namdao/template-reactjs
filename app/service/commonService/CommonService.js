import React from 'react';
import PropTypes from 'prop-types';
import SetupAxios from 'service/axios';
import { doNothing } from 'utils/utility';

class CommonService extends React.Component {
  constructor(props) {
    super(props);
    SetupAxios.setupOnResponseInterceptors(
      this.onUnauthorized,
      this.onBlacklist,
    );
    SetupAxios.setBaseUrl();
    props.token && SetupAxios.setHeaderToken(props.token, 'initial');
  }

  componentDidMount() {
    const { checkAutoLogin } = this.props;
    checkAutoLogin();
  }

  componentDidUpdate(prevProps) {
    const { token, checkAutoLogin } = this.props;
    const { token: prevToken } = prevProps;
    token !== prevToken && SetupAxios.setHeaderToken(token, 'updated');
    token === '' && checkAutoLogin();
  }

  /** update axios header token when received new one */
  onReceivedToken = (newToken) => {
    const { updateToken, token } = this.props;
    if (newToken && newToken !== token) {
      updateToken(newToken);
    }
  };

  onUnauthorized = () => {
    const { resetAllApp } = this.props;
    if (this.alreadyDisplayUnauthorized) return;
    this.alreadyDisplayUnauthorized = true;
    resetAllApp();
    // alert(l10n.alert, l10n.session_expired_description, [
    //   {
    //     text: l10n.alert_re_login,
    //     onPress: () => {
    //       this.alreadyDisplayUnauthorized = false;
    //       resetAllApp();
    //     },
    //   },
    // ]);
  };

  onBlacklist = () => {
    // const { showModal, modalName, navigateToLoginStack } = this.props;
    // if (modalName === MODAL_NAMES.COMMON.MODAL_BLACKLIST) return;
    // navigateToLoginStack();
    // showModal(MODAL_NAMES.COMMON.MODAL_BLACKLIST, {});
  };

  render() {
    return null;
  }
}

CommonService.propTypes = {
  checkAutoLogin: PropTypes.func,
  updateToken: PropTypes.func,
  token: PropTypes.string,
  resetAllApp: PropTypes.func,
};

CommonService.defaultProps = {
  token: '',
  resetAllApp: doNothing,
  checkAutoLogin: doNothing,
  updateToken: doNothing,
};

export default CommonService;

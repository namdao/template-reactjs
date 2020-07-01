/*
 *
 * LanguageProvider
 *
 * this component connects the redux state language locale to the
 * IntlProvider component and i18n messages (loaded from `app/translations`)
 */
import { connect } from 'react-redux';
import selectors from 'service/commonService/selectors';
import Routes from './routes';

const mapStateToProps = (state) => ({
  token: selectors.getToken(state),
});
export default connect(mapStateToProps)(Routes);

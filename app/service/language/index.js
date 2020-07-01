/*
 *
 * LanguageProvider
 *
 * this component connects the redux state language locale to the
 * IntlProvider component and i18n messages (loaded from `app/translations`)
 */

import { connect } from 'react-redux';
import { getLanguage } from './selectors';
import Language from './language';

const mapStateToProps = (state) => ({
  locale: getLanguage(state),
});

export default connect(mapStateToProps)(Language);

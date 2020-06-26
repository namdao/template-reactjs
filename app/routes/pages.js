import SIGN_IN from 'scenes/Sign/pages/SignIn';
import SIGN_UP from 'scenes/Sign/pages/SignUp';
import NOT_FOUND from 'scenes/NotFoundPage';
import * as Constants from './constants';

const PAGES_LIST = {
  [Constants.SIGN_IN]: SIGN_IN,
  [Constants.SIGN_UP]: SIGN_UP,
  [Constants.NOT_FOUND]: NOT_FOUND,
};

export default PAGES_LIST;

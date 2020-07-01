import SIGN_IN from 'scenes/Sign/pages/SignIn';
import SIGN_UP from 'scenes/Sign/pages/SignUp';
import NOT_FOUND from 'scenes/NotFoundPage';
import DASHBOARD from 'scenes/Dashboard/pages/home';
import USERS from 'scenes/Dashboard/pages/users';
import ROUTE_CONSTANTS from './constants';

const PAGES_LIST = {
  // Page Public
  [ROUTE_CONSTANTS.PUBLIC.SIGN_IN]: SIGN_IN,
  [ROUTE_CONSTANTS.PUBLIC.SIGN_UP]: SIGN_UP,
  [ROUTE_CONSTANTS.PUBLIC.NOT_FOUND]: NOT_FOUND,
  // Page Private
  [ROUTE_CONSTANTS.PRIVATE.DASHBOARD]: DASHBOARD,
  [ROUTE_CONSTANTS.PRIVATE.USERS]: USERS,
};

export default PAGES_LIST;

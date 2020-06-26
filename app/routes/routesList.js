import * as Constants from './constants';
import Pages from './pages';
const ROUTES = {
  PUBLIC: [
    {
      key: Constants.SIGN_IN,
      path: `/${Constants.SIGN_IN}`,
      exact: true,
      component: Pages[Constants.SIGN_IN],
    },
    {
      key: Constants.SIGN_UP,
      path: `/${Constants.SIGN_UP}`,
      exact: true,
      component: Pages[Constants.SIGN_UP],
    },
    {
      key: Constants.NOT_FOUND,
      path: '',
      component: Pages[Constants.NOT_FOUND],
    },
  ],
  PRIVATE: [
    {
      key: Constants.USERS,
      path: `/${Constants.USERS}`,
      exact: true,
      component: Pages[Constants.USERS],
    },
    {
      key: Constants.DASHBOARD,
      path: '/',
      exact: true,
      component: Pages[Constants.DASHBOARD],
    },
  ],
};

export default ROUTES;

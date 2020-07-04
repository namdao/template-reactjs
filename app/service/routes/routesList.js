import ROUTE_CONSTANTS from './constants';
import Pages from './pages';
import message from './message';
const ROUTES = {
  PUBLIC: [
    {
      keyName: ROUTE_CONSTANTS.PUBLIC.SIGN_IN,
      path: `/${ROUTE_CONSTANTS.PUBLIC.SIGN_IN}`,
      alias: message.signin,
      exact: true,
      component: Pages[ROUTE_CONSTANTS.PUBLIC.SIGN_IN],
    },
    {
      keyName: ROUTE_CONSTANTS.PUBLIC.SIGN_UP,
      path: `/${ROUTE_CONSTANTS.PUBLIC.SIGN_UP}`,
      alias: message.signup,
      exact: true,
      component: Pages[ROUTE_CONSTANTS.PUBLIC.SIGN_UP],
    },
    {
      keyName: ROUTE_CONSTANTS.PUBLIC.NOT_FOUND,
      path: '',
      alias: message.notfound,
      component: Pages[ROUTE_CONSTANTS.PUBLIC.NOT_FOUND],
    },
  ],
  PRIVATE: [
    {
      keyName: ROUTE_CONSTANTS.PRIVATE.USERS,
      path: `/${ROUTE_CONSTANTS.PRIVATE.USERS}`,
      alias: message.user,
      exact: true,
      component: Pages[ROUTE_CONSTANTS.PRIVATE.USERS],
    },
    {
      keyName: ROUTE_CONSTANTS.PRIVATE.DASHBOARD,
      alias: message.dashboard,
      path: '/',
      exact: true,
      component: Pages[ROUTE_CONSTANTS.PRIVATE.DASHBOARD],
    },
  ],
};

export default ROUTES;

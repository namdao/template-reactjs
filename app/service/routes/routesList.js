import ROUTE_CONSTANTS from './constants';
import Pages from './pages';
const ROUTES = {
  PUBLIC: [
    {
      key: ROUTE_CONSTANTS.PUBLIC.SIGN_IN,
      path: `/${ROUTE_CONSTANTS.PUBLIC.SIGN_IN}`,
      exact: true,
      component: Pages[ROUTE_CONSTANTS.PUBLIC.SIGN_IN],
    },
    {
      key: ROUTE_CONSTANTS.PUBLIC.SIGN_UP,
      path: `/${ROUTE_CONSTANTS.PUBLIC.SIGN_UP}`,
      exact: true,
      component: Pages[ROUTE_CONSTANTS.PUBLIC.SIGN_UP],
    },
    {
      key: ROUTE_CONSTANTS.PUBLIC.NOT_FOUND,
      path: '',
      component: Pages[ROUTE_CONSTANTS.PUBLIC.NOT_FOUND],
    },
  ],
  PRIVATE: [
    {
      key: ROUTE_CONSTANTS.PRIVATE.USERS,
      path: `/${ROUTE_CONSTANTS.PRIVATE.USERS}`,
      exact: true,
      component: Pages[ROUTE_CONSTANTS.PRIVATE.USERS],
    },
    {
      key: ROUTE_CONSTANTS.PRIVATE.DASHBOARD,
      path: '/',
      exact: true,
      component: Pages[ROUTE_CONSTANTS.PRIVATE.DASHBOARD],
    },
    {
      key: ROUTE_CONSTANTS.PRIVATE.DASHBOARD,
      path: `/${ROUTE_CONSTANTS.PRIVATE.DASHBOARD}`,
      exact: true,
      component: Pages[ROUTE_CONSTANTS.PRIVATE.DASHBOARD],
    },
    {
      key: ROUTE_CONSTANTS.PRIVATE.DASHBOARD,
      path: `/${ROUTE_CONSTANTS.PRIVATE.USERS}`,
      exact: true,
      component: Pages[ROUTE_CONSTANTS.PRIVATE.USERS],
    },
  ],
};

export default ROUTES;

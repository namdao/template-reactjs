import { createSelector } from 'reselect';

const getRoleUser = (state) =>
  state.data.user.roles.length > 0 ? state.data.user.roles[0] : {};
const getUser = (state) => state.data.user;

/**
 * Direct selector to user
 */
const selectUser = (state) => state.data.user;

/**
 * Select the user name
 */
const makeSelectUserName = () =>
  createSelector(selectUser, (userState) => userState?.username);

const getUserName = makeSelectUserName();

const SignSelectors = {
  getRoleUser,
  getUser,
  getUserName,
};
export default SignSelectors;

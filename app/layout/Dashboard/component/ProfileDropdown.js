import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
/**
 * component
 */
import DropDownList from 'components/DropDown';
import { LoginOutlined, UserOutlined } from '@ant-design/icons';
/**
 * utils
 */
import { changeLocale } from 'service/language/actions';
import ROUTE_CONSTANTS from 'service/routes/constants';
/**
 * Locale
 */
import SignSelectors from 'scenes/Sign/redux/selectors';
import Message from '../message';
/**
 * styles
 */
import { ProfileStyle } from './styles';

const listProfile = [
  {
    key: Message.user_info.id,
    alias: Message.user_info,
    icon: UserOutlined,
    path: `/${ROUTE_CONSTANTS.PRIVATE.USERS}`,
  },
  {
    key: Message.user_logout.id,
    alias: Message.user_logout,
    icon: LoginOutlined,
  },
];
const ProfileDropdown = ({ userName }) => (
  <DropDownList
    listMenu={listProfile}
    title={userName}
    iconLeft={UserOutlined}
    styleIconLeft={ProfileStyle.iconProfile}
    theme="light"
    placement="bottomRight"
  />
);
ProfileDropdown.propTypes = {
  userName: PropTypes.string,
};
ProfileDropdown.defaultProps = {
  userName: '',
};
const mapStateToProps = (state) => ({
  userName: SignSelectors.getUserName(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      changeLocale,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDropdown);

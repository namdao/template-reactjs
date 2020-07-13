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
 * actions
 */
import { changeLocale } from 'service/language/actions';
import { logout } from 'service/commonService/actions';
import ROUTE_CONSTANTS from 'service/routes/constants';
/**
 * Locale
 */
import SignSelectors from 'scenes/Sign/redux/selectors';
import Img from 'components/Img';
import Images from 'utils/images';
import { doNothing } from 'utils/utility';
import Message from '../message';
/**
 * styles
 */
import { ProfileStyle } from './styles';

const ProfileDropdown = ({ userName, logout: logOutApp }) => {
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
      onAction: logOutApp,
    },
  ];
  const iconAvatar = () => (
    <Img src={Images.Avatar} alt="avatar" style={ProfileStyle.iconAvatar} />
  );

  return (
    <DropDownList
      listMenu={listProfile}
      title={userName}
      iconLeft={iconAvatar}
      styleIconLeft={ProfileStyle.iconProfile}
      styleButton={ProfileStyle.containerAvatar}
      theme="light"
      placement="bottomRight"
    />
  );
};
ProfileDropdown.propTypes = {
  userName: PropTypes.string,
  logout: PropTypes.func,
};
ProfileDropdown.defaultProps = {
  userName: '',
  logout: doNothing,
};
const mapStateToProps = (state) => ({
  userName: SignSelectors.getUserName(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      changeLocale,
      logout,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(ProfileDropdown);

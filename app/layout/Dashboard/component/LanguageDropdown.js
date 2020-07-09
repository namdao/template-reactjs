import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import DropDownList from 'components/DropDown';
import { GlobalOutlined } from '@ant-design/icons';
import { getLanguage } from 'service/language/selectors';
import { changeLocale } from 'service/language/actions';
import Images from 'utils/images';
import { doNothing } from 'utils/utility';
import Img from 'components/Img';
import Message from '../message';
import { LanguageStyle } from './styles';

const LanguageDropdown = ({ locale, changeLocale: changeLanguage }) => {
  const onSetLanguage = (key) => {
    changeLanguage(key);
  };
  const listLanguage = [
    {
      key: 'en',
      alias: Message.en,
      icon: () => (
        <Img
          src={Images.UsaFlag}
          style={LanguageStyle.iconFlag}
          alt={Message.en.defaultMessage}
        />
      ),
      onAction: onSetLanguage,
    },
    {
      key: 'vi',
      alias: Message.vi,
      icon: () => (
        <Img
          src={Images.ViFlag}
          style={LanguageStyle.iconFlag}
          alt={Message.en.defaultMessage}
        />
      ),
      onAction: onSetLanguage,
    },
  ];
  const currentLanguage = listLanguage.find((val) => val.key === locale);

  return (
    <DropDownList
      listMenu={listLanguage}
      title={currentLanguage.alias}
      iconRight={GlobalOutlined}
      styleIconRight={LanguageStyle.iconLanguage}
      theme="light"
      placement="bottomRight"
    />
  );
};
LanguageDropdown.propTypes = {
  locale: PropTypes.string,
  changeLocale: PropTypes.func,
};
LanguageDropdown.defaultProps = {
  locale: '',
  changeLocale: doNothing,
};
const mapStateToProps = (state) => ({
  locale: getLanguage(state),
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      changeLocale,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(LanguageDropdown);

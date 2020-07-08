import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import DropDownList from 'components/DropDown';
import { GlobalOutlined } from '@ant-design/icons';
import { getLanguage } from 'service/language/selectors';
import { changeLocale } from 'service/language/actions';
import { doNothing } from 'utils/utility';
import Message from '../message';
import { LanguageStyle } from './styles';
const listLanguage = [
  {
    key: 'en',
    alias: Message.en,
  },
  {
    key: 'vi',
    alias: Message.vi,
  },
];
const LanguageDropdown = ({ locale, changeLocale: changeLanguage }) => {
  const currentLanguage = listLanguage.find((val) => val.key === locale);
  const onSetLanguage = (key) => {
    changeLanguage(key);
  };

  return (
    <DropDownList
      listMenu={listLanguage}
      title={currentLanguage.alias}
      icon={GlobalOutlined}
      onActionDropDown={onSetLanguage}
      styleIcon={LanguageStyle.iconLanguage}
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

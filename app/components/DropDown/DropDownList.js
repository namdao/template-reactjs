import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Dropdown as DropDownAnt, Button } from 'antd';
import { FormattedMessage } from 'react-intl';
import Menu from '../Menu';

const DropDownList = ({
  listMenu,
  title,
  icon: IconDropDown,
  onActionDropDown,
  styleIcon,
}) => {
  const MenuList = () => (
    <Menu listMenu={listMenu} onAction={onActionDropDown} />
  );
  return (
    <DropDownAnt overlay={MenuList}>
      <Button>
        <span>
          <FormattedMessage {...title} />
        </span>
        <IconDropDown style={styleIcon} />
      </Button>
    </DropDownAnt>
  );
};

DropDownList.propTypes = {
  listMenu: PropTypes.array,
  title: PropTypes.object,
  icon: PropTypes.object,
  onActionDropDown: PropTypes.func,
  styleIcon: PropTypes.shape({}),
};
DropDownList.defaultProps = {
  listMenu: [],
  title: '',
  icon: null,
  onActionDropDown: null,
  styleIcon: null,
};
export default memo(DropDownList);

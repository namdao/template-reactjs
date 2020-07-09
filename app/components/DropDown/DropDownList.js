import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Dropdown as DropDownAnt, Button } from 'antd';
import { FormattedMessage } from 'react-intl';
import Menu from '../Menu';

const DropDownList = ({
  listMenu,
  title,
  iconRight: IconDropDownRight,
  iconLeft: IconDropDownLeft,
  styleIconLeft,
  styleIconRight,
  placement,
  ...rest
}) => {
  const MenuList = () => <Menu listMenu={listMenu} {...rest} />;
  const showTitle = () => {
    if (typeof title === 'object') {
      if (title?.id) {
        return <FormattedMessage {...title} />;
      }
      return title?.defaultMessage;
    }
    return title;
  };
  return (
    <DropDownAnt overlay={MenuList} placement={placement}>
      <Button>
        {IconDropDownLeft && <IconDropDownLeft style={styleIconLeft} />}
        <span>{showTitle()}</span>
        {IconDropDownRight && <IconDropDownRight style={styleIconRight} />}
      </Button>
    </DropDownAnt>
  );
};

DropDownList.propTypes = {
  listMenu: PropTypes.array,
  title: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  iconRight: PropTypes.object,
  iconLeft: PropTypes.object,
  styleIconLeft: PropTypes.shape({}),
  styleIconRight: PropTypes.shape({}),
  placement: PropTypes.oneOf([
    'bottomLeft',
    'bottomCenter',
    'bottomRight',
    'topLeft',
    'topRight',
  ]),
};
DropDownList.defaultProps = {
  listMenu: [],
  title: '',
  iconRight: null,
  iconLeft: null,
  styleIconLeft: null,
  styleIconRight: null,
  placement: 'bottomLeft',
};
export default memo(DropDownList);

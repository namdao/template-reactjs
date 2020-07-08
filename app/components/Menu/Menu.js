import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Menu as MenuAntd } from 'antd';
import { FormattedMessage } from 'react-intl';
import history from 'utils/history';

const Menu = ({ listMenu, defaultSelected, theme, mode, onAction }) => {
  if (listMenu.length < 1) return null;

  const MenuChild = () =>
    listMenu.map((itemMenu) => {
      const { icon: Icon, alias: title, path, key } = itemMenu || {};
      const IconMenu = () => (Icon ? <Icon /> : null);
      const showTitle = () => {
        if (typeof title === 'object') {
          if (title?.id) {
            return <FormattedMessage {...title} />;
          }
          return title?.defaultMessage;
        }
        return title;
      };

      const onActionItem = ({ key: valueMenu }) => {
        // navigate Screen
        if (path && path !== '' && !onAction) {
          history.push(path);
        }
        onAction && onAction(valueMenu);
        return null;
      };

      return (
        <MenuAntd.Item key={key} icon={<IconMenu />} onClick={onActionItem}>
          {showTitle()}
        </MenuAntd.Item>
      );
    });

  return (
    <MenuAntd theme={theme} mode={mode} defaultSelectedKeys={defaultSelected}>
      {MenuChild()}
    </MenuAntd>
  );
};

Menu.propTypes = {
  listMenu: PropTypes.array,
  defaultSelected: PropTypes.array,
  theme: PropTypes.oneOf(['light', 'dark']),
  mode: PropTypes.oneOf(['vertical', 'horizontal', 'inline']),
  onAction: PropTypes.func,
};
Menu.defaultProps = {
  listMenu: [],
  defaultSelected: [],
  theme: 'dark',
  mode: 'vertical',
  onAction: null,
};
export default memo(Menu);

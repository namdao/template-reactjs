import React from 'react';
/**
 * Component
 */
import MenuList from 'components/Menu';
import ROUTES from 'service/routes/routesList';
import history from 'utils/history';

const MenuBar = () => {
  const currentMenu = ROUTES.MENU.find(
    (menu) => menu.path === history.location.pathname,
  );

  return (
    <MenuList
      defaultSelected={[currentMenu?.key?.toString()]}
      listMenu={ROUTES.MENU}
    />
  );
};
export default MenuBar;

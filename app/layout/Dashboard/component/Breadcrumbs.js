import React, { memo } from 'react';
import PropTypes from 'prop-types';
/**
 * component
 */
import { Breadcrumb } from 'antd';
import { FormattedMessage } from 'react-intl';
/**
 * utils
 */
import history from 'utils/history';
import { MenuItem } from './styles';

const Breadcrumbs = ({ listBreadCrumb }) => {
  if (listBreadCrumb.length < 1) return null;

  return (
    <Breadcrumb className="breadcrumb" separator=">">
      {listBreadCrumb.map(({ alias, keyName, path }, index) => {
        const navigateScreen = () => {
          const last = listBreadCrumb.length - 1 === index;
          if (!last) {
            history.push(path);
          }
        };

        return (
          <Breadcrumb.Item
            key={`breadcrumb-${keyName}`}
            onClick={navigateScreen}
          >
            <MenuItem>
              {typeof alias === 'object' ? (
                <FormattedMessage {...alias} />
              ) : (
                <span>{alias}</span>
              )}
            </MenuItem>
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
};
Breadcrumbs.propTypes = {
  listBreadCrumb: PropTypes.arrayOf(PropTypes.shape({})),
};
export default memo(Breadcrumbs);

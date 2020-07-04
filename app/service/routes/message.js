/*
 * Route alias name
 *
 * This contains all routing name for breadcrumb
 */
import { defineMessages } from 'react-intl';

export const scope = 'routing.constant';

export default defineMessages({
  home: {
    id: `${scope}.home`,
    defaultMessage: 'Sửa lại trang ',
  },
  signin: {
    id: `${scope}.signin`,
    defaultMessage: 'Đăng nhậpp',
  },
  signup: {
    id: `${scope}.signout`,
    defaultMessage: 'Đăng ký',
  },
  notfound: {
    id: `${scope}.notfound`,
    defaultMessage: 'Không tìm thấy',
  },
  user: {
    id: `${scope}.user`,
    defaultMessage: 'Cá nhânnnn',
  },
  dashboard: {
    id: `${scope}.dashboard`,
    defaultMessage: 'Trang chủ',
  },
});

/*
 * Dashboard alias name
 *
 * This contains all dashboard template
 */
import { defineMessages } from 'react-intl';

export const scope = 'layout.translate.constant';

export default defineMessages({
  vi: {
    id: `${scope}.vi`,
    defaultMessage: 'Vietnamese',
  },
  en: {
    id: `${scope}.en`,
    defaultMessage: 'English',
  },
  user_info: {
    id: `${scope}.user_info`,
    defaultMessage: 'User Info',
  },
  user_logout: {
    id: `${scope}.user_logout`,
    defaultMessage: 'Logout',
  },
});

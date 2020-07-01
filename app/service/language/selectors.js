import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the language domain
 */
const selectLanguage = (state) => state.service.language || initialState;

/**
 * Select the language locale
 */
const makeSelectLocale = () =>
  createSelector(selectLanguage, (languageState) => languageState?.locale);

const getLanguage = makeSelectLocale();

export { selectLanguage, getLanguage };

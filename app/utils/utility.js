import lodash from 'lodash';

export const doNothing = () => null;
/**
 * Common validate
 */
// export const required = (value) => !!(value || typeof value === 'number');
// export const minLength = (min, value) => !(value && value.length < min);
// export const number = (value) => !(value && isNaN(Number(value)));
// export const alphaNumeric = (value) => !(value && /[^a-zA-Z0-9 ]/i.test(value));
// export const validEmail = (value) =>
//   !(value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value));
// export const phoneNumber = (value) =>
//   !(
//     value &&
//     !/^(\+?84|0)((3([2-9]))|(5([2689]))|(7([0|6-9]))|(8([1-6|89]))|(9([0-9])))([0-9]{7})$/.test(
//       value
//     )
//   );
export const formatPhone = /^(\+?84|0)((3([2-9]))|(5([2689]))|(7([0|6-9]))|(8([1-6|89]))|(9([0-9])))([0-9]{7})$/;
export const parseToCurrency = (value) =>
  value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
export const replaceDot = (value) => value.toString().replace(/\./g, '');

export const compareObject = (obj1, obj2) => {
  const isEqual = lodash.isEqual(obj1, obj2);
  return isEqual;
};

export const getBreadCrumb = (currentRoute, ListRoutes) => {
  const crumbsFilter = ListRoutes.filter(({ path }) => {
    if (path === '/' && currentRoute.match.path !== path) return null;
    return currentRoute.match.path.includes(path);
  }).map(({ path, alias, ...rest }) => {
    const getPathWithParam = () => {
      const params = Object.keys(currentRoute.match.params);
      let pathReplace = '';
      params.forEach((value) => {
        pathReplace = currentRoute.match.path.replace(
          `:${value}`,
          currentRoute.match.params[value],
        );
      });
      return pathReplace;
    };
    const pathRoute =
      path === currentRoute.match.path ? getPathWithParam() : path;
    const aliasParams = currentRoute.match?.params[alias]
      ? currentRoute.match.params[alias]
      : alias;
    return {
      ...rest,
      alias: aliasParams,
      path: pathRoute,
    };
  });
  return crumbsFilter;
};

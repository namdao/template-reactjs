const isDev = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';
const isProduction = !isDev;

export default {
  isDev,
  isProduction,
};

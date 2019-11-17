import * as user from './user';

export default {
  '/api/login': user.login,
  '/api/info': user.info
};
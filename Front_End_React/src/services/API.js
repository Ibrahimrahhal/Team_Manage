import http from 'axios';
import {
  api
} from './sittings';

function saveUser(user) {
  return http.post(api.concat("register/"), user);
}
export {
  saveUser
};
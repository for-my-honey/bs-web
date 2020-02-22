import request from '../utils/request';
import api from '../config/api';

const loginPass = api.loginPass;
export default function query(params) {
  return request({ url: `${loginPass}?username=${params.username}&password=${params.password}` }, 'GET');
}
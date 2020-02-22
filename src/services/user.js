import api from '../config/api';
import axios from 'axios';
const userquery = api.userquery;
export async function query() {
  return axios.get(`${userquery}`);
}
export async function updateSwitch(params, flag) {
  return axios.get(`${userquery}/updateStatus?usernum=${params.usernum}&TF=${flag}`);
}
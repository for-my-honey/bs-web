import api from '../config/api';
import axios from 'axios';
const userquery = api.userquery;
export async function query() {
  return axios.get(`${userquery}`);
}
export async function updateSwitch(params, flag) {
  return axios.get(`${userquery}/updateStatus?usernum=${params.usernum}&TF=${flag}`);
}
export async function select(params) {
  return axios.get(`${userquery}/select?usernum=${params}`);
}
export async function deleat(params) {
  return axios.get(`${userquery}/deleat?id=${params}`);
}
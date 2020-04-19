import api from '../config/api';
import axios from 'axios';
var moment = require('moment');
const singerquery = api.singerquery;

export async function query() {
  return axios.get(`${singerquery}`);
}
// export async function queryList() {
//   return axios.get(`${singerquery}/singerList`);
// }

export async function select(params) {
  return axios.get(`${singerquery}/select?singername=${params}`);
}
export async function deleat(params) {
  return axios.get(`${singerquery}/deleat?id=${params}`);
}
export async function update(params, id) {
  return axios.post(`${singerquery}/updatesinger`, {
    id: id,
    singername: params.singername,
    singersex: params.singersex,
    singerdesc: params.singerdesc,
    singerarea: params.singerarea,
    singerday: moment(params.singerday).format('YYYY-MM-DD'),
    singersymbol: params.singersymbol
  });
}
export async function add(params) {
  return axios.post(`${singerquery}/addsinger`, {
    singername: params.singername,
    singersex: params.singersex,
    singerdesc: params.singerdesc,
    singerarea: params.singerarea,
    singerday: moment(params.singerday).format('YYYY-MM-DD'),
    singersymbol: params.singersymbol
  });
}
export async function queryList() {
  return axios.get(`${singerquery}/singerList`);
}
export async function updatelist(singersongnum, singercdnum, imgurl, id) {
  return axios.post(`${singerquery}/updatelist`, {
    id: id,
    singersongnum: singersongnum,
    singercdnum: singercdnum,
    upload: imgurl,
  });
}
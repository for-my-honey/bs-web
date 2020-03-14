import api from '../config/api';
import axios from 'axios';
var moment = require('moment');
const songquery = api.songquery;

export async function query() {
  return axios.get(`${songquery}`);
}
export async function queryList() {
  return axios.get(`${songquery}/songList`);
}

export async function select(params) {
  return axios.get(`${songquery}/select?songname=${params}`);
}
export async function deleat(params) {
  return axios.get(`${songquery}/deleat?id=${params}`);
}
export async function update(params, id) {
  return axios.post(`${songquery}/updateSong`, {
    id: id,
    songname: params.songname,
    songcd: params.songcd,
    songtype: params.songtype,
    singer: params.singer,
    songarea: params.songarea,
    songdate: moment(params.songdate).format('YYYY-MM-DD'),
  });
}
export async function add(params) {
  return axios.post(`${songquery}/addSong`, {
    songname: params.songname,
    songcd: params.songcd,
    songtype: params.songtype,
    singer: params.singer,
    songarea: params.songarea,
    songdate: moment(params.songdate).format('YYYY-MM-DD'),
    songurl: params.upload
  });
}
import api from '../config/api';
import axios from 'axios';
const dashboard = api.dashboard;
export async function usernum() {
  return axios.get(`${dashboard}/usernum`);
}
export async function usersex() {
  return axios.get(`${dashboard}/usersex`);
}
export async function songtype() {
  return axios.get(`${dashboard}/songtype`);
}
export async function songarea() {
  return axios.get(`${dashboard}/songarea`);
}
export async function malesinger() {
  return axios.get(`${dashboard}/malesinger`);
}
export async function femalesinger() {
  return axios.get(`${dashboard}/femalesinger`);
}
export async function singernum() {
  return axios.get(`${dashboard}/singernum`);
}
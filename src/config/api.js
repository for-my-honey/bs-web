const PROTOCOL = 'http';

/* 后端服务器地址IP */
const IP = 'localhost';

/* 后端服务器端口 */
const PORT = '3001';

const devHost = `${PROTOCOL}://${IP}:${PORT}`;
export default {
  loginPass: `${devHost}/login`,
  userquery: `${devHost}/user`,
  songquery: `${devHost}/song`,
}
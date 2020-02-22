/**
 * 开发环境后端配置
 */
const PROTOCOL = 'http';
const PREFIX = 'yst-svr';

/* 后端服务器地址IP */
// const IP = 'localhost';
const IP = '192.168.0.191';

/* 后端服务器端口 */
const PORT = '4000';
// const PORT = "8000";

const devHost = `${PROTOCOL}://${IP}:${PORT}/${PREFIX}`;
//const devHost = `https://yst.elitescloud.com/${PREFIX}`;
/**
 * 生产环境后端配置
 */
// const PROD_PROTOCOL = 'http'
const PROD_PREFIX = 'yst-svr';

/* 后端服务器地址IP */
// const PROD_IP = 'elpdtman'

/* 后端服务器端口 */
// const PROD_PORT = '9090'

// const prodHost = `${PROD_PROTOCOL}://${PROD_IP}:${PROD_PORT}/${PROD_PREFIX}`
const prodHost = `/${PROD_PREFIX}`;

export default {
  devHost,
  prodHost,
};

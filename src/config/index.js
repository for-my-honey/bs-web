import hostConf from './host';
import apiConf from './api';
import menu from './menu';
const DEV = process.env.NODE_ENV === 'development';
const urlPrefix = DEV ? '' : '';
export default {
  name: 'YST',
  zhName: '云时通',
  prefix: 'console',
  urlPrefix,
  footerText: '',
  loginLogo: urlPrefix + '/assets/img/logo.svg',
  logo: urlPrefix + '/assets/img/logo.svg',
  favicon: urlPrefix + '/assets/img/favicon.ico',
  logoSmall: urlPrefix + '/assets/img/logoSmall.svg',
  iconFontCSS: urlPrefix + '/assets/font/iconfont.css',
  iconFontJS: urlPrefix + '/assets/font/iconfont.js',
  baseURL: DEV ? hostConf.devHost : hostConf.prodHost,

  openPages: ['/login', '/600', '/forgetPW'],
  apiPrefix: apiConf.apiPrefix,
  api: apiConf,
  menuCfg: menu,
};

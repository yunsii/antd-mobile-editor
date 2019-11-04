import { Toast } from 'antd-mobile';
import { addScriptToHead } from './utils/customUtils';
const defaultSettings = require('./defaultSettings');

const { iconfontUrl } = defaultSettings;

addScriptToHead(iconfontUrl);

Toast.config({
  mask: false,
})

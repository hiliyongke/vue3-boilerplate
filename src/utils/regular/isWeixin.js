// 是否为微信浏览器
const isWeixin = {
  test: () => {
    const u = window.navigator.userAgent.toLowerCase();
    return u.match(/MicroMessenger/i) == 'micromessenger';
  }
};
export default isWeixin;

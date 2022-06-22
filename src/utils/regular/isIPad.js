// 是否为iPad
const isIPad = {
  test: () => {
    const u = navigator.userAgent;
    return u.indexOf('iPad') > -1;
  }
};
export default isIPad;

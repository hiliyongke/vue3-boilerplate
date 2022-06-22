// 验证安卓系统
const isAndroid = {
  test: () => {
    const u = navigator.userAgent;
    return u.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
  }
};
export default isAndroid;

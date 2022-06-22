// 是否为ios系统
const pattern = /\(i[^;]+;( U;)? CPU.+Mac OS X/;
const isIos = {
  test: () => {
    const u = navigator.userAgent;
    return !!u.match(pattern);
  },
  pattern
};
export default isIos;

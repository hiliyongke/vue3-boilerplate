// 是否为IPv4地址
const isIpv4 = {
  test: value => {
    const re = /^(\d+)\.(\d+)\.(\d+)\.(\d+)$/g; //匹配IP地址的正则表达式
    if (re.test(value)) {
      if (
        RegExp.$1 < 256 &&
        RegExp.$2 < 256 &&
        RegExp.$3 < 256 &&
        RegExp.$4 < 256
      ) {
        return true;
      }
    }
    return false;
  }
};
export default isIpv4;

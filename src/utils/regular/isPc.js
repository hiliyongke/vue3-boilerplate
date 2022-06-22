// 是否为电脑PC浏览器
const isPc = {
  test: () => {
    const userAgentInfo = navigator.userAgent;
    const Agents = [
      'Android',
      'iPhone',
      'SymbianOS',
      'Windows Phone',
      'iPad',
      'iPod'
    ];
    let flag = true;
    for (let v = 0; v < Agents.length; v++) {
      if (userAgentInfo.indexOf(Agents[v]) > 0) {
        flag = false;
        break;
      }
    }
    return flag;
  }
};
export default isPc;

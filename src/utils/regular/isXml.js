// 是否为xml文件
const pattern = /^([a-zA-Z]+-?)+[a-zA-Z0-9]+.[x|X][m|M][l|L]$/;
const isXml = {
  test: value => {
    return pattern.test(value);
  },
  pattern
};
export default isXml;

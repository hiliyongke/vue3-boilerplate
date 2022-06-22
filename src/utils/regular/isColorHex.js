// 验证是否为16进制颜色
const pattern = /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
const isColorHex = {
  test: value => {
    return pattern.test(value);
  },
  pattern
};
export default isColorHex;

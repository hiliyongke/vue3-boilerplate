// 是否为数字
const pattern = /^[0-9]*$/;
const isNumber = {
  test: value => {
    return pattern.test(value);
  },
  pattern
};
export default isNumber;

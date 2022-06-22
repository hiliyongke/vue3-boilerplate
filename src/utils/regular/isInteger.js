/**
 * 是否为整数，包括正整数和负整数
 */
let pattern = /^[-+]?\d*$/;
const isInteger = {
  test: value => {
    return pattern.test(value);
  },
  pattern
};
export default isInteger;

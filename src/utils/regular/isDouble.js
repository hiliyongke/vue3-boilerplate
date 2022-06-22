/**
 * 是否双精度浮点数
 */
let pattern = /^[-\+]?\d+(\.\d+)?$/;
const isDouble = {
  test: value => {
    return pattern.test(value);
  },
  pattern
};
export default isDouble;

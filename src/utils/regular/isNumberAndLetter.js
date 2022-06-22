// 是否为数字与字母混合
const pattern = /^[A-Za-z0-9]+$/;
const isNumberAndLetter = {
  test: value => {
    return pattern.test(value);
  },
  pattern
};
export default isNumberAndLetter;

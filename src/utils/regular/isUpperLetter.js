// 是否为大写字母
const pattern = /^[A-Z]+$/;
const isUpperLetter = {
  test: value => {
    return pattern.test(value);
  },
  pattern
};
export default isUpperLetter;

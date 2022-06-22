// 是否为小写字母
const pattern = /^[a-z]]+$/;
const isLowerLetter = {
  test: value => {
    return pattern.test(value);
  },
  pattern
};
export default isLowerLetter;

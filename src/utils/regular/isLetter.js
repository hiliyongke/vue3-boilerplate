// 是否为字母，包含大小写
const pattern = /^[A-Za-z]+$/;
const isLetter = {
  test: value => {
    return pattern.test(value);
  },
  pattern
};
export default isLetter;

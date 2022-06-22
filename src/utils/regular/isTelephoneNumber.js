// 是否为电话号码
const pattern = /^(\d3,4\d3,4|\d{3,4}-)?\d{7,8}$/;
const isTelephoneNumber = {
  test: value => {
    return pattern.test(value);
  },
  pattern
};
export default isTelephoneNumber;

// 是否为QQ号码
const pattern = /^[1-9][0-9]{4,10}$/;
const isQQNumber = {
  test: value => {
    return pattern.test(value);
  },
  pattern
};
export default isQQNumber;

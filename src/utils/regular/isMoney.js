// 是否为金额，最多两位小数
const pattern =
  /(^[1-9]([0-9]+)?(\.[0-9]{1,2})?$)|(^(0){1}$)|(^[0-9]\.[0-9]([0-9])?$)/;
const isMoney = {
  test: value => {
    return pattern.test(`${value}`);
  },
  pattern
};
export default isMoney;

// 是否为微信号
const pattern = /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/;
const isWeixinNumber = {
  test: value => {
    return pattern.test(value);
  },
  pattern
};
export default isWeixinNumber;

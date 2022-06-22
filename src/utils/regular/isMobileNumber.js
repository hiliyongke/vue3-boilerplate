// 是否为手机号码
const pattern = /^0?(13|14|15|16|17|18|19)[0-9]{9}$/;
const isMobileNumber = {
  test: value => {
    return pattern.test(value);
  },
  pattern
};
export default isMobileNumber;

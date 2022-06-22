// 验证是否为邮箱
const pattern =
  /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w\\$](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/;
const isEmail = {
  test: value => {
    return pattern.test(value);
  },
  pattern
};
export default isEmail;

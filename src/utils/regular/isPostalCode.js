// 是否为邮政编码
const pattern = /^[1-9]\d{5}(?!\d)$/;
const isPostalCode = {
  test: value => {
    return pattern.test(value);
  },
  pattern
};
export default isPostalCode;

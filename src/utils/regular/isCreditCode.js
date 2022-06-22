// 验证是否为统一社会信用代码
const pattern =
  /^([0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}|[1-9]\d{14})$/;
const isCreditCode = {
  test: value => {
    return pattern.test(value);
  },
  pattern
};
export default isCreditCode;

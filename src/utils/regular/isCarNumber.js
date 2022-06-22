// 是否为车牌号码
const pattern =
  /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-Z0-9]{4}[A-Z0-9挂学警港澳]{1}$/;
const isCarNumber = {
  test: value => {
    return pattern.test(value);
  },
  pattern
};
export default isCarNumber;

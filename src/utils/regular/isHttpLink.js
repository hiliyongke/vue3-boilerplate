// 验证是否为http/https链接
const pattern =
  /(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/;
const isHttpLink = {
  test: value => {
    return pattern.test(value);
  },
  pattern
};
export default isHttpLink;

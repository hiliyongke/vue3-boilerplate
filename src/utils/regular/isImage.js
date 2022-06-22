// 是否为图片
const pattern = /\.(png|jpg|gif|jpeg|webp)$/;
const isImage = {
  test: value => {
    return pattern.test(value);
  },
  pattern
};
export default isImage;

/**
 * @name ConfigLayoutsPlugin
 * @description 配合vue-plugin-pages 使用嵌套路由的特性
 */

// 使用说明
// 作用
// 页面可以自由组合布局，可以在页面加载指定的layout

// 注意
// 1、vite-plugin-vue-layouts 与上面提到的pages类似，都会读取指定目录文件夹下面的文件。
// 2、vite-plugin-layouts默认读取的文件夹名字是 layouts，所以要使用的话，要在自己创建一个 src/layouts 文件夹
// 3、vite-plugin-layouts默认读取的文件是 src/layouts/default.vue 所以第一个文件 最好创建叫做 default.vue，这样比较容易理解、上手

import Layouts from 'vite-plugin-vue-layouts';
export const ConfigLayoutsPlugin = () => {
  return Layouts({
    // 如果是默认 layouts文件夹，默认 default.vue文件，则不需要配置
    layoutsDirs: ['src/layouts'], // 布局文件存放目录,可以使用任意布局组合
    extensions: ['vue', 'tsx', 'jsx'], // 后缀名
    defaultLayout: 'index' // 默认布局，对应 src/layouts/index.vue
  });
};

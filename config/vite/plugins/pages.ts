/**
 * @name ConfigPagesPlugin
 * @description 动态生成路由,通过 vite-plugin-pages 自动生成的路由，都是一级路由
 */

import Pages from 'vite-plugin-pages';

export const ConfigPagesPlugin = () => {
  return Pages({
    dirs: [{ dir: 'src/pages', baseRoute: '' }], // 需要生成路由的文件目录，默认就是识别src下面的pages文件
    extensions: ['vue', 'md'],
    exclude: ['**/components/*.vue'], // 排除在外的目录，即不将所有 components 目录下的 .vue 文件生成路由
    nuxtStyle: true,
    importMode: 'async' // 异步方式加载路由组件
  });
};

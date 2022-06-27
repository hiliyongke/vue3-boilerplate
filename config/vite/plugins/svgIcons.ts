/**
 * @name ConfigSvgIconsPlugin
 * @description 加载SVG文件，自动引入
 */
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';
import path from 'path';

// 使用说明
// 用于生成 svg 雪碧图，不便在我的项目中应用 .svg 文件。
// 依照文档配置好后，搭配阿里巴巴矢量图标库应用，只需把下载好的 svg 文件丢到指定目录，而后就能够我的项目中欢快的应用了。

export const ConfigSvgIconsPlugin = (isBuild: boolean) => {
  return createSvgIconsPlugin({
    // 指定需要缓存的图标文件夹
    iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
    // 指定symbolId格式
    symbolId: 'icon-[dir]-[name]',
    svgoOptions: isBuild
  });
};


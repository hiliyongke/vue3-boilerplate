/**
 * @name createVitePlugins
 * @description 封装plugins数组统一调用
 */
import type { Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { ConfigVueSetupExtendPlugin } from './vueSetupExtend';
import { ConfigSvgIconsPlugin } from './svgIcons';
import { AutoRegistryComponents } from './autoRegistryComponents';
import { AutoImportDeps } from './autoImport';
import { ConfigMockPlugin } from './mock';
import { ConfigVisualizerConfig } from './visualizer';
import { ConfigCompressPlugin } from './compress';
import { ConfigPagesPlugin } from './pages';
import { ConfigRestartPlugin } from './restart';
import { ConfigSvgLoaderPlugin } from './svgLoader';
import { ConfigMarkDownPlugin } from './markdown';

export function createVitePlugins(isBuild: boolean) {
  const vitePlugins: (Plugin | Plugin[])[] = [
    // vue支持
    vue(),
    // JSX支持
    vueJsx(),
    // vue3 setup语法糖扩展
    ConfigVueSetupExtendPlugin(),
    // 自动按需引入组件
    AutoRegistryComponents(),
    // 自动按需引入依赖
    AutoImportDeps(),
    // 自动生成路由
    ConfigPagesPlugin(),
    // 开启.gz压缩  rollup-plugin-gzip
    ConfigCompressPlugin(),
    // vite-plugin-svg-icons
    ConfigSvgIconsPlugin(isBuild),
    // 导入svg 自动转 vue组件
    ConfigSvgLoaderPlugin(),
    // vite-plugin-mock
    ConfigMockPlugin(isBuild),
    // rollup-plugin-visualizer
    ConfigVisualizerConfig(),
    // 支持mackdown转vue组件
    ConfigMarkDownPlugin(),
    // 监听配置文件改动重启
    ConfigRestartPlugin()
  ];

  return vitePlugins;
}

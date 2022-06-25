/**
 * @name  AutoRegistryComponents
 * @description 按需加载，自动引入组件
 */
import Components from 'unplugin-vue-components/vite';
import IconsResolver from 'unplugin-icons/resolver';
import {
  TDesignResolver,
  VueUseComponentsResolver
} from 'unplugin-vue-components/resolvers';
export const AutoRegistryComponents = () => {
  // 按需引入
  return Components({
    dirs: ['src/components'], // 按需加载的文件夹
    extensions: ['vue', 'md', 'tsx'],
    deep: true,
    dts: true,
    directoryAsNamespace: false,
    globalNamespaces: [],
    directives: true,
    include: [/\.vue$/, /\.vue\?vue/, /\.md$/, /\.tsx$/, /\.tsx\?tsx/],
    exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
    resolvers: [
      IconsResolver({
        componentPrefix: ''
      }),
      TDesignResolver(),
      VueUseComponentsResolver()
    ]
  });
};

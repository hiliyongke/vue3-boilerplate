/**
 * @name ConfigCompressPlugin
 * @description 开启.gz压缩
 */

// 介绍
// 应用 gzip 或者 brotli 来压缩资源。能够让我的项目在构建时间接生成压缩文件
// nginx服务器一定要配置， 配置启动gzip模块， 然后优先使用本地压缩好的文件。
// gzip_static on;         启动模块。您应该确保压缩和解压文件的时间戳匹配
// gzip_http_version 1.1;  版本，默认是1.1， 使用 gzip_static,就是要 1.1的版本
// gzip_proxied  expired no-cache no-store private auth;  Nginx作为反向代理的时候启用，开启或者关闭后端服务器返回的结果

import viteCompression from 'vite-plugin-compression';
import { COMPRESSION } from '../../constant';

export const ConfigCompressPlugin = () => {
  if (COMPRESSION) {
    return viteCompression({
      verbose: true,
      disable: false, // 不禁用压缩
      deleteOriginFile: false, // 压缩后是否删除原文件
      algorithm: 'gzip', // 压缩算法
      ext: '.gz', // 文件类型
      threshold: 10240 // 压缩前最小文件大小
    });
  }
  return [];
};

import { defineConfig } from 'umi';
import routes from './routes';
import proxy from './proxy';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  plugins: [],
  hash: true,
  routes, // 路由
  // 配置布局
  // layout: {},
  // 配置dva
  dva: {
    immer: true,
    hmr: false, // 热更新
  },
  // 配置antd
  antd: {},
  // proxy, // 开启代理
  manifest: {
    basePath: '/',
  },
});

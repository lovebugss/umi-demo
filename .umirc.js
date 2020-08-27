import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  plugins: [],

  // history: {
  //   type: 'browser',
  // },
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  // 配置布局
  layout: {},
  // 配置dva
  dva: {
    immer: true,
    hmr: false,
  },
  // 配置antd
  antd: {
    dark: false,
    compact: true,
  },
});

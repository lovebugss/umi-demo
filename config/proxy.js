export default {
  '/api/': {
    target: 'http://localhost:8001',
    changeOrigin: true,
    pathRewrite: {
      '^': '',
    },
  },
};

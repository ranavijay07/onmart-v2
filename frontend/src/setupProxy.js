const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (app) => {
  app.use(createProxyMiddleware(
    ['/api', '/ws-cafe'],
    { target: ':3025', changeOrigin: true, ws: true },
  ));
};

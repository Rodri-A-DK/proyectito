// src/setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://api.prodia.com',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '/v1/sd', // Reescribe la ruta para que coincida con la API
            },
        })
    );
};

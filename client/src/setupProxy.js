const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
    app.use(
        "/client/pageinfo",
        createProxyMiddleware({
            target: 'http://localhost:3001',
            changeOrigin: true
        })
    );
    app.use(
        "/client/category",
        createProxyMiddleware({
            target: 'http://localhost:3001',
            changeOrigin: true
        })
    );
    app.use(
        "/client/portfolio",
        createProxyMiddleware({
            target: 'http://localhost:3001',
            changeOrigin: true
        })
    );
}
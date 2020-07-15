module.exports = {
    devServer: {
        // --open --contentBase src --port 3000 --hot",
        open: true,
        contentBase: 'src',
        port: 905,
        hot: true,
        proxy: {
            '/api': {
                target: "http://59.111.92.205:8088",
                changeOrigin: true,
                pathRewrite: {
                    '^/api/': ''
                }
            }
        }
    },
}
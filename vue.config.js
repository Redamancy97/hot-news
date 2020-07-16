module.exports = {
    devServer: {
        // --open --contentBase src --port 3000 --hot",
        open: true,
        contentBase: 'src',
        port: 905,
        hot: true,
        proxy: {
            '/api': {
                target: "https://showme.myhope365.com",
                changeOrigin: true,
                // pathRewrite: {
                //     '^/api/': ''
                // }
            }
        }
    },
}
module.exports = {
    devServer: {
        // --open --contentBase src --port 3000 --hot",
        open: true,
        contentBase: 'src',
        port: 1005,
        hot: true,
        proxy: {
            '/api': {
                target: "https://showme.myhope365.com",
                changeOrigin: true
            },
            '/music-api': {
                target: 'http://59.111.92.205:8089',
                changeOrigin: true,
                pathRewrite: {
                    '^/music-api': ''
                }
            },
            '/astro': {
                target: 'https://api.jisuapi.com',
                changeOrigin: true,
                // pathRewrite: {
                //     "^/features-api": ''
                // }
            }
        }
    },
}
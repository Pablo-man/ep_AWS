const path = require('path')

module.exports = {
    resolve: {
        fallback: { 
            "zlib": false,
            "querystring": false,
            "assert": false,
            "buffer": false,
            "stream": false,
            "path": false,
            "crypto": false,
            "http": false,
            "url": false,
            "fs": false,
            "net": false,
            "util": false,
            "string_decoder": false,
            "async_hooks": false
        }
    },
    entry: './src/app.js',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    }
}
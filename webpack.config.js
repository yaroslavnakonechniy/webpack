const path = require('path');

module.export = {
    mode: 'development',
    entry: {
        filename: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index.js'
    }
}
var path = require('path')
var webpack = require('webpack')
var nodeExternals = require('webpack-node-externals')

module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/, 
                query: {
                    presets: ['env']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    target: 'node',
    externals: [nodeExternals()],
    node: {
      child_process: "empty",
      dgram: "empty",
      fs: "empty",
      net: "empty",
      tls: "empty"
    },
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
    
      host: 'localhost', // Defaults to `localhost`
      port: 3030, // Defaults to 3030
      proxy: {
        '^/api/*': {
          target: 'http://localhost:3030/api/',
          secure: false
        }
      }
    },
    // and separately, in your plugins section
    plugins: [
      new webpack.HotModuleReplacementPlugin({
        multiStep: true
      })
    ]
}
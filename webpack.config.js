const BrowserSyncPlugin = require('browser-sync-webpack-plugin')
const path = require('path');

var config = {
    //Firebase causing isssues with bundle size
    performance: {
      hints: false,
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    },
    // The entry point file described above
    entry: './src/index.js',
    // The location of the build folder described above
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        }
      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx'],
    },
    output: {
      path: path.resolve(__dirname, 'public/publicsrc'),
      filename: 'bundle.js'
    },
    plugins: [
      new BrowserSyncPlugin({
        // browse to http://localhost:3000/ during development,
        // ./public directory is being served
        //host: 'localhost',
        proxy: "localhost:5000",
        baseDir: ['public']
      })
    ]
  };
  
module.exports = (env, argv) => {
    // Optional and for development only. This provides the ability to
    // map the built code back to the original source format when debugging.
    
    if (argv.mode === 'development') {
        config.devtool = 'eval-source-map';
    }
  
    if (argv.mode === 'production') {
      //...
    }
  
    return config;
  };
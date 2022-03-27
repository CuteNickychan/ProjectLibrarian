const path = require('path');

var config = {
    // The entry point file described above
    entry: './src/index.js',
    // The location of the build folder described above
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
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
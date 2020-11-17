const path = require("path");

module.exports = {
  entry: './app/assets/scripts/App.js',
  output: {
    filename: 'bundled.js',
    path: path.resolve(__dirname, 'app')
  },
  mode: 'development',
  devServer: {
    before: function(app, server) {
      server._watch('./app/**/*.html');
    },
    contentBase: path.join(__dirname, 'app'),
    hot: true,
    port: 8080,
    host: '0.0.0.0',
    open: true
  },
  module: {
    rules: [
      {
        test: /\.(gif|png|jpg|jpeg|svg)$/i,
        use: 'file-loader'
      },
       {
         test: /\.scss$/i,
         use: [ 'style-loader', 'css-loader', 'sass-loader' ]
       },
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [ '@babel/preset-env' ],
            plugins: [ 'transform-class-properties' ]
          }
        }
      }
    ]
  }
}
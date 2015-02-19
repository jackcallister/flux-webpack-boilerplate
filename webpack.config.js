module.exports = {
  entry: './src/scripts/app.js',
  output: {
    filename: './dist/scripts/bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'jsx-loader' },
      { test: /\.scss$/, loader: "style!css!sass" }
    ]
  }
}

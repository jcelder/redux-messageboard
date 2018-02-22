module.exports = {
  entry: [
    './src/index.jsx',
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.jsx',
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'env'],
      },
    }],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
  },
};

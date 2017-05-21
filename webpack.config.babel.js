import webpack from 'webpack'
import path from 'path'

export default {
  entry: path.resolve(__dirname, 'src', 'main.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist')
  },
  module: {
    rules: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    port: 3000,
    hot: true,
    inline: true,
    historyApiFallback: true
  }
}

module.exports = {
  entry: './index.jsx',
  output: {
    path: __dirname,
    filename: 'demo.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: __dirname,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.svg$/,
        loader: 'url?limit=8192&name=images/[name].[ext]'
      },
    ]
  }
};

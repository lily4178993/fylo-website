module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        loader: 'file-loader',
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        options: {
          name: '/assets/[name][hash].[ext]',
        },
      },
    ],
  },
};

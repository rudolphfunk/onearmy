const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        include: [
          path.resolve(__dirname, "../src"),
          path.resolve(__dirname, "../.storybook")
        ],
        use: [{
          loader: require.resolve('babel-loader'),
          options: {
            presets: [['react-app', { flow: false, typescript: true }]],
          }
        },
        require.resolve("react-docgen-typescript-loader")
        ],
      },
    ],
  },
  resolve : {
    extensions : ['.ts', '.tsx', '.js', '.jsx']
  }
};
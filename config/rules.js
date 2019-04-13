const jsRule = {
  test: /\.jsx?$/,
  exclude: /(node_modules|bower_components|public\/)/,
  use: {
    loader: 'babel-loader',
    options: {
      babelrc: false,
      presets: [
        '@babel/preset-env',
        '@babel/preset-react',
      ],
      plugins: [
        require('@babel/plugin-proposal-class-properties').default,
        require('@babel/plugin-proposal-object-rest-spread').default,
        require('@babel/plugin-syntax-dynamic-import').default,
        require('react-loadable/babel').default,
      ],
    },
  },
}

module.exports = [
  jsRule
]

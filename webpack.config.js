const path = require('path');
const webpack = require('webpack')

module.exports = (env, argv) => {
  // argv.modeにはwebpackを実行したmodeが格納されている
  // 例えば webpack --mode development と実行すれば
  // argv.mode には 'development' が格納されている
  // そのためdevelopmentモードで実行したかどうかを判定できる
  const IS_DEVELOPMENT = argv.mode === 'development'

  return {
    // エントリーポイントの設定
    entry: './src/js/app.js',
    watch: IS_DEVELOPMENT ? true : false,
    // 出力の設定
    output: {
      // 出力するファイル名
      filename: 'bundle.js',
      // 出力先のパス（v2系以降は絶対パスを指定する必要がある）
      path: path.join(__dirname, 'dist')
    },
    // ローダーの設定
    module: {
      rules: [
        {
          // ローダーの処理対象ファイル
          test: /\.js$/,
          // ローダーの処理対象から外すディレクトリ
          exclude: /node_modules/,
          use: [
            {
              // 利用するローダー
              loader: 'babel-loader',
              // ローダーのオプション
              // 今回はbabel-loaderを利用しているため
              // babelのオプションを指定しているという認識で問題ない
              options: {
                presets: [['env', { modules: false }]]
              }
            }
          ]
        }
      ]
    },
    devServer: {
      contentBase: path.join(__dirname, 'dist'),
      compress: true,
      port: 9000
    }
  }
}

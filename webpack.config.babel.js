import { resolve } from 'path';
import ProgressBarPlugin from 'progress-bar-webpack-plugin';
import { getIfUtils } from 'webpack-config-utils';

module.exports = (env) => {
  const { ifProd, ifNotProd } = getIfUtils(env);

  return {
    context: resolve('src/assets'),
    entry: './js/index.js',
    output: {
      path: resolve('public'),
      filename: './bundle.js',
      publicPath: '/public/',
      pathinfo: ifNotProd()
    },
    resolve: {
      modules: ['node_modules'],
      alias: {
        TweenLite: 'gsap/src/minified/TweenLite.min.js',
        TweenMax: 'gsap/src/minified/TweenMax.min.js',
        TimelineLite: 'gsap/src/minified/TimelineLite.min.js',
        TimelineMax: 'gsap/src/minified/TimelineMax.min.js',
        ScrollMagic: 'scrollmagic/scrollmagic/minified/ScrollMagic.min.js',
        'animation.gsap': 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js',
        'debug.addIndicators': 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min.js'
      }
    },
    devtool: ifProd('source-map', 'eval'),
    module: {
      rules: [
        {
          test: /\.js$/,
          use: ['babel-loader'],
          exclude: /node_modules/
        }
      ]
    },
    plugins: [
      new ProgressBarPlugin()
    ]
  };
};

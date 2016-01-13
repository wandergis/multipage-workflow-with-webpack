/**
 * Created by WangMing on 15/12/29.
 */
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
for(key in config.entry){
  config.entry[key].unshift('webpack-dev-server/client?http://0.0.0.0:8090', "webpack/hot/dev-server");
}
config.devtool='#source-map';
config.plugins.push(new webpack.HotModuleReplacementPlugin());
config.plugins.push(new webpack.NoErrorsPlugin());
//http://192.168.1.6/openapi2/getregister/
// 相当于通过本地node服务代理请求
var proxy = [{
  path: "/api_function/*",
  target: "http://192.168.1.6:8084",
  host: "192.168.1.6"
},{
  path: "/apilib/*",
  target: "http://192.168.1.6:8084",
  host: "192.168.1.6"
}];
//启动服务
var app = new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: false,
  historyApiFallback: true,
  proxy:proxy,
  stats: { colors: true }
});
app.listen(8090, function(err, result) {
  if (err) {
    console.log(err);
  }
  console.log('Listening at http://localhost:8090');
});

//var express = require('express');
//var webpack = require('webpack');
//var config = require('./webpack.config');
//for (key in config.entry) {
//  config.entry[key].unshift('webpack-hot-middleware/client?reload=true');
//}
//config.plugins.push(new webpack.optimize.OccurenceOrderPlugin());
//config.plugins.push(new webpack.HotModuleReplacementPlugin());
//config.plugins.push(new webpack.NoErrorsPlugin());
//var compiler = webpack(config);
//var app = express();
//app.use('/', express.static(__dirname + '/dist'));
////启动服务
//app.use(require('webpack-dev-middleware')(compiler, {
//  hot: false,
//  noInfo: false,
//  publicPath: config.output.publicPath,
//  stats: {
//    colors: true
//  }
//}));
//app.use(require('webpack-hot-middleware')(compiler));
//app.listen(8090, function (err, result) {
//  if (err) {
//    console.log(err);
//  }
//  console.log('Listening at http://localhost:8090');
//});
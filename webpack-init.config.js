/**
 * Created by WangMing on 15/12/29.
 */
var path = require('path');
var os = require('os');
var fs = require('fs');
var cheerio = require('cheerio');
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin"); //将组件中的样式乖乖提取出来
var HtmlWebpackPlugin = require('html-webpack-plugin'); //html模板插入代码
var glob = require('glob');
//开发
var cdnpath = '';
//部署
//var cdnpath='//abwuliu.com:8081/';
//webpck插件
var plugins = [
  new webpack.optimize.CommonsChunkPlugin('vendors', 'js/vendors.js'),
  //将样式统一发布到style.css中
  new ExtractTextPlugin("[name].build.css", {
    allChunks: true,
    disable: false
  }),
  // 使用 ProvidePlugin 加载使用率高的依赖库
  new webpack.ProvidePlugin({
    $: "jquery",
    jQuery: "jquery",
    "window.jQuery": "jquery"
  })
];
var entries = {};

var entryFiles = glob.sync('src/pages/**/*.entry.js');

for (var i = 0; i < entryFiles.length; i++) {
  var filePath = entryFiles[i];
  if (os.platform() === 'win32') {
    key = filePath.substring(filePath.lastIndexOf('\/') + 1, filePath.lastIndexOf('.entry'));
  } else {
    key = filePath.substring(filePath.lastIndexOf(path.sep) + 1, filePath.lastIndexOf('.entry'));
  }
  entries[key] = [path.join(__dirname, filePath)];
}
for (var i in entries) {
  plugins.push(new HtmlWebpackPlugin({
    title: "",
    //template: 'src/' + i + '/' + i + '.tpl.html',
    templateContent: (function(i) {
      var header = fs.readFileSync("./src/templates/header.html", "utf-8");
      if (fs.existsSync('./src/pages/' + i + '/' + i + '.tpl.html')) {
        var content = fs.readFileSync('./src/pages/' + i + '/' + i + '.tpl.html', "utf-8");
      }
      var footer = fs.readFileSync("./src/templates/footer.html", "utf-8");
      var htmlcontent = header + content + footer;
      var $ = cheerio.load(htmlcontent, {
        normalizeWhitespace: false,
        xmlMode: false,
        decodeEntities: false
      });
      var reqstr = "//内容页的图片资源引入\n";
      $('img').each(function(i) {
        var imgsrc = $(this).attr("src").substring($(this).attr("src").lastIndexOf('/') + 1);
        var imgsrc = $(this).attr("src").substring($(this).attr("src").lastIndexOf('/') + 1);
        reqstr = reqstr + "require('./assets/images/" + imgsrc + "');\n";
        $(this).attr("src", "{%=o.webpack.publicPath+'images/" + imgsrc + "?'+o.webpack.hash %}");
      });
      reqstr = reqstr + "//引入结束\n";
      if (fs.existsSync('./src/pages/' + i + '/' + i + '.entry.js')) {
        var entrycontent = fs.readFileSync('./src/pages/' + i + '/' + i + '.entry.js', "utf-8");
        fs.writeFileSync('./src/pages/' + i + '/' + i + '.entry.js', reqstr + entrycontent);
      }
      return function() {
        return $.html();
      }
    })(i),
    filename: i + '.html', //index.entry => index.html
    hash: true,
    chunks: ['vendors', i] //只注入当前的chunk，index.html注入index.entry
  }))
}
entries.vendors = ['jquery', 'angular', 'jquery-placeholder'];
var buildPath = "/dist/";
//编译输出路径
module.exports = {
  debug: true,
  entry: entries,
  output: {
    path: __dirname + buildPath,
    filename: 'js/[name].build.js',
    publicPath: cdnpath,
    chunkFilename: "js/[name].js" //给require.ensure用
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: "ng-annotate"
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract(
        "style-loader", "css-loader!postcss-loader!cssnext-loader")
    }, {
      test: /\.(jpg|png|gif)$/,
      loader: "file-loader?name=images/[name].[ext]"
    }, {
      test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/font-woff&name=fonts/[name].[ext]'
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/octet-stream&name=fonts/[name].[ext]'
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader?name=fonts/[name].[ext]'
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=image/svg+xml&name=fonts/[name].[ext]'
    }, {
      test: /\.json$/,
      loader: 'json'
    }, {
      test: /\.(html|tpl)$/,
      loader: "ngtemplate!html"
    }]
  },
  resolve: {
    // require时省略的扩展名，如：require('module') 不需要module.js
    extension: ['', '.js'],
    //别名
    alias: {
      //'laypage':path.join(__dirname, "src/assets/libs/laypage/laypage"),
      //'layer':path.join(__dirname, "src/assets/libs/layer/layer")
    }
  },
  plugins: plugins
};
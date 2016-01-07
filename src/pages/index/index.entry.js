/**
 * Created by WangMing on 15/12/29.
 */
//引入样式重置文件
require('../../commoncss/normalize.css');
//引入插件的css
require('../../libs/layer/skin/layer.css');
require('../../libs/laypage/skin/laypage.css');
require('../../libs/cityPicker/pikaddress.css');
//引入插件
var layer = require('../../libs/layer/layer'); //弹窗插件
var laypage = require('../../libs/laypage/laypage'); //分页插件
var AAPcdPicker = require('../../libs/cityPicker/pikaddress'); //省市区选择插件
var districs = require('../../libs/cityPicker/distric.json'); //省市区文件

//引入自定义样式
require('./assets/css/index.css');

//引入angular的模块
require('./controllers/index.controller.js');
//angular主模块
angular.module('app', ['main']);

//ie8等不支持placeholder的封装
$('input, textarea').placeholder();

var begincity = new AAPcdPicker({
  field: document.getElementById('begincity'),
  districtsData: districs,
  districtsOften: ["北京市-北京市", "江苏省-南京市", "天津市-天津市", "江苏省-常州市"],
  onSelectDone: function() {
    $('#begincity').val(begincity._o.district);
    begincity.hide();
  }
});
$.ajax({
  type: "GET",
  url: "/openapi2/getregister/",
  data: {},
  dataType: "json",
  success: function(data) {
    alert(JSON.stringify(data));
  },
  error: function(err) {

  }
});
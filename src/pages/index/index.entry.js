/**
 * Created by WangMing on 15/12/29.
 */
require('./assets/css/index.css');
require('../../libs/layer/skin/layer.css');
require('../../libs/laypage/skin/laypage.css');
require('../../libs/cityPicker/pikaddress.css');
require('../../../node_modules/bootstrap/dist/css/bootstrap.css');
require('../../../node_modules/bootstrap/dist/js/bootstrap.js');
require('./assets/images/newpoi.png');
require('./assets/images/poi2.png');
var layer = require('../../libs/layer/layer');
var laypage = require('../../libs/laypage/laypage');
var AAPcdPicker = require('../../libs/cityPicker/pikaddress');
var districs = require('../../libs/cityPicker/distric.json');
var app = angular.module('app', []);
angular.module('app', []);
require('./controllers/index.controller');
$(function() {
  $('input, textarea').placeholder();
  var aaPcdPicker1 = new AAPcdPicker({
    field: document.getElementById('input1'),
    districtsData: districs,
    districtsOften: ["北京-北京", "江苏-南京", "天津-天津", "江苏-常州"],
    onSelectDone: function() {
      $('#input1').val(aaPcdPicker1._o.district);
      aaPcdPicker1.hide();
    }
  });

  $.ajax({
    type: "GET",
    url: "/openapi2/getregister/",
    data: {},
    dataType: "json",
    success: function (data) {
      alert(JSON.stringify(data));
    },
    error: function (err) {

    }
  })
  // alert(JSON.stringify({
  //   a: "dddd"
  // }))
  console.log("ddd");
  //询问框
  // layer.confirm('您是如何看待前端开发？', {
  //   btn: ['重要', '奇葩'] //按钮
  // }, function() {
  //   layer.msg('的确很重要', {
  //     icon: 1
  //   });
  // }, function() {
  //   layer.msg('也可以这样', {
  //     time: 20000, //20s后自动关闭
  //     btn: ['明白了', '知道了']
  //   });
  // });
  appendimg = function(page) {
    return '<img src="http://sentsin.qiniudn.com/laypage_' + (page - 1) + '.png"><br>'
  };
  //好像很实用的样子，后端的同学再也不用写分页逻辑了。
  laypage({
    cont: 'page11',
    pages: 18, //可以叫服务端把总页数放在某一个隐藏域，再获取。假设我们获取到的是18
    curr: function() { //通过url获取当前页，也可以同上（pages）方式获取
      var page = location.search.match(/page=(\d+)/);
      return page ? page[1] : 1;
    }(),
    jump: function(e, first) { //触发分页后的回调
      if (!first) { //一定要加此判断，否则初始时会无限刷新
        location.href = '?page=' + e.curr;
      }
    }
  });
});
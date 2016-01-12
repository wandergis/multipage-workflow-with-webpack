webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(3);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {//内容页的图片资源引入
	__webpack_require__(5);
	//引入结束
	/**
	 * Created by WangMing on 15/12/29.
	 */
	//引入样式重置文件
	__webpack_require__(6);
	__webpack_require__(7);
	//引入插件的css
	__webpack_require__(8);
	__webpack_require__(9);
	__webpack_require__(10);
	//引入插件
	var layer = __webpack_require__(11);//弹窗插件
	var laypage = __webpack_require__(12);//分页插件
	var AAPcdPicker = __webpack_require__(13);//省市区选择插件
	var districs = __webpack_require__(14);//省市区文件

	//引入自定义样式
	__webpack_require__(15);

	//引入angular的模块

	__webpack_require__(16);
	__webpack_require__(18);
	__webpack_require__(19);
	angular.module('app',['main']);
	//ie8等不支持placeholder的封装
	$('input, textarea').placeholder();

	var begincity = new AAPcdPicker({
	  field: document.getElementById('begincity'),
	  districtsData: districs,
	  districtsOften: ["北京市-北京市", "江苏省-南京市", "天津市-天津市", "江苏省-常州市"],
	  onSelectDone: function () {
	    $('#begincity').val(begincity._o.district);
	    begincity.hide();
	  }
	});
	//页面层-自定义
	layer.open({
	  type: 1,
	  title: false,
	  closeBtn: 1,
	  shadeClose: true,
	  area: ['400px'],
	  skin: 'yourclass',
	  //content:require('./index.html') //'<div ng-controller="LoginController as app">{{app.test}}<login-form></login-form></div>'
	  content:__webpack_require__(20) //'<div ng-controller="LoginController as app">{{app.test}}<login-form></login-form></div>'
	});
	$.ajax({
	  type: "GET",
	  url: "/api_function/getregister.php",
	  data: {},
	  dataType: "json",
	  success: function (data) {
	    console.log(JSON.stringify(data));
	  },
	  error: function (err) {

	  }
	});


	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 4 */,
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "images/newpoi.png";

/***/ },
/* 6 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 7 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 8 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 9 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 10 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(jQuery) {/*! layer-v2.1 弹层组件 License LGPL  http://layer.layui.com/ By 贤心 */
	;!function(a,b){"use strict";var c,d,e={getPath:function(){var a=document.scripts,b=a[a.length-1],c=b.src;if(!b.getAttribute("merge"))return c.substring(0,c.lastIndexOf("/")+1)}(),enter:function(a){13===a.keyCode&&a.preventDefault()},config:{},end:{},btn:["&#x786E;&#x5B9A;","&#x53D6;&#x6D88;"],type:["dialog","page","iframe","loading","tips"]},f={v:"2.1",ie6:!!a.ActiveXObject&&!a.XMLHttpRequest,index:0,path:e.getPath,config:function(a,b){var d=0;return a=a||{},f.cache=e.config=c.extend(e.config,a),f.path=e.config.path||f.path,"string"==typeof a.extend&&(a.extend=[a.extend]),f.use("skin/layer.css",a.extend&&a.extend.length>0?function g(){var c=a.extend;f.use(c[c[d]?d:d-1],d<c.length?function(){return++d,g}():b)}():b),this},use:function(a,b,d){var e=c("head")[0],a=a.replace(/\s/g,""),g=/\.css$/.test(a),h=document.createElement(g?"link":"script"),i="layui_layer_"+a.replace(/\.|\//g,"");return f.path?(g&&(h.rel="stylesheet"),h[g?"href":"src"]=/^http:\/\//.test(a)?a:f.path+a,h.id=i,c("#"+i)[0]||e.appendChild(h),function j(){(g?1989===parseInt(c("#"+i).css("width")):f[d||i])?function(){b&&b();try{g||e.removeChild(h)}catch(a){}}():setTimeout(j,100)}(),this):void 0},ready:function(a,b){var d="function"==typeof a;return d&&(b=a),f.config(c.extend(e.config,function(){return d?{}:{path:a}}()),b),this},alert:function(a,b,d){var e="function"==typeof b;return e&&(d=b),f.open(c.extend({content:a,yes:d},e?{}:b))},confirm:function(a,b,d,g){var h="function"==typeof b;return h&&(g=d,d=b),f.open(c.extend({content:a,btn:e.btn,yes:d,cancel:g},h?{}:b))},msg:function(a,d,g){var i="function"==typeof d,j=e.config.skin,k=(j?j+" "+j+"-msg":"")||"layui-layer-msg",l=h.anim.length-1;return i&&(g=d),f.open(c.extend({content:a,time:3e3,shade:!1,skin:k,title:!1,closeBtn:!1,btn:!1,end:g},i&&!e.config.skin?{skin:k+" layui-layer-hui",shift:l}:function(){return d=d||{},(-1===d.icon||d.icon===b&&!e.config.skin)&&(d.skin=k+" "+(d.skin||"layui-layer-hui")),d}()))},load:function(a,b){return f.open(c.extend({type:3,icon:a||0,shade:.01},b))},tips:function(a,b,d){return f.open(c.extend({type:4,content:[a,b],closeBtn:!1,time:3e3,maxWidth:210},d))}},g=function(a){var b=this;b.index=++f.index,b.config=c.extend({},b.config,e.config,a),b.creat()};g.pt=g.prototype;var h=["layui-layer",".layui-layer-title",".layui-layer-main",".layui-layer-dialog","layui-layer-iframe","layui-layer-content","layui-layer-btn","layui-layer-close"];h.anim=["layui-anim","layui-anim-01","layui-anim-02","layui-anim-03","layui-anim-04","layui-anim-05","layui-anim-06"],g.pt.config={type:0,shade:.3,fix:!0,move:h[1],title:"&#x4FE1;&#x606F;",offset:"auto",area:"auto",closeBtn:1,time:0,zIndex:19891014,maxWidth:360,shift:0,icon:-1,scrollbar:!0,tips:2},g.pt.vessel=function(a,b){var c=this,d=c.index,f=c.config,g=f.zIndex+d,i="object"==typeof f.title,j=f.maxmin&&(1===f.type||2===f.type),k=f.title?'<div class="layui-layer-title" style="'+(i?f.title[1]:"")+'">'+(i?f.title[0]:f.title)+"</div>":"";return f.zIndex=g,b([f.shade?'<div class="layui-layer-shade" id="layui-layer-shade'+d+'" times="'+d+'" style="'+("z-index:"+(g-1)+"; background-color:"+(f.shade[1]||"#000")+"; opacity:"+(f.shade[0]||f.shade)+"; filter:alpha(opacity="+(100*f.shade[0]||100*f.shade)+");")+'"></div>':"",'<div class="'+h[0]+" "+(h.anim[f.shift]||"")+(" layui-layer-"+e.type[f.type])+(0!=f.type&&2!=f.type||f.shade?"":" layui-layer-border")+" "+(f.skin||"")+'" id="'+h[0]+d+'" type="'+e.type[f.type]+'" times="'+d+'" showtime="'+f.time+'" conType="'+(a?"object":"string")+'" style="z-index: '+g+"; width:"+f.area[0]+";height:"+f.area[1]+(f.fix?"":";position:absolute;")+'">'+(a&&2!=f.type?"":k)+'<div class="layui-layer-content'+(0==f.type&&-1!==f.icon?" layui-layer-padding":"")+(3==f.type?" layui-layer-loading"+f.icon:"")+'">'+(0==f.type&&-1!==f.icon?'<i class="layui-layer-ico layui-layer-ico'+f.icon+'"></i>':"")+(1==f.type&&a?"":f.content||"")+'</div><span class="layui-layer-setwin">'+function(){var a=j?'<a class="layui-layer-min" href="javascript:;"><cite></cite></a><a class="layui-layer-ico layui-layer-max" href="javascript:;"></a>':"";return f.closeBtn&&(a+='<a class="layui-layer-ico '+h[7]+" "+h[7]+(f.title?f.closeBtn:4==f.type?"1":"2")+'" href="javascript:;"></a>'),a}()+"</span>"+(f.btn?function(){var a="";"string"==typeof f.btn&&(f.btn=[f.btn]);for(var b=0,c=f.btn.length;c>b;b++)a+='<a class="'+h[6]+b+'">'+f.btn[b]+"</a>";return'<div class="'+h[6]+'">'+a+"</div>"}():"")+"</div>"],k),c},g.pt.creat=function(){var a=this,b=a.config,g=a.index,i=b.content,j="object"==typeof i;switch("string"==typeof b.area&&(b.area="auto"===b.area?["",""]:[b.area,""]),b.type){case 0:b.btn="btn"in b?b.btn:e.btn[0],f.closeAll("dialog");break;case 2:var i=b.content=j?b.content:[b.content||"http://layer.layui.com","auto"];b.content='<iframe scrolling="'+(b.content[1]||"auto")+'" allowtransparency="true" id="'+h[4]+g+'" name="'+h[4]+g+'" onload="this.className=\'\';" class="layui-layer-load" frameborder="0" src="'+b.content[0]+'"></iframe>';break;case 3:b.title=!1,b.closeBtn=!1,-1===b.icon&&0===b.icon,f.closeAll("loading");break;case 4:j||(b.content=[b.content,"body"]),b.follow=b.content[1],b.content=b.content[0]+'<i class="layui-layer-TipsG"></i>',b.title=!1,b.shade=!1,b.fix=!1,b.tips="object"==typeof b.tips?b.tips:[b.tips,!0],b.tipsMore||f.closeAll("tips")}a.vessel(j,function(d,e){c("body").append(d[0]),j?function(){2==b.type||4==b.type?function(){c("body").append(d[1])}():function(){i.parents("."+h[0])[0]||(i.show().addClass("layui-layer-wrap").wrap(d[1]),c("#"+h[0]+g).find("."+h[5]).before(e))}()}():c("body").append(d[1]),a.layero=c("#"+h[0]+g),b.scrollbar||h.html.css("overflow","hidden").attr("layer-full",g)}).auto(g),2==b.type&&f.ie6&&a.layero.find("iframe").attr("src",i[0]),c(document).off("keydown",e.enter).on("keydown",e.enter),a.layero.on("keydown",function(a){c(document).off("keydown",e.enter)}),4==b.type?a.tips():a.offset(),b.fix&&d.on("resize",function(){a.offset(),(/^\d+%$/.test(b.area[0])||/^\d+%$/.test(b.area[1]))&&a.auto(g),4==b.type&&a.tips()}),b.time<=0||setTimeout(function(){f.close(a.index)},b.time),a.move().callback()},g.pt.auto=function(a){function b(a){a=g.find(a),a.height(i[1]-j-k-2*(0|parseFloat(a.css("padding"))))}var e=this,f=e.config,g=c("#"+h[0]+a);""===f.area[0]&&f.maxWidth>0&&(/MSIE 7/.test(navigator.userAgent)&&f.btn&&g.width(g.innerWidth()),g.outerWidth()>f.maxWidth&&g.width(f.maxWidth));var i=[g.innerWidth(),g.innerHeight()],j=g.find(h[1]).outerHeight()||0,k=g.find("."+h[6]).outerHeight()||0;switch(f.type){case 2:b("iframe");break;default:""===f.area[1]?f.fix&&i[1]>=d.height()&&(i[1]=d.height(),b("."+h[5])):b("."+h[5])}return e},g.pt.offset=function(){var a=this,b=a.config,c=a.layero,e=[c.outerWidth(),c.outerHeight()],f="object"==typeof b.offset;a.offsetTop=(d.height()-e[1])/2,a.offsetLeft=(d.width()-e[0])/2,f?(a.offsetTop=b.offset[0],a.offsetLeft=b.offset[1]||a.offsetLeft):"auto"!==b.offset&&(a.offsetTop=b.offset,"rb"===b.offset&&(a.offsetTop=d.height()-e[1],a.offsetLeft=d.width()-e[0])),b.fix||(a.offsetTop=/%$/.test(a.offsetTop)?d.height()*parseFloat(a.offsetTop)/100:parseFloat(a.offsetTop),a.offsetLeft=/%$/.test(a.offsetLeft)?d.width()*parseFloat(a.offsetLeft)/100:parseFloat(a.offsetLeft),a.offsetTop+=d.scrollTop(),a.offsetLeft+=d.scrollLeft()),c.css({top:a.offsetTop,left:a.offsetLeft})},g.pt.tips=function(){var a=this,b=a.config,e=a.layero,f=[e.outerWidth(),e.outerHeight()],g=c(b.follow);g[0]||(g=c("body"));var i={width:g.outerWidth(),height:g.outerHeight(),top:g.offset().top,left:g.offset().left},j=e.find(".layui-layer-TipsG"),k=b.tips[0];b.tips[1]||j.remove(),i.autoLeft=function(){i.left+f[0]-d.width()>0?(i.tipLeft=i.left+i.width-f[0],j.css({right:12,left:"auto"})):i.tipLeft=i.left},i.where=[function(){i.autoLeft(),i.tipTop=i.top-f[1]-10,j.removeClass("layui-layer-TipsB").addClass("layui-layer-TipsT").css("border-right-color",b.tips[1])},function(){i.tipLeft=i.left+i.width+10,i.tipTop=i.top,j.removeClass("layui-layer-TipsL").addClass("layui-layer-TipsR").css("border-bottom-color",b.tips[1])},function(){i.autoLeft(),i.tipTop=i.top+i.height+10,j.removeClass("layui-layer-TipsT").addClass("layui-layer-TipsB").css("border-right-color",b.tips[1])},function(){i.tipLeft=i.left-f[0]-10,i.tipTop=i.top,j.removeClass("layui-layer-TipsR").addClass("layui-layer-TipsL").css("border-bottom-color",b.tips[1])}],i.where[k-1](),1===k?i.top-(d.scrollTop()+f[1]+16)<0&&i.where[2]():2===k?d.width()-(i.left+i.width+f[0]+16)>0||i.where[3]():3===k?i.top-d.scrollTop()+i.height+f[1]+16-d.height()>0&&i.where[0]():4===k&&f[0]+16-i.left>0&&i.where[1](),e.find("."+h[5]).css({"background-color":b.tips[1],"padding-right":b.closeBtn?"30px":""}),e.css({left:i.tipLeft,top:i.tipTop})},g.pt.move=function(){var a=this,b=a.config,e={setY:0,moveLayer:function(){var a=e.layero,b=parseInt(a.css("margin-left")),c=parseInt(e.move.css("left"));0===b||(c-=b),"fixed"!==a.css("position")&&(c-=a.parent().offset().left,e.setY=0),a.css({left:c,top:parseInt(e.move.css("top"))-e.setY})}},f=a.layero.find(b.move);return b.move&&f.attr("move","ok"),f.css({cursor:b.move?"move":"auto"}),c(b.move).on("mousedown",function(a){if(a.preventDefault(),"ok"===c(this).attr("move")){e.ismove=!0,e.layero=c(this).parents("."+h[0]);var f=e.layero.offset().left,g=e.layero.offset().top,i=e.layero.outerWidth()-6,j=e.layero.outerHeight()-6;c("#layui-layer-moves")[0]||c("body").append('<div id="layui-layer-moves" class="layui-layer-moves" style="left:'+f+"px; top:"+g+"px; width:"+i+"px; height:"+j+'px; z-index:2147483584"></div>'),e.move=c("#layui-layer-moves"),b.moveType&&e.move.css({visibility:"hidden"}),e.moveX=a.pageX-e.move.position().left,e.moveY=a.pageY-e.move.position().top,"fixed"!==e.layero.css("position")||(e.setY=d.scrollTop())}}),c(document).mousemove(function(a){if(e.ismove){var c=a.pageX-e.moveX,f=a.pageY-e.moveY;if(a.preventDefault(),!b.moveOut){e.setY=d.scrollTop();var g=d.width()-e.move.outerWidth(),h=e.setY;0>c&&(c=0),c>g&&(c=g),h>f&&(f=h),f>d.height()-e.move.outerHeight()+e.setY&&(f=d.height()-e.move.outerHeight()+e.setY)}e.move.css({left:c,top:f}),b.moveType&&e.moveLayer(),c=f=g=h=null}}).mouseup(function(){try{e.ismove&&(e.moveLayer(),e.move.remove(),b.moveEnd&&b.moveEnd()),e.ismove=!1}catch(a){e.ismove=!1}}),a},g.pt.callback=function(){function a(){var a=g.cancel&&g.cancel(b.index);a===!1||f.close(b.index)}var b=this,d=b.layero,g=b.config;b.openLayer(),g.success&&(2==g.type?d.find("iframe").on("load",function(){g.success(d,b.index)}):g.success(d,b.index)),f.ie6&&b.IE6(d),d.find("."+h[6]).children("a").on("click",function(){var e=c(this).index();g["btn"+(e+1)]&&g["btn"+(e+1)](b.index,d),0===e?g.yes?g.yes(b.index,d):f.close(b.index):1===e?a():g["btn"+(e+1)]||f.close(b.index)}),d.find("."+h[7]).on("click",a),g.shadeClose&&c("#layui-layer-shade"+b.index).on("click",function(){f.close(b.index)}),d.find(".layui-layer-min").on("click",function(){f.min(b.index,g),g.min&&g.min(d)}),d.find(".layui-layer-max").on("click",function(){c(this).hasClass("layui-layer-maxmin")?(f.restore(b.index),g.restore&&g.restore(d)):(f.full(b.index,g),g.full&&g.full(d))}),g.end&&(e.end[b.index]=g.end)},e.reselect=function(){c.each(c("select"),function(a,b){var d=c(this);d.parents("."+h[0])[0]||1==d.attr("layer")&&c("."+h[0]).length<1&&d.removeAttr("layer").show(),d=null})},g.pt.IE6=function(a){function b(){a.css({top:f+(e.config.fix?d.scrollTop():0)})}var e=this,f=a.offset().top;b(),d.scroll(b),c("select").each(function(a,b){var d=c(this);d.parents("."+h[0])[0]||"none"===d.css("display")||d.attr({layer:"1"}).hide(),d=null})},g.pt.openLayer=function(){var a=this;f.zIndex=a.config.zIndex,f.setTop=function(a){var b=function(){f.zIndex++,a.css("z-index",f.zIndex+1)};return f.zIndex=parseInt(a[0].style.zIndex),a.on("mousedown",b),f.zIndex}},e.record=function(a){var b=[a.outerWidth(),a.outerHeight(),a.position().top,a.position().left+parseFloat(a.css("margin-left"))];a.find(".layui-layer-max").addClass("layui-layer-maxmin"),a.attr({area:b})},e.rescollbar=function(a){h.html.attr("layer-full")==a&&(h.html[0].style.removeProperty?h.html[0].style.removeProperty("overflow"):h.html[0].style.removeAttribute("overflow"),h.html.removeAttr("layer-full"))},a.layer=f,f.getChildFrame=function(a,b){return b=b||c("."+h[4]).attr("times"),c("#"+h[0]+b).find("iframe").contents().find(a)},f.getFrameIndex=function(a){return c("#"+a).parents("."+h[4]).attr("times")},f.iframeAuto=function(a){if(a){var b=f.getChildFrame("html",a).outerHeight(),d=c("#"+h[0]+a),e=d.find(h[1]).outerHeight()||0,g=d.find("."+h[6]).outerHeight()||0;d.css({height:b+e+g}),d.find("iframe").css({height:b})}},f.iframeSrc=function(a,b){c("#"+h[0]+a).find("iframe").attr("src",b)},f.style=function(a,b){var d=c("#"+h[0]+a),f=d.attr("type"),g=d.find(h[1]).outerHeight()||0,i=d.find("."+h[6]).outerHeight()||0;(f===e.type[1]||f===e.type[2])&&(d.css(b),f===e.type[2]&&d.find("iframe").css({height:parseFloat(b.height)-g-i}))},f.min=function(a,b){var d=c("#"+h[0]+a),g=d.find(h[1]).outerHeight()||0;e.record(d),f.style(a,{width:180,height:g,overflow:"hidden"}),d.find(".layui-layer-min").hide(),"page"===d.attr("type")&&d.find(h[4]).hide(),e.rescollbar(a)},f.restore=function(a){var b=c("#"+h[0]+a),d=b.attr("area").split(",");b.attr("type");f.style(a,{width:parseFloat(d[0]),height:parseFloat(d[1]),top:parseFloat(d[2]),left:parseFloat(d[3]),overflow:"visible"}),b.find(".layui-layer-max").removeClass("layui-layer-maxmin"),b.find(".layui-layer-min").show(),"page"===b.attr("type")&&b.find(h[4]).show(),e.rescollbar(a)},f.full=function(a){var b,g=c("#"+h[0]+a);e.record(g),h.html.attr("layer-full")||h.html.css("overflow","hidden").attr("layer-full",a),clearTimeout(b),b=setTimeout(function(){var b="fixed"===g.css("position");f.style(a,{top:b?0:d.scrollTop(),left:b?0:d.scrollLeft(),width:d.width(),height:d.height()}),g.find(".layui-layer-min").hide()},100)},f.title=function(a,b){var d=c("#"+h[0]+(b||f.index)).find(h[1]);d.html(a)},f.close=function(a){var b=c("#"+h[0]+a),d=b.attr("type");if(b[0]){if(d===e.type[1]&&"object"===b.attr("conType")){b.children(":not(."+h[5]+")").remove();for(var g=0;2>g;g++)b.find(".layui-layer-wrap").unwrap().hide()}else{if(d===e.type[2])try{var i=c("#"+h[4]+a)[0];i.contentWindow.document.write(""),i.contentWindow.close(),b.find("."+h[5])[0].removeChild(i)}catch(j){}b[0].innerHTML="",b.remove()}c("#layui-layer-moves, #layui-layer-shade"+a).remove(),f.ie6&&e.reselect(),e.rescollbar(a),c(document).off("keydown",e.enter),"function"==typeof e.end[a]&&e.end[a](),delete e.end[a]}},f.closeAll=function(a){c.each(c("."+h[0]),function(){var b=c(this),d=a?b.attr("type")===a:1;d&&f.close(b.attr("times")),d=null})},e.run=function(){c=jQuery,d=c(a),h.html=c("html"),f.open=function(a){var b=new g(a);return b.index}}, true?!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){return e.run(),f}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):function(){e.run(),f.use("skin/layer.css")}()}(window);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*! layPage-v1.3.0 分页组件 License MIT  http://laypage.layui.com/ By 贤心 */
	;!function () {
	  "use strict";
	  function a(d) {
	   new f(d)
	  }

	  a.v = "1.3";
	  var b = document, c = "getElementById", d = "getElementsByTagName", e = 0, f = function (a) {
	    var b = this, c = b.config = a || {};
	    c.item = e++, b.render(!0)
	  };
	  f.on = function (a, b, c) {
	    return a.attachEvent ? a.attachEvent("on" + b, function () {
	      c.call(a, window.even)
	    }) : a.addEventListener(b, c, !1), f
	  }, f.getpath = function () {
	    var a = document.scripts, b = a[a.length - 1].src;
	    return b.substring(0, b.lastIndexOf("/") + 1)
	  }(),  f.prototype.type = function () {
	    var a = this.config;
	    return "object" == typeof a.cont ? void 0 === a.cont.length ? 2 : 3 : void 0
	  }, f.prototype.view = function () {
	    var b = this, c = b.config, d = [], e = {};
	    if (c.pages = 0 | c.pages, c.curr = 0 | c.curr || 1, c.groups = "groups" in c ? 0 | c.groups : 5, c.first = "first" in c ? c.first : "&#x9996;&#x9875;", c.last = "last" in c ? c.last : "&#x5C3E;&#x9875;", c.prev = "prev" in c ? c.prev : "&#x4E0A;&#x4E00;&#x9875;", c.next = "next" in c ? c.next : "&#x4E0B;&#x4E00;&#x9875;", c.pages <= 1)return "";
	    for (c.groups > c.pages && (c.groups = c.pages), e.index = Math.ceil((c.curr + (c.groups > 1 && c.groups !== c.pages ? 1 : 0)) / (0 === c.groups ? 1 : c.groups)), c.curr > 1 && c.prev && d.push('<a href="javascript:;" class="laypage_prev" data-page="' + (c.curr - 1) + '">' + c.prev + "</a>"), e.index > 1 && c.first && 0 !== c.groups && d.push('<a href="javascript:;" class="laypage_first" data-page="1"  title="&#x9996;&#x9875;">' + c.first + "</a><span>&#x2026;</span>"), e.poor = Math.floor((c.groups - 1) / 2), e.start = e.index > 1 ? c.curr - e.poor : 1, e.end = e.index > 1 ? function () {
	      var a = c.curr + (c.groups - e.poor - 1);
	      return a > c.pages ? c.pages : a
	    }() : c.groups, e.end - e.start < c.groups - 1 && (e.start = e.end - c.groups + 1); e.start <= e.end; e.start++)e.start === c.curr ? d.push('<span class="laypage_curr" ' + (/^#/.test(c.skin) ? 'style="background-color:' + c.skin + '"' : "") + ">" + e.start + "</span>") : d.push('<a href="javascript:;" data-page="' + e.start + '">' + e.start + "</a>");
	    return c.pages > c.groups && e.end < c.pages && c.last && 0 !== c.groups && d.push('<span>&#x2026;</span><a href="javascript:;" class="laypage_last" title="&#x5C3E;&#x9875;"  data-page="' + c.pages + '">' + c.last + "</a>"), e.flow = !c.prev && 0 === c.groups, (c.curr !== c.pages && c.next || e.flow) && d.push(function () {
	      return e.flow && c.curr === c.pages ? '<span class="page_nomore" title="&#x5DF2;&#x6CA1;&#x6709;&#x66F4;&#x591A;">' + c.next + "</span>" : '<a href="javascript:;" class="laypage_next" data-page="' + (c.curr + 1) + '">' + c.next + "</a>"
	    }()), '<div name="laypage' + a.v + '" class="laypage_main laypageskin_' + (c.skin ? function (a) {
	      return /^#/.test(a) ? "molv" : a
	    }(c.skin) : "default") + '" id="laypage_' + b.config.item + '">' + d.join("") + function () {
	      return c.skip ? '<span class="laypage_total"><label>&#x5230;&#x7B2C;</label><input type="number" min="1" onkeyup="this.value=this.value.replace(/\\D/, \'\');" class="laypage_skip"><label>&#x9875;</label><button type="button" class="laypage_btn">&#x786e;&#x5b9a;</button></span>' : ""
	    }() + "</div>"
	  }, f.prototype.jump = function (a) {
	    if (a) {
	      for (var b = this, c = b.config, e = a.children, g = a[d]("button")[0], h = a[d]("input")[0], i = 0, j = e.length; j > i; i++)"a" === e[i].nodeName.toLowerCase() && f.on(e[i], "click", function () {
	        var a = 0 | this.getAttribute("data-page");
	        c.curr = a, b.render()
	      });
	      g && f.on(g, "click", function () {
	        var a = 0 | h.value.replace(/\s|\D/g, "");
	        a && a <= c.pages && (c.curr = a, b.render())
	      })
	    }
	  }, f.prototype.render = function (a) {
	    var d = this, e = d.config, f = d.type(), g = d.view();
	    2 === f ? e.cont.innerHTML = g : 3 === f ? e.cont.html(g) : b[c](e.cont).innerHTML = g, e.jump && e.jump(e, a), d.jump(b[c]("laypage_" + e.item)), e.hash && !a && (location.hash = "!" + e.hash + "=" + e.curr)
	  },  true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    return a
	  }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : "undefined" != typeof exports ? module.exports = a : window.laypage = a
	}();

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {/**
	 * Created by chenliang on 7/7/15.
	 */
	(function (root, factory) {
		if (true) {
			module.exports = factory();
		} else if (typeof define === 'function' && define.amd) {
			// AMD. Register as an anonymous module.
			define(function () {
				return factory();
			});
		} else {
			root.AAPcdPicker = factory();
		}
	}(this, function () {


		/*
		 * CSS class name constants
		 */
		var kTABS = 'pikaddress-tabs',
			kTAB = 'pikaddress-tab',
			kTAB__SELECTED = 'pikaddress-tab--selected',
			kTAB_OFTEN = 'pikaddress-tabOften',
			kCONTENT_OFTEN = 'pikaddress-contentOften',
			kTAB_PROVINCE = 'pikaddress-tabProvince',
			kCONTENT_PROVINCE = 'pikaddress-contentProvince',
			kTAB_CITY = 'pikaddress-tabCity',
			kCONTENT_CITY = 'pikaddress-contentCity',
			kTAB_COUNTRY = 'pikaddress-tabCountry',
			kCONTENT_COUNTRY = 'pikaddress-contentCountry',
			kDOMADDRESS = 'pikaddress-address',
			kDOMADDRESS__SELECTED = 'pikaddress-address--selected',
			KDOMADDRESS__HOVER = 'pikaddress-address--hover';

		/*
		 * Default settings
		 */
		var defaults = {
			filed: null,
			districtsData: null,
			district: null,
			districtOften: null,
			onSelectDone: null,
			onFieldFocus: null,
		};

		/*
		 * helper method
		 */

		/**
		 * Determine if disA is or contained in disB
		 *
		 * Because the district data is always in form of "Province-city-country", so just compare them with the String method
		 * @param disA
		 * @param disB
		 */
		isDistrictContained = function (disA, disB) {
			if(!disA || !disB) return false;
			return disB.indexOf(disA) != -1 ? true : false;
		}

		/**
		 * templating functions to abstract HTML rendering
		 */
		renderTabs = function () {
			var $tabs = $('<div />', {
				'class': 'pikaddress-tabs clearfix'
			});

			var $tabOften = $('<div />', {
				'class': 'pikaddress-tab pikaddress-tabOften pikaddress-tab--selected',
			}).append('<span class="pikaddress-tab-sapn">常用</span>');
			;

			var $tabProvince = $('<div />', {
				'class': 'pikaddress-tab pikaddress-tabProvince',
			}).append('<span class="pikaddress-tab-sapn">省</span>');

			var $tabCity = $('<div />', {
				'class': 'pikaddress-tab pikaddress-tabCity',
			}).append('<span class="pikaddress-tab-sapn">市</span>');
			;

			var $tabCountry = $('<div />', {
				'class': 'pikaddress-tab pikaddress-tabCountry',
			}).append('<span class="pikaddress-tab-sapn">区县</span>');
			;

			$tabs.append($tabOften, $tabProvince, $tabCity, $tabCountry);
			return $tabs;
		};

		renderContentOften = function (data) {
			var $eleOften = $('<div />', {
				'class': kCONTENT_OFTEN,
			})
			var selectedDistrict = data.district;
			var districtArray = data.districtsOften;
			for (var i = 0; i < districtArray.length; i++) {
				var district = districtArray[i];
				var $districtEle = $('<span/>', {
					'class': kDOMADDRESS + (isDistrictContained( district , selectedDistrict) ? ' ' + kDOMADDRESS__SELECTED : ''),
					'data-district': district,
					html: district.split('-').slice(-1)[0]
				});

				$eleOften.append($districtEle);
			}
			return $eleOften;
		};

		renderContentProvince = function (data) {
			var $eleProvince = $('<div />', {
				'class': kCONTENT_PROVINCE,
			});

			var districts = data.districtsData;
			var selectedDistrict = data.district;

			for (var i = 0; i < districts.length; i++) {
				var district = districts[i];
				var provinceName = district['name'];
				var $districtEle = $('<span/>', {
					'class': kDOMADDRESS + (isDistrictContained(provinceName, selectedDistrict)? ' ' + kDOMADDRESS__SELECTED : ''),
					'data-district': provinceName, // eg: '江苏省'
					html: provinceName
				});
				$eleProvince.append($districtEle);
			}
			return $eleProvince;

		};

		renderContentCity = function (data) {
			var $eleCity = $('<div />', {
				'class': kCONTENT_CITY,
				backgroundColor: 'blue'
			})
			var provinceName = getProvinceName(data.district),
				citysInProvince = getCitiesOfProvince(provinceName, data.districtsData);

			for (var i = 0; i < citysInProvince.length; i++) {
				var cityName = citysInProvince[i]['name'];
				var $cityEle = $('<span/>', {
					'class': kDOMADDRESS + (isDistrictContained(cityName, data.district)? ' ' + kDOMADDRESS__SELECTED : ''),
					'data-district': provinceName + '-' + cityName,
					html: cityName
				});
				$eleCity.append($cityEle);
			}
			return $eleCity;

		};

		renderContentCountry = function (data) {
			var $eleCountry = $('<div />', {
				'class': kCONTENT_COUNTRY,
				backgroundColor: 'red'
			})

			var provinceName = getProvinceName(data.district),
				cityName = getCityName(data.district),
				countriesInCity = getCountriesOfCity(provinceName, cityName, data.districtsData);

			for (var i = 0; i < countriesInCity.length; i++) {
				var countryName = countriesInCity[i];
				var $countryEle = $('<span/>', {
					'class': kDOMADDRESS + (isDistrictContained(countryName , data.district) ? ' ' + kDOMADDRESS__SELECTED : ''),
					'data-district': provinceName + '-' + cityName + '-' + countryName,
					html: countryName
				});
				$eleCountry.append($countryEle);
			}
			return $eleCountry;
		};
		getProvinceName = function (district) {
			return district.split('-')[0];
		};
		getCityName = function (district) { // note: must ensure that have city
			return district.split('-')[1];
		};
		getCountryName = function (distric) {// note: must ensure that have country after split
			return distric.split('-')[2];
		};
		getCitiesOfProvince = function (provinceName, data) {
			var cities = [];
			for (var i = 0; i < data.length; i++) {
				var pName = data[i]['name'];
				if (pName == provinceName) {
					cities = data[i]['city'];
					break;
				}
			}
			return cities;
		};
		getCountriesOfCity = function (provinceName, cityName, data) {
			var cities = getCitiesOfProvince(provinceName, data),
				countries = [];
			for (var i = 0; i < cities.length; i++) {
				if (cities[i]['name'] == cityName) {
					countries = cities[i]['area']
					break;
				}
			}
			return countries;
		};


		var isClickOnElement = function (e, ele) {
			var x = e.clientX;
			var y = e.clientY;
			var eleW = $(ele).width();
			var eleH = $(ele).height();
			var eleL = $(ele).position().left;
			var eleT = $(ele).position().top;
			if ((eleL <= x && x <= eleL + eleW) && (eleT <= y && y <= eleT + eleH)) {
				return true;
			} else {
				return false;
			}
		}

		/*
		 * AAPcdPicker constructor
		 */
		 AAPcdPicker = function (options) {
			var self = this,
				opts = this.config(options);


			self._onClick = function (e) {
				e.stopPropagation();  //防止 click 事件冒泡触发 ._onDocumentClick 方法执行
				var $target = $(e.target);

				// case1: 点击tab
				if ($target.hasClass(kTAB) || $target.parent().hasClass(kTAB)) {
					self.clickTab($target);
				}

				// case2: 点击district-address
				if ($target.hasClass(kDOMADDRESS)) {
					var selectedDistrict = $target.attr('data-district');
					self.setDistrict(selectedDistrict);
				};

				self._c = true; // 用这个变量来阻止 blur 事件触发的函数隐藏该组件

			};

			self._onDocumentClick = function (e) {
				var pEl = e.target;
				if (!pEl) return;

				if (pEl === opts.field) {
					return;
				}

				do {
					if ($(pEl).hasClass('pikaddress')) {
						return;
					}
				}
				while ((pEl = pEl.parentNode));
				self.hide();
			}

			self._onFieldClick = function (e) {
				e.stopPropagation(); //防止 click 事件冒泡触发 ._onDocumentClick 方法执行
				if (self._o.onFieldFocus) {
					self._o.onFieldFocus();
				}
				if(self._v == true) return;
				self.show();
			}

			self._onFieldBlur = function() {
				if(self._o.onFieldBlur) {
					self._o.onFieldBlur();
				}

				if(!self._c) {
					self.hide();
				}
				self._c = false;
			}

			self.el = $('<div />', {
				'class': 'pikaddress'
			});
			self.el.appendTo($(document.body));
	    self.el.hide();
			self.el.on('mousedown', self._onClick);
			opts.$field.on('click', self._onFieldClick);
			opts.$field.on('focus', self._onFieldClick);
			opts.$field.on('blur', self._onFieldBlur);
		}


		AAPcdPicker.prototype = {
			config: function (options) {
				this._o = $.extend({}, defaults, options);
				this._o.$field = $(this._o.field);
				return this._o;
			},

			//
			setSelectedTab: function (tabname) {
				this._o.selectedTabname = tabname;
				var $tabs = this.el.find('.pikaddress-tab'),
					$tab = this.el.find('.' + tabname);
				$tabs.removeClass('pikaddress-tab--selected');
				$tab.addClass('pikaddress-tab--selected');

				var $contentContainer = this.el.find('.pikaddress-content');
				$contentContainer.empty();

				if (tabname == kTAB_OFTEN) {
					$contentContainer.append(renderContentOften(this._o));
				}
				if (tabname == kTAB_PROVINCE) {
					$contentContainer.append(renderContentProvince(this._o));
				}
				if (tabname == kTAB_CITY) {
					$contentContainer.append(renderContentCity(this._o));
				}
				if (tabname == kTAB_COUNTRY) {
					$contentContainer.append(renderContentCountry(this._o));
				}
			},
			switchToSelectedTabContent: function () {
				var $selectedTab = this.el.find('.' + kTAB__SELECTED);
				var selectedTabName = '';
				if ($selectedTab.hasClass(kTAB_OFTEN)) {
					selectedTabName = kTAB_OFTEN;
				}
				if ($selectedTab.hasClass(kTAB_PROVINCE)) {
					selectedTabName = kTAB_PROVINCE;
				}
				if ($selectedTab.hasClass(kTAB_CITY)) {
					selectedTabName = kTAB_CITY;
				}
				if ($selectedTab.hasClass(kTAB_COUNTRY)) {
					selectedTabName = kTAB_COUNTRY;
				}
				this.setSelectedTab(selectedTabName)

			},

			// refresh the view
			draw: function () {
				var $el = $(this.el);

				var $tabs = renderTabs();
				$el.empty();
				$el.append($tabs);

				var $contentContainer = $('<div/>', {
					'class': 'pikaddress-content'
				});
				$el.append($contentContainer);
				this.switchToSelectedTabContent();
			},

			adjustPosition: function () {
				var $field = $(this._o.field),
					$el = this.el;
				var x = $field.position().left,
					y = $field.position().top + $field.outerHeight();

				$el.css({
					position: 'absolute',
					top: y ,
					left: x,
				});
			},
			show: function () {
				if (this._v) {
					return;
				}
				this._v = true;
				$(document).on('click', this._onDocumentClick);
				this.draw();
				this.adjustPosition();
				this.el.show();

			},
			hide: function () {
				this._v = false;
				this.el.hide();
				$(document).off('click', this._onDocumentClick);

			},

			setDistrict: function(district){
				this._o.district = district;

				var isDistrictProvince = district.split('-').length == 1,
					isDistrictCity = district.split('-').length == 2,
					isDistrictCountry = district.split('-').length == 3;

				if (isDistrictProvince) {
					this.setSelectedTab(kTAB_CITY)
					return;
				}
				if (isDistrictCity) {
					this.setSelectedTab(kTAB_COUNTRY)
					return;
				}
				if (isDistrictCountry) {
					if (this._o.onSelectDone) {
						this._o.onSelectDone();
					}
					return;
				}
			},

			clickTab: function($target) {
				var $tab;
				if ($target.hasClass(kTAB)) {
					$tab = $target;
				} else if ($target.parent().hasClass(kTAB)) {
					$tab = $target.parent();
				}
				if ($tab.hasClass('pikaddress-tab--selected')) {
					return;
				}


				// 常用
				if ($tab.hasClass(kTAB_OFTEN)) {
					this.setSelectedTab(kTAB_OFTEN);
				}
				// 省
				if ($tab.hasClass(kTAB_PROVINCE)) {
					this.setSelectedTab(kTAB_PROVINCE);
				}
				// 市
				if ($tab.hasClass(kTAB_CITY)) {
					this.setSelectedTab(kTAB_CITY);
				}
				// 区县
				if ($tab.hasClass(kTAB_COUNTRY)) {
					this.setSelectedTab(kTAB_COUNTRY);
				}

			}
		}
		return AAPcdPicker;
	}))



	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = [
		{
			"name": "安徽省",
			"city": [
				{
					"name": "安庆市",
					"area": [
						"大观区",
						"怀宁县",
						"全市",
						"潜山县",
						"宿松县",
						"桐城市",
						"太湖县",
						"望江县",
						"迎江区",
						"岳西县",
						"枞阳县"
					]
				},
				{
					"name": "蚌埠市",
					"area": [
						"蚌山区",
						"固镇县",
						"淮上区",
						"怀远县",
						"龙子湖区",
						"全市",
						"五河县",
						"禹会区"
					]
				},
				{
					"name": "滁州市",
					"area": [
						"定远县",
						"凤阳县",
						"来安县",
						"琅琊区",
						"明光市",
						"南谯区",
						"全椒县",
						"全市",
						"天长市"
					]
				},
				{
					"name": "池州市",
					"area": [
						"东至县",
						"贵池区",
						"全市",
						"青阳县",
						"石台县"
					]
				},
				{
					"name": "阜阳市",
					"area": [
						"阜南县",
						"界首市",
						"临泉县",
						"全市",
						"太和县",
						"颍东区",
						"颍泉区",
						"颍上县",
						"颍州区"
					]
				},
				{
					"name": "淮北市",
					"area": [
						"烈山区",
						"全市",
						"相山区",
						"濉溪县"
					]
				},
				{
					"name": "合肥市",
					"area": [
						"长丰县",
						"巢湖市",
						"肥东县",
						"肥西县",
						"庐江县",
						"庐阳区",
						"全市"
					]
				},
				{
					"name": "淮南市",
					"area": [
						"八公山区",
						"大通区",
						"凤台县",
						"潘集区",
						"全市",
						"田家庵区",
						"谢家集区"
					]
				},
				{
					"name": "黄山市",
					"area": [
						"黄山区",
						"徽州区",
						"祁门县",
						"全市",
						"屯溪区",
						"休宁县",
						"歙县",
						"黟县"
					]
				},
				{
					"name": "六安市",
					"area": [
						"霍邱县",
						"霍山县",
						"金安区",
						"金寨县",
						"全市",
						"舒城县",
						"寿县",
						"裕安区"
					]
				},
				{
					"name": "马鞍山市",
					"area": [
						"当涂县",
						"花山区",
						"含山县",
						"和县",
						"全市",
						"雨山区"
					]
				},
				{
					"name": "宿州市",
					"area": [
						"灵璧县",
						"全市",
						"萧县",
						"埇桥区",
						"砀山县",
						"泗县"
					]
				},
				{
					"name": "铜陵市",
					"area": [
						"全市",
						"狮子山区",
						"铜官山区",
						"铜陵县"
					]
				},
				{
					"name": "芜湖市",
					"area": [
						"繁昌县",
						"镜湖区",
						"南陵县",
						"全市",
						"芜湖县",
						"无为县",
						"鸠江区"
					]
				},
				{
					"name": "宣城市",
					"area": [
						"广德县",
						"绩溪县",
						"郎溪县",
						"宁国市",
						"全市",
						"宣州区",
						"旌德县",
						"泾县"
					]
				},
				{
					"name": "亳州市",
					"area": [
						"利辛县",
						"蒙城县",
						"全市",
						"涡阳县",
						"谯城区"
					]
				}
			]
		},
		{
			"name": "澳门",
			"city": [
				{
					"name": "澳門半島",
					"area": [
						"大堂區",
						"風順堂區",
						"花地瑪堂區",
						"聖安多尼堂區",
						"望德堂區"
					]
				},
				{
					"name": "澳門離島",
					"area": [
						"嘉模堂區",
						"聖方濟各堂區"
					]
				}
			]
		},
		{
			"name": "北京市",
			"city": [
				{
					"name": "北京市",
					"area": [
						"昌平区",
						"朝阳区",
						"东城区",
						"大兴区",
						"房山区",
						"丰台区",
						"海淀区",
						"怀柔区",
						"门头沟区",
						"密云县",
						"平谷区",
						"全市",
						"石景山区",
						"顺义区",
						"通州区",
						"西城区",
						"延庆县"
					]
				}
			]
		},
		{
			"name": "福建省",
			"city": [
				{
					"name": "福州市",
					"area": [
						"长乐市",
						"仓山区",
						"福清市",
						"鼓楼区",
						"晋安区",
						"连江县",
						"罗源县",
						"闽侯县",
						"闽清县",
						"马尾区",
						"平潭县",
						"全市",
						"台江区",
						"永泰县"
					]
				},
				{
					"name": "龙岩市",
					"area": [
						"长汀县",
						"连城县",
						"全市",
						"上杭县",
						"武平县",
						"新罗区",
						"永定县",
						"漳平市"
					]
				},
				{
					"name": "宁德市",
					"area": [
						"福安市",
						"福鼎市",
						"古田县",
						"蕉城区",
						"屏南县",
						"全市",
						"寿宁县",
						"霞浦县",
						"周宁县",
						"柘荣县"
					]
				},
				{
					"name": "南平市",
					"area": [
						"光泽县",
						"建阳市",
						"建瓯市",
						"浦城县",
						"全市",
						"顺昌县",
						"邵武市",
						"松溪县",
						"武夷山市",
						"延平区",
						"政和县"
					]
				},
				{
					"name": "莆田市",
					"area": [
						"城厢区",
						"涵江区",
						"荔城区",
						"全市",
						"秀屿区",
						"仙游县"
					]
				},
				{
					"name": "泉州市",
					"area": [
						"安溪县",
						"德化县",
						"丰泽区",
						"惠安县",
						"晋江市",
						"金门县",
						"鲤城区",
						"洛江区",
						"南安市",
						"泉港区",
						"全市",
						"石狮市",
						"永春县"
					]
				},
				{
					"name": "三明市",
					"area": [
						"大田县",
						"将乐县",
						"建宁县",
						"梅列区",
						"明溪县",
						"宁化县",
						"清流县",
						"全市",
						"沙县",
						"三元区",
						"泰宁县",
						"永安市",
						"尤溪县"
					]
				},
				{
					"name": "厦门市",
					"area": [
						"海沧区",
						"湖里区",
						"集美区",
						"全市",
						"思明区",
						"同安区",
						"翔安区"
					]
				},
				{
					"name": "漳州市",
					"area": [
						"长泰县",
						"东山县",
						"华安县",
						"龙海市",
						"龙文区",
						"南靖县",
						"平和县",
						"全市",
						"云霄县",
						"漳浦县",
						"芗城区",
						"诏安县"
					]
				}
			]
		},
		{
			"name": "广东省",
			"city": [
				{
					"name": "潮州市",
					"area": [
						"全市",
						"饶平县",
						"湘桥区"
					]
				},
				{
					"name": "东莞市",
					"area": [
						"东莞市市辖区",
						"全市"
					]
				},
				{
					"name": "佛山市",
					"area": [
						"高明区",
						"南海区",
						"全市",
						"顺德区",
						"三水区",
						"禅城区"
					]
				},
				{
					"name": "广州市",
					"area": [
						"白云区",
						"从化市",
						"番禺区",
						"花都区",
						"黄埔区",
						"海珠区",
						"荔湾区",
						"全市",
						"天河区",
						"越秀区",
						"增城市"
					]
				},
				{
					"name": "河源市",
					"area": [
						"东源县",
						"和平县",
						"龙川县",
						"连平县",
						"全市",
						"源城区",
						"紫金县"
					]
				},
				{
					"name": "惠州市",
					"area": [
						"博罗县",
						"惠城区",
						"惠东县",
						"惠阳区",
						"龙门县",
						"全市"
					]
				},
				{
					"name": "江门市",
					"area": [
						"恩平市",
						"鹤山市",
						"江海区",
						"开平市",
						"蓬江区",
						"全市",
						"台山市",
						"新会区"
					]
				},
				{
					"name": "揭阳市",
					"area": [
						"惠来县",
						"揭东区",
						"揭西县",
						"普宁市",
						"全市",
						"榕城区"
					]
				},
				{
					"name": "茂名市",
					"area": [
						"电白县",
						"高州市",
						"化州市",
						"茂港区",
						"茂南区",
						"全市",
						"信宜市"
					]
				},
				{
					"name": "梅州市",
					"area": [
						"大埔县",
						"丰顺县",
						"蕉岭县",
						"梅县",
						"平远县",
						"全市",
						"五华县",
						"兴宁市"
					]
				},
				{
					"name": "清远市",
					"area": [
						"佛冈县",
						"连南瑶族自治县",
						"连州市",
						"清城区",
						"全市",
						"清新区",
						"英德市",
						"阳山县"
					]
				},
				{
					"name": "韶关市",
					"area": [
						"乐昌市",
						"南雄市",
						"曲江区",
						"全市",
						"仁化县",
						"乳源瑶族自治县",
						"始兴县",
						"武江区",
						"翁源县",
						"新丰县",
						"浈江区"
					]
				},
				{
					"name": "汕头市",
					"area": [
						"澄海区",
						"潮南区",
						"潮阳区",
						"金平区",
						"龙湖区",
						"南澳县",
						"全市",
						"濠江区"
					]
				},
				{
					"name": "汕尾市",
					"area": [
						"海丰县",
						"陆丰市",
						"陆河县",
						"全市"
					]
				},
				{
					"name": "深圳市",
					"area": [
						"宝安区",
						"福田区",
						"龙岗区",
						"罗湖区",
						"南山区",
						"全市",
						"盐田区"
					]
				},
				{
					"name": "云浮市",
					"area": [
						"罗定市",
						"全市",
						"新兴县",
						"云安县",
						"云城区",
						"郁南县"
					]
				},
				{
					"name": "阳江市",
					"area": [
						"江城区",
						"全市",
						"阳春市",
						"阳东县",
						"阳西县"
					]
				},
				{
					"name": "珠海市",
					"area": [
						"斗门区",
						"金湾区",
						"全市",
						"香洲区"
					]
				},
				{
					"name": "湛江市",
					"area": [
						"赤坎区",
						"廉江市",
						"雷州市",
						"麻章区",
						"坡头区",
						"全市",
						"遂溪县",
						"吴川市",
						"霞山区",
						"徐闻县"
					]
				},
				{
					"name": "肇庆市",
					"area": [
						"鼎湖区",
						"德庆县",
						"端州区",
						"封开县",
						"广宁县",
						"怀集县",
						"全市",
						"四会市"
					]
				},
				{
					"name": "中山市",
					"area": [
						"全市",
						"中山市市辖区"
					]
				}
			]
		},
		{
			"name": "甘肃省",
			"city": [
				{
					"name": "白银市",
					"area": [
						"白银区",
						"会宁县",
						"景泰县",
						"平川区",
						"全市"
					]
				},
				{
					"name": "定西市",
					"area": [
						"安定区",
						"全市"
					]
				},
				{
					"name": "甘南藏族自治州",
					"area": [
						"迭部县",
						"合作市",
						"碌曲县",
						"临潭县",
						"玛曲县",
						"全市",
						"夏河县",
						"卓尼县",
						"舟曲县"
					]
				},
				{
					"name": "金昌市",
					"area": [
						"金川区",
						"全市",
						"永昌县"
					]
				},
				{
					"name": "酒泉市",
					"area": [
						"阿克塞哈萨克族自治县",
						"敦煌市",
						"瓜州县",
						"金塔县",
						"全市",
						"肃州区",
						"玉门市"
					]
				},
				{
					"name": "嘉峪关市",
					"area": [
						"嘉峪关市市辖区",
						"全市"
					]
				},
				{
					"name": "陇南市",
					"area": [
						"成县",
						"徽县",
						"康县",
						"两当县",
						"礼县",
						"全市",
						"武都区",
						"文县",
						"西和县",
						"宕昌县"
					]
				},
				{
					"name": "临夏回族自治州",
					"area": [
						"东乡族自治县",
						"广河县",
						"和政县",
						"康乐县",
						"临夏市",
						"临夏县",
						"全市",
						"永靖县"
					]
				},
				{
					"name": "兰州市",
					"area": [
						"安宁区",
						"城关区",
						"皋兰县",
						"红古区",
						"七里河区",
						"全市",
						"西固区",
						"永登县",
						"榆中县"
					]
				},
				{
					"name": "平凉市",
					"area": [
						"崇信县",
						"华亭县",
						"静宁县",
						"全市",
						"泾川县",
						"崆峒区"
					]
				},
				{
					"name": "庆阳市",
					"area": [
						"华池县",
						"合水县",
						"环县",
						"庆城县",
						"全市",
						"西峰区"
					]
				},
				{
					"name": "天水市",
					"area": [
						"甘谷县",
						"麦积区",
						"秦安县",
						"全市",
						"清水县",
						"秦州区",
						"武山县",
						"张家川回族自治县"
					]
				},
				{
					"name": "武威市",
					"area": [
						"古浪县",
						"凉州区",
						"民勤县",
						"全市",
						"天祝藏族自治县"
					]
				},
				{
					"name": "张掖市",
					"area": [
						"高台县",
						"甘州区",
						"临泽县",
						"民乐县",
						"全市",
						"山丹县",
						"肃南裕固族自治县"
					]
				}
			]
		},
		{
			"name": "广西壮族自治区",
			"city": [
				{
					"name": "北海市",
					"area": [
						"海城区",
						"合浦县",
						"全市",
						"铁山港区",
						"银海区"
					]
				},
				{
					"name": "百色市",
					"area": [
						"德保县",
						"靖西县",
						"隆林各族自治县",
						"乐业县",
						"凌云县",
						"那坡县",
						"平果县",
						"全市",
						"田东县",
						"田林县",
						"田阳县",
						"右江区"
					]
				},
				{
					"name": "崇左市",
					"area": [
						"大新县",
						"扶绥县",
						"江州区",
						"龙州县",
						"宁明县",
						"凭祥市",
						"全市",
						"天等县"
					]
				},
				{
					"name": "防城港市",
					"area": [
						"东兴市",
						"防城区",
						"港口区",
						"全市",
						"上思县"
					]
				},
				{
					"name": "贵港市",
					"area": [
						"港北区",
						"港南区",
						"桂平市",
						"平南县",
						"全市",
						"覃塘区"
					]
				},
				{
					"name": "桂林市",
					"area": [
						"叠彩区",
						"恭城瑶族自治县",
						"灌阳县",
						"灵川县",
						"临桂县",
						"龙胜各族自治县",
						"平乐县",
						"全市",
						"七星区",
						"全州县",
						"兴安县",
						"秀峰区",
						"象山区",
						"永福县",
						"雁山区",
						"阳朔县",
						"资源县"
					]
				},
				{
					"name": "河池市",
					"area": [
						"巴马瑶族自治县",
						"都安瑶族自治县",
						"大化瑶族自治县",
						"东兰县",
						"凤山县",
						"环江毛南族自治县",
						"金城江区",
						"罗城仫佬族自治县",
						"南丹县",
						"全市",
						"天峨县",
						"宜州市"
					]
				},
				{
					"name": "贺州市",
					"area": [
						"八步区",
						"富川瑶族自治县",
						"全市",
						"昭平县",
						"钟山县"
					]
				},
				{
					"name": "来宾市",
					"area": [
						"合山市",
						"金秀瑶族自治县",
						"全市",
						"武宣县",
						"兴宾区",
						"忻城县",
						"象州县"
					]
				},
				{
					"name": "柳州市",
					"area": [
						"城中区",
						"柳北区",
						"柳城县",
						"柳江县",
						"柳南区",
						"鹿寨县",
						"全市",
						"融安县",
						"融水苗族自治县",
						"三江侗族自治县",
						"鱼峰区"
					]
				},
				{
					"name": "南宁市",
					"area": [
						"宾阳县",
						"横县",
						"江南区",
						"隆安县",
						"良庆区",
						"马山县",
						"全市",
						"青秀区",
						"上林县",
						"武鸣县",
						"兴宁区",
						"西乡塘区",
						"邕宁区"
					]
				},
				{
					"name": "钦州市",
					"area": [
						"灵山县",
						"浦北县",
						"钦北区",
						"钦南区",
						"全市"
					]
				},
				{
					"name": "梧州市",
					"area": [
						"长洲区",
						"蝶山区",
						"蒙山县",
						"全市",
						"藤县",
						"万秀区",
						"岑溪市"
					]
				},
				{
					"name": "玉林市",
					"area": [
						"博白县",
						"北流市",
						"陆川县",
						"全市",
						"容县",
						"兴业县",
						"玉州区"
					]
				}
			]
		},
		{
			"name": "贵州省",
			"city": [
				{
					"name": "安顺市",
					"area": [
						"关岭布依族苗族自治县",
						"平坝县",
						"普定县",
						"全市",
						"西秀区",
						"镇宁布依族苗族自治县",
						"紫云苗族布依族自治县"
					]
				},
				{
					"name": "毕节市",
					"area": [
						"大方县",
						"赫章县",
						"金沙县",
						"纳雍县",
						"全市",
						"黔西县",
						"威宁彝族回族苗族自治县",
						"织金县"
					]
				},
				{
					"name": "贵阳市",
					"area": [
						"花溪区",
						"开阳县",
						"全市",
						"清镇市",
						"息烽县",
						"修文县",
						"云岩区"
					]
				},
				{
					"name": "六盘水市",
					"area": [
						"盘县",
						"全市",
						"水城县"
					]
				},
				{
					"name": "黔东南苗族侗族自治州",
					"area": [
						"从江县",
						"丹寨县",
						"黄平县",
						"剑河县",
						"锦屏县",
						"凯里市",
						"黎平县",
						"雷山县",
						"麻江县",
						"全市",
						"施秉县",
						"三穗县",
						"台江县",
						"天柱县",
						"镇远县",
						"岑巩县",
						"榕江县"
					]
				},
				{
					"name": "黔南布依族苗族自治州",
					"area": [
						"长顺县",
						"独山县",
						"都匀市",
						"福泉市",
						"贵定县",
						"惠水县",
						"荔波县",
						"罗甸县",
						"龙里县",
						"平塘县",
						"全市",
						"三都水族自治县",
						"瓮安县"
					]
				},
				{
					"name": "黔西南布依族苗族自治州",
					"area": [
						"安龙县",
						"册亨县",
						"普安县",
						"晴隆县",
						"全市",
						"望谟县",
						"兴仁县",
						"兴义市",
						"贞丰县"
					]
				},
				{
					"name": "铜仁市",
					"area": [
						"德江县",
						"江口县",
						"全市",
						"思南县",
						"松桃苗族自治县",
						"石阡县",
						"沿河土家族自治县",
						"印江土家族苗族自治县",
						"玉屏侗族自治县"
					]
				},
				{
					"name": "遵义市",
					"area": [
						"赤水市",
						"道真仡佬族苗族自治县",
						"凤冈县",
						"汇川区",
						"红花岗区",
						"全市",
						"仁怀市",
						"绥阳县",
						"桐梓县",
						"务川仡佬族苗族自治县",
						"习水县",
						"余庆县",
						"正安县",
						"湄潭县"
					]
				}
			]
		},
		{
			"name": "河北省",
			"city": [
				{
					"name": "保定市",
					"area": [
						"安国市",
						"安新县",
						"北市区",
						"博野县",
						"定兴县",
						"定州市",
						"阜平县",
						"高碑店市",
						"高阳县",
						"满城县",
						"南市区",
						"全市",
						"曲阳县",
						"清苑县",
						"容城县",
						"顺平县",
						"唐县",
						"望都县",
						"新市区",
						"徐水县",
						"雄县",
						"易县",
						"涞水县",
						"蠡县",
						"涞源县",
						"涿州市"
					]
				},
				{
					"name": "承德市",
					"area": [
						"承德县",
						"丰宁满族自治县",
						"宽城满族自治县",
						"隆化县",
						"滦平县",
						"平泉县",
						"全市",
						"双滦区",
						"双桥区",
						"围场满族蒙古族自治县",
						"兴隆县",
						"鹰手营子矿区"
					]
				},
				{
					"name": "沧州市",
					"area": [
						"泊头市",
						"东光县",
						"河间市",
						"海兴县",
						"黄骅市",
						"孟村回族自治县",
						"南皮县",
						"全市",
						"青县",
						"任丘市",
						"肃宁县",
						"吴桥县",
						"新华区",
						"献县",
						"运河区",
						"盐山县"
					]
				},
				{
					"name": "邯郸市",
					"area": [
						"成安县",
						"丛台区",
						"磁县",
						"大名县",
						"峰峰矿区",
						"复兴区",
						"肥乡县",
						"广平县",
						"馆陶县",
						"鸡泽县",
						"临漳县",
						"全市",
						"邱县",
						"曲周县",
						"涉县",
						"武安市",
						"魏县",
						"永年县"
					]
				},
				{
					"name": "衡水市",
					"area": [
						"安平县",
						"阜城县",
						"故城县",
						"景县",
						"冀州市",
						"全市",
						"饶阳县",
						"深州市",
						"桃城区",
						"武强县",
						"武邑县",
						"枣强县"
					]
				},
				{
					"name": "廊坊市",
					"area": [
						"安次区",
						"霸州市",
						"大厂回族自治县",
						"大城县",
						"固安县",
						"广阳区",
						"全市",
						"三河市",
						"文安县",
						"香河县",
						"永清县"
					]
				},
				{
					"name": "秦皇岛市",
					"area": [
						"北戴河区",
						"昌黎县",
						"抚宁县",
						"海港区",
						"卢龙县",
						"青龙满族自治县",
						"全市",
						"山海关区"
					]
				},
				{
					"name": "石家庄市",
					"area": [
						"长安区",
						"高邑县",
						"晋州市",
						"井陉矿区",
						"井陉县",
						"鹿泉市",
						"灵寿县",
						"平山县",
						"桥东区",
						"全市",
						"桥西区",
						"深泽县",
						"无极县",
						"辛集市",
						"新乐市",
						"行唐县",
						"裕华区",
						"元氏县",
						"正定县",
						"赞皇县",
						"赵县",
						"藁城市",
						"栾城县"
					]
				},
				{
					"name": "唐山市",
					"area": [
						"曹妃甸区",
						"丰南区",
						"丰润区",
						"古冶区",
						"开平区",
						"路北区",
						"路南区",
						"滦南县",
						"乐亭县",
						"滦县",
						"迁安市",
						"全市",
						"迁西县",
						"玉田县",
						"遵化市"
					]
				},
				{
					"name": "邢台市",
					"area": [
						"柏乡县",
						"广宗县",
						"巨鹿县",
						"临城县",
						"临西县",
						"隆尧县",
						"南宫市",
						"南和县",
						"宁晋县",
						"内丘县",
						"平乡县",
						"清河县",
						"全市",
						"任县",
						"沙河市",
						"威县",
						"新河县",
						"邢台县"
					]
				},
				{
					"name": "张家口市",
					"area": [
						"赤城县",
						"崇礼县",
						"沽源县",
						"怀安县",
						"怀来县",
						"康保县",
						"全市",
						"尚义县",
						"万全县",
						"蔚县",
						"宣化县",
						"下花园区",
						"阳原县",
						"张北县",
						"涿鹿县"
					]
				}
			]
		},
		{
			"name": "湖北省",
			"city": [
				{
					"name": "恩施土家族苗族自治州",
					"area": [
						"巴东县",
						"恩施市",
						"鹤峰县",
						"建始县",
						"利川市",
						"来凤县",
						"全市",
						"宣恩县",
						"咸丰县"
					]
				},
				{
					"name": "鄂州市",
					"area": [
						"鄂城区",
						"华容区",
						"梁子湖区",
						"全市"
					]
				},
				{
					"name": "湖北省直辖县级行政单位",
					"area": [
						"潜江市",
						"全市",
						"神农架林区",
						"天门市",
						"仙桃市"
					]
				},
				{
					"name": "黄冈市",
					"area": [
						"红安县",
						"黄梅县",
						"黄州区",
						"罗田县",
						"麻城市",
						"全市",
						"团风县",
						"武穴市",
						"英山县",
						"蕲春县",
						"浠水县"
					]
				},
				{
					"name": "黄石市",
					"area": [
						"大冶市",
						"黄石港区",
						"全市",
						"铁山区",
						"下陆区",
						"阳新县"
					]
				},
				{
					"name": "荆门市",
					"area": [
						"东宝区",
						"掇刀区",
						"京山县",
						"全市",
						"沙洋县",
						"钟祥市"
					]
				},
				{
					"name": "荆州市",
					"area": [
						"公安县",
						"洪湖市",
						"监利县",
						"江陵县",
						"荆州区",
						"全市",
						"沙市区",
						"石首市",
						"松滋市"
					]
				},
				{
					"name": "十堰市",
					"area": [
						"丹江口市",
						"房县",
						"茅箭区",
						"全市",
						"郧县",
						"郧西县",
						"竹山县",
						"张湾区",
						"竹溪县"
					]
				},
				{
					"name": "随州市",
					"area": [
						"广水市",
						"全市",
						"随县"
					]
				},
				{
					"name": "武汉市",
					"area": [
						"蔡甸区",
						"东西湖区",
						"洪山区",
						"汉阳区",
						"黄陂区",
						"江岸区",
						"江汉区",
						"江夏区",
						"全市",
						"青山区",
						"武昌区",
						"新洲区"
					]
				},
				{
					"name": "孝感市",
					"area": [
						"安陆市",
						"大悟县",
						"汉川市",
						"全市",
						"孝昌县",
						"孝南区",
						"应城市",
						"云梦县"
					]
				},
				{
					"name": "咸宁市",
					"area": [
						"赤壁市",
						"崇阳县",
						"嘉鱼县",
						"全市",
						"通城县",
						"通山县",
						"咸安区"
					]
				},
				{
					"name": "襄阳市",
					"area": [
						"保康县",
						"樊城区",
						"谷城县",
						"老河口市",
						"南漳县",
						"全市",
						"襄城区",
						"襄州区",
						"宜城市",
						"枣阳市"
					]
				},
				{
					"name": "宜昌市",
					"area": [
						"长阳土家族自治县",
						"点军区",
						"当阳市",
						"全市",
						"五峰土家族自治县",
						"伍家岗区",
						"西陵区",
						"兴山县",
						"远安县",
						"宜都市",
						"夷陵区",
						"枝江市",
						"秭归县"
					]
				}
			]
		},
		{
			"name": "黑龙江省",
			"city": [
				{
					"name": "大庆市",
					"area": [
						"杜尔伯特蒙古族自治县",
						"大同区",
						"红岗区",
						"林甸县",
						"龙凤区",
						"全市",
						"让胡路区",
						"萨尔图区",
						"肇源县",
						"肇州县"
					]
				},
				{
					"name": "大兴安岭地区",
					"area": [
						"呼玛县",
						"漠河县",
						"全市",
						"塔河县"
					]
				},
				{
					"name": "哈尔滨市",
					"area": [
						"阿城区",
						"宾县",
						"巴彦县",
						"道里区",
						"道外区",
						"方正县",
						"呼兰区",
						"木兰县",
						"南岗区",
						"平房区",
						"全市",
						"双城市",
						"尚志市",
						"通河县",
						"五常市",
						"香坊区",
						"依兰县",
						"延寿县"
					]
				},
				{
					"name": "鹤岗市",
					"area": [
						"东山区",
						"工农区",
						"萝北县",
						"全市",
						"绥滨县",
						"兴安区",
						"兴山区",
						"向阳区"
					]
				},
				{
					"name": "黑河市",
					"area": [
						"爱辉区",
						"北安市",
						"嫩江县",
						"全市",
						"孙吴县",
						"五大连池市",
						"逊克县"
					]
				},
				{
					"name": "佳木斯市",
					"area": [
						"富锦市",
						"抚远县",
						"佳木斯市市辖区",
						"全市",
						"同江市",
						"桦川县",
						"桦南县"
					]
				},
				{
					"name": "鸡西市",
					"area": [
						"城子河区",
						"滴道区",
						"虎林市",
						"恒山区",
						"鸡东县",
						"鸡冠区",
						"梨树区",
						"麻山区",
						"密山市",
						"全市"
					]
				},
				{
					"name": "牡丹江市",
					"area": [
						"爱民区",
						"东安区",
						"东宁县",
						"海林市",
						"林口县",
						"穆棱市",
						"宁安市",
						"全市",
						"绥芬河市",
						"西安区",
						"阳明区"
					]
				},
				{
					"name": "齐齐哈尔市",
					"area": [
						"昂昂溪区",
						"拜泉县",
						"富拉尔基区",
						"富裕县",
						"甘南县",
						"建华区",
						"克东县",
						"克山县",
						"龙江县",
						"龙沙区",
						"梅里斯达斡尔族区",
						"碾子山区",
						"全市",
						"铁锋区",
						"泰来县",
						"依安县",
						"讷河市"
					]
				},
				{
					"name": "七台河市",
					"area": [
						"勃利县",
						"全市",
						"茄子河区",
						"桃山区",
						"新兴区"
					]
				},
				{
					"name": "绥化市",
					"area": [
						"安达市",
						"北林区",
						"海伦市",
						"兰西县",
						"明水县",
						"青冈县",
						"全市",
						"绥棱县",
						"望奎县",
						"肇东市"
					]
				},
				{
					"name": "双鸭山市",
					"area": [
						"宝清县",
						"宝山区",
						"尖山区",
						"集贤县",
						"岭东区",
						"全市",
						"饶河县",
						"四方台区",
						"友谊县"
					]
				},
				{
					"name": "伊春市",
					"area": [
						"翠峦区",
						"红星区",
						"金山屯区",
						"嘉荫县",
						"美溪区",
						"南岔区",
						"全市",
						"上甘岭区",
						"铁力市",
						"汤旺河区",
						"乌马河区",
						"乌伊岭区",
						"五营区",
						"西林区",
						"新青区",
						"伊春区",
						"友好区"
					]
				}
			]
		},
		{
			"name": "河南省",
			"city": [
				{
					"name": "安阳市",
					"area": [
						"北关区",
						"滑县",
						"龙安区",
						"林州市",
						"内黄县",
						"全市",
						"汤阴县",
						"文峰区",
						"殷都区"
					]
				},
				{
					"name": "鹤壁市",
					"area": [
						"鹤山区",
						"浚县",
						"全市",
						"山城区",
						"淇滨区",
						"淇县"
					]
				},
				{
					"name": "河南省直辖县级行政单位",
					"area": [
						"济源市",
						"全市"
					]
				},
				{
					"name": "焦作市",
					"area": [
						"博爱县",
						"解放区",
						"马村区",
						"孟州市",
						"全市",
						"沁阳市",
						"山阳区",
						"温县",
						"武陟县",
						"中站区"
					]
				},
				{
					"name": "开封市",
					"area": [
						"开封市市辖区",
						"开封县",
						"兰考县",
						"全市",
						"通许县",
						"尉氏县",
						"杞县"
					]
				},
				{
					"name": "洛阳市",
					"area": [
						"瀍河回族区",
						"吉利区",
						"涧西区",
						"老城区",
						"洛龙区",
						"洛宁县",
						"孟津县",
						"全市",
						"汝阳县",
						"新安县",
						"西工区",
						"伊川县",
						"宜阳县",
						"栾川县",
						"嵩县",
						"偃师市"
					]
				},
				{
					"name": "南阳市",
					"area": [
						"邓州市",
						"方城县",
						"内乡县",
						"南召县",
						"全市",
						"社旗县",
						"桐柏县",
						"唐河县",
						"宛城区",
						"卧龙区",
						"西峡县",
						"新野县",
						"镇平县",
						"淅川县"
					]
				},
				{
					"name": "平顶山市",
					"area": [
						"宝丰县",
						"鲁山县",
						"全市",
						"汝州市",
						"石龙区",
						"卫东区",
						"舞钢市",
						"叶县",
						"湛河区",
						"郏县"
					]
				},
				{
					"name": "三门峡市",
					"area": [
						"湖滨区",
						"灵宝市",
						"卢氏县",
						"全市",
						"陕县",
						"义马市",
						"渑池县"
					]
				},
				{
					"name": "商丘市",
					"area": [
						"梁园区",
						"民权县",
						"宁陵县",
						"全市",
						"夏邑县",
						"永城市",
						"虞城县",
						"睢县",
						"睢阳区",
						"柘城县"
					]
				},
				{
					"name": "许昌市",
					"area": [
						"长葛市",
						"全市",
						"魏都区",
						"襄城县",
						"禹州市",
						"鄢陵县"
					]
				},
				{
					"name": "新乡市",
					"area": [
						"长垣县",
						"凤泉区",
						"封丘县",
						"获嘉县",
						"红旗区",
						"辉县市",
						"全市",
						"卫辉市",
						"新乡县",
						"延津县",
						"原阳县"
					]
				},
				{
					"name": "信阳市",
					"area": [
						"固始县",
						"光山县",
						"淮滨县",
						"罗山县",
						"平桥区",
						"全市",
						"商城县",
						"息县",
						"新县",
						"浉河区",
						"潢川县"
					]
				},
				{
					"name": "周口市",
					"area": [
						"川汇区",
						"郸城县",
						"扶沟县",
						"淮阳县",
						"鹿邑县",
						"全市",
						"沈丘县",
						"商水县",
						"太康县",
						"项城市",
						"西华县"
					]
				},
				{
					"name": "驻马店市",
					"area": [
						"泌阳县",
						"平舆县",
						"全市",
						"确山县",
						"汝南县",
						"上蔡县",
						"遂平县",
						"新蔡县",
						"西平县",
						"正阳县",
						"驿城区"
					]
				},
				{
					"name": "郑州市",
					"area": [
						"登封市",
						"二七区",
						"管城回族区",
						"巩义市",
						"金水区",
						"全市",
						"上街区",
						"新密市",
						"新郑市",
						"中牟县",
						"中原区",
						"荥阳市"
					]
				},
				{
					"name": "漯河市",
					"area": [
						"临颍县",
						"全市",
						"舞阳县",
						"源汇区",
						"召陵区",
						"郾城区"
					]
				},
				{
					"name": "濮阳市",
					"area": [
						"范县",
						"华龙区",
						"南乐县",
						"清丰县",
						"全市",
						"台前县",
						"濮阳县"
					]
				}
			]
		},
		{
			"name": "湖南省",
			"city": [
				{
					"name": "常德市",
					"area": [
						"安乡县",
						"鼎城区",
						"汉寿县",
						"津市市",
						"临澧县",
						"全市",
						"石门县",
						"桃源县",
						"武陵区",
						"澧县"
					]
				},
				{
					"name": "长沙市",
					"area": [
						"长沙县",
						"开福区",
						"宁乡县",
						"全市",
						"天心区",
						"望城区",
						"雨花区",
						"岳麓区",
						"芙蓉区",
						"浏阳市"
					]
				},
				{
					"name": "郴州市",
					"area": [
						"安仁县",
						"北湖区",
						"桂东县",
						"桂阳县",
						"嘉禾县",
						"临武县",
						"全市",
						"汝城县",
						"永兴县",
						"资兴市"
					]
				},
				{
					"name": "怀化市",
					"area": [
						"辰溪县",
						"鹤城区",
						"洪江市",
						"会同县",
						"靖州苗族侗族自治县",
						"麻阳苗族自治县",
						"全市",
						"通道侗族自治县",
						"新晃侗族自治县",
						"中方县",
						"溆浦县",
						"沅陵县",
						"芷江侗族自治县"
					]
				},
				{
					"name": "衡阳市",
					"area": [
						"常宁市",
						"衡东县",
						"衡阳县",
						"南岳区",
						"祁东县",
						"全市",
						"石鼓区",
						"雁峰区",
						"蒸湘区",
						"珠晖区",
						"耒阳市"
					]
				},
				{
					"name": "娄底市",
					"area": [
						"冷水江市",
						"娄星区",
						"涟源市",
						"全市",
						"双峰县",
						"新化县"
					]
				},
				{
					"name": "邵阳市",
					"area": [
						"北塔区",
						"城步苗族自治县",
						"洞口县",
						"大祥区",
						"隆回县",
						"全市",
						"邵东县",
						"绥宁县",
						"双清区",
						"邵阳县",
						"武冈市",
						"新宁县",
						"新邵县"
					]
				},
				{
					"name": "湘潭市",
					"area": [
						"全市",
						"韶山市",
						"湘潭县",
						"湘乡市",
						"雨湖区",
						"岳塘区"
					]
				},
				{
					"name": "湘西土家族苗族自治州",
					"area": [
						"保靖县",
						"凤凰县",
						"古丈县",
						"花垣县",
						"吉首市",
						"龙山县",
						"全市",
						"永顺县",
						"泸溪县"
					]
				},
				{
					"name": "益阳市",
					"area": [
						"安化县",
						"赫山区",
						"南县",
						"全市",
						"桃江县",
						"资阳区",
						"沅江市"
					]
				},
				{
					"name": "岳阳市",
					"area": [
						"华容县",
						"临湘市",
						"平江县",
						"全市",
						"湘阴县",
						"云溪区",
						"岳阳楼区",
						"岳阳县",
						"汨罗市"
					]
				},
				{
					"name": "永州市",
					"area": [
						"东安县",
						"道县",
						"江华瑶族自治县",
						"江永县",
						"冷水滩区",
						"蓝山县",
						"宁远县",
						"全市",
						"祁阳县",
						"双牌县",
						"新田县"
					]
				},
				{
					"name": "张家界市",
					"area": [
						"慈利县",
						"全市",
						"桑植县",
						"武陵源区",
						"永定区"
					]
				},
				{
					"name": "株洲市",
					"area": [
						"茶陵县",
						"荷塘区",
						"芦淞区",
						"全市",
						"石峰区",
						"天元区",
						"炎陵县",
						"株洲县",
						"醴陵市",
						"攸县"
					]
				}
			]
		},
		{
			"name": "海南省",
			"city": [
				{
					"name": "海口市",
					"area": [
						"龙华区",
						"美兰区",
						"全市",
						"琼山区",
						"秀英区"
					]
				},
				{
					"name": "海南省直辖县级行政单位",
					"area": [
						"白沙黎族自治县",
						"保亭黎族苗族自治县",
						"昌江黎族自治县",
						"澄迈县",
						"定安县",
						"东方市",
						"乐东黎族自治县",
						"临高县",
						"陵水黎族自治县",
						"琼海市",
						"全市",
						"琼中黎族苗族自治县",
						"屯昌县",
						"文昌市",
						"万宁市",
						"五指山市",
						"儋州市"
					]
				},
				{
					"name": "三亚市",
					"area": [
						"全市",
						"市辖区"
					]
				}
			]
		},
		{
			"name": "吉林省",
			"city": [
				{
					"name": "白城市",
					"area": [
						"大安市",
						"全市",
						"通榆县",
						"镇赉县",
						"洮北区",
						"洮南市"
					]
				},
				{
					"name": "白山市",
					"area": [
						"长白朝鲜族自治县",
						"抚松县",
						"江源区",
						"靖宇县",
						"临江市",
						"全市"
					]
				},
				{
					"name": "长春市",
					"area": [
						"德惠市",
						"二道区",
						"九台市",
						"宽城区",
						"绿园区",
						"农安县",
						"南关区",
						"全市",
						"双阳区",
						"榆树市"
					]
				},
				{
					"name": "吉林市",
					"area": [
						"昌邑区",
						"船营区",
						"丰满区",
						"龙潭区",
						"磐石市",
						"全市",
						"舒兰市",
						"永吉县",
						"桦甸市",
						"蛟河市"
					]
				},
				{
					"name": "辽源市",
					"area": [
						"东丰县",
						"龙山区",
						"全市"
					]
				},
				{
					"name": "四平市",
					"area": [
						"公主岭市",
						"梨树县",
						"全市",
						"双辽市",
						"铁东区",
						"铁西区",
						"伊通满族自治县"
					]
				},
				{
					"name": "松原市",
					"area": [
						"长岭县",
						"扶余市",
						"宁江区",
						"乾安县",
						"前郭尔罗斯蒙古族自治县",
						"全市"
					]
				},
				{
					"name": "通化市",
					"area": [
						"东昌区",
						"二道江区",
						"辉南县",
						"集安市",
						"柳河县",
						"梅河口市",
						"全市",
						"通化县"
					]
				},
				{
					"name": "延边朝鲜族自治州",
					"area": [
						"安图县",
						"敦化市",
						"和龙市",
						"龙井市",
						"全市",
						"图们市",
						"汪清县",
						"延吉市",
						"珲春市"
					]
				}
			]
		},
		{
			"name": "江苏省",
			"city": [
				{
					"name": "常州市",
					"area": [
						"金坛市",
						"全市",
						"戚墅堰区",
						"天宁区",
						"武进区",
						"钟楼区",
						"溧阳市"
					]
				},
				{
					"name": "淮安市",
					"area": [
						"淮安区",
						"淮阴区",
						"洪泽县",
						"金湖县",
						"涟水县",
						"清河区",
						"清浦区",
						"全市",
						"盱眙县"
					]
				},
				{
					"name": "连云港市",
					"area": [
						"东海县",
						"灌南县",
						"赣榆县",
						"灌云县",
						"海州区",
						"连云区",
						"全市",
						"新浦区"
					]
				},
				{
					"name": "南京市",
					"area": [
						"高淳区",
						"江宁区",
						"建邺区",
						"六合区",
						"浦口区",
						"秦淮区",
						"全市",
						"栖霞区",
						"玄武区",
						"雨花台区",
						"溧水区"
					]
				},
				{
					"name": "南通市",
					"area": [
						"崇川区",
						"港闸区",
						"海安县",
						"海门市",
						"启东市",
						"全市",
						"如东县",
						"如皋市"
					]
				},
				{
					"name": "宿迁市",
					"area": [
						"全市",
						"宿城区",
						"宿豫区",
						"泗洪县",
						"泗阳县",
						"沭阳县"
					]
				},
				{
					"name": "苏州市",
					"area": [
						"常熟市",
						"姑苏区",
						"虎丘区",
						"昆山市",
						"全市",
						"太仓市",
						"吴江区",
						"吴中区",
						"相城区",
						"张家港市"
					]
				},
				{
					"name": "泰州市",
					"area": [
						"高港区",
						"海陵区",
						"靖江市",
						"姜堰区",
						"全市",
						"泰兴市",
						"兴化市"
					]
				},
				{
					"name": "无锡市",
					"area": [
						"北塘区",
						"崇安区",
						"惠山区",
						"江阴市",
						"南长区",
						"全市",
						"锡山区",
						"宜兴市"
					]
				},
				{
					"name": "徐州市",
					"area": [
						"丰县",
						"贾汪区",
						"沛县",
						"全市",
						"泉山区",
						"新沂市",
						"云龙区",
						"睢宁县",
						"邳州市"
					]
				},
				{
					"name": "盐城市",
					"area": [
						"滨海县",
						"大丰市",
						"东台市",
						"阜宁县",
						"建湖县",
						"全市",
						"射阳县",
						"亭湖区",
						"响水县",
						"盐都区"
					]
				},
				{
					"name": "扬州市",
					"area": [
						"宝应县",
						"广陵区",
						"高邮市",
						"江都区",
						"全市",
						"仪征市",
						"邗江区"
					]
				},
				{
					"name": "镇江市",
					"area": [
						"丹徒区",
						"丹阳市",
						"句容市",
						"全市",
						"润州区",
						"扬中市"
					]
				}
			]
		},
		{
			"name": "江西省",
			"city": [
				{
					"name": "抚州市",
					"area": [
						"崇仁县",
						"东乡县",
						"广昌县",
						"金溪县",
						"乐安县",
						"临川区",
						"黎川县",
						"南城县",
						"南丰县",
						"全市",
						"宜黄县",
						"资溪县"
					]
				},
				{
					"name": "赣州市",
					"area": [
						"安远县",
						"崇义县",
						"定南县",
						"大余县",
						"赣县",
						"会昌县",
						"龙南县",
						"宁都县",
						"南康市",
						"全南县",
						"全市",
						"瑞金市",
						"石城县",
						"上犹县",
						"信丰县",
						"兴国县",
						"寻乌县",
						"于都县",
						"章贡区"
					]
				},
				{
					"name": "吉安市",
					"area": [
						"安福县",
						"吉安县",
						"井冈山市",
						"吉水县",
						"吉州区",
						"全市",
						"青原区",
						"遂川县",
						"泰和县",
						"万安县",
						"新干县",
						"峡江县",
						"永丰县",
						"永新县"
					]
				},
				{
					"name": "景德镇市",
					"area": [
						"昌江区",
						"浮梁县",
						"乐平市",
						"全市"
					]
				},
				{
					"name": "九江市",
					"area": [
						"德安县",
						"都昌县",
						"湖口县",
						"九江县",
						"庐山区",
						"彭泽县",
						"全市",
						"瑞昌市",
						"武宁县",
						"修水县",
						"星子县",
						"永修县",
						"浔阳区"
					]
				},
				{
					"name": "南昌市",
					"area": [
						"安义县",
						"东湖区",
						"进贤县",
						"南昌县",
						"全市",
						"青云谱区",
						"湾里区",
						"西湖区",
						"新建县"
					]
				},
				{
					"name": "萍乡市",
					"area": [
						"安源区",
						"莲花县",
						"芦溪县",
						"全市",
						"上栗县",
						"湘东区"
					]
				},
				{
					"name": "上饶市",
					"area": [
						"德兴市",
						"广丰县",
						"横峰县",
						"全市",
						"铅山县",
						"万年县",
						"信州区",
						"余干县",
						"玉山县",
						"婺源县",
						"鄱阳县",
						"弋阳县"
					]
				},
				{
					"name": "新余市",
					"area": [
						"分宜县",
						"全市",
						"渝水区"
					]
				},
				{
					"name": "宜春市",
					"area": [
						"丰城市",
						"奉新县",
						"高安市",
						"靖安县",
						"全市",
						"上高县",
						"铜鼓县",
						"万载县",
						"宜丰县",
						"袁州区",
						"樟树市"
					]
				},
				{
					"name": "鹰潭市",
					"area": [
						"贵溪市",
						"全市",
						"月湖区",
						"余江县"
					]
				}
			]
		},
		{
			"name": "辽宁省",
			"city": [
				{
					"name": "鞍山市",
					"area": [
						"海城市",
						"立山区",
						"全市",
						"千山区",
						"台安县",
						"岫岩满族自治县"
					]
				},
				{
					"name": "本溪市",
					"area": [
						"本溪满族自治县",
						"桓仁满族自治县",
						"明山区",
						"南芬区",
						"平山区",
						"全市",
						"溪湖区"
					]
				},
				{
					"name": "朝阳市",
					"area": [
						"北票市",
						"朝阳县",
						"建平县",
						"喀喇沁左翼蒙古族自治县",
						"龙城区",
						"凌源市",
						"全市",
						"双塔区"
					]
				},
				{
					"name": "丹东市",
					"area": [
						"东港市",
						"凤城市",
						"宽甸满族自治县",
						"全市",
						"元宝区",
						"振兴区"
					]
				},
				{
					"name": "大连市",
					"area": [
						"长海县",
						"甘井子区",
						"金州区",
						"旅顺口区",
						"普兰店市",
						"全市",
						"沙河口区",
						"瓦房店市",
						"西岗区",
						"庄河市",
						"中山区"
					]
				},
				{
					"name": "抚顺市",
					"area": [
						"东洲区",
						"抚顺县",
						"全市",
						"清原满族自治县",
						"顺城区",
						"望花区",
						"新宾满族自治县",
						"新抚区"
					]
				},
				{
					"name": "阜新市",
					"area": [
						"阜新蒙古族自治县",
						"清河门区",
						"全市",
						"太平区",
						"细河区",
						"新邱区",
						"彰武县"
					]
				},
				{
					"name": "葫芦岛市",
					"area": [
						"建昌县",
						"龙港区",
						"连山区",
						"南票区",
						"全市",
						"绥中县",
						"兴城市"
					]
				},
				{
					"name": "锦州市",
					"area": [
						"北镇市",
						"古塔区",
						"黑山县",
						"凌河区",
						"凌海市",
						"全市",
						"义县"
					]
				},
				{
					"name": "辽阳市",
					"area": [
						"白塔区",
						"灯塔市",
						"弓长岭区",
						"宏伟区",
						"全市",
						"文圣区"
					]
				},
				{
					"name": "盘锦市",
					"area": [
						"大洼县",
						"盘山县",
						"全市",
						"双台子区",
						"兴隆台区"
					]
				},
				{
					"name": "沈阳市",
					"area": [
						"大东区",
						"东陵区",
						"法库县",
						"和平区",
						"康平县",
						"辽中县",
						"全市",
						"沈河区",
						"苏家屯区",
						"新民市",
						"于洪区"
					]
				},
				{
					"name": "铁岭市",
					"area": [
						"昌图县",
						"调兵山市",
						"全市",
						"西丰县",
						"银州区"
					]
				},
				{
					"name": "营口市",
					"area": [
						"大石桥市",
						"盖州市",
						"老边区",
						"全市",
						"西市区",
						"鲅鱼圈区"
					]
				}
			]
		},
		{
			"name": "内蒙古自治区",
			"city": [
				{
					"name": "阿拉善盟",
					"area": [
						"阿拉善右旗",
						"阿拉善左旗",
						"额济纳旗",
						"全市"
					]
				},
				{
					"name": "包头市",
					"area": [
						"达尔罕茂明安联合旗",
						"东河区",
						"固阳县",
						"九原区",
						"昆都仑区",
						"全市",
						"青山区",
						"石拐区",
						"土默特右旗"
					]
				},
				{
					"name": "巴彦淖尔市",
					"area": [
						"临河区",
						"全市"
					]
				},
				{
					"name": "赤峰市",
					"area": [
						"敖汉旗",
						"阿鲁科尔沁旗",
						"巴林右旗",
						"巴林左旗",
						"红山区",
						"喀喇沁旗",
						"克什克腾旗",
						"林西县",
						"宁城县",
						"全市",
						"松山区",
						"翁牛特旗",
						"元宝山区"
					]
				},
				{
					"name": "鄂尔多斯市",
					"area": [
						"达拉特旗",
						"东胜区",
						"鄂托克旗",
						"鄂托克前旗",
						"杭锦旗",
						"全市",
						"乌审旗",
						"伊金霍洛旗",
						"准格尔旗"
					]
				},
				{
					"name": "呼和浩特市",
					"area": [
						"和林格尔县",
						"回民区",
						"全市",
						"清水河县",
						"托克托县",
						"土默特左旗",
						"武川县",
						"新城区",
						"玉泉区"
					]
				},
				{
					"name": "呼伦贝尔市",
					"area": [
						"阿荣旗",
						"陈巴尔虎旗",
						"额尔古纳市",
						"鄂伦春自治旗",
						"鄂温克族自治旗",
						"根河市",
						"海拉尔区",
						"莫力达瓦达斡尔族自治旗",
						"满洲里市",
						"全市",
						"新巴尔虎右旗",
						"新巴尔虎左旗",
						"牙克石市",
						"扎兰屯市"
					]
				},
				{
					"name": "通辽市",
					"area": [
						"霍林郭勒市",
						"科尔沁区",
						"科尔沁左翼后旗",
						"科尔沁左翼中旗",
						"库伦旗",
						"开鲁县",
						"奈曼旗",
						"全市",
						"扎鲁特旗"
					]
				},
				{
					"name": "乌海市",
					"area": [
						"海勃湾区",
						"海南区",
						"全市",
						"乌达区"
					]
				},
				{
					"name": "乌兰察布市",
					"area": [
						"察哈尔右翼后旗",
						"察哈尔右翼前旗",
						"察哈尔右翼中旗",
						"丰镇市",
						"化德县",
						"集宁区",
						"凉城县",
						"全市",
						"商都县",
						"四子王旗",
						"兴和县",
						"卓资县"
					]
				},
				{
					"name": "兴安盟",
					"area": [
						"阿尔山市",
						"科尔沁右翼前旗",
						"科尔沁右翼中旗",
						"全市",
						"突泉县",
						"乌兰浩特市",
						"扎赉特旗"
					]
				},
				{
					"name": "锡林郭勒盟",
					"area": [
						"阿巴嘎旗",
						"多伦县",
						"东乌珠穆沁旗",
						"二连浩特市",
						"全市",
						"苏尼特右旗",
						"苏尼特左旗",
						"太仆寺旗",
						"镶黄旗",
						"锡林浩特市",
						"西乌珠穆沁旗",
						"正蓝旗",
						"正镶白旗"
					]
				}
			]
		},
		{
			"name": "宁夏回族自治区",
			"city": [
				{
					"name": "固原市",
					"area": [
						"全市",
						"西吉县",
						"原州区",
						"泾源县"
					]
				},
				{
					"name": "石嘴山市",
					"area": [
						"大武口区",
						"惠农区",
						"平罗县",
						"全市"
					]
				},
				{
					"name": "吴忠市",
					"area": [
						"红寺堡区",
						"利通区",
						"全市",
						"青铜峡市",
						"盐池县"
					]
				},
				{
					"name": "银川市",
					"area": [
						"贺兰县",
						"金凤区",
						"灵武市",
						"全市",
						"兴庆区",
						"西夏区"
					]
				},
				{
					"name": "中卫市",
					"area": [
						"海原县",
						"全市",
						"沙坡头区",
						"中宁县"
					]
				}
			]
		},
		{
			"name": "青海省",
			"city": [
				{
					"name": "果洛藏族自治州",
					"area": [
						"班玛县",
						"达日县",
						"甘德县",
						"久治县",
						"玛多县",
						"玛沁县",
						"全市"
					]
				},
				{
					"name": "海北藏族自治州",
					"area": [
						"刚察县",
						"海晏县",
						"门源回族自治县",
						"祁连县",
						"全市"
					]
				},
				{
					"name": "海东地区",
					"area": [
						"化隆回族自治县",
						"互助土族自治县",
						"乐都县",
						"民和回族土族自治县",
						"平安县",
						"全市",
						"循化撒拉族自治县"
					]
				},
				{
					"name": "海南藏族自治州",
					"area": [
						"贵德县",
						"共和县",
						"贵南县",
						"全市",
						"同德县",
						"兴海县"
					]
				},
				{
					"name": "黄南藏族自治州",
					"area": [
						"河南蒙古族自治县",
						"尖扎县",
						"全市",
						"同仁县",
						"泽库县"
					]
				},
				{
					"name": "海西蒙古族藏族自治州",
					"area": [
						"德令哈市",
						"都兰县",
						"格尔木市",
						"全市",
						"天峻县",
						"乌兰县"
					]
				},
				{
					"name": "西宁市",
					"area": [
						"城北区",
						"城东区",
						"城西区",
						"大通回族土族自治县",
						"全市",
						"湟源县",
						"湟中县"
					]
				},
				{
					"name": "玉树藏族自治州",
					"area": [
						"称多县",
						"囊谦县",
						"曲麻莱县",
						"全市",
						"玉树县",
						"治多县",
						"杂多县"
					]
				}
			]
		},
		{
			"name": "四川省",
			"city": [
				{
					"name": "阿坝藏族羌族自治州",
					"area": [
						"阿坝县",
						"黑水县",
						"红原县",
						"金川县",
						"九寨沟县",
						"理县",
						"马尔康县",
						"茂县",
						"全市",
						"若尔盖县",
						"壤塘县",
						"松潘县",
						"小金县",
						"汶川县"
					]
				},
				{
					"name": "巴中市",
					"area": [
						"巴州区",
						"南江县",
						"平昌县",
						"全市",
						"通江县"
					]
				},
				{
					"name": "成都市",
					"area": [
						"成华区",
						"崇州市",
						"都江堰市",
						"大邑县",
						"锦江区",
						"金牛区",
						"金堂县",
						"龙泉驿区",
						"蒲江县",
						"彭州市",
						"青白江区",
						"全市",
						"青羊区",
						"双流县",
						"武侯区",
						"温江区",
						"新都区",
						"新津县",
						"郫县",
						"邛崃市"
					]
				},
				{
					"name": "德阳市",
					"area": [
						"广汉市",
						"罗江县",
						"绵竹市",
						"全市",
						"什邡市",
						"中江县",
						"旌阳区"
					]
				},
				{
					"name": "达州市",
					"area": [
						"达县",
						"大竹县",
						"开江县",
						"全市",
						"渠县",
						"通川区",
						"万源市",
						"宣汉县"
					]
				},
				{
					"name": "广安市",
					"area": [
						"广安区",
						"华蓥市",
						"邻水县",
						"全市",
						"武胜县",
						"岳池县"
					]
				},
				{
					"name": "广元市",
					"area": [
						"朝天区",
						"苍溪县",
						"剑阁县",
						"利州区",
						"青川县",
						"全市",
						"旺苍县",
						"元坝区"
					]
				},
				{
					"name": "甘孜藏族自治州",
					"area": [
						"巴塘县",
						"白玉县",
						"丹巴县",
						"稻城县",
						"德格县",
						"得荣县",
						"道孚县",
						"甘孜县",
						"九龙县",
						"康定县",
						"炉霍县",
						"理塘县",
						"全市",
						"色达县",
						"石渠县",
						"乡城县",
						"新龙县",
						"雅江县",
						"泸定县"
					]
				},
				{
					"name": "乐山市",
					"area": [
						"峨边彝族自治县",
						"峨眉山市",
						"夹江县",
						"金口河区",
						"井研县",
						"马边彝族自治县",
						"全市",
						"沙湾区",
						"五通桥区",
						"犍为县",
						"沐川县"
					]
				},
				{
					"name": "凉山彝族自治州",
					"area": [
						"布拖县",
						"德昌县",
						"甘洛县",
						"会东县",
						"会理县",
						"金阳县",
						"雷波县",
						"美姑县",
						"木里藏族自治县",
						"冕宁县",
						"宁南县",
						"普格县",
						"全市",
						"西昌市",
						"喜德县",
						"越西县",
						"盐源县",
						"昭觉县"
					]
				},
				{
					"name": "眉山市",
					"area": [
						"丹棱县",
						"东坡区",
						"洪雅县",
						"彭山县",
						"全市",
						"青神县",
						"仁寿县"
					]
				},
				{
					"name": "绵阳市",
					"area": [
						"安县",
						"北川羌族自治县",
						"涪城区",
						"江油市",
						"平武县",
						"全市",
						"三台县",
						"盐亭县",
						"游仙区",
						"梓潼县"
					]
				},
				{
					"name": "南充市",
					"area": [
						"高坪区",
						"嘉陵区",
						"南部县",
						"蓬安县",
						"全市",
						"顺庆区",
						"西充县",
						"仪陇县",
						"营山县",
						"阆中市"
					]
				},
				{
					"name": "内江市",
					"area": [
						"东兴区",
						"隆昌县",
						"全市",
						"威远县",
						"资中县"
					]
				},
				{
					"name": "攀枝花市",
					"area": [
						"东区",
						"米易县",
						"全市",
						"仁和区",
						"西区",
						"盐边县"
					]
				},
				{
					"name": "遂宁市",
					"area": [
						"安居区",
						"船山区",
						"大英县",
						"全市",
						"射洪县"
					]
				},
				{
					"name": "雅安市",
					"area": [
						"宝兴县",
						"汉源县",
						"芦山县",
						"名山区",
						"全市",
						"石棉县",
						"天全县",
						"雨城区",
						"荥经县"
					]
				},
				{
					"name": "宜宾市",
					"area": [
						"长宁县",
						"翠屏区",
						"高县",
						"江安县",
						"南溪区",
						"屏山县",
						"全市",
						"兴文县",
						"宜宾县",
						"珙县",
						"筠连县"
					]
				},
				{
					"name": "自贡市",
					"area": [
						"大安区",
						"富顺县",
						"贡井区",
						"全市",
						"荣县",
						"沿滩区",
						"自流井区"
					]
				},
				{
					"name": "资阳市",
					"area": [
						"安岳县",
						"简阳市",
						"乐至县",
						"全市",
						"雁江区"
					]
				},
				{
					"name": "泸州市",
					"area": [
						"古蔺县",
						"合江县",
						"江阳区",
						"龙马潭区",
						"纳溪区",
						"全市",
						"叙永县",
						"泸县"
					]
				}
			]
		},
		{
			"name": "山东省",
			"city": [
				{
					"name": "滨州市",
					"area": [
						"滨城区",
						"博兴县",
						"惠民县",
						"全市",
						"无棣县",
						"阳信县",
						"沾化县",
						"邹平县"
					]
				},
				{
					"name": "东营市",
					"area": [
						"东营区",
						"广饶县",
						"河口区",
						"垦利县",
						"利津县",
						"全市"
					]
				},
				{
					"name": "德州市",
					"area": [
						"德城区",
						"乐陵市",
						"陵县",
						"临邑县",
						"宁津县",
						"平原县",
						"齐河县",
						"全市",
						"庆云县",
						"武城县",
						"夏津县",
						"禹城市"
					]
				},
				{
					"name": "菏泽市",
					"area": [
						"成武县",
						"曹县",
						"东明县",
						"定陶县",
						"单县",
						"巨野县",
						"牡丹区",
						"全市",
						"鄄城县",
						"郓城县"
					]
				},
				{
					"name": "济宁市",
					"area": [
						"嘉祥县",
						"金乡县",
						"梁山县",
						"曲阜市",
						"全市",
						"任城区",
						"微山县",
						"鱼台县",
						"邹城市",
						"汶上县",
						"泗水县",
						"兖州市"
					]
				},
				{
					"name": "济南市",
					"area": [
						"长清区",
						"槐荫区",
						"济阳县",
						"历城区",
						"历下区",
						"平阴县",
						"全市",
						"商河县",
						"市中区",
						"天桥区",
						"章丘市"
					]
				},
				{
					"name": "聊城市",
					"area": [
						"东阿县",
						"东昌府区",
						"高唐县",
						"冠县",
						"临清市",
						"全市",
						"阳谷县",
						"茌平县",
						"莘县"
					]
				},
				{
					"name": "莱芜市",
					"area": [
						"钢城区",
						"莱城区",
						"全市"
					]
				},
				{
					"name": "临沂市",
					"area": [
						"苍山县",
						"费县",
						"河东区",
						"兰山区",
						"罗庄区",
						"临沭县",
						"蒙阴县",
						"平邑县",
						"全市",
						"沂南县",
						"沂水县",
						"莒南县",
						"郯城县"
					]
				},
				{
					"name": "青岛市",
					"area": [
						"城阳区",
						"黄岛区",
						"即墨市",
						"胶州市",
						"李沧区",
						"莱西市",
						"平度市",
						"全市",
						"市北区",
						"市南区",
						"崂山区"
					]
				},
				{
					"name": "日照市",
					"area": [
						"东港区",
						"全市",
						"五莲县",
						"莒县",
						"岚山区"
					]
				},
				{
					"name": "泰安市",
					"area": [
						"东平县",
						"肥城市",
						"宁阳县",
						"全市",
						"泰山区",
						"新泰市"
					]
				},
				{
					"name": "潍坊市",
					"area": [
						"安丘市",
						"昌乐县",
						"昌邑市",
						"高密市",
						"寒亭区",
						"奎文区",
						"临朐县",
						"全市",
						"青州市",
						"寿光市",
						"潍城区",
						"诸城市"
					]
				},
				{
					"name": "威海市",
					"area": [
						"环翠区",
						"全市",
						"荣成市",
						"乳山市",
						"文登市"
					]
				},
				{
					"name": "烟台市",
					"area": [
						"长岛县",
						"福山区",
						"海阳市",
						"龙口市",
						"莱山区",
						"莱阳市",
						"莱州市",
						"牟平区",
						"蓬莱市",
						"全市",
						"栖霞市",
						"招远市",
						"芝罘区"
					]
				},
				{
					"name": "淄博市",
					"area": [
						"博山区",
						"高青县",
						"桓台县",
						"临淄区",
						"全市",
						"沂源县",
						"淄川区",
						"周村区",
						"张店区"
					]
				},
				{
					"name": "枣庄市",
					"area": [
						"全市",
						"山亭区",
						"台儿庄区",
						"薛城区",
						"滕州市",
						"峄城区"
					]
				}
			]
		},
		{
			"name": "上海市",
			"city": [
				{
					"name": "上海市",
					"area": [
						"宝山区",
						"崇明县",
						"长宁区",
						"奉贤区",
						"虹口区",
						"黄浦区",
						"静安区",
						"嘉定区",
						"金山区",
						"浦东新区",
						"普陀区",
						"青浦区",
						"全市",
						"松江区",
						"徐汇区",
						"杨浦区",
						"闸北区",
						"闵行区"
					]
				}
			]
		},
		{
			"name": "山西省",
			"city": [
				{
					"name": "长治市",
					"area": [
						"长治县",
						"长子县",
						"壶关县",
						"潞城市",
						"黎城县",
						"平顺县",
						"全市",
						"沁县",
						"沁源县",
						"屯留县",
						"武乡县",
						"襄垣县"
					]
				},
				{
					"name": "大同市",
					"area": [
						"城区",
						"大同县",
						"广灵县",
						"浑源县",
						"灵丘县",
						"南郊区",
						"全市",
						"天镇县",
						"新荣区",
						"阳高县",
						"左云县"
					]
				},
				{
					"name": "晋城市",
					"area": [
						"高平市",
						"陵川县",
						"全市",
						"沁水县",
						"阳城县"
					]
				},
				{
					"name": "晋中市",
					"area": [
						"和顺县",
						"介休市",
						"灵石县",
						"平遥县",
						"全市",
						"祁县",
						"寿阳县",
						"太谷县",
						"昔阳县",
						"榆次区",
						"榆社县",
						"左权县"
					]
				},
				{
					"name": "临汾市",
					"area": [
						"安泽县",
						"大宁县",
						"浮山县",
						"汾西县",
						"古县",
						"洪洞县",
						"侯马市",
						"霍州市",
						"吉县",
						"蒲县",
						"全市",
						"曲沃县",
						"襄汾县",
						"乡宁县",
						"翼城县",
						"尧都区",
						"永和县",
						"隰县"
					]
				},
				{
					"name": "吕梁市",
					"area": [
						"方山县",
						"汾阳市",
						"交城县",
						"交口县",
						"柳林县",
						"离石区",
						"临县",
						"全市",
						"石楼县",
						"文水县",
						"兴县",
						"孝义市",
						"中阳县",
						"岚县"
					]
				},
				{
					"name": "朔州市",
					"area": [
						"怀仁县",
						"平鲁区",
						"全市",
						"朔城区",
						"山阴县",
						"应县",
						"右玉县"
					]
				},
				{
					"name": "太原市",
					"area": [
						"古交市",
						"尖草坪区",
						"晋源区",
						"娄烦县",
						"全市",
						"清徐县",
						"万柏林区",
						"小店区",
						"杏花岭区",
						"阳曲县",
						"迎泽区"
					]
				},
				{
					"name": "忻州市",
					"area": [
						"保德县",
						"代县",
						"定襄县",
						"繁峙县",
						"河曲县",
						"静乐县",
						"宁武县",
						"偏关县",
						"全市",
						"神池县",
						"五台县",
						"五寨县",
						"忻府区",
						"原平市",
						"岢岚县"
					]
				},
				{
					"name": "运城市",
					"area": [
						"河津市",
						"临猗县",
						"平陆县",
						"全市",
						"万荣县",
						"闻喜县",
						"夏县",
						"新绛县",
						"盐湖区",
						"永济市",
						"垣曲县",
						"稷山县",
						"绛县",
						"芮城县"
					]
				},
				{
					"name": "阳泉市",
					"area": [
						"郊区",
						"平定县",
						"全市",
						"盂县"
					]
				}
			]
		},
		{
			"name": "陕西省",
			"city": [
				{
					"name": "安康市",
					"area": [
						"白河县",
						"汉滨区",
						"汉阴县",
						"宁陕县",
						"平利县",
						"全市",
						"石泉县",
						"旬阳县",
						"镇坪县",
						"紫阳县",
						"岚皋县"
					]
				},
				{
					"name": "宝鸡市",
					"area": [
						"扶风县",
						"凤县",
						"凤翔县",
						"金台区",
						"陇县",
						"眉县",
						"全市",
						"千阳县",
						"太白县",
						"渭滨区",
						"麟游县",
						"岐山县"
					]
				},
				{
					"name": "汉中市",
					"area": [
						"城固县",
						"佛坪县",
						"汉台区",
						"留坝县",
						"略阳县",
						"勉县",
						"宁强县",
						"南郑县",
						"全市",
						"西乡县",
						"洋县",
						"镇巴县"
					]
				},
				{
					"name": "商洛市",
					"area": [
						"丹凤县",
						"全市",
						"商州区"
					]
				},
				{
					"name": "铜川市",
					"area": [
						"全市",
						"宜君县",
						"耀州区"
					]
				},
				{
					"name": "渭南市",
					"area": [
						"白水县",
						"澄城县",
						"大荔县",
						"富平县",
						"韩城市",
						"华县",
						"华阴市",
						"合阳县",
						"临渭区",
						"蒲城县",
						"全市",
						"潼关县"
					]
				},
				{
					"name": "西安市",
					"area": [
						"碑林区",
						"高陵县",
						"户县",
						"莲湖区",
						"蓝田县",
						"临潼区",
						"全市",
						"未央区",
						"阎良区",
						"雁塔区",
						"周至县",
						"灞桥区"
					]
				},
				{
					"name": "咸阳市",
					"area": [
						"彬县",
						"淳化县",
						"长武县",
						"礼泉县",
						"秦都区",
						"全市",
						"乾县",
						"三原县",
						"渭城区",
						"武功县",
						"兴平市",
						"旬邑县",
						"杨陵区",
						"永寿县",
						"泾阳县"
					]
				},
				{
					"name": "延安市",
					"area": [
						"安塞县",
						"宝塔区",
						"富县",
						"甘泉县",
						"黄陵县",
						"黄龙县",
						"洛川县",
						"全市",
						"吴起县",
						"延川县",
						"延长县",
						"宜川县",
						"子长县",
						"志丹县"
					]
				},
				{
					"name": "榆林市",
					"area": [
						"定边县",
						"府谷县",
						"横山县",
						"靖边县",
						"佳县",
						"米脂县",
						"清涧县",
						"全市",
						"绥德县",
						"神木县",
						"吴堡县",
						"榆阳区",
						"子洲县"
					]
				}
			]
		},
		{
			"name": "天津市",
			"city": [
				{
					"name": "天津市",
					"area": [
						"北辰区",
						"滨海新区",
						"宝坻区",
						"东丽区",
						"河北区",
						"和平区",
						"红桥区",
						"河西区",
						"静海县",
						"津南区",
						"蓟县",
						"宁河县",
						"南开区",
						"全市",
						"武清区",
						"西青区"
					]
				}
			]
		},
		{
			"name": "台湾",
			"city": [
				{
					"name": "高雄市",
					"area": [
						"芩雅区",
						"鼓山区",
						"楠梓区",
						"旗津区",
						"前金区",
						"前镇区",
						"三民区",
						"小港区",
						"新兴区",
						"盐埕区",
						"左营区"
					]
				},
				{
					"name": "高雄县"
				},
				{
					"name": "花莲县"
				},
				{
					"name": "基隆市",
					"area": [
						"暖暖区",
						"七堵区",
						"安乐区",
						"仁爱区",
						"信义区",
						"中山区",
						"中正区"
					]
				},
				{
					"name": "嘉义市",
					"area": [
						"东区",
						"西区"
					]
				},
				{
					"name": "苗栗县"
				},
				{
					"name": "南投县"
				},
				{
					"name": "屏东县"
				},
				{
					"name": "澎湖县"
				},
				{
					"name": "彰化县"
				},
				{
					"name": "台北市",
					"area": [
						"北投区",
						"大安区",
						"大同区",
						"南港区",
						"内湖区",
						"士林区",
						"松山区",
						"万华区",
						"文山区",
						"信义区",
						"中山区",
						"中正区"
					]
				},
				{
					"name": "台北县"
				},
				{
					"name": "台东县"
				},
				{
					"name": "台南市",
					"area": [
						"安平区",
						"北区",
						"安南区",
						"东区",
						"南区",
						"中西区"
					]
				},
				{
					"name": "台南县"
				},
				{
					"name": "桃园县"
				},
				{
					"name": "台中市",
					"area": [
						"北区",
						"北屯区",
						"东区",
						"南区",
						"南屯区",
						"西区",
						"西屯区",
						"中区"
					]
				},
				{
					"name": "台中县"
				},
				{
					"name": "新竹市",
					"area": [
						"北区",
						"东区",
						"香山区"
					]
				},
				{
					"name": "宜兰县"
				},
				{
					"name": "云林县"
				}
			]
		},
		{
			"name": "西藏自治区",
			"city": [
				{
					"name": "阿里地区",
					"area": [
						"措勤县",
						"噶尔县",
						"革吉县",
						"改则县",
						"普兰县",
						"全市",
						"日土县",
						"札达县"
					]
				},
				{
					"name": "昌都地区",
					"area": [
						"边坝县",
						"八宿县",
						"昌都县",
						"察雅县",
						"丁青县",
						"贡觉县",
						"江达县",
						"洛隆县",
						"类乌齐县",
						"芒康县",
						"全市",
						"左贡县"
					]
				},
				{
					"name": "拉萨市",
					"area": [
						"堆龙德庆县",
						"当雄县",
						"达孜县",
						"林周县",
						"墨竹工卡县",
						"尼木县",
						"全市",
						"曲水县"
					]
				},
				{
					"name": "林芝地区",
					"area": [
						"波密县",
						"察隅县",
						"工布江达县",
						"朗县",
						"林芝县",
						"米林县",
						"墨脱县",
						"全市"
					]
				},
				{
					"name": "那曲地区",
					"area": [
						"班戈县",
						"巴青县",
						"比如县",
						"嘉黎县",
						"尼玛县",
						"那曲县",
						"聂荣县",
						"全市",
						"索县",
						"申扎县"
					]
				},
				{
					"name": "日喀则地区",
					"area": [
						"昂仁县",
						"白朗县",
						"定结县",
						"定日县",
						"岗巴县",
						"吉隆县",
						"江孜县",
						"康马县",
						"拉孜县",
						"聂拉木县",
						"南木林县",
						"全市",
						"仁布县",
						"萨嘎县",
						"萨迦县",
						"谢通门县",
						"亚东县",
						"仲巴县"
					]
				},
				{
					"name": "山南地区",
					"area": [
						"措美县",
						"错那县",
						"贡嘎县",
						"加查县",
						"浪卡子县",
						"洛扎县",
						"隆子县",
						"乃东县",
						"琼结县",
						"全市",
						"曲松县",
						"桑日县",
						"扎囊县"
					]
				}
			]
		},
		{
			"name": "香港",
			"city": [
				{
					"name": "九龙",
					"area": [
						"观塘区",
						"黄大仙区",
						"九龙城区",
						"深水埗区",
						"油尖旺区"
					]
				},
				{
					"name": "香港岛",
					"area": [
						"东区",
						"南区",
						"湾仔区",
						"中西区"
					]
				},
				{
					"name": "新界",
					"area": [
						"北区",
						"大埔区",
						"葵青区",
						"离岛区",
						"荃湾区",
						"沙田区",
						"屯门区",
						"西贡区",
						"元朗区"
					]
				}
			]
		},
		{
			"name": "新疆维吾尔自治区",
			"city": [
				{
					"name": "阿克苏地区",
					"area": [
						"阿瓦提县",
						"拜城县",
						"库车县",
						"柯坪县",
						"全市",
						"沙雅县",
						"乌什县",
						"温宿县",
						"新和县"
					]
				},
				{
					"name": "阿勒泰地区",
					"area": [
						"布尔津县",
						"福海县",
						"富蕴县",
						"哈巴河县",
						"吉木乃县",
						"青河县",
						"全市"
					]
				},
				{
					"name": "博尔塔拉蒙古自治州",
					"area": [
						"博乐市",
						"精河县",
						"全市",
						"温泉县"
					]
				},
				{
					"name": "巴音郭楞蒙古自治州",
					"area": [
						"博湖县",
						"和静县",
						"和硕县",
						"库尔勒市",
						"轮台县",
						"且末县",
						"全市",
						"若羌县",
						"尉犁县",
						"焉耆回族自治县"
					]
				},
				{
					"name": "昌吉回族自治州",
					"area": [
						"昌吉市",
						"阜康市",
						"呼图壁县",
						"吉木萨尔县",
						"木垒哈萨克自治县",
						"玛纳斯县",
						"全市",
						"奇台县"
					]
				},
				{
					"name": "哈密地区",
					"area": [
						"巴里坤哈萨克自治县",
						"全市",
						"伊吾县"
					]
				},
				{
					"name": "和田地区",
					"area": [
						"策勒县",
						"和田县",
						"洛浦县",
						"民丰县",
						"墨玉县",
						"皮山县",
						"全市",
						"于田县"
					]
				},
				{
					"name": "克拉玛依市",
					"area": [
						"白碱滩区",
						"独山子区",
						"克拉玛依区",
						"全市",
						"乌尔禾区"
					]
				},
				{
					"name": "喀什地区",
					"area": [
						"巴楚县",
						"麦盖提县",
						"全市",
						"莎车县",
						"疏附县",
						"疏勒县",
						"塔什库尔干塔吉克自治县",
						"叶城县",
						"英吉沙县",
						"岳普湖县",
						"泽普县",
						"伽师县"
					]
				},
				{
					"name": "克孜勒苏柯尔克孜自治州",
					"area": [
						"阿合奇县",
						"阿克陶县",
						"阿图什市",
						"全市",
						"乌恰县"
					]
				},
				{
					"name": "塔城地区",
					"area": [
						"额敏县",
						"和布克赛尔蒙古自治县",
						"全市",
						"沙湾县",
						"托里县",
						"乌苏市",
						"裕民县"
					]
				},
				{
					"name": "吐鲁番地区",
					"area": [
						"全市",
						"托克逊县",
						"鄯善县"
					]
				},
				{
					"name": "乌鲁木齐市",
					"area": [
						"米东区",
						"全市",
						"水磨沟区",
						"沙依巴克区",
						"天山区",
						"头屯河区",
						"乌鲁木齐县"
					]
				},
				{
					"name": "新疆维吾尔自治区直辖县级行政单",
					"area": [
						"阿拉尔市",
						"全市",
						"石河子市",
						"图木舒克市",
						"五家渠市"
					]
				},
				{
					"name": "伊犁哈萨克自治州",
					"area": [
						"察布查尔锡伯自治县",
						"霍城县",
						"奎屯市",
						"尼勒克县",
						"全市",
						"特克斯县",
						"新源县",
						"伊宁市",
						"昭苏县"
					]
				}
			]
		},
		{
			"name": "云南省",
			"city": [
				{
					"name": "保山市",
					"area": [
						"昌宁县",
						"龙陵县",
						"隆阳区",
						"全市",
						"施甸县",
						"腾冲县"
					]
				},
				{
					"name": "楚雄彝族自治州",
					"area": [
						"楚雄市",
						"大姚县",
						"禄丰县",
						"牟定县",
						"南华县",
						"全市",
						"双柏县",
						"武定县",
						"姚安县",
						"元谋县",
						"永仁县"
					]
				},
				{
					"name": "德宏傣族景颇族自治州",
					"area": [
						"陇川县",
						"梁河县",
						"芒市",
						"全市",
						"瑞丽市",
						"盈江县"
					]
				},
				{
					"name": "大理白族自治州",
					"area": [
						"宾川县",
						"大理市",
						"洱源县",
						"鹤庆县",
						"剑川县",
						"弥渡县",
						"南涧彝族自治县",
						"全市",
						"巍山彝族回族自治县",
						"祥云县",
						"云龙县",
						"永平县",
						"漾濞彝族自治县"
					]
				},
				{
					"name": "迪庆藏族自治州",
					"area": [
						"德钦县",
						"全市",
						"维西傈僳族自治县",
						"香格里拉县"
					]
				},
				{
					"name": "红河哈尼族彝族自治州",
					"area": [
						"个旧市",
						"红河县",
						"河口瑶族自治县",
						"金平苗族瑶族傣族自治县",
						"建水县",
						"开远市",
						"绿春县",
						"弥勒县",
						"蒙自市",
						"屏边苗族自治县",
						"全市",
						"石屏县",
						"元阳县",
						"泸西县"
					]
				},
				{
					"name": "昆明市",
					"area": [
						"安宁市",
						"呈贡区",
						"东川区",
						"富民县",
						"官渡区",
						"晋宁县",
						"禄劝彝族苗族自治县",
						"盘龙区",
						"全市",
						"石林彝族自治县",
						"五华区",
						"寻甸回族彝族自治县",
						"西山区",
						"宜良县",
						"嵩明县"
					]
				},
				{
					"name": "临沧市",
					"area": [
						"沧源佤族自治县",
						"凤庆县",
						"耿马傣族佤族自治县",
						"临翔区",
						"全市",
						"双江",
						"永德县",
						"云县",
						"镇康县"
					]
				},
				{
					"name": "丽江市",
					"area": [
						"古城区",
						"华坪县",
						"宁蒗彝族自治县",
						"全市",
						"永胜县"
					]
				},
				{
					"name": "怒江傈僳族自治州",
					"area": [
						"福贡县",
						"贡山独龙族怒族自治县",
						"兰坪白族普米族自治县",
						"全市",
						"泸水县"
					]
				},
				{
					"name": "普洱市",
					"area": [
						"江城哈尼族彝族自治县",
						"景东彝族自治县",
						"景谷傣族彝族自治县",
						"澜沧拉祜族自治县",
						"墨江哈尼族自治县",
						"孟连",
						"宁洱哈尼族彝族自治县",
						"全市",
						"思茅区",
						"西盟佤族自治县",
						"镇沅"
					]
				},
				{
					"name": "曲靖市",
					"area": [
						"富源县",
						"会泽县",
						"陆良县",
						"罗平县",
						"马龙县",
						"全市",
						"师宗县",
						"宣威市",
						"沾益县",
						"麒麟区"
					]
				},
				{
					"name": "文山壮族苗族自治州",
					"area": [
						"富宁县",
						"广南县",
						"马关县",
						"麻栗坡县",
						"丘北县",
						"全市",
						"文山市",
						"西畴县",
						"砚山县"
					]
				},
				{
					"name": "西双版纳傣族自治州",
					"area": [
						"景洪市",
						"全市",
						"勐海县",
						"勐腊县"
					]
				},
				{
					"name": "玉溪市",
					"area": [
						"澄江县",
						"峨山彝族自治县",
						"华宁县",
						"红塔区",
						"江川县",
						"全市",
						"通海县",
						"新平彝族傣族自治县",
						"元江",
						"易门县"
					]
				},
				{
					"name": "昭通市",
					"area": [
						"大关县",
						"鲁甸县",
						"巧家县",
						"全市",
						"水富县",
						"绥江县",
						"威信县",
						"盐津县",
						"彝良县",
						"永善县",
						"镇雄县",
						"昭阳区"
					]
				}
			]
		},
		{
			"name": "浙江省",
			"city": [
				{
					"name": "杭州市",
					"area": [
						"滨江区",
						"淳安县",
						"富阳市",
						"拱墅区",
						"建德市",
						"江干区",
						"临安市",
						"全市",
						"上城区",
						"桐庐县",
						"下城区",
						"萧山区",
						"余杭区"
					]
				},
				{
					"name": "湖州市",
					"area": [
						"安吉县",
						"长兴县",
						"德清县",
						"南浔区",
						"全市",
						"吴兴区"
					]
				},
				{
					"name": "金华市",
					"area": [
						"东阳市",
						"金东区",
						"兰溪市",
						"磐安县",
						"浦江县",
						"全市",
						"武义县",
						"永康市",
						"义乌市",
						"婺城区"
					]
				},
				{
					"name": "嘉兴市",
					"area": [
						"海宁市",
						"海盐县",
						"嘉善县",
						"南湖区",
						"平湖市",
						"全市",
						"桐乡市"
					]
				},
				{
					"name": "丽水市",
					"area": [
						"景宁畲族自治县",
						"莲都区",
						"龙泉市",
						"全市",
						"青田县",
						"庆元县",
						"遂昌县",
						"松阳县",
						"云和县",
						"缙云县"
					]
				},
				{
					"name": "宁波市",
					"area": [
						"北仑区",
						"慈溪市",
						"奉化市",
						"海曙区",
						"江北区",
						"江东区",
						"宁海县",
						"全市",
						"象山县",
						"余姚市",
						"镇海区",
						"鄞州区"
					]
				},
				{
					"name": "绍兴市",
					"area": [
						"全市",
						"上虞市",
						"新昌县",
						"越城区",
						"诸暨市",
						"嵊州市"
					]
				},
				{
					"name": "台州市",
					"area": [
						"黄岩区",
						"椒江区",
						"临海市",
						"路桥区",
						"全市",
						"三门县",
						"天台县",
						"温岭市",
						"仙居县",
						"玉环县"
					]
				},
				{
					"name": "温州市",
					"area": [
						"苍南县",
						"洞头县",
						"鹿城区",
						"乐清市",
						"龙湾区",
						"平阳县",
						"全市",
						"瑞安市",
						"泰顺县",
						"文成县",
						"永嘉县",
						"瓯海区"
					]
				},
				{
					"name": "舟山市",
					"area": [
						"定海区",
						"全市",
						"嵊泗县",
						"岱山县"
					]
				},
				{
					"name": "衢州市",
					"area": [
						"常山县",
						"江山市",
						"柯城区",
						"开化县",
						"龙游县",
						"全市",
						"衢江区"
					]
				}
			]
		},
		{
			"name": "重庆市",
			"city": [
				{
					"name": "重庆市",
					"area": [
						"巴南区",
						"北碚区",
						"城口县",
						"长寿区",
						"大渡口区",
						"垫江县",
						"大足区",
						"丰都县",
						"奉节县",
						"涪陵区",
						"合川区",
						"江津区",
						"九龙坡区",
						"开县",
						"梁平县",
						"南岸区",
						"南川区",
						"彭水苗族土家族自治县",
						"黔江区",
						"全市",
						"荣昌县",
						"沙坪坝区",
						"石柱土家族自治县",
						"铜梁县",
						"武隆县",
						"巫山县",
						"巫溪县",
						"万州区",
						"秀山土家族苗族自治县",
						"渝北区",
						"永川区",
						"酉阳土家族苗族自治县",
						"云阳县",
						"渝中区",
						"忠县",
						"璧山县",
						"潼南县",
						"綦江区"
					]
				}
			]
		}
	];

/***/ },
/* 15 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by WangMing on 16/1/11.
	 */
	var main=__webpack_require__(17);
	main.directive('loginForm', function () {
	  return {
	    restrict: 'AE',
	    template:"<div style='height: 500px;'><label for='username'>用户名:</label><input type='text' name='username' placeholder='请输入用户名'><label for='password'>密码:</label><input  type='password' name='password' placeholder='请输入密码'></div>"
	  }
	});

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports=angular.module('main', []);

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by WangMing on 16/1/11.
	 */
	doAjax.$inject = ["$http", "$q"];
	var main = __webpack_require__(17);
	main.factory('doAjax', doAjax);

	function doAjax($http, $q) {
	  return {
	    query: function(mobileno) {
	      var deferred = $q.defer();
	      $http.jsonp("openapi/getUserFriends", {
	          method: "GET",
	          params: {
	            callback: "JSON_CALLBACK",
	            mobileno: mobileno
	          }
	        })
	        .success(function(data, status, headers, config) {
	          deferred.resolve(data);
	        })
	        .error(function(data, status, headers, config) {
	          deferred.reject(data);
	        });
	      return deferred.promise;
	    }
	  }
	}

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by WangMing on 16/1/11.
	 */
	LoginController.$inject = ["doAjax"];
	var main = __webpack_require__(17);
	main.controller('LoginController', LoginController);

	function LoginController(doAjax) {
	    this.test = "你好!";
	}

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "<div class=\"login-wrap\">\r\n\t<p class=\"login-title\"><span>用户登录</span></p>\r\n\t<p class=\"phone-num\"><input type=\"text\" name=\"\" value=\"\" placeholder=\"请输入手机号码\"></p>\r\n\t<p class=\"pic-code\"><input type=\"text\" name=\"\" value=\"\" placeholder=\"请输入图形验证码\"><span><img src=\"http://192.168.1.6:8084/apilib/code.php\" alt=\"验证码\"></span></p>\r\n\t<p class=\"phone-code\"><input type=\"text\" name=\"\" value=\"\" placeholder=\"请输入手机验证码\"><span>获取验证码</span></p>\r\n\t<p class=\"login-warn\"><a href=\"#\">我有一头小毛驴</a></p>\r\n\t<p class=\"login-btn\"><button>登录</button></p>\r\n</div>";

/***/ }
]);
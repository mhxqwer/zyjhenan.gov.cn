// 易分析事件埋点，方法定义
var _yfx_trackdata = _yfx_trackdata || [];

/* header */
document.writeln(
  '<link rel="stylesheet" href="https://file.henan.gov.cn/4500000001/newgb/css/header2025.css">'+
  '<div class="top">' +
  '<div class="head-top cl w1300">' +
  '<div class="wechat-code" style="display: none;">' +
  '<img  src="https://file.henan.gov.cn/4500000001/gb/img/wechat-code.png" alt="河南发布微信公众号">' +
  '</div>' +
  '<div class="app-code" style="display: none;">' +
  '<img src="https://file.henan.gov.cn/4500000001/gb/img/wap-code.png"  alt="河南省人民政府门户网站移动版二维码">' +
  '</div>' +
  '<div class="weibo-code" style="display: none;">' +
  '<img src="https://file.henan.gov.cn/4500000001/newgb/img/2025weibo_ewm.png" alt="河南省人民政府门户网站微博">' +
  '</div>' +
  '<div class="fl media-list">' +
  '<a class="WeChat"> ' +
  '<img src="https://file.henan.gov.cn/4500000001/newgb/img/weixin.png">微信' +
  '</a>' +
  '<a class="line"></a>' +
  '<a class="blog">' +
  '<img  src="https://file.henan.gov.cn/4500000001/newgb/img/weibo.png">微博' +
  '</a> ' +
  '<a class="line"></a>' +
  '<a class="app">' +
  '<img src="https://file.henan.gov.cn/4500000001/newgb/img/appicon.png">移动版' +
  '</a> ' +
  '<a class="line"></a> ' +
  '<a class="robot" href="https://ia.henan.gov.cn" target="_blank"> ' +
  '<img src="https://file.henan.gov.cn/4500000001/newgb/img/znwd.png">智能问答' +
  '</a>' +
  '</div>' +
  '<div class="fr version-list">' +
  '<a href="javascript:zh_tran("t")" id="zh_click_t">繁</a> ' +
  '<a>&nbsp;|&nbsp;</a>' +
'<a  href="javascript:zh_tran("s")" id="zh_click_s">简</a> ' +
'<a>&nbsp;|&nbsp;</a>' +
'<a href="https://english.henan.gov.cn/"  class="mr30" target="_blank">EN</a> ' +
'<a id="userName" href="https://my.henan.gov.cn/login" target="_blank">登录</a>' +
'<a>&nbsp;|&nbsp;</a> ' +
'<a href="https://my.henan.gov.cn/userprofile/register" target="_blank" title="注册">注册</a>' +
'</div>' +
'</div>' +
' <div class="head cl">' +
'<div class="cl w1300" style="">' +
'<div class="logo"> <a href="//www.henan.gov.cn/" title="河南省人民政府门户网站logo"> <img  src="https://file.henan.gov.cn/4500000001/newgb/img/logo_new.png" alt="河南省人民政府门户网站logo"> </a></div>' +
'<div class="wza-box cl">'+
'<a onclick="headTool.switchOld()" id="toolbarOldman" class="oldman" href="javascript:void(0);"  title = "进入适老模式" > 进入适老模式</a>'+
' <a id="toolbarSwitch" class="wza" href="javascript:void(0);" title="无障碍阅读">无障碍阅读</a>'+
  '</div>' +
  '<div class="searchBox">' +
  '<div class="search">' +
  '<form action="https://www.henan.gov.cn/search/jsjg/" target="_blank">' +
  '<input type="hidden" value="4500000001" name="siteId">' +
  '<div class="cl">' +
  '<input class="fl" name="keyword" type="text" id="searchInput" autocomplete="off" placeholder="">' +
  '<input class="fr" id="searchBtn" type="submit" value="  ">' +
  '</div>' +
  '</form>' +
  '</div>' +
  '</div>' +
  '</div>' +
  '</div>' +
  
  '</div>'
);

$(function () {

  $("#searchBtn").click(function () {
    _yfx_trackdata.push(['event', '搜索', $('#searchInput').val()]);
  })
  $('#searchInput').keydown(function (event) {
    if (event.which == 13) {
      _yfx_trackdata.push(['event', '搜索', $('#searchInput').val()]);
    }
  });



  // $("body").append("<script src='https://file.henan.gov.cn/4500000001/gb/js/esdToolsInit.js'></script>");
  $(".upDown").click(function () {
    if ($("input[name='siteId']").val() == 4500000001) {
      $(this).siblings('span').html("全平台");
      $("input[name='siteId']").val("-1");
    } else {
      $(this).siblings('span').html("本　站");
      $("input[name='siteId']").val("4500000001");
    }
  })

  /* head 微信微博二维码展示 */
  $(".media-list .WeChat").hover(function () {
    $(".wechat-code").fadeIn(300);
  }, function () {
    $(".wechat-code").fadeOut(300);
  });
  $(".media-list .app").hover(function () {
    $(".app-code").fadeIn(300);
  }, function () {
    $(".app-code").fadeOut(300);
  });
  $(".media-list .blog").hover(function () {
    $(".weibo-code").fadeIn(300);
  }, function () {
    $(".weibo-code").fadeOut(300);
  });


  $.ajax({
    url: "https://my.henan.gov.cn/dahe/sso/info",
    type: 'get',
    dataType: 'jsonp',
    jsonpCallback: 'success_jsonpCallback',
    success: function (data) {
      // data.status==1?$("#user-name").html(data.obj.principal.username):$("#user-name").html("登录")
      data.status == 1 ? $("#user-name").html("个人中心") : $("#user-name").html("登录");
      if ($("#user-name").html() !== "登录") {
        $("#register").hide();
        $("#logout").show()
      }
    }
  });
  var old = location.href;
  var newUrl = encodeURIComponent(old);
  var url = "https://my.henan.gov.cn/logout?service=" + newUrl;
  $("#logout").attr("href", url);

  // $("body").append('<script src="https://file.henan.gov.cn/4500000001/js/common.js"></script>');

});







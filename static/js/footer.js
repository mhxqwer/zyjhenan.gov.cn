$('body').append(
    '<div class="footer grey">' +
    // '<div class="h25"></div>' +
    '<div class="footer-m cl" style="width: 960px;">' +
    '<div class="fl mr20"><a href="http://bszs.conac.cn/sitename?method=show&id=128D80BE779F1937E053022819ACF306" target="_blank"><img src="https://file.henan.gov.cn/4500000001/img/footer-1.png" alt="党政机关"></a></div>' +
    '<div class="fl">' +
    '<p><a href="https://www.henan.gov.cn/2018/05-23/231135.html" target="_blank">关于我们</a>|<a href="https://www.henan.gov.cn/2018/05-23/231180.html" target="_blank">联系我们</a>|<a href="https://www.henan.gov.cn/gywm/wzdt/" target="_blank">网站地图</a></p>' +
    '<p>主办：河南省人民政府办公厅 &nbsp; 协办：<a href="https://www.hnby.com.cn/" target="_blank">河南日报社</a><a href="https://www.dahe.cn/" target="_blank">大河网络传媒集团</a></p>' +
    '<p>政府网站标识码：4100000001 &nbsp; 备案序号：<a href="//beian.miit.gov.cn" target="_blank">豫ICP备05024460号-1</a> &nbsp; 郑公备：41010029000130</p>' +
    '</div>' +
	'<div class="fr">'+
        '<a href="https://zfwzgl.www.gov.cn/exposure/jiucuo.html?site_code=4100000001&url=https%3A%2F%2Fwww.henan.gov.cn%2F" target="_blank"><img src="https://file.henan.gov.cn/4500000001/img/jiucuo.png" alt=""></a>'+
        '<a><img src="https://file.henan.gov.cn/4500000001/gb/img/wza_logo.png" style="height:55px;" alt=""></a>'+
    '</div>' +
    '</div>' +
    '</div>'
);

$('body').append(`<script language="javascript">
var _yfx_trackdata = _yfx_trackdata || [];  //事件采集
var _yfx_website = "10000001";   //站点编号（请勿随意更改）
(function() {
    var yfxjs = document.createElement("script");
    yfxjs.charset = "utf-8";
    yfxjs.src = "//js.henan.gov.cn/count/yeefxcount.js";
    var yfxjs_t = document.getElementsByTagName("script")[0];
    yfxjs_t.parentNode.insertBefore(yfxjs, yfxjs_t);
})();
</script>`);
//document.domain = 'henan.gov.cn';

$(function(){
	$.ajax({
		url:"https://my.henan.gov.cn/dahe/sso/info",
		type:"get",
	    dataType: 'jsonp',
	    jsonp: 'jsonpCallback',
	    jsonpCallback: "success_jsonpCallback",
		success:function (data) {
			if (data.status==1) {
				$("#userName").text(data.obj.principal.username);
				$("#userName").attr('title',data.obj.principal.username);
				$("#userName").attr('href',data.obj.homeUrl);
			}
		},
		error:function(error){
			console.log(error)
		}
	})
})
$("body").append('<script src="https://file.henan.gov.cn/4500000001/gb/js/esdToolsInit.js"></script>');

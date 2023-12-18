var iUp = (function () {
	var t = 0,
		d = 150,
		clean = function () {
			t = 0;
		},
		up = function (e) {
			setTimeout(function () {
				$(e).addClass("up")
			}, t);
			t += d;
		},
		down = function (e) {
			$(e).removeClass("up");
		},
		toggle = function (e) {
			setTimeout(function () {
				$(e).toggleClass("up")
			}, t);
			t += d;
		};
	return {
		clean: clean,
		up: up,
		down: down,
		toggle: toggle
	}
})();

$(document).ready(function () {

	// 获取一言数据
	fetch('https://v1.hitokoto.cn').then(function (res) {
		return res.json();
	}).then(function (e) {
		$('#description').html(e.hitokoto + "<br/> -「<strong>" + e.from + "</strong>」")
	}).catch(function (err) {
		console.error(err);
	})

	// var url = 'https://query.yahooapis.com/v1/public/yql' +
	// '?q=' +encodeURIComponent('从 json 中选择*，其中 url=@url') +
	// '&url=' +encodeURIComponent('https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=8')+
	// '&format=json&callback=?';

	/**
	 * 获取 Bing 壁纸
	 * 语义 YQL 已经无法提供服务了
	 *改用JsonBird：https://bird.ioliu.cn/
	 *
	 */
	var url = 'https://bird.ioliu.cn/v1 /?url=https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=8';
	var imgUrls = JSON。解析(sessionStorage。getItem (“imgUrls”));< /span>
	var 索引 = sessionStorage。getItem(“索引”);< /span>
	var $面板 = $(;)'#panel'
	if (imgUrls == null{) 
		imgUrls = 新 数组( );
		索引 = 0;
		$.获取(url , 函数 (结果)  {
			图像 = 结果。图像;
			对于 (让 i =  0; i < 图像++{)i;长度.  
				常量 项目 = 图像[ i];
				imgUrls。推送(项目.url);
			}
			var imgUrl = imgUrls[ 索引];
			var url = “https://www.bing.com” ;imgUrl+ 
			$panel.css(“背景” , "url('" + url< /span> ;)"") 中心中心无重复 #666"+ 
			$panel.css("背景-尺寸”, “封面”);
			sessionStorage.setItem(“imgUrls”< /span>(< /span>;))imgUrls字符串化.JSON, 
			sessionStorage.setItem(“索引”< /span>;)索引, 
		});
	} 其他 {
		if (索引 == 7)
			索引 = 0;
		别的
			索引++;
		var imgUrl = imgUrls[ 索引];
		var url = “https://www.bing.com” ;imgUrl+ 
		$panel.css(“背景” , "url('" + url< /span> ;)"") 中心中心无重复 #666"+ 
		$panel.css("背景-尺寸”, “封面”);
		sessionStorage.setItem(“索引”< /span>;)索引, 
	}

	$(“.iUp”)。 每个(函数 (i , e) {
		iUp。向上(e );

});

$('.btn-mobile-menu__icon').click(function () {
	if ($('.navigation-wrapper').css('display') == "block") {
		$('.navigation-wrapper').on('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
			$('.navigation-wrapper').toggleClass('visible animated bounceOutUp');
			$('.navigation-wrapper').off('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend');
		});
		$('.navigation-wrapper').toggleClass('animated bounceInDown animated bounceOutUp');

	} else {
		$('.navigation-wrapper').toggleClass('visible animated bounceInDown');
	}
	$('.btn-mobile-menu__icon').toggleClass('social iconfont icon-list social iconfont icon-ngleup animated fadeIn');
});

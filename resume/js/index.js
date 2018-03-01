$(function(){
	/*右侧滚动*/
	$(document).scroll(function(){
		var scroll=document.documentElement.scrollTop||document.body.scrollTop;
		var aboutTop=$(".about").offset().top;
		if(scroll>aboutTop){
			$(".right-fix").css({
				"position":"fixed",
				"top":"15%",
				"display":"block",
			});
		}else{
			$(".right-fix").css({
				"display":"none"
			});
		}
		
		var header=$("#header").offset().top-400;
		var introduce=$("#introduce").offset().top-400;
		var skill=$("#skill").offset().top-400;
		var eduction=$("#eduction").offset().top-400;
		var production=$("#production").offset().top-400;
		var contact=$("#contact").offset().top-400;
		var navtop=$(document).scrollTop();
		
		if(header<navtop){$(".right-fix li").eq(0).addClass("sec").siblings().removeClass("sec")}
		if(introduce<navtop){$(".right-fix li").eq(1).addClass("sec").siblings().removeClass("sec")}
		if(skill<navtop){$(".right-fix li").eq(2).addClass("sec").siblings().removeClass("sec")}
		if(eduction<navtop){$(".right-fix li").eq(3).addClass("sec").siblings().removeClass("sec")}
		if(production<navtop){$(".right-fix li").eq(4).addClass("sec").siblings().removeClass("sec")}
		if(contact<navtop){$(".right-fix li").eq(5).addClass("sec").siblings().removeClass("sec")}
	
	})
	
	/*右侧点击定位*/
	$(".right-fix li a").click(function(){
		var atr=$(this).attr("href");
		var t=$(atr).offset().top-50;
		$("html,body").animate({"scrollTop":t},500);
		return false;
	});
	
	/*联系我*/
	$(".header button").click(function(){
		var top=$(".contact").offset().top;
		$("html,body").animate({"scrollTop":top},500);
		return false;
	})
	/*下滚动*/
	$(".header .downarrow").click(function(){
		var aboutop=$(".about").offset().top;
		$("html,body").animate({"scrollTop":aboutop},500);
		return false;
	})
	/*了解我的详细信息*/
	$(".about-right button").click(function(){
		var t=$(".skills").offset().top-40;
		$("html,body").animate({"scrollTop":t},500);
		return false;
	})
	
	/*作品展示*/
	$(".product-top ul li").click(function(){
		$(this).find("a").addClass("active").parent().siblings().find("a").removeClass("active");
		var index=$(this).index();
		$(".product-body .product-center").eq(index).addClass("action").siblings().removeClass("action");
	});
	
	/*发送*/
	$(".contact-right button").click(function(){
		alert("建设中！");
	});
	
	new WOW().init();
})

$(function(){
//	$(".direct li").click(function(){
//		$(this).addClass("on").siblings().removeClass("on");
//	});
    /*项目中心内容切换*/
   $(".pro-right li").click(function(){
   	  $(this).addClass("pro-on").siblings().removeClass("pro-on");
   	  var index=$(this).index();
   	  $(".pro-center .all").eq(index).addClass("all-on").siblings().removeClass("all-on");
   })
   
//	/*测试页面*/
//	$(".caozuo .clo").click(function(){
//		$(this).text("已关闭");
//		$(this).parents(".caozuo").siblings(".panel-default").find(".noclick").css("display","block");	
//		$(this).parents(".caozuo").siblings(".panel-default").find(".panel-collapse").css("display","none");
//	});
	
	/*统计页面*/
	/**/
    
})

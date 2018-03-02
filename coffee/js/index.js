$(function(){
	/*导航切换*/
	$("#navbar .nav>li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	});
	
	/*单页导航*/
	$(".nav").singlePageNav({
		offset: 70
	});
	
	/*轮播图*/
	$("#carousel").carousel({interval: 3000});
	
	/*咖啡机器*/
	var cur=0;
	var len=$(".machineImg li").length;
	$(".dirr").click(function(){
		$(this).addClass("checked").siblings().removeClass("checked");
		if(cur==len-1){
			return false;
		}else{
			cur++;
		}
		change();
		return false;
	});
	$(".dirl").click(function(){
		$(this).addClass("checked").siblings().removeClass("checked");
		if(cur<=0){
			return false;
		}else{
			cur--;
		}
		change();
		return false;
	})
	function change(){
		var imgLength=$(".machineImg li").outerWidth();
		$(".machineImg").animate({"left":-imgLength*cur},300);
		var text = $(".machineImg img").eq(cur).attr("alt");
		$(".machineText span").text(text);
	}
	
	
	
	/*门店分布*/
	$(".address-body .col-md-3").hover(function(){
		$(this).addClass("show").siblings().removeClass("show");
	})
	
	//about
	var aboutHeight = $(".aboutText").outerHeight();
	$("#about").height(aboutHeight);
	

})

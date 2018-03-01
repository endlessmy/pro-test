$(function(){
	    /*轮播图*/
	   //手动控制
	   $(".ads .list li").hover(function(){
	   	  clearInterval(timer);
	      $(this).addClass("active").siblings().removeClass("active");
	   	  var index=$(this).index();
	   	  $(".ads .tu li").eq(index).find("img").addClass("show").parent().siblings().find("img").removeClass("show");
	   });
	   
       //自动播放
       var timer=null;
       var cur=0;
       var length=$(".ads .list li").length;
       function showImg(){
       	 timer=setInterval(function(){
       	 	cur++;
       	 	if(cur>=length){cur=0;}
       	 	$(".ads .list li").eq(cur).addClass("active").siblings().removeClass("active");
       	 	$(".ads .tu li").eq(cur).find("img").addClass("show").parent().siblings().find("img").removeClass("show");
       	 },2000);
       }
       showImg();
       
       
	   /*推荐编辑切换*/
	  var num=$(".intro-song ul li").length;
	  var click_num=0;
	  var len=0;
	  if(num/3>parseInt(num/3)){
	  	len=parseInt(num/3);
	  }else{
	  	len=parseInt(num/3-1);
	  }
	  $(".intro .dirl").click(function(){
	  	 click_num--;
	  	 if(click_num>=0){
	  	 	$(".intro-song ul").animate({"left":-click_num*495},1000);
	  	 }else{
	  	 	click_num=0;
	  	 }
	  });
	  $(".intro .dirr").click(function(){
	  	click_num++;
	  	if(num<=len){
	  		$(".intro-song ul").animate({"left":-click_num*495},1000);
	  	}else{
	  		click_num=len;
	  	}
	  });
	  console.log(123);
	  
	  /*本周单曲榜*/
	  $(".week ul li").click(function(){
	  	 $(this).find("a").addClass("sec").parent().siblings().find("a").removeClass("sec");
	  	 var index=$(this).index();
	  	 $(".week-body .week-center").eq(index).addClass("week-on").siblings().removeClass("week-on");
	  });
})

$(function(){
			
	/*导航打开*/
	var off=true;
	$(".title .line").click(function(){
		if(off){
			$(this).removeClass('line').addClass('close');
			$(this).parents('.head').find('.nav').show();
			off=false;
		}else{
			$(this).removeClass('close').addClass('line');
			$(this).parents('.head').find('.nav').hide();
			off=true;
		}	
	});
	/*公众号*/
	$(".common").click(function(){
		$('.bg').show();
		$(".code").show()
	});
	$(".close2").click(function(){
		$('.bg').hide();
		$(".code").hide()
	});
	
	/*导航列表切换*/
	$(".nav li").click(function(){
		$(this).addClass('nav-on').siblings().removeClass('nav-on');
	});
	
	/*轮播图*/
	var mySwiper_01 = new Swiper('.swiper-container',{
        loop:true,
        autoplay: 5000,
        paginationClickable :true,
        pagination : '.swiper-pagination',
        autoplayDisableOnInteraction:false,
    });
    
    /*综合*/
    $(".com-head li").click(function(){
    	$(this).addClass('com-on').siblings().removeClass('com-on');
    	var index=$(this).index();
    	$(".com-center ul").eq(index).addClass('center-on').siblings().removeClass('center-on');
    });
    
    /*武将资料*/
    $(".img-tab li").click(function(){
    	$(this).addClass('img-on').siblings().removeClass('img-on');
    	var index=$(this).index();
    	$(".img-info p").eq(index).addClass('info-on').siblings().removeClass('info-on');
    });
    
    /*游戏资讯页面*/
   $(".news-top li").click(function(){
   	 $(this).addClass('news-on').siblings().removeClass('news-on');
   	 var index=$(this).index();
     $(".news-center ul").eq(index).addClass('news-active').siblings().removeClass('news-active');
   });
   
   /*新闻详情页面*/
   var time=new Date();
   console.log(time);
   var day=time.getFullYear()+'-'+toDouble((time.getMonth()+1))+'-'+toDouble(time.getDate());
   $('.title-time').text(day);
   
   function toDouble(num){
   	 if(num<10){
   	 	return '0'+num;
   	 }else{
   	 	return num;
   	 }
   }
   
   /*武将介绍页面*/
   $(".gen-tu li").click(function(){
   	 $(this).addClass('active').siblings().removeClass('active');
   	 var index=$(this).index();
     $(".tu-info li").eq(index).addClass('gen-on').siblings().removeClass('gen-on');
   });
   
   var click_num=0;
   $('.tab .prev').click(function(){
   	  click_num--;
   	  if(click_num==-1){
   	  	 click_num=8;
   	  }
   	  $(".tab ul").animate({"left":-click_num*200},500);
   });
   $('.tab .next').click(function(){
   	  click_num++;
   	  if(click_num==9){
   	  	 click_num=0; 
   	  }
   	  $(".tab ul").animate({"left":-click_num*200},500);
   })
   
   $('.tab li').click(function(){
   	 $(this).addClass('tab-on').siblings().removeClass('tab-on');
   	 var index=$(this).index();
     $(".general .role").eq(index).addClass('role-on').siblings().removeClass('role-on');
   })
})

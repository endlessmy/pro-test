
$(document).ready(function(){
/*顶部跟左侧滚动隐藏*/  
	$(document).scroll(function(){		
		var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;   //定义变量，获取滚动条的高度
		var miaoTop=$(".miaosha").offset().top;
		var tu1=$(".tu-1").offset().top;
		/*滚动跳到相应模块*/
		var quality =  $('#quality').offset().top-300;
		var clothes =  $('#clothes').offset().top-300;
		var phones =  $('#phones').offset().top-300;
		var computer =  $('#computers').offset().top-300;
		var sport =  $('#sport3').offset().top-300;
		var eat =  $('#eat').offset().top-300;
		var mom =  $('#mom').offset().top-300;
		var book =  $('#book').offset().top-300;
		var virtual =  $('#game').offset().top-300;
		var travel =  $('#travel').offset().top-300;
		var enough =  $('#no-guang').offset().top-300;
		var top=$(document).scrollTop();
		if(top>quality){$(".left-fix li").eq(0).addClass("fix-on").siblings().removeClass("fix-on");}
		if(top>clothes){$(".left-fix li").eq(1).addClass("fix-on").siblings().removeClass("fix-on");}
		if(top>phones){$(".left-fix li").eq(2).addClass("fix-on").siblings().removeClass("fix-on");}
		if(top>computer){$(".left-fix li").eq(3).addClass("fix-on").siblings().removeClass("fix-on");}
		if(top>sport){$(".left-fix li").eq(4).addClass("fix-on").siblings().removeClass("fix-on");}
		if(top>eat){$(".left-fix li").eq(5).addClass("fix-on").siblings().removeClass("fix-on");}
		if(top>mom){$(".left-fix li").eq(6).addClass("fix-on").siblings().removeClass("fix-on");}
		if(top>book){$(".left-fix li").eq(7).addClass("fix-on").siblings().removeClass("fix-on");}
		if(top>virtual){$(".left-fix li").eq(8).addClass("fix-on").siblings().removeClass("fix-on");}
		if(top>travel){$(".left-fix li").eq(9).addClass("fix-on").siblings().removeClass("fix-on");}
		if(top>enough){$(".left-fix li").eq(10).addClass("fix-on").siblings().removeClass("fix-on");}
		if(scrollTop>miaoTop){
			$(".scroll").css({
				"display":"block",
				"position":"fixed",
				"tranition":"all 1s ease",
				"animation-name": "show", 
				"animation-duration": "0.5s",
				"top":"0px"
			});
		}else{
			$(".scroll").css("display","none");
		}
		if(scrollTop>tu1){
			$(".left-fix").css({
				"display":"block",
				"position":"fixed",
                "left":"10px"
			});
		}else{
			$(".left-fix").css("display","none");
		}
	})
	/*点击相应按钮跳到相应模块*/
	$(".left-fix li a").click(function(){
		var atr=$(this).attr("href");
		var t=$(atr).offset().top-50;
		$("html,body").animate({"scrollTop":t},500);
		return false;
	});
/*关闭广告条*/
	$("#xx").mousedown(function(){
		$(".guanggao-bar").css("display","none");
	});
/*右侧固定*/
	$(".right-fix li").hover(function(){
		$(this).find("p").stop().animate({left:"-58px"},500);
	},function(){
		$(this).find("p").stop().animate({left:"0"},500);
	})
/*底部固定*/
	$(".foot-fix li").hover(function(){
		$(this).find("p").stop().animate({left:"-58px"},500);
	},function(){
		$(this).find("p").stop().animate({left:"0"},500);
	})
/*导航轮播*/	
	//手动控制轮播图
    $("#one li").eq(0).show();
    $("#two li").hover(function(){
    	clearInterval(t);
    	$(this).addClass('on').siblings().removeClass('on');
    	var index=$(this).index();
    	i=index;
    	$("#one li").eq(index).stop().fadeIn(200).siblings().stop().fadeOut(200);
    });    
    //自动播放
    var i=0;
    var t=setInterval(move,2000);
       //自动播放核心函数
    function move(){
    	i++;
    	if(i==5){
    		i=0;
    	}
    	$("#two li").eq(i).addClass('on').siblings().removeClass('on');
    	$("#one li").eq(i).fadeIn(200).siblings().fadeOut(200);
    }
       //向左播放核心函数
    /*function moveL(){
    	i--;
    	if(i<=0){
    		i=4;
    	}
    	$("#two li").eq(i).addClass('on').siblings().removeClass('on');
    	$("#one li").eq(i).fadeIn(300).siblings().fadeOut(300);
    }
    $(".slider-page #left").click(function(){
    	moveL();
    })
    $(".slider-page #right").click(function(){
    	move();
    })
    
    //鼠标移入移除
    $("#banner-box").hover(function(){
    	clearInterval(t);
    },function(){
    	t=setInterval(move,2000);
    });*/
    
/*优选专辑轮播*/
   //手动控制轮播
    $(".youpin-center .one-1 li").eq(0).show();
    $('.youpin-center .two-1 li').mouseover(function(){
    	clearInterval(n);
    	$(this).addClass('on').siblings().removeClass('on');
    	var index=$(this).index();
    	m=index;
        $(".youpin-center .one-1 li").eq(index).stop().fadeIn(200).siblings().stop().fadeOut(200);
    });
    
    //自动播放
    var m=0;
    var n=setInterval(move1,1500);
    function move1(){
    	m++;
    	if(m==3){
    		m=0;
    	}
        $('.youpin-center .two-1 li').eq(m).addClass('on').siblings().removeClass('on');
        $('.youpin-center .one-1 li').eq(m).fadeIn(200).siblings().fadeOut(200);
    }
      //向右播放核心函数
      function moveL1(){
      	m--;
      	if(m==-1){
      		m=2;
      	}
      	$(".youpin-center .two-1 li").eq(m).addClass('on').siblings().removeClass('on');
      	$(".youpin-center .one-1 li").eq(m).fadeIn(200).siblings().fadeOut(200);
      }
      $('.youpin-center .left1').click(function(){
      		moveL1();
      });
      $('.youpin-center .right1').click(function(){
      	    move1();
      })
      //鼠标移入移除
      $('.youpin-center').hover(function(){
      	 clearInterval(n);
      },function(){
      	 n=setInterval(move1,1500);
      });
      
      
/*京东直播*/
    //手动控制轮播
    $('.zhibo-one li').eq(0).show();
    $('.zhibo-two li').mouseover(function(){
    	clearInterval(v);
    	$(this).addClass('on').siblings().removeClass('on');
    	var index=$(this).index();
    	q=index;
    	$('.zhibo-one li').eq(index).stop().fadeIn(300).siblings().fadeOut(300);
    });
    //自动播放
    var q=0;
    var v=setInterval(move2,1500);
       //自动播放核心函数
    function move2(){
    	q++;
    	if(q==4){
    		q=0;
    	}
    	$('.zhibo-two li').eq(q).addClass('on').siblings().removeClass('on');
    	$('.zhibo-one li').eq(q).fadeIn(300).siblings().fadeOut(300);
    };
       //向左播放核心函数
    function moveL(){
    	q--;
    	if(q==-1){
    		q=4;
    	}
    	$('.zhibo-two li').eq(q).addClass('on').siblings().removeClass('on');
    	$('.zhibo-one li').eq(q).fadeIn(300).siblings().fadeOut(300);
    };
    $(".zhibo-left").click(function(){
    	moveL2();
    });
    $('.zhibo-right').click(function(){
    	move2();
    });
    //鼠标移入移除
    $('.quality-right').hover(function(){
    	clearInterval(v);
    },function(){
    	v=setInterval(move2,1500);
    });
 
/*秒杀倒计时*/
function getRTime(){
	var endTime=new Date('2017/09/23 14:00:00');   //截止时间
	var nowTime=new Date();
	var t=nowTime.getTime()-endTime.getTime();
	var h=Math.floor(t/1000/60/60%24);
    var m=Math.floor(t/1000/60%60);
    var s=Math.floor(t/1000%60);
	document.getElementById("t_h").innerHTML = toDouble(h);
    document.getElementById("t_m").innerHTML = toDouble(m);
    document.getElementById("t_s").innerHTML = toDouble(s);
}
setInterval(getRTime,1000);

function toDouble(num){
	if(num<10){
		return "0"+num;
	}else{
		return num;
	}
}

$(".right-fix li").hover(function(){
	$(this).children().next().css("_display","block");
});

/*秒杀图片滚动*/
   var num=$(".miaosha .mainlist li").length;  //获得总图片个数
   var len=0;   
   var click_num=0;
   if(num/5>parseInt(num/5)){
   	len=parseInt(num/5);
   }else{
   	len=parseInt(num/5-1);
   }
   $(".miao-left .dirr").click(function(){
   	click_num++;
   	if(click_num<=len){
   		$(".mainlist").animate({"left":-click_num*1020},1000);
   	}else{
   		click_num=len;
   	}
   });
   $(".miao-left .dirl").click(function(){
   	 click_num--;
   	 if(click_num>=0){
   	 	$(".mainlist").animate({"left":-click_num*1020},1000);
   	 }else{
   	 	click_num=0;
   	 }
   });
   
/*排行榜滚动*/
   $(".paihang-center .paihang-list li").hover(function(){
   	  if($(this).hasClass("bar")){
   	  	return;
   	  }
   	  var whatTab=$(this).index();
   	  var howFar=75*whatTab;
   	  $(".bar").css({left:howFar+"px"});
   	  
   	  var index=$(this).index();
   	  $(".paihang-body .paihang-cen").eq(index).addClass("paihang-on").siblings().removeClass("paihang-on");
   });
});



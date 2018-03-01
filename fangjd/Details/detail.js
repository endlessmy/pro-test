$(function(){
/*右侧固定*/
	$(".right-fix li,.foot-fix li").hover(function(){
		$(this).find("p").stop().animate({left:"-58px"},500);
	},function(){
		$(this).find("p").stop().animate({left:"0"},500);
	});
/*全部商品分类*/
    $(".dis-l dl dd a").hover(function(){
    	$(this).addClass("wd").siblings().removeClass("wd");
    });
/*联系供应商图标跳动*/
    function autoJump(){
    	setInterval(function(){
    		$(".detail-right .fa-commenting").css("transform","translateY(-5px)");
    	},1000);
    }
/*购物车加减*/
	$("#add").click(function(){
		var t=$("#count-input");
		t.val(parseInt(t.val())+1);
	});
	$("#reduce").click(function(){
		var t=$("#count-input");					
		if(t.val()==1){
			$("#reduce").attr("diabled",true);
		}else{
			t.val(parseInt(t.val())-1);
		}
	});
	
/*人气配件*/
	$('.group-top ul li').click(function(){
		$(this).addClass('group-on').siblings().removeClass('group-on');
		var index=$(this).index();             //获得当前点击的<li>在全部<li>元素中的索引
		$('.group-center .ren-qi').eq(index).css("display","block").siblings().css("display","none");
	});
	$(".ren-qi").on("click",function(){
		var m=$(".checkbox:checked").length;
		$(".group-right #num").text(m);				
	});
	
/*商品介绍*/
	$('.good-top ul li').click(function(){
		$(this).addClass('good-on').siblings().removeClass('good-on');
		var atr=$(this).attr("href");
    	var t=$(atr).offset().top-50;
		$("html,body").animate({"scrollTop":t},500);
		return false;
	});	
/*商品介绍横栏固定*/
	var navtop=$(".good-top").offset().top;//获取nav距离顶部的距离
     $(document).scroll(function(){     
         var scroltop=document.documentElement.scrollTop||document.body.scrollTop;//获取滚动条滚动的高度
         if (navtop<scroltop){
              $(".good-top").css({
                  "position":"fixed",
                  "top":"0px",
                  "width":"993px"
              })
         }else {
             $(".good-top").css({
                 "position":"relative",
                 "width":""
             })
         }
     });	
     
/*产品信息竖栏固定及滚动定位 
    var navtop1=$(".intro-menu").offset().top;   //产品信息栏的高度
    var navtop2=$(".guige").offset().top;   //规格与包装栏的高度
     $(document).scroll(function(){
     	var scroltop1=document.documentElement.scrollTop||document.body.scrollTop;
     	if(navtop1<scroltop1 && scroltop1<navtop2){
     		$(".intro-menu").css({
     			"position":"fixed",
     			"top":"40px"
     		})
     	}else{
     		$(".intro-menu").css({
     			"position":"",

     		})
     	}
     	
        var menu = $(".intro-menu");                      //定义变量，抓取#menu
        var items = $(".intro-content").find(".item");    //定义变量，查找.item

        var curId = "";                             //定义变量，当前所在的楼层item #id 

        items.each(function(){
            var m = $(this);                        //定义变量，获取当前类            
            var itemsTop = m.offset().top;        //定义变量，获取当前类的top偏移量
            if(scroltop1 > itemsTop-300){
                curId = "#" + m.attr("id");
            }else{
                return false;
            }
        });			        
        var curLink = menu.find(".cur");        //给相应的楼层设置cur,取消其他楼层的cur
        if( curId && curLink.attr("href") != curId ){
            curLink.removeClass("cur");
            menu.find( "[href=" + curId + "]" ).addClass("cur");            
        }else{
        	return false;
        }
     });*/	
     
/*滚动定位*/
    $(".intro-menu ul li a").click(function(){ 
    	$(this).parent().addClass("cur").siblings().removeClass("cur");
    	$(this).css("color","#fff").parent().siblings().find("a").css("color","#777777")
    	var atr=$(this).attr("href");
    	var t=$(atr).offset().top-50;
    	$("html,body").animate({"scrollTop":t},500);
    	return false;
    });


    
/*U盘热销榜*/
    $(".sale-top li").click(function(){
    	$(this).addClass("sale-on").siblings().removeClass("sale-on");
    	var index=$(this).index();
    	$(".sale-body .sale-price").eq(index).addClass("sale-active").siblings().removeClass("sale-active");
    })
/*评价拆分*/
   $(".evaluate-center .lie-biao li").click(function(){
   	   $(this).addClass("evaluate-on").siblings().removeClass("evaluate-on");
   	   var index=$(this).index();
   	   $(".evaluate-center .eval-content").eq(index).css("display","block").siblings().css("display","none");
   });
   /*晒图评价中下一张*/
   $(".shai-top .fa-angle-left").bind("click",function(){
   	  
   })
   
/*社区互动*/
   $(".community-title ul li").click(function(){
   	  $(this).addClass("community-on").siblings().removeClass("community-on");
   	  var index=$(this).index();
   	  $(".community-body>div").eq(index).addClass("active").siblings().removeClass("active");
   })
   
/*猜你喜欢图片滚动*/
   var num=$(".guess-body ul li").length;
   var len=0;
   var click_num=0;
   if(num/6>parseInt(num/6)){
   	len=parseInt(num/6);
   }else{
   	len=parseInt(num/6-1);
   }
   $(".guess-body .dirr").click(function(){
   	click_num++;
   	if(click_num<=len){
   		$(".guess-body ul").animate({"left":-click_num*1000},1000);
   	}else{
   		click_num=len;
   	}
   });
   $(".guess-body .dirl").click(function(){
   	 click_num--;
   	 if(click_num>=0){
   	 	$(".guess-body ul").animate({"left":-click_num*1000},1000);
   	 }else{
   	 	click_num=0;
   	 }
   });
   
  
/*组合价*/
function setTotal(){
	var total=49.9;    
	$(".ren-qi ul").find("li").each(function(){
		var flag=$(this).find(".checkbox").is(":checked");
		if(flag){
			var money=$(this).find("span").data("money");
			total+=money;
			console.log(11);
		}			
	});
	$(".group-right .price").text(total.toFixed(2));
}

/*商品展示放大镜*/
function view(img){
	$("#view .jqzoom img").attr("src",$(img).attr("src"));
	$("#view .jqzoom img").attr("jqimg",$(img).attr("bimg"));
}
   //图片放大镜效果
$(function(){
	$(".detail-content .jqzoom").jqueryzoom({xzoom:380,yzoom:410});
});


/*评价晒图中图片放大镜效果*/
//图片放大镜效果
function view(img){
	$("#preview .jqzoom img").attr("src",$(img).attr("src"));
	$("#preview .jqzoom img").attr("jqimg",$(img).attr("bimg"));
}
   //图片预览小图移动效果,页面加载时触发
$(function(){
	var tempLength = 0; //临时变量,当前移动的长度
	var viewNum = 10; //设置每次显示图片的个数量
	var moveNum = 2; //每次移动的数量
	var moveTime = 300; //移动速度,毫秒
	var scrollDiv=$(".shai-top .shai-item ul");          //进行移动动画的容器
	var scrollItems=$(".shai-top .shai-item ul li");     //进行移动动画的容器里的集合
	var moveLength = scrollItems.eq(0).width() * moveNum; //计算每次移动的长度
	var countLength = (scrollItems.length - viewNum) * scrollItems.eq(0).width(); //计算总长度,总个数*单个长度 
	/*上一张*/
	$(".shai-top .fa-angle-left").bind("click",function(){
	   	if(tempLength > 0){
				if(tempLength > moveLength){
					scrollDiv.animate({left: "+=" + moveLength + "px"}, moveTime);
					tempLength -= moveLength;
				}else{
					scrollDiv.animate({left: "+=" + tempLength + "px"}, moveTime);
					tempLength = 0;
				}
		}
	})
	/*下一张*/
	$(".shai-top .fa-angle-right").bind("click",function(){
	   	if(tempLength < countLength){
				if((countLength - tempLength) > moveLength){
					scrollDiv.animate({left:"-=" + moveLength + "px"}, moveTime);
					tempLength += moveLength;
				}else{
					scrollDiv.animate({left:"-=" + (countLength - tempLength) + "px"}, moveTime);
					tempLength += (countLength - tempLength);
				}
			}
	})
});

   
});




































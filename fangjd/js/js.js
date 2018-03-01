$(document).ready(function(){
	/*图片轮播
	new Swipe(document.getElementById('banner-box'),{
		speed:500,
		auto:3000,
		callback:function(){
			var lis=$(this.element).next('ol').children();
			lis.removeClass("on").eq(this.index).addClass("on");
		}
	});*/
	
	
	
});
$(function(){
			

				//手动控制轮播图
				$('#one li').eq(0).show();

				$('#two li').mouseover(function(){
					$(this).addClass('on').siblings().removeClass('on');
					var index=$(this).index();
					i=index;
					$('#one li').eq(index).stop().fadeIn(300).siblings().stop().fadeOut(300);
				})
				//自动播放
				var i=0;
				var t=setInterval(move,1500);
				//自动播放核心函数
				function move(){
					i++;
					if(i==5){
						i=0;
					}
					$('#two li').eq(i).addClass('on').siblings().removeClass('on');
					$('#one li').eq(i).fadeIn(300).siblings().fadeOut(300);
				}

				//向右播放核心函数
				function moveL(){
					i--;
					if(i==-1){
						i=4;
					}
					$('#two li').eq(i).addClass('on').siblings().removeClass('on');
					$('#one li').eq(i).fadeIn(300).siblings().fadeOut(300);
				}
				$('#left').click(function(){
						moveL();
				})
				$('#right').click(function(){
					move();
				})
				//鼠标移入移除
				$('#lunbo').hover(function(){
					clearInterval(t);
				},function(){
					t=setInterval(move,1500);
				})
				
			});

/*今日推荐
$(function(){
			var xhRight=null;
            //scroll news
            var scrnews=$(".slider-main");
            
            if(scrnews.children().length<4){return false;}
			
            var newst=setInterval(scro,3500);
			
            scrnews.hover(function(){
                clearInterval(newst);    
            },function(){
                newst=setInterval(scro,3500);
            })
			
            function scro(){
                scrnews.animate({left:-1000},1500,function(){
                    $(this).children("li:first").appendTo(this);
                    $(this).css("left",0);    
                });
            }
			
			
             $('.slider-page li').hover(function(){
		          clearInterval(newst); 
		        },function(){
		          newst=setInterval(scro,3500);
		        })
				
				  $('.slider-prev').click(function(){
				  	scrnews.children("li:first").appendTo(scrnews);
					
				  })
				  $('.slider-next').click(function(){
				  	scrnews.children("li:last").prependTo(scrnews);
					
				  })
				
            
        });*/





















/*秒杀倒计时*/
function GetRTime(){
       var EndTime= new Date('2017/05/03 18:00:00');
       var NowTime = new Date();
       var t =EndTime.getTime() - NowTime.getTime();
       
       var h=Math.floor(t/1000/60/60%24);
       var m=Math.floor(t/1000/60%60);
       var s=Math.floor(t/1000%60);

       
       document.getElementById("t_h").innerHTML = h ;
       document.getElementById("t_m").innerHTML = m;
       document.getElementById("t_s").innerHTML = s;
   }
   setInterval(GetRTime,0);


//$(document).ready(function(e) {
	/***不需要自动滚动，去掉即可***/
	time = window.setInterval(function(){
		$('.og_next').click();	
	},5000);
	/***不需要自动滚动，去掉即可***/
	linum = $('.mainlist li').length;//图片数量
	w = linum * 250;//ul宽度
	$('.piclist').css('width', w + 'px');//ul宽度
	$('.swaplist').html($('.mainlist').html());//复制内容
	
	$('.og_next').click(function(){
		
		if($('.swaplist,.mainlist').is(':animated')){
			$('.swaplist,.mainlist').stop(true,true);
		}
		
		if($('.mainlist li').length>4){//多于4张图片
			ml = parseInt($('.mainlist').css('left'));//默认图片ul位置
			sl = parseInt($('.swaplist').css('left'));//交换图片ul位置
			if(ml<=0 && ml>w*-1){//默认图片显示时
				$('.swaplist').css({left: '1000px'});//交换图片放在显示区域右侧
				$('.mainlist').animate({left: ml - 1000 + 'px'},'slow');//默认图片滚动				
				if(ml==(w-1000)*-1){//默认图片最后一屏时
					$('.swaplist').animate({left: '0px'},'slow');//交换图片滚动
				}
			}else{//交换图片显示时
				$('.mainlist').css({left: '1000px'})//默认图片放在显示区域右
				$('.swaplist').animate({left: sl - 1000 + 'px'},'slow');//交换图片滚动
				if(sl==(w-1000)*-1){//交换图片最后一屏时
					$('.mainlist').animate({left: '0px'},'slow');//默认图片滚动
				}
			}
		}
	})
	$('.og_prev').click(function(){
		
		if($('.swaplist,.mainlist').is(':animated')){
			$('.swaplist,.mainlist').stop(true,true);
		}
		
		if($('.mainlist li').length>4){
			ml = parseInt($('.mainlist').css('left'));
			sl = parseInt($('.swaplist').css('left'));
			if(ml<=0 && ml>w*-1){
				$('.swaplist').css({left: w * -1 + 'px'});
				$('.mainlist').animate({left: ml + 1000 + 'px'},'slow');				
				if(ml==0){
					$('.swaplist').animate({left: (w - 1000) * -1 + 'px'},'slow');
				}
			}else{
				$('.mainlist').css({left: (w - 1000) * -1 + 'px'});
				$('.swaplist').animate({left: sl + 1000 + 'px'},'slow');
				if(sl==0){
					$('.mainlist').animate({left: '0px'},'slow');
				}
			}
		}
	})    
});

$(document).ready(function(){
	$('.og_prev,.og_next').hover(function(){
			$(this).fadeTo('fast',1);
		},function(){
			$(this).fadeTo('fast',0.7);
	})

})//
$(function(){
	/*右侧滚动*/
	var adTop=$(".ad2").offset().top;
    $(document).scroll(function(){
    	var scrollTop=$(document).scrollTop();   	
    	if(scrollTop>adTop){
    		$(".ad2").css({
    			"position":"fixed",
    			"top":"1px"
    		})
    	}else{
    		$(".ad2").css({
    			"position":"relative",
    		})
    	}
    });
})

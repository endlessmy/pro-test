$(document).ready(function(){
	$(".theme li").click(function(){
	   $(this).addClass("active").siblings().removeClass("active");
	});
	$("#account").click(function(){
		$(".sao-ma").css("display","none");
		$("form").css("display","block");
	});
	$("#sao-ma").click(function(){
		$(".sao-ma").css("display","block");
		$("form").css("display","none");
	});
});
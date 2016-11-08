$(function(){
	$(".bag-one").mouseenter(function(){
		$(".bag").css("overflow"," visible").find("li").addClass("five-color");
	})
	$(".bag-one").mouseleave(function(){
		$(".bag").css("overflow","hidden");
	})
	
	
	$(".five dt").mouseenter(function(){
		$(".five").css("overflow"," visible").find("li").addClass("five-color");
	})
	$(".five").mouseleave(function(){
		$(".five").removeClass("five-color").css("overflow","hidden");
	})
	
	$(".download").mouseenter(function(){
		$(".download").css("overflow"," visible").find("ul").addClass("five-color");
	})
	$(".download").mouseleave(function(){
		$(".download").css("overflow","hidden");
	})
	
	$(".commodity").mouseenter(function(){
		$(".second-floor").css("display","inline")
	})
	$(".commodity").mouseleave(function(){
		$(".second-floor").css("display","none")
	})
	
	$(".second-floor").mouseenter(function(){
		$(".three-floor").css("display","inline");
	})
	$(".second-floor").mouseleave(function(){
		$(".three-floor").css("display","none");
	})
})

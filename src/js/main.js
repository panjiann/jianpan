$(function(){
     	$(".hot-pic").mouseenter(function(){
     		$(this).find(".hot-in").css("display","block");
     		$(this).find("img").css("display","none")
     	})
     	$(".hot-pic").mouseleave(function(){
     		$(this).find(".hot-in").css("display","none");
     		$(this).find("img").css("display","block")
     	})
     	
       var i=1;
//      热门旗舰店
     	$(".hotbtn-left").on("click",function(){
     		console.log("123");
     		$(".hot-ul").stop().animate({left:-1200*i},1000);
     		i++;
     		if(i>1){i=1};		
     	}) 
     	var j=1;
     		$(".hotbtn-right").on("click",function(){
     		console.log("123");
     		$(".hot-ul").stop().animate({left:0},1000);
     		j++;
     	})
   
//   	购物中心
        $(".shoplist-all").mouseenter(function(){
        	$(this).stop().animate({top:-50},500)
        })
     	 $(".shoplist-all").mouseleave(function(){
        	$(this).stop().animate({top:0},500)
        })
})

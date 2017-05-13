$(function(){
	$(".list-icon").click(function(){
		if($(".right-box").css('opacity') === "0"){
			boxShow();
		}else if($(".features-box").css("opacity") !=="0"){
			ftClose();
			boxClose();
		}else{
			boxClose();
		}
		
	});

	function boxShow(){
		$(".left-box").animate({"left":0}, 500);
		$(".right-box").animate({"opacity":"0.4"}, 500);
		$(".list-icon").find('img').attr("src","images/icon/close.png");
	}
	function boxClose(){
		$(".left-box").animate({"left":"-50%"}, 500);
		$(".right-box").animate({"opacity":"0"}, 500);
		$(".list-icon").find('img').attr("src","images/icon/list.png");
	}

	
		var isShow = false;
		$(".features").click(function() {
			if(isShow)return;
			isShow = true;
			if($(".features-box").css("opacity") =="0"){
				ftOpen();
			}else{
				ftClose();
			}
			isShow = false;
			return false;
		});
		

		function ftOpen(){
			$(".left-box").animate({"width":"33.333%"}, 500);
			$(".right-box").animate({"width":"33.333%"}, 500);
			$(".features-box").animate({"width":"100%"}, 500,function(){
				$(".features-box").animate({"opacity":"0.9"}, 500);
				});
			$(".features").find('span').html("<");
		}

		function ftClose(){

			$(".features-box").animate({"opacity":0},400,function(){
				$(".features-box").animate({"width":0}, 500);
				$(".left-box").animate({"width":"50%"}, 500);
				$(".right-box").animate({"width":"50%"}, 500);
				$(".features").find('span').html(">");
				});
			
		}
	
	

});
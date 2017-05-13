$(function(){
	"use strict";
	function carousel(){
		var num=$("#banner-box").children().length;
		console.log(num);
		var curPage = 1;
		var isAnimate = false;//控制不能连续点击
		var timer = null;
		
		var w = $("#wrapper").width();

		var firstImage = $(".item-pic").first().clone();
		var lastImage = $(".item-pic").last().clone();
		// $("#banner-box").width((num+2)*firstImage.width()+"px");
		$("#banner-box").width((num+2)*w+"px");
		// $("#banner-box").css("left", -firstImage.width()+"px");
		$("#banner-box").css("left", -w+"px");
		$("#banner-box").prepend(lastImage);
		$("#banner-box").append(firstImage);


		//调用函数
		$("#prev").on("click",function(){
			tab("prev");
			return false;
		});
	
		$("#next")[0].onclick = function(){
			tab("next");
			return false;
		};
		
		//给按钮添加点击转换效果
		$(".item-bt").click(function(){
			var pos = $(this).index();
			curPage = pos+1;
			tab();
		});
		
			clearInterval(timer);
			timer = setInterval($("#next")[0].onclick,2000);
		
			$("#wrapper").hover(function() {
				clearInterval(timer);
			}, function() {
				clearInterval(timer);
				timer = setInterval($("#next")[0].onclick,2000);
			});
		

		//设置动画函数
		//向右播放
		function tab(direction){
			if(isAnimate)return;
			isAnimate = true;
			
			if(direction === "next"){
				curPage++;
			}else if(direction === "prev"){
				curPage--;
			}

			$("#banner-box").animate({"left":(-firstImage.width())*curPage+"px"},1000,function(){
				if(curPage === num+1){
					$("#banner-box").css('left', -firstImage.width()+"px");
					curPage = 1;
				}else if(curPage === 0){
					$("#banner-box").css('left', -firstImage.width()*num+"px");
					curPage = num;
				} 
				$("#Btn-b").children().removeClass('active');
				$("#Btn-b").children().eq(curPage-1).addClass('active');
				isAnimate = false; 
			});
		}

	}

	//初始化轮播图
	carousel();

	// 分享到
	var now = 0;
	$(".shareTo").mouseenter(function(){
		if(now !== 0)return;
		$("#share").animate({"margin-left": 0}, 500);
		$("#share div").animate({"opacity": "1"}, 1000);
		now = 1;
	});
	$("#share").mouseleave(function(){
		if (now !==1)return;
		$("#share").animate({"margin-left": "-80px"}, 500);
		$("#share div").animate({"opacity": "0"}, 500);
		now = 0;
	});


	// 英雄列表
	function heroShow(){
		$("#agile span").click(function(){
			if($(".item-menu-1").css("display")!="none")return;
			$(".item-menu-m").css('display', 'none');
			$(".item-menu-1").fadeIn(1000);
			$("#hide").fadeIn(500);
			$("#hero-show").fadeIn(500);
			return false;
		});
		$("#power span").click(function(){
			if($(".item-menu-2").css("display")!="none")return;
			$(".item-menu-m").css('display', 'none');
			$(".item-menu-2").fadeIn(1000);
			$("#hide").fadeIn(500);
			$("#hero-show").fadeIn(500);
		});
		$("#intelligence span").click(function(){
			if($(".item-menu-3").css("display")!="none")return;
			$(".item-menu-m").css('display', 'none');
			$(".item-menu-3").fadeIn(1000);
			$("#hide").fadeIn(500);
			$("#hero-show").fadeIn(500);
		});
		$("#hide").click(function(){
			$(".item-menu-m").fadeOut(500);
			$("#hide").fadeOut(2000);
			$("#hero-show").fadeOut(1000);
		});
		$("#hero-show").click(function(){
			$(".item-menu-m").fadeIn(500);
			
		});
	}
	heroShow();

	// 登陆验证
	function loadCheck(){
		$("input[name=username]").focus(function(){
		if($(this).val() === "用户名"){
		$(this).val("");
		$(this).css('color', '#090505');	
			}
		});
		$("input[name=username]").blur(function(){
			if($(this).val() === ""){
				$(this).val('用户名');
				$(this).css('color', '#b7afaf');
			}
		});
		$("input[name=password]").focus(function(){
			this.type = "password";
			if ($(this).val() === "输入密码") {
				$(this).val("");
				$(this).css('color', '#090505');
			}
		});
		$("input[name=password]").blur(function(){
			if($(this).val() === ""){
				this.type = "text";
				$(this).val("输入密码");
				$(this).css('color', '#b7afaf');
			}
		});
		$(".load-close").click(function(){
			$("#load").hide(500);
			$("#shade").hide();
		});
		$("#load-sub").click(function(){
			var username = $("input[name=username]").val();
			$("#load-sub").html(username);
		});
		$("#load-btn").click(function(){
			$("#load").show(500);
			$("#shade").show();
		});
	}

	loadCheck();

	
	function check(){
		var scrollTop = $(window).scrollTop();
	console.log(scrollTop);
	var clientH = $(window).height();
	console.log(clientH);
	return scrollTop>Math.floor(clientH/2)?true:false;
	}
	
	$(window).scroll(function(){
		if (check()) {
		$("#footer").show();
		$("#header p").css('display', 'inline-block').show(2000);
	}else{
		$("#footer").hide(1000);
		$("#header p").hide(2000);
	}
	});
	
});

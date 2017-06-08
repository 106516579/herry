$(document).ready(function(){
		$(".process ul li").each(function(index,element){
			$(this).hover(function(){
				$(".process ul li").eq(index).css("background","#FF0033");
				$(".process ul li span").eq(index).css("border-color","#FF0033  transparent  transparent transparent");
				$(".process ul li").eq(index).css("color","#ffffff");
				$(".process_text ul li").eq(index).find("p").css("color","#ff0033")
			},function(){
				$(".process ul li").eq(index).css("background","#efefef");
				$(".process ul li span").eq(index).css("border-color","#efefef  transparent  transparent transparent");
				$(".process ul li p").eq(index).css("color","#666666");
				$(".process_text ul li").eq(index).find("p").css("color","#666666");
			})
		})
	})

//京东轮播图

$(function(){
		//代码初始化
		var size=$(".img li").size();
		var arrMess = ["倾听她的故事","倾听她的故事","倾听他的故事","倾听他的故事","倾听他的故事"]

		for(var i=1;i<=size;i++){
			var li="<li>"+"</li>";
			$(".num").append(li);
		}


		//手动控制轮播图
		$(".img li").eq(0).show();
		$(".num li").eq(0).addClass("active");
		$(".num li").mouseover(function(){
			$(this).addClass("active").siblings().removeClass("active");
			var index=$(this).index();
			i=index;
			$(".img li").eq(index).stop().fadeIn(300).siblings().stop().fadeOut(300);
			$(".videoWin").html(arrMess[index]);
		})

		//自动轮播
		var i=0;
		var timer=setInterval(moveR,2000);
		//核心向右运动函数
		function moveR(){
			i++;
			if (i==size){
				i=0;
			};
			$(".num li").eq(i).addClass("active").siblings().removeClass("active");
			$(".img li").eq(i).fadeIn(300).siblings().fadeOut(300);
			$(".videoWin").html(arrMess[i]);
		}

		//核心向左运动函数
		function moveL(){
			i--;
			if (i==-1){
				i=size-1;
			};
			$(".num li").eq(i).addClass("active").siblings().removeClass("active");
			$(".img li").eq(i).fadeIn(300).siblings().fadeOut(300);
			$(".videoWin").html(arrMess[i]);
		}

//		//z左按钮
//		$(".teacher_photo .left").click(function(){
//			moveL();
//		})
//		//右按钮
//		$(".teacher_photo .right").click(function(){
//			moveR();
//		})

		//定时器的开关
		$(".teacher_photo").hover(function(){
			clearInterval(timer);
		},function(){
			timer=setInterval(moveR,2000);
		});

		//视频框
		$(".videoWin").click(function(){
			$(".mask").css("display","block");
			$("video").attr("src","http://www.w3school.com.cn/example/html5/mov_bbb.mp4");

		})
		//视频关闭事件
		$(".closeIcon").click(function(event){
			event.preventDefault();
			$("video").attr("src","");
			$(".mask").css("display","none");
		})

	})
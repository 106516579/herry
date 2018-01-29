//================面包屑===========================
	$(function(){
		var naver=true;
		$('#mianbao').click(function(){
			if(naver){
				$('.rm-container').slideDown();
				$(this).css({
//					'background':"url('images/x_03.png') 1px no-repeat",
					'transform':'rotate(90deg)',
					'transition':'transform .5s'
				}).find('img').attr('src','images/x_03.png');
				naver=false;
			}else{
				$('.rm-container').hide();
				$(this).css({
//					'background':"url('images/mian_03.png') 1px no-repeat",
					'transform':'rotate(0deg)',
					'transition':'transform .2s'
				}).find('img').attr('src','images/mian_03.png')
				naver=true
			}	
		})
	})


	//====================导航=========================
	$(function(){		
		var _width=$(window).width();
		if(_width<=1024){
			var tList=$('.rm-container .rm-nav > ul > li>ul');
			if(tList){
				tList.addClass('two-list');
				tList.find('ul').addClass('three-list')
			}
			$('.rm-container .rm-nav > ul li').children('i').click(function(){
				
				$('.rm-container li .two-list').stop().slideUp({					  
	    			easing: 'easeOutQuint'
				})	
				$(this).siblings('.two-list').stop().slideToggle();
			})
			$('.rm-container .rm-nav > ul li ul  li').click(function(){
				console.log(2)
				$(this).children('.three-list').show()
			})

		}else{
			var tList=$('.rm-container li ul');
			if(tList){
				tList.addClass('two-list');
			}
			$('.rm-container .rm-nav > ul > li').mouseenter(function(){
				$(this).children('.two-list').stop().slideDown({					  
	    			easing: 'easeOutQuint'
				})
				
			})
			$('.rm-container .rm-nav > ul > li').mouseleave(function(){
				$(this).children('.two-list').css({'border-bottom-color':'transparent'}).stop().slideUp();
			})
		}		
	})
	//==================导航固定===========================
	$(function(){
		$(window).on("scroll",function(){		    
			if($(window).scrollTop()>200){
	
				$('.header').addClass('fix-nav')	
			}else{
				$('.header').removeClass('fix-nav')
			}
		})	
	})

	
	//=============语言选择===================
	$(function(){
		var isShow=true
		$('.footer .language dt').click(function(){
			if(isShow){
				$(this).children('p').slideDown(300)
				isShow=false
			}else{
				$(this).children('p').slideUp(300)
				isShow=true
			}			
		})
	})
	
//=========================================================

$(function(){
	$('.footer .fouces dt').eq(0).mouseover(function(){
		$('#wechat').stop().animate({'opacity':1},500)
	})
	$('.footer .fouces dt').eq(0).mouseout(function(){
		$('#wechat').stop().css('opacity',0)
	})
})
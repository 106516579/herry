// JavaScript Document

$(function(){
	
	
	//人才招聘  --  tab切换  
	$('.us_box_left ul li').click(function(){
		var thisNBU	=	$('.us_box_left ul li').index($(this));	
		$('.us_box_left ul li').removeClass('hover');
		$(this).addClass('hover');
		
		$('.us_box_right').hide();
		$('.us_box_right').eq(thisNBU).show();
	})

})
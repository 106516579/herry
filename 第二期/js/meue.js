// JavaScript Document

$(function(){
	

	//网站头部分享按钮下拉
	$('.shar_ico li a').hover(function(){
		$(this).siblings('.shar_img').stop(true,true).slideToggle();	
	})	
	
	
	
	//导航menu  js下拉展开
	$('.menu > ul > li').hover(function(){
		$('.menu > ul > li').removeClass('hover');
		$(this).addClass('hover');
		$(this).children('ul').stop(true,true).slideToggle();	
	})
	
	$('.menu > ul > li > ul > li').hover(function(){
		$(this).children('ul').stop(true,true).slideToggle();	
	})
	

})

	

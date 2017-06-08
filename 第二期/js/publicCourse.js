    function getPublicCourse(){
		$.ajax({
			 url: window.path + "/login/portal/getPublicCourse",
             type: "get",
             dataType: "html",
             async: false,
             cache: false,
             success: function (data){
            	 $("#publicCourse").html(data);
             }
		});
	}
    
    $(document).ready(function () {
    	setInterval("getPublicCourse()",1000 * 60 * 5);
        $("body").on("mousemove",".main_nav_v2 li",function () {
            $(this).addClass("main_nav_active_v2").siblings().removeClass("main_nav_active_v2");
            $(".nav_contents_v2>div").hide();
            $("#liveFree_div_"+$(this).attr("tid")).show();
            //$(".nav_contents_v2>div").eq($(this).index()).show();
        });
        
        $("body").on("mouseenter","li[id=liveCost_li]",function () {
            $(this).addClass("main2_cur_v2").siblings().removeClass("main2_cur_v2");
            $("#liveCost_div>div.main2_1_v2").hide();
            $("#liveCost_div_"+$(this).attr("tid")).show();
            $(window).scroll();
        });
        
        $("li[id=video_li]").each(function(i,j){
        	var desc = $(this).attr("description");
        	$("#video_list_"+$(this).attr("tid")).find(".xuexi_xieli_v2").text($(this).text());
        	$("#video_list_"+$(this).attr("tid")).find(".study_jiaoshao_v2").text(desc);
        });
        $("li[id=video_li]").mouseenter(function(){
        	$(this).addClass("main2_cur_v2").siblings().removeClass("main2_cur_v2");
        	var tid= $(this).attr("tid");
        	$("#video_list_bytype>div").hide();
        	$("#video_list_"+tid).show();
        	$(window).scroll();
        });
        $("body").on("click","#livePublic_prev",function(){
        	var public_pageNo = $.trim($("#public_pageNo").text())*1;
        	if(public_pageNo==1){
        		return ;
        	}else{
        		$("#public_pageNo").text(public_pageNo-1);
        		$("#livePublic_ul").stop();
        		var t = -1*(public_pageNo-2)*370;
				$("#livePublic_ul").stop();
        		$("#livePublic_ul").animate({top:t+"px"},500);
        	}
        });
        $("body").on("click","#livePublic_next",function(){
			var public_pageNo = $.trim($("#public_pageNo").text())*1;
			var public_pages = $.trim($("#public_pages").text())*1;
			if(public_pageNo==public_pages){
				return ;
			}else{
				$("#public_pageNo").text(public_pageNo+1);
				var t = -1*public_pageNo*370;
				$("#livePublic_ul").stop();
        		$("#livePublic_ul").animate({top:t+"px"},500);
			}
        });
		function init_login(){
    		$(".main_nav_v2 li:first").mousemove();
    		$("li[id=liveCost_li]:first").mousemove();
    		$("li[id=video_li]:first").mousemove();
    	}
    	init_login();
    });
    
    $(function(){
    	//蒙层
    	$(".showc li").hover(function(){
    		$(this).children(".article-over").stop(true,true).slideDown(300);
    	},function(){
    		$(this).children(".article-over").stop(true,true).slideUp(300);
    	});
    	
        $(".home_zbz_v2 dd").hover(function () {
            $(this).find("p").css("color", "#0F75DB");
        }, function () {
            $(this).find("p").css("color", "#67B3FE");
        })
        $("body").on("click","dl[id=video_unBegin]",function(){
        	var sss=$(this).find(".times_tb_v2");
        	$(this).find(".times_tb_v2").fadeIn("normal");//('<img src="${pageContext.request.contextPath }/resources/duia/images/time_v2.png" />');
        	setTimeout(function(){sss.fadeOut("normal");},5000);
        });
    });
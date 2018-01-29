$(document).ready(function(){
	maphover();
	$(".city").find("a").click(function(){
		$(".informations").find("."+this.dataset.city).css("display","block").siblings().css("display","none");
	});
});

function maphover(){
	var self = "";
	$(".city").hover(
		function(){
			self = $(this);
			self.addClass("hover").children("div").show();
		},
		function(){
			self = $(this);
			self.children("div").hide();
			self.removeClass("hover");
		}
	);	
};
//.ct.bg
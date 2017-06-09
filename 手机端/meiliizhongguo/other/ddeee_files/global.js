/**************全局调用*******************/
$(function () {
    /*全部导航触发效果*/
    $('.header-bar .trigger').on('click',function (e) {
        openSide();
        e.stopPropagation();
         $('body').on('click.sidenav',function () {
          closeSide();
          $('body').off('click.sidenav');
        });
    });

    $('.nav').on('click',function (e) {
      e.stopPropagation();
    })
    
  
    function openSide () {
    	var win=window.innerWidth;
      $('.nav').addClass('on');
      $('html,body').addClass('holding');
      $('body').addClass('slide-left holding-right');
      $('.header-ctent').width(win);
    }
    function closeSide () {
     $('body').removeClass('slide-left');
     setTimeout(function () {
       $('.nav').removeClass('on');
       $('body').removeClass('holding-right');
       $('html,body').removeClass('holding');
       $('.header-ctent').removeAttr('style')
     },300);
   }


});
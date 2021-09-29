// JavaScript Document
$(function(){
	$(".index_nav>ul>li").each(function(){
          if($(this).children("a").hasClass("on"))
          {
              $(this).hover(function(){
                  $(this).children(".xl").stop(true,false).slideDown()
               },function(){
                   $(this).children(".xl").stop(true,false).slideUp()
                  $('.huangtiao').css('top','-50px');

               })
            }
           else{
               $(this).hover(function(){
                    $(this).children("a").addClass("on");
                    $(this).children(".xl").stop(true,false).slideDown()
                 },function(){
                    $(this).children("a").removeClass("on");
                    $(this).children(".xl").stop(true,false).slideUp()
                    $('.huangtiao').css('top','-50px');

                 })
              }
          }) 
  $('.index_nav>ul ul li a').hover(function(){
    var i = $(this).parent('li').index();
    if($(window).width()>1600){
      $(this).parent('li').siblings('.huangtiao').css({'top':51*i+'px'});
    }
    else{
      $(this).parent('li').siblings('.huangtiao').css({'top':41*i+'px'});
    }
  })

  $(window).resize(function(){
      var ww=$(window).width();
      if(ww>=1600){
        $('.index_nav').css({'right':'300px','opacity':'1'}).removeClass('on').show();
        $('.hsbtm').fadeOut();
      }
      else if(ww>991&&ww<1600){
        $('.index_nav').css({'right':'260px','opacity':'1'}).removeClass('on').show();
        $('.hsbtm').fadeOut();
      }
      else{
        $('.index_nav').css({'right':'-150px','opacity':'0'}).hide();
      }
    })
    $(window).resize();
    $('.menu').click(function(){
      if(!$('.index_nav').hasClass('on')){
        $('.index_nav').css({'z-index':'3'});
        $('.index_nav').show();
        $('.index_nav').animate({'right':'0','opacity':'1'},500);
        $('.index_nav').addClass('on');
        $('.hsbtm').fadeIn();
      }
      else{
        $('.index_nav').animate({'right':'-150px','opacity':'0'},500,function(){
          $('.index_nav').css({'z-index':'1'});
          $('.index_nav').hide();
        });
        $('.index_nav').removeClass('on');
        $('.hsbtm').fadeOut();

      }
    })
    
    $('.menu_close,.hsbtm').click(function(){
        $('.index_nav').animate({'right':'-150px','opacity':'0'},500,function(){
          $('.index_nav').css({'z-index':'1'});
          $('.index_nav').hide();
        });
        $('.index_nav').removeClass('on');
        $('.hsbtm').fadeOut();
    }) 
    $('.header_share a').hover(function(){
      $(this).find('span').stop(true,false).fadeToggle();
    })
    $('.index_nav>ul>li').each(function(){
      if($(this).children('ul').size()==1){
        $(this).addClass('hasChild');
      }
    })
   
}) 

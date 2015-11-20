$(function () {

  //Rating toggle
  $('.rating-check i').click(function() {
    $(this).toggleClass('checked');
  });

  window_align();

  $('[data-toggle="tooltip"]').tooltip();

  //Section height calculation
  function window_align() {
    $('.img-wrp').each(function() {
      if(!($(this).hasClass('prflImg'))) {
        imgs = $(this).find('img');
        var slideImages = imgs.attr('src'),
        pageHeight = $(window).height()-47;

        /*if (pageHeight>=620) {
          $('.log-view-listing li p').css('height', '51px');
        }
        else {
          $('.log-view-listing li p').css('height', '30px');
        }*/

        $(this).css({'height': pageHeight/2.55});
        $(this).css({'background-image': 'url("' + slideImages + '")'});
        imgs.hide();
      }
      else {
        pageHeight = $(window).height()-47;
        $(this).css({'height': pageHeight/2.71});
        var imgSrc = $(this).find('.profile-bg').attr('src');
        $(this).css({'background-image':'url('+imgSrc+')'});
        $(this).find('.profile-bg').hide();
      }
    });
    /*setTimeout(function(){ 
      var pageHeight = $(window).height()-47;
      topCntHT = $('.section-listing .img-wrp').height()+$('.after-arrng').height();
      $('.log-view-listing').css({'height': (pageHeight-topCntHT)-18});
    }, 100);*/
    
  }

  //Section height recalculation when resize
  $( window ).resize(function() {
    liWidth = $('.trip-lists li').eq(0).width();
    $('.search-overlay .input-group').css('width', liWidth+7); 

    window_align();
    var pageHeight = $(window).height()-47;

    $('.visit-cntr-block').css('height', pageHeight - 180);
    $('.tripsChtScrl').css('height', pageHeight-($('.trips .img-wrp').height() + 110));
    //$('.trips .discussion .tab-body').css('height', pageHeight - ($('.trips .discussion .tab-body').parent().parent().find('.img-wrp').height()+42));
    // $('.members-list-view').css('height', pageHeight-($('.trips .img-wrp').height() + 57));
    // $('.contact-list-view').css('height', pageHeight-($('.img-wrp.prflImg').height() + 95));

    //$(".over-hide section").css('width', $(window).width()/3);
  });

});

$(window).load(function(){

/*$(".trip-img-round span i").each(function() {
  $(this).css('height', ($(this).innerWidth()));
});*/

  //Section animation when open the page
/*   $(".over-hide section").css('width', $(window).width()/3);

   $($(".over-hide").get().reverse()).each(function(i) {
      var row = $(this);
      setTimeout(function() {
        row.toggleClass('expand', !row.hasClass('expand'));
      }, 700*i);
  });*/

liWidth = $('.trip-lists li').eq(0).width();
$('.search-overlay .input-group').css('width', liWidth+2);

  //Height set
  var pageHeight = $(window).height()-47;
  $('.visit-cntr-block').css('height', pageHeight - 180);
  // $('.members-list-view').css('height', pageHeight-($('.trips .img-wrp').height() + 57));
  $('.tripsChtScrl').css('height', pageHeight-($('.trips .img-wrp').height() + 110));
  //$('.trips .discussion .tab-body').css('height', pageHeight - ($('.trips .discussion .tab-body').parent().parent().find('.img-wrp').height()+42));
  
  // $('.contact-list-view').css('height', pageHeight-($('.img-wrp.prflImg').height() + 95));

  //Scrollbar initialization
  $(".visit-cntr-block").mCustomScrollbar({
    theme:"dark-thick"
  });



   /*$(".log-view-listing").mCustomScrollbar({

    scrollButtons:{enable:false},
    theme:"dark-thin",
  });*/

  /*.tripsChtScrl, .members-list-view,  .contact-list-view*/




    //Login
    var loginimgSrc = $('.login-bg').attr('src');
    $('.login-bg').parent().css({'background-image':'url('+loginimgSrc+')'});
    $('.login-bg').hide();

    $('.filled').click(function() {
      if(!($(this).hasClass('signed-in'))) {
      $('.login-page.inPage .content-wrapper').addClass('expand');
      $('.page').after('<div class="overlay"></div>');
      setTimeout(function(){ 
        $('.login-page.inPage .content-wrapper').addClass('clicked');
      }, 500);
      }

    });
    $('.signin-btn-login').click(function() {
      $('.login-page.inPage .content-wrapper').removeClass('expand clicked');
      $('.overlay').remove();
    });


    $(document).click(function() {
      if($('.login-page.inPage .content-wrapper').hasClass('clicked')) {
        $('.login-page.inPage .content-wrapper').removeClass('expand clicked');
        $('.overlay').remove();
      }
    });

    $('.login-page.inPage .content-wrapper').click(function(event) {
     event.stopPropagation();
   });

    chatHolder = $('.sec-chat').outerHeight();
    $('.discussion').css({'padding-bottom': chatHolder});

    $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
      var t = e.target.text;
      if(t === 'Gallery') {
        $('#gallery .grid-item').each(function() {
          var gridHeight = $('#gallery .one-three').width();
          $('#gallery .one-three').height(gridHeight);
          $('#gallery .two-three').height(gridHeight);
          $('#gallery .two-two').height((gridHeight*2)+10);
        });

        $('#gallery .img-hldr').each(function () {
          if ($(this).find('img').length){
            var getImage = $(this).find('img').attr('src');
            $(this).css({"background-image":"url("+getImage+")"});
            $(this).find('img').hide();
          }
        });
      }
      if(t != 'Discussion') {
        $('.discussion').css({'padding-bottom': 10});
        $('section.discussion .mCSB_scrollTools').css({'margin-bottom': 0});
      } else {
        $('.discussion').css({'padding-bottom': chatHolder});
        $('section.discussion .mCSB_scrollTools').css({'margin-bottom': 10});
      }

    });
    

  });
jQuery(function($){
  $('.menubar > ul > li')
    .on('mouseover', function(event){
      $(this).addClass('active');
    })
    .on('mouseout', function(event){
      $(this).removeClass('active');
    });

    $('#content > div:first-child').carousel({duration:800});
/*
  $('.menubar > ul > li')
    .on({
      mouseover: function(event){
        $(this).addClass('active');
      },
      mouseout: function(event){
        $(this).removeClass('active');
      }
    });
*/
    
    $('.items > ul > li > p').on('mouseover', function(event){
        console.log(event);    
    });
});

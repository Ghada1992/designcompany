$(function(){
  
//show hidden item
$('.show-more').on("click",function(){
$('.our-work .work-hidden').toggle(1000);
});


// Change progress ba color
 $(".one").addClass("progress-bar-orange");


/* Set the width of the side navigation to 250px */
$('.links i, .links-r i').on("click",function(){
  document.getElementById("mySidenav").style.width = "250px";
});


/* Set the width of the side navigation to 0 */

$('.sidenav .closebtn').on("click",function(){
    document.getElementById("mySidenav").style.width = "0";
});

$('.gallary').hover(function(){
      $(this).find('.over').slideDown().show(1000);
        
    },function(){
      $(this).find('.over').slideUp().hide(1000);
        

});

  //scrolling to features

  $('.header .arrow i').click(function(){
    $('html , body').animate({ 
     scrollTop: $('.features').offset().top}, 500);
  });
 
    //scrolling to our work

    $('.header .buttons .move').on("click",function(){
      //alert("ghada");

      $('html , body').animate({

        scrollTop: $('.our-work').offset().top},500);
    });




  //show and hide menu
  $('.menu-btn').click(function(){
    $('.menu .hide-menu').toggle(1000);
   });

  
 //check testimonial
 var leftArrow = $('.fa-chevron-left'),
      rightArrow = $('.fa-chevron-right');
      
  /*function checkclients(){
    if($('.client:first').hasClass('active')){

      leftArrow.fadeOut();
    }else{
      leftArrow.fadeIn();
    }
  }*/

  //apriviation if statments
   function checkclients(){
   $('.client:first').hasClass('active') ? leftArrow.fadeOut() : leftArrow.fadeIn();
   $('.client:last').hasClass('active') ? rightArrow.fadeOut() : rightArrow.fadeIn();
  }
    checkclients();

    $('.testimonial i').click(function(){
       if($(this).hasClass('fa-chevron-right')){
        $('.testimonial .active').fadeOut(100, function(){
          $(this).removeClass('active').next('.client').addClass('active').fadeIn(100);

          checkclients();
        });

      } else{
        $('.testimonial .active').fadeOut(100, function(){
          $(this).removeClass('active').prev('.client').addClass('active').fadeIn(100);

          checkclients();
        });
      }

    });


function reposition() {
        var modal = $(this),
            dialog = modal.find('.modal-dialog');
        modal.css('display', 'block');

        // Dividing by two centers the modal exactly, but dividing by three 
        // or four works better for larger screens.
        dialog.css("margin-top", Math.max(0, ($(window).height() - dialog.height()) / 2));
    }

    // Reposition when a modal is shown
    $('.modal').on('show.bs.modal', reposition);
    // Reposition when the window is resized
    $(window).on('resize', function() {
    $('.modal:visible').each(reposition);

   
});
});

/* Preloder Page */

 $(window).on("load",function(){
 $(".preloader img").fadeOut(2000,function(){
 $(".preloader").fadeOut(100);
 });

});

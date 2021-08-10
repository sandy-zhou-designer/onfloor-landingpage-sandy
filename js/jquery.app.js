/* Theme Name: Hublind - Landing page Template
   Author: Coderthemes
   Author e-mail: coderthemes@gmail.com
   Version: 1.0.0
   Created: May 2017
   File Description:Main JS file of the template
*/


(function ($) {

    'use strict';

    function initLoader() {
        $(window).load(function() {
            $('.status').fadeOut();
            $('.preloader').delay(350).fadeOut('slow');
        });
    }
    function initSmoothNav() {
        $('.nav-link').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 50
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });

        
    }


    function initScrollspy() {
$("#navbarCollapse").scrollspy({
    offset:20
});
}

    function initWowAnimation() {
        AOS.init({
            easing: 'ease-in-out-sine',
            duration: 1000
        });
    }
    function initMagnificPopoupVideo() {
        $('.popup-video').magnificPopup({
          disableOn: 700,
          type: 'iframe',
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,

          fixedContentPos: false
        });
    }
    function initMagnificPopoupImage() {
        $('.image-popup').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            mainClass: 'mfp-fade',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            }
        });
    }

function initowlCarousel() {
     $("#owl-demo").owlCarousel({
            autoPlay: 3000, //Set AutoPlay to 3 seconds
            loop:true,
    nav:true,

            itemsDesktop: [2200, 1],
            itemsDesktopSmall: [979, 1],
             
       
        });


 }
//compare mobile chart//
// DIRTY Responsive pricing table JS

$( "ul" ).on( "click", "li", function() {
  var pos = $(this).index()+2;
  $("tr").find('td:not(:eq(0))').hide();
  $('td:nth-child('+pos+')').css('display','table-cell');
  $("tr").find('th:not(:eq(0))').hide();
  $('li').removeClass('active');
  $(this).addClass('active');
});

// Initialize the media query
  var mediaQuery = window.matchMedia('(min-width: 640px)');
  
  // Add a listen event
  mediaQuery.addListener(doSomething);
  
  // Function to do something with the media query
  function doSomething(mediaQuery) {    
    if (mediaQuery.matches) {
      $('.sep').attr('colspan',5);
    } else {
      $('.sep').attr('colspan',2);
    }
  }
  
  // On load
  doSomething(mediaQuery);
  //compare mobile chart end//


    function initStickyNav() {
        $(window).load(function() {
            $(".sticky").sticky({topSpacing: 0});
        });  
    }
    function initContactForm() {
        $('#cform').submit(function() {

            var action = $(this).attr('action');

            $("#message").slideUp(750, function() {
                $('#message').hide();

                $('#submit')
                    .before('<img src="images/form-loader.gif" class="contact-loader" />')
                    .attr('disabled', 'disabled');

                $.post(action, {
                        name: $('#name').val(),
                        email: $('#email').val(),
                        comments: $('#comments').val(),
                    },
                    function(data) {
                        document.getElementById('message').innerHTML = data;
                        $('#message').slideDown('slow');
                        $('#cform img.contact-loader').fadeOut('slow', function() {
                            $(this).remove()
                        });
                        $('#submit').removeAttr('disabled');
                        if (data.match('success') != null) $('#cform').slideUp('slow');
                    }
                );

            });

            return false;

        });
    }
    function init() {
        initLoader();
        initSmoothNav();
        initScrollspy();
        initWowAnimation();
        initMagnificPopoupVideo();
        initMagnificPopoupImage();
        initowlCarousel();
        initStickyNav();
        initContactForm();
    }

    init();
   
    jQuery(document).ready(function($) {

      //add source url //
       jQuery(".source-url").hide();
      jQuery("#custentity_source_url").attr('value', window.location.href);


  var width = $(window).width();
        if (width <= 960) {
// jQuery("#book").prependTo("#features");
        jQuery('.swap>.mobile-img').each(function() {
            jQuery(this).insertBefore(jQuery(this).prev());
        });

        //click outside the div to close the mobile menu
        
        var mouse_is_inside = false;

                $(document).ready(function()
                {
                    $('.navbar').hover(function(){ 
                        mouse_is_inside=true; 
                    }, function(){ 
                        mouse_is_inside=false; 
                    });

                    $("body").mouseup(function(){ 
                        if(! mouse_is_inside)$('#navbarCollapse').removeClass("show");
                    });
                });

        // click the menu to collapses
        $(".nav-item").click(function () {
            console.log("click!");
            $('#navbarCollapse').removeClass("show");
        });



        }
});


})(jQuery);

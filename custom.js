jQuery(document).ready(function(){
    
    new WOW().init();



    //responsive menu btn
     jQuery(".menu-btn").click(function(){
      jQuery(".menu-area").slideToggle();
     })
     jQuery(window).resize(function(){
      var screenSize=jQuery(window).width();
      if (screenSize > 768) {
        jQuery(".menu-area").removeAttr("style");
      }
     })

//owl-carousel one

jQuery('#owl-one').owlCarousel({
    loop: true,
    responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
});

var owl = jQuery('#owl-one');
owl.owlCarousel();
  // Go to the next item
  jQuery('').click(function() {
      owl.trigger('next.owl.carousel');
  });

//owl-carousel-one-ends


//owl-carousel-two

jQuery('#owl-two').owlCarousel({
    loop: true,
    responsive:{
        0:{
            items:1
        },
        350:{
            items:2
        },
        576:{
            items:3
        },
        768:{
            items:4
        },
        1270:{
            items:5
        }
    }
});

var owl = jQuery('#owl-two');
owl.owlCarousel();
// Go to the next item
jQuery('.owl-next').click(function() {
    owl.trigger('next.owl.carousel');
});
// Go to the previous item
jQuery('.owl-prev').click(function() {
// With optional speed parameter
// Parameters has to be in square bracket '[]'
owl.trigger('prev.owl.carousel', [300]);
});
//owl-carousel-two-ends

//scroll
 jQuery("#services").click(function(){
     jQuery('html, body').animate({
       scrollTop: jQuery("#about-area").offset().top
       }, 2000);
       return false;
 })
 jQuery("#portfolio").click(function(){
     jQuery('html, body').animate({
       scrollTop: jQuery("#portfolio-area").offset().top
       }, 2000);
       return false;
 })
 jQuery("#caseStudies").click(function(){
     jQuery('html, body').animate({
       scrollTop: jQuery("#working-process-area").offset().top
       }, 2000);
       return false;
 })
 jQuery("#articles").click(function(){
     jQuery('html, body').animate({
       scrollTop: jQuery("#recent-article-area").offset().top
       }, 2000);
       return false;
 })
 jQuery("#contact").click(function(){
     jQuery('html, body').animate({
       scrollTop: jQuery("#contact-area").offset().top
       }, 2000);
       return false;
 })

//arrow-up
    jQuery(".arrow-up").click(function(){
      jQuery("html").animate({'scrollTop' : 0},2000)
    })

});
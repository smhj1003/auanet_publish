(function($) {

	"use strict";

	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('body').addClass('page-loaded');
			$('.preloader').delay(1000).fadeOut(0);
		}
	}

	//Update Header Style and Scroll to To
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var siteHeaderH = $('.main-header').height();
			var scrollLink = $('.scroll-to-top');
			var sticky_header = $('.main-header .sticky-header');
			if (windowpos > siteHeaderH) {
				siteHeader.addClass('fixed-header');
				sticky_header.addClass("animated slideInDown");
				scrollLink.fadeIn(300);
			} else {
				siteHeader.removeClass('fixed-header');
				sticky_header.removeClass("animated slideInDown");
				scrollLink.fadeOut(300);
			}
		}
	}

	headerStyle();


	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-right"></span></div>');

	}

	$('.main-header > li.dropdown').on('click', function() {
		console.log("1111");
		$('.mobile-menu .navigation li > ul >li').css('display','block');
	});

	
	//Mobile Nav Hide Show
	//if($('.mobile-menu').length){

		
		
		//$('.mobile-menu .menu-box').mCustomScrollbar();
		
		var mobileMenuContent = $('.main-header .nav-outer .main-menu').html();
		$('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
		$('.sticky-header .main-menu').append(mobileMenuContent);
		
		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn,.mobile-menu .navigation > li.dropdown').on('click', function() {
			$(this).toggleClass('open');
			$(this).find('ul').slideToggle(500);
		});



		
		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function() {
			$('body').addClass('mobile-menu-visible');
			
		});
		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});
		
//}

	//Main Slider / Banner Carousel
	if ($('.banner-carousel').length) {
		$('.banner-carousel').owlCarousel({
			loop:true,
			animateOut: 'fadeOut',
            animateIn: 'fadeIn',
			margin:0,
			nav:true,
			smartSpeed: 500,
			autoplay: 6000,
			autoplayTimeout:7000,
			navText: [ '<span class="icon flaticon-left-arrow"></span>', '<span class="icon flaticon-right-arrow-1"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				}
			}
		});
	}

	//Project Carousel
	if ($('.project-carousel').length) {
		$('.project-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 700,
			autoplay: 5000,
			autoplayTimeout:5000,
			navText: [ '<span class="icon flaticon-left-arrow"></span>', '<span class="icon flaticon-right-arrow-1"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				768:{
					items:2
				},
				992:{
					items:3
				},
				1200:{
					items:3
				}
			}
		});
	}

	//Testimonial Carousel
	if ($('.testimonial-carousel').length) {
		$('.testimonial-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 700,
			autoplay: 5000,
			autoplayTimeout:5000,
			navText: [ '<span class="icon flaticon-left-arrow"></span>', '<span class="icon flaticon-right-arrow-1"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				768:{
					items:2
				},
				992:{
					items:2
				},
				1200:{
					items:3
				}
			}
		});
	}

	//Testimonial Carousel
	if ($('.testimonial-carousel-two').length) {
		$('.testimonial-carousel-two').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 700,
			autoplay: 5000,
			autoplayTimeout:5000,
			navText: [ '<span class="icon flaticon-left-arrow"></span>', '<span class="icon flaticon-right-arrow-1"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				768:{
					items:1
				},
				992:{
					items:1
				},
				1200:{
					items:1
				}
			}
		});
	}

	//Sponsors Carousel
	if ($('.sponsors-carousel').length) {
		$('.sponsors-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 700,
			autoplay: 5000,
			autoplayTimeout:5000,
			navText: [ '<span class="icon flaticon-left-arrow"></span>', '<span class="icon flaticon-right-arrow-1"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},
				768:{
					items:3
				},
				992:{
					items:4
				},
				1200:{
					items:4
				}
			}
		});
	}

	//Awards Carousel
	if ($('.awards-carousel').length) {
		$('.awards-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 700,
			autoplay: 5000,
			autoplayTimeout:5000,
			navText: [ '<span class="icon flaticon-left-arrow"></span>', '<span class="icon flaticon-right-arrow-1"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				768:{
					items:2
				},
				992:{
					items:3
				},
				1200:{
					items:2
				},
				1700:{
					items:2
				},
				1900:{
					items:3
				}
			}
		});
	}

	//MVG Carousel
	if ($('.mvg-carousel').length) {
		$('.mvg-carousel').owlCarousel({
			loop:true,
			animateOut: 'fadeOut',
            animateIn: 'fadeIn',
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 5000,
			autoplayTimeout:5000,
			navText: [ '<span class="icon flaticon-left-arrow"></span>', '<span class="icon flaticon-right-arrow-1"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				}
			}
		});
	}

	//History Carousel
	if ($('.history-carousel').length) {
		$('.history-carousel').owlCarousel({
			loop:true,
			margin:50,
			nav:true,
			smartSpeed: 700,
			autoplay: 5000,
			autoplayTimeout:5000,
			navText: [ '<span class="icon flaticon-left-arrow"></span>', '<span class="icon flaticon-right-arrow-1"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				768:{
					items:2
				},
				992:{
					items:3
				},
				1200:{
					items:4
				}
			}
		});
	}

	//Team Carousel
	if ($('.team-carousel').length) {
		$('.team-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 700,
			autoplay: 5000,
			autoplayTimeout:5000,
			navText: [ '<span class="icon flaticon-left-arrow"></span>', '<span class="icon flaticon-right-arrow-1"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				768:{
					items:2
				},
				992:{
					items:3
				},
				1200:{
					items:4
				}
			}
		});
	}

	//Single Item Carousel
	if ($('.single-item-carousel').length) {
		$('.single-item-carousel').owlCarousel({
			loop:true,
			margin:30,
			nav:true,
			smartSpeed: 500,
			autoplay: 5000,
			autoplayTimeout:5000,
			navText: [ '<span class="icon flaticon-left-arrow-1"></span>', '<span class="icon flaticon-left-arrow0"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				800:{
					items:1
				},
				1024:{
					items:1
				}
			}
		});
	}

	//Fact Counter + Text Count
	if($('.count-box').length){
		$('.count-box').appear(function(){

			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);

			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}

		},{accY: 0});
	}


	//Tabs Box
	if($('.tabs-box').length){
		$('.tabs-box .tab-buttons .tab-btn').on('click', function(e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));

			if ($(target).is(':visible')){
				return false;
			}else{
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
				$(target).fadeIn(300);
				$(target).addClass('active-tab');
			}
		});
	}

	//Accordion Box
	if($('.accordion-box').length){
		$(".accordion-box").on('click', '.acc-btn', function() {

			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');

			if ($(this).next('.acc-content').is(':visible')){
				//return false;
				$(this).removeClass('active');
				$(this).next('.acc-content').slideUp(300);
				$(outerBox).children('.accordion').removeClass('active-block');
			}else{
				$(outerBox).find('.accordion .acc-btn').removeClass('active');
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);
			}
		});
	}

	//Custom Seclect Box
	if($('.custom-select-box').length){
		$('.custom-select-box').selectmenu().selectmenu('menuWidget').addClass('overflow');
	}

	//Coming Soon Countdown Timer
	if($('.time-countdown').length){  
		$('.time-countdown').each(function() {
		var $this = $(this), finalDate = $(this).data('countdown');
		$this.countdown(finalDate, function(event) {
			var $this = $(this).html(event.strftime('' + '<div class="counter-column"><span class="count">%D</span>Days</div> ' + '<div class="counter-column"><span class="count">%H</span>Hrs</div>  ' + '<div class="counter-column"><span class="count">%M</span>Mins</div>  ' + '<div class="counter-column"><span class="count">%S</span>Secs</div>'));
		});
	 });
	}
	

	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}

	//MixitUp Gallery Filters
	 if($('.filter-list').length){
	 	 $('.filter-list').mixItUp({});
	 }

	 //MixitUp Gallery Filters
	 if($('.datepicker').length){
	 	 $( ".datepicker" ).datepicker({ minDate: 0, maxDate: "+11M +29D" });
	 }

	 //Price Range Slider
	if($('.price-range-slider').length){
		$( ".price-range-slider" ).slider({
			range: true,
			min: 10,
			max: 200,
			values: [ 10, 99 ],
			slide: function( event, ui ) {
			$( "input.property-amount" ).val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
			}
		});
		
		$( "input.property-amount" ).val( $( ".price-range-slider" ).slider( "values", 0 ) + " - $" + $( ".price-range-slider" ).slider( "values", 1 ) );	
	}

	//Jquery Spinner / Quantity Spinner
	if($('.quantity-spinner').length){
		$("input.quantity-spinner").TouchSpin({
		  verticalbuttons: true
		});
	}

	//Default Masonry
	function enableDefaultMasonry() {
		if($('.masonry-container').length){

			var winDow = $(window);
			// Needed variables
			var $container=$('.masonry-container');

			$container.isotope({
				itemSelector: '.masonry-item',
				 masonry: {
					columnWidth : '.column-width'
				 },
				animationOptions:{
					duration:500,
					easing:'linear'
				}
			});
		}
	}
	enableDefaultMasonry();

	//Sortable Masonary with Filters
	function sortableMasonry() {
		if($('.sortable-masonry').length){

			var winDow = $(window);
			// Needed variables
			var $container=$('.sortable-masonry .items-container');
			var $filter=$('.filter-btns');

			$container.isotope({
				filter:'*',
				 masonry: {
					columnWidth : '.column-width'
				 },
				animationOptions:{
					duration:500,
					easing:'linear'
				}
			});


			// Isotope Filter
			$filter.find('li').on('click', function(){
				var selector = $(this).attr('data-filter');

				try {
					$container.isotope({
						filter	: selector,
						animationOptions: {
							duration: 500,
							easing	: 'linear',
							queue	: false
						}
					});
				} catch(err) {

				}
				return false;
			});


			winDow.on('resize', function(){
				var selector = $filter.find('li.active').attr('data-filter');

				$container.isotope({
					filter	: selector,
					animationOptions: {
						duration: 500,
						easing	: 'linear',
						queue	: false
					}
				});
			});


			var filterItemA	= $('.filter-btns li');

			filterItemA.on('click', function(){
				var $this = $(this);
				if ( !$this.hasClass('active')) {
					filterItemA.removeClass('active');
					$this.addClass('active');
				}
			});
		}
	}
	sortableMasonry();

	//Contact Form Validation
	if($('#contact-form').length){
		$('#contact-form').validate({
			rules: {
				username: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				phone: {
					required: true
				},
				subject: {
					required: true
				},
				message: {
					required: true
				}
			}
		});
	}

	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function(e) {
			e.preventDefault();
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1500);

		});
	}

	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       false,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}



/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */

	$(window).on('scroll', function() {
		headerStyle();
	});

/* ==========================================================================
   When document is Resized, do
   ========================================================================== */

	$(window).on('resize', function() {
		
	});

/* ==========================================================================
   When document is loading, do
   ========================================================================== */

	$(window).on('load', function() {
		$("#header").load("header.html");
  	$("#footer").load("footer.html");
		handlePreloader();
		enableDefaultMasonry();
		sortableMasonry();
		
	});

})(window.jQuery);

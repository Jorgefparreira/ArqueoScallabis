// google maps api

function initMap() {
  var hqMarker = {lat: 39.238926, lng: -8.685768};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: hqMarker
  });
  var marker = new google.maps.Marker({
    position: hqMarker,
    map: map
  });
}

window.addEventListener('load', function(event) {
	//scrollspy
	$('body').scrollspy({target: ".scrollspy"});

	$(".scrollspy a").on('click', function(event) {

  	if (this.hash !== "") {

	    event.preventDefault();

	    var hash = this.hash;

	    $('html, body').animate({
	      scrollTop: $(hash).offset().top
	    }, 800, function(){

	      window.location.hash = hash;
	    });
	  } 
	});

  // CAROUSEL

  $('.owl-carousel').owlCarousel({
      center: true,
      loop:true,
      margin:10,
      responsiveClass:true,
      autoplay:true,
      autoplayTimeout:3000,
      animateOut: 'slideOutDown',
      animateIn: 'flipInX',
      mergeFit:false,
      merge:true,
      autoplayHoverPause:true,

      responsive:{
          0:{
              items:2,
              autoplay:false,
              autoplayTimeout:10000000,            
          },
          600:{
              items:2,
          },
          1000:{
              items:3,
          }
      }
  })  		  
  
});


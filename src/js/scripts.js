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

function scrollToSection(section){
  document.querySelector("#"+section).scrollIntoView({  behavior: 'smooth' });
}

window.addEventListener('load', function(event) {

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


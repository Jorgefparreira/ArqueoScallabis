import router from './components/js/router';
import 'owl.carousel';

// google maps api  

const initMap = () => {
  var hqMarker = { lat: 39.238926, lng: -8.685768 };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: hqMarker
  });
  var marker = new google.maps.Marker({
    position: hqMarker,
    map: map
  });
}


window.addEventListener('load', event => {
  document.querySelectorAll('#top-navbar a').forEach(anchor => {
    anchor.addEventListener("click", (event) => {
      event.preventDefault()
    });
  })
  document.querySelectorAll(".faq-header").forEach(header => {
    header.addEventListener('click', faqs.showAnswer)
  });
  document.querySelector(".faq-header").click()


  // CAROUSEL

  $('.owl-carousel').owlCarousel({
    center: true,
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 3000,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    mergeFit: false,
    merge: true,
    autoplayHoverPause: true,

    responsive: {
      0: {
        items: 2,
        autoplay: false,
        autoplayTimeout: 10000000,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      }
    }
  })

});

$(function () {

  // $('#contactus-form').validator();

  $('#contactus-form').on('submit', function (e) {

      // if the validator does not prevent form submit
      if (!e.isDefaultPrevented()) {
          var url = "php/EQ/contact-us-mail-script.php";
          $.ajax({
              type: "POST",
              url: url,
              data: $(this).serialize(),
              success: function (data)
              {
                  // data = JSON object that contact.php returns
                  var messageAlert = 'alert-' + data.type;
                  var messageText = data.message;

                  // let's compose Bootstrap alert box HTML
                  var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';
                  
                  // If we have messageAlert and messageText
                  if (messageAlert && messageText) {
                      // inject the alert to .messages div in our form
                      $('#contactus-form').find('.messages').html(alertBox);
                      // empty the form
                      $('#contactus-form')[0].reset();
                  }
              }
          });
          return false;
      }
  })
});

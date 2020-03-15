import router from './components/js/router';
import 'owl.carousel';

// google maps api  

const initMap = () => {
  const hqMarker = { lat: 39.238926, lng: -8.685768 };
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: hqMarker
  });
  const marker = new google.maps.Marker({
    position: hqMarker,
    map: map
  });
}

// Send contact us form

let sendMail = (e) => {

  e.preventDefault()
  let recaptcha = document.querySelector('#g-recaptcha-response').getAttribute('value');
  if (!recaptcha) {
    document.querySelector('#captcha-help').style.display = "block";
  } else {
    $('html, body').animate({
      scrollTop: $("#contactus-form").offset().top - 90
    }, 700);
    document.querySelector('#captcha-help').style.display = "none";
    const url = "/php/contact-us-mail-script.php";
    $.ajax({
      type: "POST",
      url: url,
      data: $('#contactus-form').serialize(),
      success: function (data) {
        console.log(data)
  
        const messageAlert = 'alert-' + data.type;
        const messageText = data.message;
        const alertBox = `<div class="alert ${messageAlert} alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>${messageText}</div>`;
  
        document.querySelector('#contactus-form .messages').innerHTML = alertBox;
        document.querySelector('#contactus-form').reset();
      }
    });    
  }  
}


window.addEventListener('load', event => {
  document.querySelectorAll(".faq-header").forEach(header => {
    header.addEventListener('click', faqs.showAnswer)
  });
  document.querySelectorAll('#top-navbar li').forEach(li => {
    li.addEventListener('click', () => { document.querySelector('.navbar-collapse').classList.remove('navbar-show'); })
  })
  document.querySelector('.navbar-header button').addEventListener('click', router.toggleNavbar)
  initMap()
  document.querySelector('#contactus-form').addEventListener('submit', event => {sendMail(event)});

});
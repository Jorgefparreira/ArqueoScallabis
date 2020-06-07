import config from './config';

// const loadRecaptcha = () =>{
//   try {
//     grecaptcha.render(
//       document.querySelector('#contact-us-recaptcha'), 
//       {
//         callback: recaptchaCallback, 
//         sitekey: '6LcLj4UUAAAAAO_tHhloF4O5YUQOQxEQq_tSkVXk'
//       }
//     );        
//   } catch (error) {
//     setTimeout(() => {
//       loadRecaptcha()
//     }, 1000);
//   }
// }

// let recaptchaScript = document.createElement('script');
// recaptchaScript.type = "text/javascript";
// recaptchaScript.src = `https://www.google.com/recaptcha/api.js`;
// recaptchaScript.onload = () => {
//   loadRecaptcha()
// }; 
// document.head.appendChild(recaptchaScript);

// let recaptcha = false;

// let recaptchaCallback = () =>{
//   recaptcha = true;
// }





let contact = {
// Send contact us form
  sendMail: (e) => {
    e.preventDefault()

    if (!recaptcha) {
      document.querySelector('#captcha-help').style.display = "block";
    } else {
      $('html, body').animate({
        scrollTop: $("#contactus-form").offset().top - 90
      }, 700);
      document.querySelector('#captcha-help').style.display = "none";
      const url = "/php/contact-us-mail-script.php";
      console.log($('#contactus-form').serialize())
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
  },

  loadRecaptchaV3: () =>{

    const recaptchaV3Key = config.getRecaptchaKey();
    try {
        grecaptcha.ready(function() {
          grecaptcha.execute(recaptchaV3Key, {action: 'contactus'}).then(function(token) {
            console.log(token)
            const captchBadge = document.querySelector('.grecaptcha-badge');
            document.querySelector('#captcha-wrapper').appendChild(captchBadge);
            document.getElementById('g-recaptcha-response-v3').value = token;
          });
        });  
        
    } catch (error) {
      setTimeout(() => {
        loadRecaptcha()
      }, 1000);
    }
  },

// google maps api  

  initMap: () => {
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
}



export default contact;
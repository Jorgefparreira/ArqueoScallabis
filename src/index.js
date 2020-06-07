import router from './components/js/router';
import contact from "./components/js/contact";
import 'owl.carousel'; 

// ON LOAD

window.addEventListener('load', event => {
  document.querySelectorAll(".faq-header").forEach(header => {
    header.addEventListener('click', faqs.showAnswer)
  });
  document.querySelectorAll('#top-navbar li').forEach(li => {
    li.addEventListener('click', () => { document.querySelector('.navbar-collapse').classList.remove('navbar-show'); })
  })
  document.querySelector('.navbar-header button').addEventListener('click', router.toggleNavbar)

  contact.initMap()
  contact.loadRecaptchaV3()
  document.querySelector('#contactus-form').addEventListener('submit', event => {contact.sendMail(event)});

});

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

let faqs = {
  loadData: () => {
    faqList.forEach((faq, i) => {
      $('#accordion-container').append(`
      <div class="faq-wrapper">
        <div class="faq-header" faq="${i + 1}" open="false">
          <p>${faq[0]} <svg viewBox="0 0 50 50"><path d="M24.909 6.533v37.041M6.728 25.621h36.664" fill="none" stroke="#000" stroke-width="11.511" stroke-linecap="round"/></svg></p>
        </div>
        <div class="faq-body" faq="${i + 1}">
          <p>${faq[1]}</p>
        </div>
      </div>        
      `)
    });
  },
  showAnswer: (e) => {
    if (e.target.getAttribute('open') == "true") {
      $(e.target).siblings(".faq-body").slideUp();
      e.target.querySelector('svg').innerHTML = '<svg viewBox="0 0 50 50"><path d="M24.909 6.533v37.041M6.728 25.621h36.664" fill="none" stroke="#000" stroke-width="11.511" stroke-linecap="round"/></svg>';
      e.target.setAttribute('open', 'false')
    } else {
      $(e.target).siblings(".faq-body").slideDown();
      e.target.querySelector('svg').innerHTML = '<svg viewBox="0 0 50 50"><path d="M6.728 25.62h36.664" fill="none" stroke="#000" stroke-width="11.452" stroke-linecap="round"/></svg>';
      e.target.setAttribute('open', 'true')
    }

  }
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


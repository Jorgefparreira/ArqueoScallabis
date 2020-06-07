import faqList from './faqList';

let faqs = {
  loadData: () => {
    let faqHTML = "";
    faqList.forEach((faq, i) => {
      faqHTML +=`
      <div class="faq-wrapper">
        <div class="faq-header" faq="${i + 1}" open="false">
          <p>${faq[0]} </p><svg viewBox="0 0 50 50"><path d="M24.909 6.533v37.041M6.728 25.621h36.664" fill="none" stroke="#000" stroke-width="11.511" stroke-linecap="round"/></svg>
        </div>
        <div class="faq-body" faq="${i + 1}">
          <p>${faq[1]}</p>
        </div>
      </div>        
      `
    });
    return faqHTML
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
faqs.loadData();

export default faqs
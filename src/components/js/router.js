import projects from './projectsSection'
import faqs from './faqSection';

let router = {
  loadSection: (html, container) =>{
    document.querySelector(container).innerHTML = html;

    document.querySelectorAll(".page-link").forEach(link =>{
      link.addEventListener('click', (e) =>{
        e.preventDefault()
        router.getRoute(e)
      } )
    })  
    if(container === "#accordion-container"){
      document.querySelectorAll('.faq-header').forEach(question =>{
        question.addEventListener("click", faqs.showAnswer)
      })
    } 
  },
  getRoute: (e) => {
    let hostname;
    if(window.location.hostname === 'localhost'){
      hostname = 'localhost:3000';
    } else {
      hostname = window.location.hostname;
    }
    let route = "/";
    try {
      route = e.target.closest("a").getAttribute("href");
    } catch (error) {
      route = window.location.href.replace('http://'+hostname,"")
    }

    route = route.split("/");

    if(!route[0] || route[0] == ""){
      route.shift();
    } 
    if(route[0][0] === "#" || route[0] === ""){
      router.loadIndex(route[0])
    } else if (route[0] === "projectos" || route[0] === "arquivo"){
      router.loadProjectSection(route)
    } else {
      router.loadPage(route[0])
    }
  }, 
  loadIndex: (section) => {
    if(document.querySelector("#projects-carousel").innerHTML == ""){
      router.loadSection(projects.loadList(), '#projects-carousel');
      const init = () => {
        try {
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
        } catch (error) {
          setTimeout(() => {
            init()
          }, 200);
        }      
      }
      init()       
    }
    document.querySelector("#main-container").style.display = "block";
    document.querySelector("#project-container").style.display = "block";
    document.querySelector("#project-details").innerHTML = '';
    document.querySelector("#router-container").innerHTML = "";
    section === "" ? section = "#home" : "";
    document.querySelector(section).scrollIntoView({ behavior: 'smooth' });
    router.updateHead("/","ArqueoScallabis","")
  },  
  loadProjectSection: route => {
    if(route[0] != "arquivo"){
      projects.loadProjectDetail(route);  
    } else if(route[1]){
      projects.loadProjectDetail(route);
    } else {
      projects.loadArchive();
    }
  },
  loadPage: (page) =>{
    router.loadIndex('#home');
    try {
      document.querySelector("#main-container").style.display = "none";
      document.querySelector("#router-container").innerHTML = eval(page).html;
      eval(page).init();
      router.updateHead(eval(page).url, eval(page).title, eval(page).description);
      window.scrollTo(0,0);
    } catch (error) {
      let script = document.createElement('script');
      script.src = `js/${page}.js`;
      document.head.appendChild(script);
      document.querySelector("#router-container").scrollIntoView();
      script.onload = () => {
        router.loadPage(page);
      }; 
    }
  },
  updateHead: (url, title, description) =>{
    window.history.pushState("","", "/");
    window.history.pushState("","", url);
    document.title = title; 
    document.querySelector('meta[name="description"]').setAttribute("content", description);
  },
  toggleNavbar:()=>{
    let navbar = document.querySelector('.navbar-collapse')
    if(navbar.classList.contains('navbar-show')){
      navbar.classList.remove('navbar-show');
    } else{
      navbar.classList.add('navbar-show'); 
    }
  }
  
}  

router.loadSection(faqs.loadData(), '#accordion-container') 
router.getRoute()
window.onpopstate = () => {
  router.getRoute()
}

export default router;
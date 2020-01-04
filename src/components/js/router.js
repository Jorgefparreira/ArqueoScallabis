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
    let route = "/";
    try {
      route = e.target.closest("a").getAttribute("href");
    } catch (error) {
      route = window.location.href.replace("http://localhost:3000","")
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
      setTimeout(() => {
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
      }, 1000);
      
      router.loadSection(faqs.loadData(), '#accordion-container') 
    }
    document.querySelector("#main-container").style.display = "block";
    document.querySelector("#project-container").style.display = "block";
    document.querySelector("#project-details").innerHTML = '';
    document.querySelector("#router-container").innerHTML = "";
    section === "" ? section = "#home" : "";
    document.querySelector(section).scrollIntoView({ behavior: 'smooth' });
    router.updateHead("/","ArqueoScallabis","")
  },  
  loadProjectSection: (route) => {
    if(route[0] != "arquivo"){
      router.updateHead(`${route[0]}/${route[1]}`, `${route[1]} | ${route[0]}`, "")      
      projects.loadProjectDetail(route[1]);  
    } else if(route[1]){
      projects.loadProjectDetail(route[1]);
      console.log(route)
    } else {
      projects.loadArchive();
    }
  },
  loadPage: (page) =>{
    try {
      document.querySelector("#main-container").style.display = "none";
      document.querySelector("#router-container").innerHTML = eval(page).html;
      eval(page).init();
      router.updateHead(eval(page).url, eval(page).title, eval(page).description)
      window.scrollTo(0,0)        
    } catch (error) {
      let script = document.createElement('script');
      script.src = `/js/${page}.js`;
      document.head.appendChild(script);
      document.querySelector("#router-container").scrollIntoView();
      script.onload = () => {
        router.loadPage(page)
      }; 
    }
  },
  updateHead: (url, title, description) =>{
    window.history.pushState("","", "/");
    window.history.pushState("","", url);
    document.title = title; 
    document.querySelector('meta[name="description"]').setAttribute("content", description);
  }
  
}  


router.getRoute()
window.onpopstate = () => {
  router.getRoute()
}

export default router;
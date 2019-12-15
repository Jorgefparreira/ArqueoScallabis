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
    if(!route[0]){
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
      router.loadSection(projects.loadList(), '#projects-carousel')
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
    router.updateHead(`${route[0]}/${route[1]}`, `${route[1]} | ${route[0]}`, "")

    if(route[0] != "arquivo"){
      projects.loadProjectDetail(route[1]);  
    } else {
      projects.loadArchive(route[1]);
    }
  },
  loadPage: (page) =>{
      let script = document.createElement('script');
      script.src = `/js/${page}.js`;
      document.head.appendChild(script);
      document.querySelector("#router-container").scrollIntoView();
      script.onload = () => {
        document.querySelector("#main-container").style.display = "none";
        document.querySelector("#router-container").innerHTML = eval(page).html;
        router.updateHead(eval(page).url, eval(page).title, eval(page).description)
      };
  },
  updateHead: (url, title, description) =>{
    window.history.pushState("","", "/");
    window.history.pushState("","", url);
    document.title = title; 
    document.querySelector('meta[name="description"]').setAttribute("content", description);
  }
  
}  


router.getRoute()




export default router;
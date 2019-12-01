let router = {
  loadLinkEvents: () =>{
    document.querySelectorAll(".page-link").forEach(link =>{
      link.addEventListener('click', router.getRoute)
    })  
  },
  getRoute: (e) => {
    e.preventDefault()
    let route = e.target.closest("a").getAttribute("href");
    route = route.split("/");
    route.shift();
    if(route[0][0] === "#" || route[0] === ""){
      router.loadIndex(route[0])
    } else if (route[0] === "projects" || route[0] === "archive"){
      router.loadProjectSection(route)
    } else {
      router.loadPage(route[0])
    }
  }, 
  loadIndex: (section) => {
    document.querySelector("#main-container").style.display = "block";
    document.querySelector("#project-container").style.display = "block";
    document.querySelector("#project-details").innerHTML = '';

    if(section === ""){
      document.querySelector("#home").scrollIntoView({ behavior: 'smooth' });
    } else{
      document.querySelector(section).scrollIntoView({ behavior: 'smooth' });
    }
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
      console.log(page)
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
    window.history.pushState("","", url);
    document.title = title; 
    document.querySelector('meta[name="description"]').setAttribute("content", description);
  }
}  


projects.loadList();
faqs.loadData();
router.loadLinkEvents()
import { projectList, archiveList } from './projectList';
import router from './router';

let projects = { 
  loadList: () => {
    let projectsHTML = '';
    projectList.forEach(project => {
      projectsHTML +=
        `<div class='project-box'>
          <h3 class='list-title'>${project.name}</h3>
          <a href='${project.link}' class='page-link'>
            <img type='button' src='/${project.coverImage}' class='img-responsive project-img'>
          </a>
        </div>`
    });  
    return projectsHTML  

  },
  returnList: () => {
    router.loadIndex('#projects')
  }, 
  loadProjectDetail: route => {
    const projectId = route[1];
    document.querySelector('#projectos').scrollIntoView();
      document.querySelector("#project-container").style.display = "none";
      let project = projectList.find(item => item.id == projectId);
      if(!project){
        project = archiveList.find(item => item.id == projectId);
      }
      const {images, title, partnership, client, description} = project;
      let projectImages = "";
      images.forEach(image => {
        projectImages += `<div class="col-sm-6"><img src="/${image}" class="img-responsive modal-img"></div>`;
      });  
      let projectHTML = `
        <a href="/#projectos" class="page-link projects-return"><h3><span>&laquo;</span> Projectos</h3></a>
        <br>
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <h3>${title}</h3><br>
              <p class="project-partnership"><strong>${partnership}</strong></p>
              <p>${client}</p><br>
              <p>${description}</p>
            </div>
            ${projectImages}
          </div>
          <a href="/#projectos" class="page-link"><p>&laquo; Voltar</p></a>
        </div>
      `;
      const init = () => {
        try {
          router.loadSection(projectHTML,'#project-details') 
          router.updateHead(`${route[0]}/${route[1]}`, `${route[1]} | ${route[0]}`, "")
        } catch (error) {
          setTimeout(() => {
            init()
          }, 200);
        }      
      }
      init()      
  },
  loadArchive: () => {
    document.querySelector('#projectos').scrollIntoView();
    document.querySelector("#project-container").style.display = "none";
    let archiveProjectsHTML = '';
    archiveList.forEach(project => {
      archiveProjectsHTML += `<div class="col-md-4">
      <div class="project-box"><h3 class="list-title">${project.name}</h3><a href="/arquivo/${project.id}" class="page-link"><img src="/${project.coverImage}" class="img-responsive project-img"></a></div>	
    </div>`
    });

    let archiveHTML = `
      <a href="/#projectos" class="page-link projects-return"><h3><span>&laquo;</span> Projectos</h3></a>
      <br>
      <div class="container">
        <div class="row">
          <h2 class="project-title">Arquivo de Projectos</h2>
          <br>
          ${archiveProjectsHTML}
        </div>
        <a href="/#projectos" class="page-link"><p>&laquo; Voltar</p></a>
      </div>
    `;
    const init = () => {
      try {
        router.updateHead("arquivo", "Arquivo", "Arquivo de projectos");
        router.loadSection(archiveHTML,'#project-details') 
      } catch (error) {
        setTimeout(() => {
          init()
        }, 200);
      }      
    }
    init()
  }

};

export default projects;
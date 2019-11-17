

const scrollToSection = (section) => {
  document.querySelector("#" + section).scrollIntoView({ behavior: 'smooth' });
}

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

let projects = {
  loadList: () => {
    projectList.forEach(project => {
      $('#projects-carousel').append(
        `<div class='project-box'>
          <h3 class='list-title'>${project.name}</h3>
          <a href='javascript:projects.loadProject("${project.id}");'><img type='button' src='${project.coverImage}' class='img-responsive project-img'></a>
        </div>
      `);
    });
    // window.history.pushState("","", "projectos");
  },
  returnList: () => {
    document.querySelector('#project-details').innerHTML = '';
    document.querySelector('#project-container').style.display = 'block';
  },
  loadProject: (projectId) => {
    document.querySelector('#project-container').style.display = 'none';
    const project = projectList.find(item => item.id == projectId);
    let projectImages = '';
    project.images.forEach(image =>{
      projectImages += `<div class="col-sm-6"><img src="${image}" class="img-responsive modal-img"></div>`
    });
    document.querySelector('#project-details').innerHTML = `
    <div class="projects-return" onclick="projects.returnList()"><h3><span class="{{swing}}">&laquo;</span> Projectos</h3></div>
  <br>
  <div class="container">
    <section >
      <div ng-model="projects">
        <br>
        <div class="row">
          <div class="col-sm-6">
        <h3>${project.title}</h3><br>
        <p class="project-partnership"><strong>${project.partnership}</strong></p>
        <p>${project.client}</p><br>
        <p>${project.description}</p>
          </div>
          ${projectImages}
        </div>
      </div>
      <a href="#projects"><p>&laquo; Voltar</p>	</a>
    </section>
  </div>
    `
  }
}

let faqs = {
  data: [
    ["Quero trabalhar com a ArqueoScallabis. Posso fazer uma candidatura espontânea?", "Sim. Para efetuar uma candidatura espontânea basta enviar o CV para geral@arqueoscallabis.pt. Todas as candidaturas serão alvo da nossa maior atenção."],
    ['Acabei agora a licenciatura em Arqueologia ou tenho pouca experiência na área. Posso enviar o meu CV?', 'Claro! Na ArqueoScallabis valorizamos toda a experiência dos candidatos, na área da Arqueologia e não só.'],
    ['Sou licenciado em Restauro ou Antropologia Biológica. Posso enviar o meu CV?', 'Claro! A ArqueoScallabis também desenvolve projeto na área do Restauro e áreas geográficas com grande probabilidade de aparecerem contextos onde a presença de um antropólogo é obrigatória.'],
    ['Tenho um projeto de construção para realizar. Preciso de serviços de Arqueologia?', 'Depende. Se o projeto estiver inserido numa zona de grau 1 do PDM, se se encontrar perto de uma Zona de Proteção Especial (ZEP) ou se afetar um imóvel classificado ou em vias de classificação, poderão ser necessários trabalhos arqueológicos prévios ou de acompanhamento dos trabalhos de obra. Se o projeto não se enquadra em nenhuma das anteriores situações, os serviços de Arqueologia só serão necessários se a autarquia local ou a Direção Geral do Património Cultural (DGPC) o determinarem. Em caso de dúvida pode sempre entrar em contato connosco através do email geral@arqueoscallabis.pt.'],
    ['O que faz um arqueólogo em obra?', 'O arqueólogo tem a função de identificar a presença de vestígios arqueológicos, registá-los e minimizar os impactos dos trabalhos de obra sobre os mesmos. Desta forma, tenta salvaguardar o possível interesse científico dos vestígios encontrados, ao mesmo tempo que assegura que os mesmos não interferem com o andamento dos trabalhos em execução.'],
    ['Quem tem a obrigação de pagar os serviços de Arqueologia, Restauro ou Antropologia, caso sejam necessários?', 'Qualquer serviço que venha a ser fornecido pela ArqueoScallabis será pago pela entidade contratante do mesmo, isto é, o Dono de Obra ou a Entidade Promotora da mesma. O pagamento de serviços prestado por uma empresa de Arqueologia não é diferente do pagamento de serviços de Ambiente, Higiene e Segurança (HSST), Topografia, ou outros necessários ao bom funcionamento da empreitada.']
  ],
  loadData: () => {
    faqs.data.forEach((faq, i) => {
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
  projects.loadList();
  faqs.loadData();
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


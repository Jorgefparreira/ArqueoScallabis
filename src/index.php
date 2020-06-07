<body>
	<nav class="navbar navbar-default" id="top-navbar">
		<div class="container-fluid">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span> 
				</button>
				<a href='/' class="navbar-brand page-link"><img class="img-responsive" src="/img/logo.png" alt="logo"><span class="hidden-sm">ArqueoScallabis</span></a>
			</div> 
			<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
				<ul class="nav navbar-nav">
					<a href='/#projectos' class="page-link"><li>Projectos</li></a>
					<a href='/#contactos' class="page-link"><li>Contactos</li></a>
					<a href='/#faqs' class="page-link"><li>FAQ's</li></a>
					<a href='/clientes' class="page-link"><li>Clientes</li> </a>
				</ul>
			</div> 
			<div class="navbar-brand2 mobile-brand">
				<a href="#"><img src="/img/brand.png" class="brand-img" alt="Trowel"></a>
			</div>

		</div> 
	</nav>


	<!-- INTRO -->

<div id="main-container">
	<div class="container-fluid carousel-container" id="home">
		<h1>ArqueoScallabis</h1>
		<div id="intro-carousel" class="carousel slide" data-ride="carousel">
			<div class="carousel-inner" role="listbox">
				<div class="item active">
					<img src="/img/header0.jpg" alt="Igreja de Santarém 1">
				</div>
				<div class="item">
					<img src="/img/header1.jpg" alt="Igreja de Santarém 2">
				</div>
				<div class="item">
					<img src="/img/header2.jpg" alt="Igreja de Santarém 3">
				</div>
			</div> 
		</div>
	</div> 
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<h2>Quem Somos <?php echo $url; ?></h2> 
			</div>
			<div class="col-md-4">
				<img src="/img/QuemSomos.jpg" alt="Criança a correr" class="img-responsive text-img">
			</div>
			<div class="col-md-8">
				<p>A ArqueoScallabis é uma empresa no ramo da Arqueologia, salvaguarda e gestão patrimonial, que nasceu da vontade de um grupo de profissionais, todos formados em Arqueologia e História pela Faculdade de Letras de Lisboa e com um percurso consolidado na área, através dos mais diversos trabalhos, em vários pontos do País. Sediada na secular cidade de Santarém, a ArqueoScallabis está estruturada de forma a dar resposta aos mais variados projectos no âmbito da minimização de impactes sobre o património, seja através da reabilitação urbana, obras públicas, estudos de impacte ambiental, ou qualquer outro projecto que necessite da componente arqueológica para ser concluído com sucesso.
				</p>
			</div>
		</div> 
		<br>
		<div class="row">
			<div class="col-md-6">
				<h2>Missão</h2>
				<p>A nossa missão é contribuir de forma inovadora e positiva para os projectos dos nossos clientes, com serviços realizados de acordo com as normas de qualidade e excelência que prezamos dentro da nossa Empresa. </p>
			</div>
			<div class="col-md-6">
				<h2>Valores</h2>
				<p>Caracterizamo-nos pelo gosto e respeito pelo Património Histórico, Arqueológico e Natural, assim como pelo seu papel na nossa herança e identidade cultural. Ao mesmo tempo valorizamos uma relação transparente e em parceria estreita com os nossos clientes, oferecendo soluções de qualidade adaptadas aos seus projectos.
				</p>
			</div>
		</div> 
		<br>
		<div class="row">
			<div class="col-md-6">
				<h2>Equipa</h2>
				<p>A ArqueoScallabis é composta por uma equipa multidisciplinar, jovem e dinâmica, com elevados padrões éticos e profissionais, com experiência nas áreas da Arqueologia, Museologia e Serviços Educativos. </p>
			</div>
			<div class="col-md-6">
				<h2>Serviços</h2>
				<p class="service-list">Estudos de Impacte Ambiental - Vertente Patrimonial; <br>
				Prospecção arqueológica; <br>
				Acompanhamento arqueológico; <br>
				Escavação arqueológica; <br>
				Elaboração de Cartas arqueológicas; <br>
				Musealização de espaços; <br>
				Serviços Educativos;</p>
			</div>
		</div> 

	</div> 


	<!-- PROJECTS -->

  <div class="scrollspy-offset" id="projectos"></div>
  <hr>
	<section id="project-container">	
  <div class="container" >
    <div class="project-margin"></div>											
      <div class="row">
        <h2 class="project-title">Projectos</h2>
        <br>
        <div class="owl-carousel owl-theme" id="projects-carousel"></div>			
      </div>
	</div> 
	</section>
	<section id="project-details"></section>


	<!-- CONTACT -->

	<div class="scrollspy-offset" id="contactos"></div>
	<hr>

	<div class="container">
		<div class="row">
			<h2 class="project-title">Contactos</h2>
			<br>
			<br>
			<div class="col-md-12">
				<div id="map"></div>
				<br>
				<br>
			</div>
			<div class="col-md-6">
				<form action="" method="POST" id="contactus-form">
					<div class="messages"></div>
					<div class="form-group">
						<label for="name" class="sr-only">Nome</label>
						<input type="text" placeholder="Nome" class="form-control" name="name" id="name">
					</div>
					<div class="form-group">
						<label for="phone" class="sr-only">Telefone</label>
						<input type="tel" placeholder="Telefone" pattern="[0-9]{6,}" class="form-control" name="phone" id="phone">
					</div>
					<div class="form-group">
						<label for="email" class="sr-only">E-mail</label>
						<input type="email" placeholder="E-mail*" title="Enter your email" required="required" class="form-control"	name="email" id="email">
					</div>
					<label for="message-box" class="sr-only">Mensagem</label>
					<textarea style="resize:none" placeholder="Mensagem*" cols="40" rows="5" minlength="2" required="required"
						class="form-control" name="message" id="message-box" data-gramm_editor="false"></textarea>
					<div id="visible-comment-box">
						<p id="visible-comment" class="comment-style"></p>
						<p class="comment-style" id="visible-comment2"></p>
					</div>
					<input type="hidden" id="g-recaptcha-response-v3" name="g-recaptcha-response-v3">
					<div id="contact-us-recaptcha"></div>
					<span class="form-error-notice" id="captcha-help">Please check that you are not a robot.</span>
					<br>
					<button type="submit" value="Send" class="btn btn-primary submit-btn" id="submit-button"><svg width="16" height="16" viewBox="0 0 16 16" fill="#fff"><path d="M0 9l4 1.5L6 16l2.861-3.82L14 14l2-14L0 9zm7.169 2.44l-.916 2.485-1.086-3.118 8.402-7.631-6.4 8.264z"></path></svg> Enviar</button>
				</form>
				<div id="captcha-wrapper"></div>
			</div> 
			<br>
			<div class="col-md-6">
				<p><span class="contact-item">Morada:</span> CIES - Centro de Inovação Empresarial de Santarém, Largo Infante
					Santo. 2005-246 Santarém <br>
					*De momento, qualquer assunto a tratar em Sede de Empresa está sujeito a marcação prévia.</p>
				<br>
				<p><span class="contact-item">Telemóvel:</span> 927710788 /918506990</p>
				<br>
				<p><span class="contact-item">E-mail: </span>
					<script> var username = "geral"; var hostname = "arqueoscallabis.pt"; var linktext = username + "@" + hostname; document.write("<a href='" + "mail" + "to:" + username + "@" + hostname + "'>" + linktext + "</a>"); </script>
				</p>
			</div>
		</div> 
	</div> 


	<!-- FAQ'S -->


	<div class="scrollspy-offset" id="faqs"></div>
	<hr>
	<br>
	<div class="container" ng-controller="faqController">
		<div class="row">
			<div class="col-md-12">
				<h2 class="project-title">FAQ's</h2>
				<br>
				<div id="accordion-container"></div>
			</div>
		</div> 
		<br>
    <br>
    
		<div class="row">
			<div class="col-md-12">
				<h2>Links úteis</h2>
				<ul class="other-links">
					<li><a href="http://arqueologia.patrimoniocultural.pt/" target="_blank">Portal do Arqueólogo</a></li>
					<li><a href="http://www.patrimoniocultural.gov.pt" target="_blank">Direção Geral do Património Cultural:
							DGPC</a></li>
					<li><a href="https://dre.pt/" target="_blank">Diário da República Eletrónico</a></li>
				</ul>
			</div>
		</div> 
	</div>      
</div>
<div id="router-container"></div>
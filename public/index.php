<?php require_once($_SERVER['DOCUMENT_ROOT'] ."/php/config.php");?>
<!DOCTYPE html>
<html lang="en">

<head>
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-106585154-2"></script>
	<script>window.dataLayer = window.dataLayer || [];function gtag() { dataLayer.push(arguments); }gtag('js', new Date());	gtag('config', 'UA-106585154-2');	</script>
	<meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="author" content="Web Archaeologist">
	<meta property="og:image" content="http://www.arqueoscallabis.pt/img/logo.png"> 
	<meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="keywords" content="Arqueologia, Santarém">
	<link href="https://fonts.googleapis.com/css?family=Oxygen" rel="stylesheet">
	<link rel="stylesheet" href="/css/bootstrap.min.css">
	<link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
	<meta name="description"
		content="A ArqueoScallabis é uma empresa no ramo da Arqueologia, salvaguarda e gestão patrimonial, que nasceu da vontade de um grupo de profissionais, todos formados em Arqueologia e História pela Faculdade de Letras de Lisboa, e com um percurso consolidado na área, através dos mais diversos trabalhos, em vários pontos do País.">

	<link rel="stylesheet" href="/css/owl.carousel.min.css">
	<link rel="stylesheet" href="/css/styles.css?v=1.5">
	<title>ArqueoScallabis</title>
</head> 	 
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
<footer>
	<div class="container-fluid">
		<div class="row footer-row">
			<a href="ficha_projeto.pdf"><img src="/img/feder_logo.png" class="img-responsive feder-logo" alt="FEDER Logo"></a>
			<div class="clearfix"></div>
			<div class="social">
				<a href="https://www.facebook.com/arqueoscallabis" target="_blank">
					<svg class="social-media-link img-bounce" width="40" height="40" viewBox="0 0 49.999999 50.000002"><rect width="50.297" height="50.297" x="-.065" y=".092" rx="9.232" ry="8.711" fill="#3c5a99" /><path	d="M34.305 49.837V30.775h6.398l.958-7.428h-7.356v-4.743c0-2.15.597-3.617 3.681-3.617l3.934-.001V8.342c-.68-.091-3.016-.293-5.732-.293-5.672 0-9.555 3.462-9.555 9.82v5.478H20.22v7.428h6.414v19.062z"	fill="#fff" /></svg>
				</a>
				<a href="https://www.instagram.com/arqueoscallabis/" target="_blank">
					<svg class="social-media-link img-bounce" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="40" viewBox="0 0 49.999999 50.000002"><defs><linearGradient id="b"><stop offset="0" stop-color="#3771c8"/><stop stop-color="#3771c8" offset=".128"/><stop offset="1" stop-color="#60f" stop-opacity="0"/></linearGradient><linearGradient id="a"><stop offset="0" stop-color="#fd5"/><stop offset=".1" stop-color="#fd5"/><stop offset=".5" stop-color="#ff543e"/><stop offset="1" stop-color="#c837ab"/></linearGradient><radialGradient id="c" cx="158.429" cy="578.088" r="65" xlink:href="#a" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 -.76611 .70969 0 -396.824 175.417)" fx="158.429" fy="578.088"/><radialGradient id="d" cx="147.694" cy="473.455" r="65" xlink:href="#b" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.06695 .33513 -1.37858 .27667 634.568 -176.95)" fx="147.694" fy="473.455"/></defs><path d="M25.175-.073c-10.447 0-13.502.01-14.096.06-2.143.179-3.477.518-4.93 1.245a9.991 9.991 0 0 0-2.876 2.113C1.685 5 .723 7.037.375 9.457c-.17 1.175-.219 1.415-.229 7.417-.004 2 0 4.634 0 8.166 0 10.483.012 13.548.062 14.143.173 2.095.5 3.413 1.193 4.855 1.324 2.76 3.853 4.832 6.832 5.605 1.031.267 2.17.414 3.633.483.62.027 6.936.047 13.255.047 6.32 0 12.64-.008 13.244-.04 1.694-.08 2.677-.212 3.764-.494a10.487 10.487 0 0 0 6.832-5.616c.68-1.407 1.024-2.776 1.18-4.761.034-.433.048-7.336.048-14.229 0-6.894-.015-13.784-.05-14.217-.157-2.017-.502-3.374-1.203-4.808a9.958 9.958 0 0 0-2.142-2.947C45.14 1.473 43.114.506 40.702.157c-1.169-.17-1.402-.22-7.383-.23z" fill="url(#c)"/><path d="M25.175-.073c-10.447 0-13.502.01-14.096.06-2.143.178-3.477.517-4.93 1.242a9.99 9.99 0 0 0-2.876 2.11C1.685 4.99.723 7.022.375 9.438.205 10.61.156 10.85.146 16.84c-.004 1.997 0 4.624 0 8.15 0 10.462.012 13.52.062 14.115.173 2.09.5 3.406 1.193 4.845 1.324 2.755 3.853 4.823 6.832 5.594 1.031.266 2.17.413 3.633.482.62.027 6.936.047 13.255.047 6.32 0 12.64-.008 13.244-.039 1.694-.08 2.677-.212 3.764-.494a10.482 10.482 0 0 0 6.832-5.605c.68-1.404 1.024-2.77 1.18-4.752.034-.432.048-7.32.048-14.2 0-6.881-.015-13.757-.05-14.19-.157-2.013-.502-3.367-1.203-4.798a9.94 9.94 0 0 0-2.142-2.941C45.14 1.47 43.114.505 40.702.157c-1.169-.17-1.402-.22-7.383-.23z" fill="url(#d)"/><path d="M25.163 6.498c-5.017 0-5.647.022-7.617.112-1.967.09-3.31.403-4.484.862a9.042 9.042 0 0 0-3.273 2.14 9.112 9.112 0 0 0-2.132 3.286c-.458 1.18-.77 2.529-.858 4.503-.088 1.979-.112 2.612-.112 7.65 0 5.04.023 5.67.112 7.65.09 1.974.402 3.323.858 4.502a9.096 9.096 0 0 0 2.131 3.287 9.042 9.042 0 0 0 3.272 2.142c1.175.458 2.518.771 4.484.862 1.97.09 2.6.112 7.617.112 5.018 0 5.646-.022 7.616-.112 1.967-.09 3.31-.404 4.486-.862a9.035 9.035 0 0 0 3.27-2.142 9.112 9.112 0 0 0 2.133-3.286c.454-1.18.766-2.529.858-4.503.089-1.98.112-2.61.112-7.65 0-5.038-.023-5.67-.112-7.65-.092-1.975-.404-3.323-.858-4.503a9.11 9.11 0 0 0-2.132-3.287 9.025 9.025 0 0 0-3.272-2.14c-1.178-.458-2.52-.77-4.488-.861-1.97-.09-2.598-.112-7.616-.112zM23.506 9.84h1.657c4.933 0 5.518.018 7.466.107 1.8.083 2.778.385 3.43.639a5.71 5.71 0 0 1 2.123 1.388 5.76 5.76 0 0 1 1.382 2.133c.253.654.554 1.635.636 3.444.089 1.956.108 2.544.108 7.495 0 4.952-.02 5.54-.108 7.496-.082 1.809-.383 2.79-.636 3.444a5.74 5.74 0 0 1-1.382 2.131 5.71 5.71 0 0 1-2.123 1.388c-.65.255-1.63.556-3.43.639-1.948.089-2.533.108-7.466.108s-5.517-.02-7.465-.108c-1.801-.084-2.779-.386-3.43-.64a5.72 5.72 0 0 1-2.125-1.387 5.753 5.753 0 0 1-1.382-2.133c-.253-.653-.555-1.635-.637-3.444-.088-1.956-.106-2.543-.106-7.498s.018-5.54.106-7.495c.083-1.81.384-2.791.637-3.445a5.751 5.751 0 0 1 1.382-2.134 5.731 5.731 0 0 1 2.125-1.388c.65-.255 1.629-.557 3.43-.64 1.704-.077 2.365-.1 5.808-.104zm11.519 3.081a2.221 2.221 0 0 0-2.217 2.226c0 1.229.993 2.226 2.217 2.226a2.222 2.222 0 0 0 2.217-2.226c0-1.23-.993-2.227-2.217-2.227zm-9.862 2.602c-5.239 0-9.487 4.266-9.487 9.528 0 5.262 4.248 9.526 9.487 9.526 5.24 0 9.486-4.264 9.486-9.526s-4.247-9.528-9.486-9.528zm0 3.343c3.401 0 6.159 2.769 6.159 6.185 0 3.415-2.758 6.184-6.159 6.184-3.4 0-6.158-2.769-6.158-6.184 0-3.416 2.757-6.185 6.158-6.185z" fill="#fff"/></svg>
				</a>
				<div class="clearfix"></div>
				<p>&copy;<span id="copy-year"></span> ArqueoScallabis. All rights reserved. <br>Web Administrator - <a href="https://www.web-archaeologist.co.uk/" target="_blank">Web Archaeologist</a>
				</p>
			</div>
		</div>
	</div>
</footer>
<script async defer src="https://maps.googleapis.com/maps/api/js?key=<?php echo $mapsKey; ?>"></script>
<script src="https://www.google.com/recaptcha/api.js?render=<?php echo $recaptchaV3Public; ?>"></script>

<script src="/js/polyfills.js"></script>
<script src="/js/bundle.js"></script>

</body>

</html>
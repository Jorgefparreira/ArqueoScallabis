let clientes = { 
  url: 'clientes',
  description: 'Exemplos de clientes e parcerias da ArqueoScallabis',
  title: 'Clientes',
  html: `
  <div class="container">
  <div class="row">
    <div class="col-md-12 clientes-list">
      <div class="clearfix">&nbsp;</div>
      <div class="clearfix">&nbsp;</div>
      <h1>Clientes</h1>
  
      <h2 class="h3">Clientes Empresariais:</h2>
      <div class="clearfix">&nbsp;</div>
      <ul>
        <li><span class="client-cap">Ecoedifica, Ambiente e construções, S.a. </span><span class="cli-indent">- Casa
            Mortuária da Igreja de Santa Iria da Ribeira de Santarém</span></li>
  
        <li><span class="client-cap">Ancorpor, Geotécnica e fundações, Lda. </span><span class="cli-indent">- <a
              href="/#!/archive/details/2#projects">Projecto De Estabilização e Consolidação das Barreiras do Forte De
              S. Filipe, Setúbal</a></span><span class="cli-indent">- <a href="/#!/archive/details/0#projects">Encosta
              de Santa Margarida, Santarém</a></span></li>
  
        <li><span class="client-cap">Inês Brandão Arquitetura </span><span class="cli-indent">- <a
              href="/#!/archive/details/1#projects">Reabilitação de edifício na Rua da Cruz De Santa Apolónia,
              Lisboa</a></span><span class="cli-indent">- Reabilitação de edifício na Rua do Conde, Lisboa</span></li>
  
        <li><span class="client-cap">Esquissos, Arquitetura e Consultoria </span><span class="cli-indent">- <a
              href="/#!/archive/details/6#projects">Reabilitação de edifício na Rua dos Navegantes,
              Cascais</a></span><span class="cli-indent">- <a href="/#!/archive/details/5#projects">Reconstrução de
              Edifício no Largo Da Igreja de Montelavar, Sintra</a></span></li>
  
        <li><span class="client-cap">Craftrade, Sociedade de representações e investimentos imobiliários, Lda. </span>
          <span class="cli-indent">- <a href="/#!/archive/details/3#projects">Reabilitação de edifício na Av. 5 De
              Outubro, Santarém</a></span><span class="cli-indent">- <a href="/#!/details/8#projects">Reabilitação de
              edifício na Rua 1.º De Dezembro, Santarém</a></span><span class="cli-indent">- Parecer Técnico de
            Arqueologia para a reabilitação de edifício na Av. 5 de Outubro, Santarém</span><span class="cli-indent">-
            Parecer Técnico de Arqueologia para a reabilitação de edifício na Prç Visconde Serra do Pila,
            Santarém</span></li>
  
        <li><span class="client-cap">Ambiágua, S.a.</span> <span class="cli-indent">- <a
              href="/#!/archive/details/4#projects">Empreitada de Concepção-Construção da Etar De Ortiga,
              Mação</a></span></li>
  
        <li><span class="client-cap">JJR, Construções, Lda.</span> <span class="cli-indent">- Situação de Referência
            Arqueológica para O Contrato de Concessão da Manutenção/Conservação da Rede Viária dos Distritos de Leiria
            E Santarém</span></li>
  
        <li><span class="client-cap">Succeed, Investimentos Imobiliários e Formação Profissional, S.a.</span> <span
            class="cli-indent">- <a href="/#!/details/1#projects">Levantamento patrimonial do Convento de Santo
              António da Convalescença, Lisboa</a></span></li>
  
        <li><span class="client-cap">Construbel, Lda.</span> <span class="cli-indent">- <a
              href="/#!/details/6#projects">Reabilitação da Frente ribeirinha de Rio Maior</a></span></li>
  
        <li><span class="client-cap">Léguas e Destinos, Lda.</span> <span class="cli-indent">- <a
              href="/#!/details/0#projects">Construção do posto de abastecimento de combustíveis líquidos de Chão da
              Feira, Porto de Mós</a></span></li>
  
        <li><span class="client-cap">Mpt, Mobilidade e Planeamento do Território </span><span class="cli-indent">-
            Parecer técnico para o projecto de implementação dos percursos confortáveis no centro histórico de
            Santarém</span></li>
  
        <li><span class="client-cap">Pedramoca, Sociedade extractiva de pedra, Lda. </span><span class="cli-indent">-
            Pedreira das Fragas da Chainça</span></li>
      </ul>
      <div class="clearfix">&nbsp;</div>
      <hr>
      <div class="clearfix">&nbsp;</div>
  
      <h2 class="h3">Clientes Privados:</h2>
      <div class="clearfix">&nbsp;</div>
      <ul>
        <li><span class="client-cap">A. M. Coelho</span> <span class="cli-indent">- Construção de moradia unifamiliar
            em Azambujeira, Rio Maior</span></li>
  
        <li><span class="client-cap">M. I. Mendonça</span> <span class="cli-indent">- Reabilitação de edifício no Beco
            do Feleijo, Santarém</span></li>
  
        <li><span class="client-cap">D. Rosenberg</span> <span class="cli-indent">- Reabilitação de imóvel na Rua da
            Cruz de Santa Apolónia, Lisboa</span><span class="cli-indent">- <a
              href="/#!/details/4#projects">Reabilitação de imóvel na Rua Mártires da Pátria, Setúbal</a></span></li>
      </ul>
  
      <div class="clearfix">&nbsp;</div>
  
      <hr>
      <div class="clearfix">&nbsp;</div>
  
      <h2 class="h3">Clientes Públicos:</h2>
      <div class="clearfix">&nbsp;</div>
      <ul>
        <li><span class="client-cap">Águas de Santarém, E.M.S.A.</span> <span class="cli-indent">- Ramal de Saneamento
            na Travessa Do Mayer, Ribeira de Santarém</span><span class="cli-indent">- Ramal de abastecimento de água
            na Rua Dr. Joaquim Luís Martins, Santarém</span><span class="cli-indent">- Ramal de abastecimento de água
            na Travessa do Bom Jesus das Almas, Santarém</span><span class="cli-indent">- Ramal de abastecimento de
            água na Rua Serpa Pinto, Santarém</span><span class="cli-indent">- Ramal na Rua do Bairro César,
            Santarém</span><span class="cli-indent">- Ramal na Rua Miguel Bombarda, Santarém</span><span
            class="cli-indent">- Ramal na Rua de Alcource, Ribeira de Santarém</span><span class="cli-indent">- Ramal
            no Beco do Feleijo, Santarém</span></li>
  
        <li><span class="client-cap">Câmara Municipal de Coruche</span> <span class="cli-indent">- <a
              href="/#!/details/5#projects">Construção de edifício multifamiliar no gaveto entre a Travessa do
              Monteiro e a Rua Direita, Coruche</a></span><span class="cli-indent">- Carta Arqueológica do
            Concelho</span></li>
  
        <li><span class="client-cap">Câmara Municipal de Porto de Mós </span><span class="cli-indent">- Ramal no de
            água no IC2</span></li>
      </ul>
  
      <div class="clearfix">&nbsp;</div>
  
      <hr>
      <div class="clearfix">&nbsp;</div>
  
      <h2 class="h3">Parcerias:</h2>
      <div class="clearfix">&nbsp;</div>
      <li><span class="client-cap">Cornucópia River</span>, Arqueologia Unipessoal</li>
      <li><span class="client-cap">Emerita</span>, Empresa Portuguesa de Arqueologia</li>
    </div>
  </div>
  </div>
  `
}
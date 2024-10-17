function loadCSS(url) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url;
    document.head.appendChild(link);
  }
  
  // Carregar o CSS combinado
  loadCSS("assets/css/footer.css");
  
  const footer = `
  <footer class="onovo-footer footer--dark">
              <div class="footer--default">
                  <div class="container">
                      <div class="row containerr">
                          <div class=" col-xs-12 col-sm-12 col-md-5 col-lg-4">
                              <div class="onovo-text onovo-text-white">
                                  <h5>Informações</h5>
                                  <p>
                                      Projeto realizado com recursos da Lei Complementar nº
                                      195/2022, <strong>Lei Paulo Gustavo</strong>.
                                  </p>
                              </div>
                          </div>
                          <div class="col-xs-12 col-sm-12 col-md-5 col-lg-4">
                              <div class="onovo-text onovo-text-white">
                                  <h5>Entre em contato</h5>
                                  <p>
                                      <a
                                          href="mailto:aprendizagemcriativato@gmail.com"
                                          class="onovo-lnk lnk--white"
                                          target="_blank"
                                      >
                                          aprendizagemcriativato@gmail.com
                                      </a>
                                      <br />
                                      <a
                                          href="tel:+556399820656"
                                          class="onovo-lnk lnk--white"
                                          target="_blank"
                                      >
                                          Erick Góes - 63 99820656
                                      </a>
                                  </p>
                              </div>
                          </div>
                          <div class="col-xs-12 col-sm-12 col-md-5 col-lg-3">
                              <div class="onovo-logo-image" style="max-width: 200px"">
                                  <img src="assets/images/logotranscen.png" alt="logo projeto">
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </footer>
          <div class="backgroundModule">
              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6 align-self-center">
                  <div class="row">
  
  
                      <div class=footer-col-inner"> 
                          <figure class="gallery-item">
                              <a href="https://www.to.gov.br/secult" target="_blank" aria-label="Visite o site da Secretaria da Cultura do Tocantins em uma nova aba" rel="noopener noreferrer">
                                  <img src="assets/img/logoCultura.png" alt="Logotipo da Secretaria da Cultura e Governo do Tocantins" class="logoCultura"/>
                              </a>
                          </figure>
                      </div>
                                          <div class="">
                          <figure class="gallery-item">
                              <a href="https://www.gov.br/cultura/pt-br/assuntos/lei-paulo-gustavo" target="_blank" aria-label="Visite o site do Ministério da Cultura em uma nova aba" rel="noopener noreferrer">
                                  <img src="assets/img/logoLPG.png" alt="Logotipo Lei Paulo Gustavo e Ministério da Cultura" />
                              </a>
                          </figure>
                      </div>
                                          <div class="">
                          <figure class="gallery-item">
                              <a href="https://www.gov.br/pt-br" target="_blank" aria-label="Visite o site do Governo Federal em uma nova aba" rel="noopener noreferrer">
                                  <img src="assets/img/logoGovernoFederal.png" alt="Logotipo do Governo Federal do Brasil" />
                              </a>
                          </figure>
                      </div>
                  </div>
                  <div class="copyright onovo-text-black">
                      © 2024 MOSTRA TR@NSCENDÊNCIAS - Todos os direitos reservados.
                  </div>
              </div>
          </div>

  `;
  
  document.addEventListener("DOMContentLoaded", () => {
    const footerContainer = document.getElementById("footer-container");
    if (footerContainer) {
      footerContainer.insertAdjacentHTML("beforeend", footer);
    }
  });
  
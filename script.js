document.addEventListener("DOMContentLoaded", function () {
  const allBackgrounds = document.querySelectorAll("img[class^='background']");
  const defaultBg = document.querySelector(".background");

  function hideAllBackgrounds() {
    allBackgrounds.forEach(bg => {
      bg.style.display = "none";
      bg.style.opacity = "0";
    });
  }

  const conteudo = {
    "wms-wis": { titulo: "WMS WIS", descricao: "Sistema de gerenciamento de armazém WIS." },

    "wms-senior": {
      titulo: "WMS SENIOR",
      descricao: `O WMS | Senior é um sistema de gestão de armazéns voltado para o controle e a automação das operações logísticas.
      <br><br><b>Integrações:</b>
      <ul>
        <li><b>ERP Senior:</b> integra por meio do Senior X, utilizando a tecnologia API REST. Para seu funcionamento completo, exige também o uso de componentes ETL ERP e Web Service. <br><a href="https://documentacao.senior.com.br/gestaodearmazenagemwms/8.12/#manuais-wms/integracoes-com-outros-sistemas/integracao-senior-entre-erp-e-silt-wms.html%3FTocPath%3DGest%25C3%25A3o%2520de%2520Armazenagem%2520%257C%2520WMS%2520-%2520Manual%2520do%2520usu%25C3%25A1rio%7CIntegra%25C3%25A7%25C3%25A3o%2520REST%2520nativas%7C_____1">Saiba mais</a>.</li>
        <li><b>Gestão de Pátio | YMS:</b> coordena operações entre armazém e pátio logístico via API REST. <br><a href="https://documentacao.senior.com.br/gestaodearmazenagemwms/8.12/#manuais-wms/integracoes-com-outros-sistemas/integracao-yms-wms.htm%3FTocPath%3DGest%25C3%25A3o%2520de%2520Armazenagem%2520%257C%2520WMS%2520-%2520Manual%2520do%2520usu%25C3%25A1rio%7CIntegra%25C3%25A7%25C3%25A3o%2520REST%2520nativas%7C_____7">Saiba mais</a>.</li>
        <li><b>Gestão da Mão de Obra | LMS:</b> alinha a operação à alocação de recursos via API REST + ETL. <br><a href="https://documentacao.senior.com.br/gestaodearmazenagemwms/8.12/#manuais-wms/integracoes-com-outros-sistemas/integracao-wms-x-lms.html%3FTocPath%3DGest%25C3%25A3o%2520de%2520Armazenagem%2520%257C%2520WMS%2520-%2520Manual%2520do%2520usu%25C3%25A1rio%7CIntegra%25C3%25A7%25C3%25A3o%2520REST%2520nativas%7C_____4">Saiba mais</a>.</li>
        <li><b>TMS Transportador:</b> envia dados do armazém para execução do transporte via API REST. <br><a href="https://documentacao.senior.com.br/gestaodearmazenagemwms/8.12/#manuais-wms/integracoes-com-outros-sistemas/integracao-wms-rms-tms.html%3FTocPath%3DGest%25C3%25A3o%2520de%2520Armazenagem%2520%257C%2520WMS%2520-%2520Manual%2520do%2520usu%25C3%25A1rio%7CIntegra%25C3%25A7%25C3%25A3o%2520REST%2520nativas%7C_____2">Saiba mais</a>.</li>
        <li><b>Roteirizador:</b> troca eficiente de informações via API REST. <br><a href="https://documentacao.senior.com.br/gestaodearmazenagemwms/8.12/#manuais-wms/integracoes-com-outros-sistemas/integracao-wms-rms-tms.html%3FTocPath%3DGest%25C3%25A3o%2520de%2520Armazenagem%2520%257C%2520WMS%2520-%2520Manual%2520do%2520usu%25C3%25A1rio%7CIntegra%25C3%25A7%25C3%25A3o%2520REST%2520nativas%7C_____2">Saiba mais</a>.</li>
        <li><b>Torre de Controle:</b> integração via API REST para visibilidade e controle. <br><a href="https://documentacao.senior.com.br/gestaodearmazenagemwms/8.12/#manuais-wms/integracoes-com-outros-sistemas/integracao-wms-rms-tms.html%3FTocPath%3DGest%25C3%25A3o%2520de%2520Armazenagem%2520%257C%2520WMS%2520-%2520Manual%2520do%2520usu%25C3%25A1rio%7CIntegra%25C3%25A7%25C3%25A3o%2520REST%2520nativas%7C_____2">Saiba mais</a>.</li>
        <li><b>Tracking de Pedidos</b>: tem como objetivo viabilizar o acompanhamento dos pedidos. A integração é feita via Senior X, utilizando a tecnologia API REST, e exige a presença de componentes ETL. <br><a href="https://documentacao.senior.com.br/gestaodearmazenagemwms/8.12/#manuais-wms/integracoes-com-outros-sistemas/tracking-pedido.htm%3FTocPath%3DGest%25C3%25A3o%2520de%2520Armazenagem%2520%257C%2520WMS%2520-%2520Manual%2520do%2520usu%25C3%25A1rio%7CIntegra%25C3%25A7%25C3%25A3o%2520REST%2520nativas%7C_____3">Saiba mais</a>.</li>
      </ul>`
    },

    "wms-wis": { titulo: "WMS WIS", 
      descricao: `O WMS | WIS é um sistema de gestão de armazéns voltado para o controle e a automação das operações logísticas.
      <br><br><b>Integrações:</b>
      <ul>
        <li><b>ERP Senior:</b> permite a troca de informações essenciais entre os sistemas de gestão de armazém e de processos administrativos. Essa integração ocorre via Senior X, utilizando a tecnologia API REST, e requer o uso de componentes ETL, além de ERP Service. <br><a href="https://documentacao.senior.com.br/gestao-armazenagem-wms-wis/6.5/#manual-processos-wis/integracao-entre-sistemas/wis-erp.htm%3FTocPath%3DManual%2520Integra%25C3%25A7%25C3%25A3o%7CIntegra%25C3%25A7%25C3%25B5es%2520com%2520outros%2520sistemas%7C_____2">Saiba mais</a>.</li>
        <li><b>Gestão de Pátio | YMS:</b> sincroniza as operações do armazém com os processos de controle de pátio. Essa integração é feita via Senior X, utilizando a tecnologia API REST e exige a presença de componentes ETL. <br><a href="https://documentacao.senior.com.br/gestaodearmazenagemwms/8.12/#manuais-wms/integracoes-com-outros-sistemas/integracao-yms-wms.htm%3FTocPath%3DGest%25C3%25A3o%2520de%2520Armazenagem%2520%257C%2520WMS%2520-%2520Manual%2520do%2520usu%25C3%25A1rio%7CIntegra%25C3%25A7%25C3%25A3o%2520REST%2520nativas%7C_____7">Saiba mais</a>.</li>
      </ul>`
    },

    "wms-alcis": { titulo: "WMS Alcis",
       descricao: `O WMS | Alcis é um sistema de gestão de armazéns voltado para o controle e a automação das operações logísticas.
      <br><br><b>Integrações:</b>
      <ul>
        <li><b>ERP Senior:</b> garante a troca de informações entre as operações logísticas do armazém e os processos de gestão empresarial. A integração é feita via Senior X, utilizando a tecnologia API REST, e exige a presença dos componentes ETL ERP e ERP Service para seu pleno funcionamento. <br><a href="https://documentacao.senior.com.br/wms-alcis/13.0/#wms-13/manuais-integracao/integracao-erp.htm%3FTocPath%3DSenior%2520WMS%2520Alcis%2520Web%2520-%2520Manual%2520do%2520Usu%25C3%25A1rio%7CManuais%2520t%25C3%25A9cnicos%2520e%2520integra%25C3%25A7%25C3%25B5es%7CManuais%2520de%2520integra%25C3%25A7%25C3%25A3o%2520%25E2%2580%2593%2520Senior%2520WMS%2520Alcis%7C_____3">Saiba mais</a>.</li>
        <li><b>Gestão de Mão de Obra | LMS:</b> permite alinhar a operação do armazém à alocação eficiente dos recursos humanos. Essa integração utiliza a tecnologia API REST. <br><a href="https://documentacao.senior.com.br/wms-alcis/13.0/#wms-13/manuais-integracao/integracao-gestao-mao-de-obra.htm%3FTocPath%3DSenior%2520WMS%2520Alcis%2520Web%2520-%2520Manual%2520do%2520Usu%25C3%25A1rio%7CManuais%2520t%25C3%25A9cnicos%2520e%2520integra%25C3%25A7%25C3%25B5es%7CManuais%2520de%2520integra%25C3%25A7%25C3%25A3o%2520%25E2%2580%2593%2520Senior%2520WMS%2520Alcis%7C_____2">Saiba mais</a>.</li>
      </ul>`
    },

    "gestao-patio": { titulo: "Gestão de Pátio",
      descricao: `O WMS | Alcis é um sistema de gestão de armazéns voltado para o controle e a automação das operações logísticas.
      <br><br><b>Integrações:</b>
      <ul>
        <li><b>ERP Senior:</b> garante a troca de informações entre as operações logísticas do armazém e os processos de gestão empresarial. A integração é feita via Senior X, utilizando a tecnologia API REST, e exige a presença dos componentes ETL ERP e ERP Service para seu pleno funcionamento. <br><a href="https://documentacao.senior.com.br/wms-alcis/13.0/#wms-13/manuais-integracao/integracao-erp.htm%3FTocPath%3DSenior%2520WMS%2520Alcis%2520Web%2520-%2520Manual%2520do%2520Usu%25C3%25A1rio%7CManuais%2520t%25C3%25A9cnicos%2520e%2520integra%25C3%25A7%25C3%25B5es%7CManuais%2520de%2520integra%25C3%25A7%25C3%25A3o%2520%25E2%2580%2593%2520Senior%2520WMS%2520Alcis%7C_____3">Saiba mais</a>.</li>
        <li><b>Gestão de Mão de Obra | LMS:</b> permite alinhar a operação do armazém à alocação eficiente dos recursos humanos. Essa integração utiliza a tecnologia API REST. <br><a href="https://documentacao.senior.com.br/wms-alcis/13.0/#wms-13/manuais-integracao/integracao-gestao-mao-de-obra.htm%3FTocPath%3DSenior%2520WMS%2520Alcis%2520Web%2520-%2520Manual%2520do%2520Usu%25C3%25A1rio%7CManuais%2520t%25C3%25A9cnicos%2520e%2520integra%25C3%25A7%25C3%25B5es%7CManuais%2520de%2520integra%25C3%25A7%25C3%25A3o%2520%25E2%2580%2593%2520Senior%2520WMS%2520Alcis%7C_____2">Saiba mais</a>.</li>
      </ul>`
    }
  };

  // Clique em ícones com a classe .item
  document.querySelectorAll(".item").forEach(item => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      const id = this.getAttribute("id");
      if (!id) return;

      // Mostrar fundo específico
      const targetBg = document.querySelector(`.background-${id}`);
      hideAllBackgrounds();
      if (targetBg) {
        targetBg.style.display = "block";
        setTimeout(() => targetBg.style.opacity = "1", 30);
      }

      // Mostrar modal com conteúdo
      const modal = document.getElementById("modal");
      const title = document.getElementById("modalTitulo");
      const desc = document.getElementById("modalDescricao");

      if (conteudo[id]) {
        title.textContent = conteudo[id].titulo;
        desc.innerHTML = conteudo[id].descricao;
        modal.classList.remove("hidden");
      }
    });
  });

  // Clique fora de .item: reseta fundo
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".item") && !e.target.closest("#modal")) {
      hideAllBackgrounds();
      if (defaultBg) {
        defaultBg.style.display = "block";
        setTimeout(() => defaultBg.style.opacity = "1", 30);
      }

      document.getElementById("modal").classList.add("hidden");
    }
  });

  // Fechar modal via botão
  const btnFechar = document.getElementById('fecharModal');
  if (btnFechar) {
    btnFechar.addEventListener('click', function () {
      document.getElementById('modal').classList.add('hidden');
    });
  }

  // Responsividade do infográfico
  function resizeInfographic() {
    const baseWidth = 1500;
    const baseHeight = 800;
    const scaleWrapper = document.querySelector(".scale-wrapper");
    const devicePixelRatio = window.devicePixelRatio || 1;
    const zoomLevel = 1 / devicePixelRatio;

    if (zoomLevel !== 1) {
      scaleWrapper.style.transform = `translate(-50%, -50%)`;
      return;
    }

    const scaleX = window.innerWidth / baseWidth;
    const scaleY = window.innerHeight / baseHeight;
    const scale = Math.min(scaleX, scaleY) * 1.15;
    scaleWrapper.style.transform = `translate(-50%, -50%) scale(${scale})`;
  }

  window.addEventListener("resize", resizeInfographic);
  resizeInfographic();
});
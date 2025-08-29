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
        <li><b>Roteirizador:</b> tem como objetivo automatizar o processo de roteirização de pedidos, otimizando a formação de cargas no sistema Roteirização. <br><a href="https://documentacao.senior.com.br/gestao-armazenagem-wms-wis/6.5/#manual-processos-wis/integracao-entre-sistemas/wis-tms.htm%3FTocPath%3DManual%2520Integra%25C3%25A7%25C3%25A3o%7CIntegra%25C3%25A7%25C3%25B5es%2520com%2520outros%2520sistemas%7C_____3">Saiba mais</a>.</li>
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

    "gestao-patio": { titulo: "Gestão de Pátio | YMS",
      descricao: `O WMS | Alcis é um sistema de gestão de armazéns voltado para o controle e a automação das operações logísticas.
      <br><br><b>Integrações:</b>
      <ul>
        <li><b>ERP Senior:</b> garante a troca de informações entre as operações logísticas do armazém e os processos de gestão empresarial. A integração é feita via Senior X, utilizando a tecnologia API REST, e exige a presença dos componentes ETL ERP e ERP Service para seu pleno funcionamento. <br><a href="https://documentacao.senior.com.br/wms-alcis/13.0/#wms-13/manuais-integracao/integracao-erp.htm%3FTocPath%3DSenior%2520WMS%2520Alcis%2520Web%2520-%2520Manual%2520do%2520Usu%25C3%25A1rio%7CManuais%2520t%25C3%25A9cnicos%2520e%2520integra%25C3%25A7%25C3%25B5es%7CManuais%2520de%2520integra%25C3%25A7%25C3%25A3o%2520%25E2%2580%2593%2520Senior%2520WMS%2520Alcis%7C_____3">Saiba mais</a>.</li>
        <li><b>Acesso e Segurança:</b> envia dados de motoristas, veículos, pessoas e agendamentos por meio de eventos da SAM API, como criação e atualização de cadastros e agendamentos de acesso. <br><a href="https://documentacao.senior.com.br/seniorxplatform/manual-do-usuario/yms/#manual-processos/gestao-patio-agendamento/gestao-de-agendamento/integracao/integracao-ronda.htm%3FTocPath%3DGest%25C3%25A3o%2520de%2520P%25C3%25A1tio%2520-%2520Manual%2520do%2520Usu%25C3%25A1rio%7CIntegra%25C3%25A7%25C3%25B5es%7C_____2">Saiba mais</a>.</li>
        <li><b>WMS Senior:</b> oferece uma nova abordagem para operações logísticas, especialmente para processos de descarga. Essa integração utiliza tecnologia API REST. <br><a href="https://documentacao.senior.com.br/seniorxplatform/manual-do-usuario/yms/#manual-processos/gestao-patio-agendamento/gestao-de-agendamento/integracao/integracao-wms.htm%3FTocPath%3DGest%25C3%25A3o%2520de%2520P%25C3%25A1tio%2520-%2520Manual%2520do%2520Usu%25C3%25A1rio%7CIntegra%25C3%25A7%25C3%25B5es%7C_____3">Saiba mais</a>.</li>


        </ul>`
    },
    "gestao-frotas": { titulo: "Gestão de Frotas",
      descricao: `O Gestão de Frotas é um sistema voltado para o controle operacional da frota e dos freteiros.
      <br><br><b>Integrações:</b>
      <ul>
        <li><b>HCM:</b> integra com o HCM para sincronização do cadastro de freteiros, do certo de Contas com Motoristas, Multas de Trânsito, Comissão de Representante e Pagamento de Freteiros. <br><a href="https://documentacao.senior.com.br/gestao-de-frotas-fms/3.31/#integracao/integracao-hcm-fms/home-fms-hcm.htm">Saiba mais</a>.</li> 
        <li><b>TMS:</b> integra com o sistema de Gestão de Transportes | TMS para o compartilhamento de informações logísticas.</li> 
        <li><b>ERP XT:</b> integrar os movimentos de controle de abastecimentos, ordens de serviço, adiantamento de viagens, multas de trânsito, acerto de contas, gestão de estoque de oficina e posto interno de combustíveis. <br><a href="https://documentacao.senior.com.br/gestao-de-frotas-fms/3.31/#integracao/integracao-erp-fms/home-fms-erp.htm">Saiba mais</a>.</li> 

        </ul>`
      },
      "gestao-mao-de-obra": { titulo: "Gestão de Mão de Obra | LMS",
      descricao: `É uma solução de gerenciamento de trabalho, focada na gestão do capital humano em relação a tarefas, recursos e equipamentos, com base nas movimentações de centros de distribuição..
      <br><br><b>Integrações:</b>
      <ul>
        <li><b>WMS Senior</b>: integração via Senior X, utiliza tecnologia API REST exigindo componentes ETL.</li>
        <li><b>WMS Alcis</b>: utiliza tecnologia API REST.</li>

        </ul>`
      },
      "roteirizador": { titulo: "Roteirizador",
      descricao: `O Roteirizador é um sistema voltado para o planejamento e otimização de rotas de entrega.
      <br><br><b>Integrações:</b>
      <ul>
        <li><b>Torre de Controle:</b> integra com o Torre de Controle para receber atividades, pedidos e notas, permitindo a roteirização eficiente das entregas. <br><a href="https://documentacao.senior.com.br/roteirizacaoemonitoramento/7.0.0/">Saiba mais</a>.</li> 
        <li><b>ERP Senior X:</b> integra com o ERP Senior por meio do Senior X para receber atividades, pedidos e notas, viabilizando a roteirização eficiente.</li> 
        <li><b>TMS:</b> integra com a TMS Transportador para receber atividades, pedidos e notas, permitindo a roteirização eficiente das entregas.</li> 
        <li><b>WMS Senior:</b> oferece integração de atividades, pedidos e notas para roteirizar e planejar as rotas de entrega. <br><a href="https://documentacao.senior.com.br/gestao-armazenagem-wms-wis/6.5/#manual-processos-wis/integracao-entre-sistemas/wis-tms.htm%3FTocPath%3DManual%2520Integra%25C3%25A7%25C3%25A3o%7CIntegra%25C3%25A7%25C3%25B5es%2520com%2520outros%2520sistemas%7C_____3">Saiba mais</a>.</li>
        </ul>`
      },
      "torre-controle": { titulo: "Torre de Controle - RMS",
      descricao: `O Roteirizador é um sistema voltado para o planejamento e otimização de rotas de entrega.
      <br><br><b>Integrações:</b>
      <ul>
        <li><b>ERP Senior X:</b> integra com o ERP Senior para troca de informações sobre atividades, pedidos e notas, acompanhando a execução via Torre de Controle e a execução de entrega. Para seu funcionamento completo, exige também a utilização de componentes de integração que garantem o fluxo automatizado das informações entre os sistemas. <br><a href="https://documentacao.senior.com.br/roteirizacaoemonitoramento/7.0.0/#https://documentacao.senior.com.br/seniorxplatform/manual-do-usuario/erp#mercado/vendas/integracao-rms.htm%3FTocPath%3DIntegra%25C3%25A7%25C3%25B5es%2520RMS%7C_____4">Saiba mais</a>.</li> 
        <li><b>WMS Senior:</b> integra com a WMS Senior para troca de atividades, pedidos e notas, acompanhando a execução via Torre de Controle e a execução de entrega. <br><a href="https://documentacao.senior.com.br/roteirizacaoemonitoramento/7.0.0/#integracoes/intregracao-rms-wms.htm%3FTocPath%3DIntegra%25C3%25A7%25C3%25B5es%2520RMS%7C_____2">Saiba mais</a>.</li> 
        <li><b>TMS:</b> integra com a TMS para troca de atividades, pedidos e notas, possibilitando o acompanhamento da execução e a gestão da entrega via Torre de Controle.</li> 
        <li><b>Roteirizador:</b> integra com o Roteirizador para receber atividades, pedidos e notas, permitindo o acompanhamento e a execução das entregas via Torre de Controle.</li> 
        <li><b>Tracking de Pedidos:</b> integra com o Tracking de Pedidos para troca de atividades, pedidos e notas, acompanhando a execução e controle da entrega via Torre de Controle. <br><a href="https://documentacao.senior.com.br/roteirizacaoemonitoramento/7.0.0/#https://documentacao.senior.com.br/gestaodetransportestms/7.0.0#tracking/integracao-torre-controle.htm%3FTocPath%3DIntegra%25C3%25A7%25C3%25B5es%2520RMS%7C_____5">Saiba mais</a>.</li> 

        </ul>`
      },
      "tracking-pedidos": { titulo: "Tracking de Pedidos",
      descricao: `O Tracking de Pedidos é um sistema voltado para o monitoramento das entregas. .
      <br><br><b>Integrações:</b>
      <ul>
        <li><b>Torre de Controle - RMS:</b> troca de atividades, pedidos e notas, acompanhando a execução e controle da entrega via Torre de Controle.</li> 
        <li><b>ERP Senior X:</b> integra com a WMS Senior para troca de atividades, pedidos e notas, acompanhando a execução via Torre de Controle e a execução de entrega. <br><a href="https://documentacao.senior.com.br/roteirizacaoemonitoramento/7.0.0/#integracoes/intregracao-rms-wms.htm%3FTocPath%3DIntegra%25C3%25A7%25C3%25B5es%2520RMS%7C_____2">Saiba mais</a>.</li> 
        <li><b>TMS:</b> oferece integração de atividades, pedidos e notas para acompanhamento da execução das entregas por meio da Torre de Controle.</li>
        <li><b>WMS Senior:</b> oferece Integração de atividades, pedidos e notas com a Torre de Controle para acompanhamento da execução das entregas, tendo como premissa a utilização do roteirizador. A integração envia o status do processo e recebe informações como atividades, pedidos, notas fiscais, alterações, cancelamentos, confirmações de execução e dados dos veículos.</li>
        </ul>`
      },
       "gko-frete": { titulo: "GKO Frete",
      descricao: `O Tracking de Pedidos é um sistema voltado para o monitoramento das entregas. .
      <br><br><b>Integrações:</b>
      <ul>
        <li><b>ERP Senior:</b> oferece uma gestão completa do transporte, permitindo a comunicação entre os sistemas por meio da integração de NF-e e Fatura via API. Essa integração otimiza o processo de emissão e controle fiscal, garantindo a sincronia das informações entre o planejamento de transporte e a gestão financeira e fiscal. <br><a href="https://documentacao.senior.com.br/gestao-de-fretes-gko/6.85/#manual-processos/integracoes/integracao-erp-senior.htm%3FTocPath%3DTMS%2520Embarcador%2520%257C%2520Senior%2520GKO%2520Frete%2520-%2520Manual%2520do%2520Usu%25C3%25A1rio%2520%7CIntegra%25C3%25A7%25C3%25B5es%7C_____1">Saiba mais</a>.</li> 
        <li><b>Confirma Fácil:</b> otimiza o monitoramento e a gestão de entregas. A integração é realizada de duas formas: através da integração de NF-e via API e CSV, e pela integração de Ocorrência via CSV.</li> 
        <li><b>Plataforma de Fretes:</b> proporcionando uma comunicação abrangente para a gestão logística, permitindoo compartilhamento de ofertas de frete pré-cadastradas. A integração é feita via Webhook e Frete Combinado via API (xml) para Pedidos e Faturas. <br><a href="https://documentacao.senior.com.br/gestao-de-fretes-gko/6.85/#manual-processos/integracoes/integracao-plataforma-fretes.htm%3FTocPath%3DTMS%2520Embarcador%2520%257C%2520Senior%2520GKO%2520Frete%2520-%2520Manual%2520do%2520Usu%25C3%25A1rio%2520%7CIntegra%25C3%25A7%25C3%25B5es%7C_____2">Saiba mais</a>.</li> 

        </ul>`
      },
       "erp-xt": { titulo: "ERP XT",
      descricao: `Texto texto texto texto texto texto texto texto texto texto texto:</b>
      <ul>
        <li><b>Tracking de Pedidos:</b> texto texto.</li> 
        <li><b>GKO Frete:</b> texto texto.</li> 
        <li><b>Gestão de Frotas</b>: texto texto.</li>
        <li><b>Gestão de Pátio | YMS</b>: texto texto.</li> 
        <li><b>WMS Alcis</b>: texto texto.</li>
        <li><b>WMS WIS</b>: texto texto.</li>
        <li><b>WMS Senior</b>: texto texto.</li>
        </ul>`
      },
      "tms": { titulo: "TMS",
      descricao: `Texto texto texto texto texto texto texto texto texto texto texto:</b>
      <ul>
        <li><b>Tracking de Pedidos:</b> texto texto.</li> 
        <li><b>Roteirizador</b>: texto texto.</li> 
        <li><b>Torre de Controle | RMS</b>: texto texto.</li>
        <li><b>WMS Senior</b>: texto texto.</li>
        <li><b>HCM</b>: texto texto.</li>
        </ul>`
      },
      "erp-x": { titulo: "ERP Senior X",
      descricao: `Texto texto texto texto texto texto texto texto texto texto texto:</b>
      <ul>
        <li><b>WMS X:</b> texto texto.</li> 
        <li><b>Roteirizador</b>: texto texto.</li> 
        <li><b>Torre de Controle | RMS</b>: texto texto.</li>
        <li><b>Tracking de Pedidos</b>: texto texto.</li>
        </ul>`
      },
      "hcm": { titulo: "HCM",
      descricao: `Texto texto texto texto texto texto texto texto texto texto texto:</b>
      <ul>
        <li><b>TMS:</b> texto texto.</li> 
        <li><b>Gestão de Frotas</b>: texto texto.</li> 
        </ul>`
      },
      "acesso": { titulo: "Acesso e Segurança",
      descricao: `Texto texto texto texto texto texto texto texto texto texto texto:</b>
      <ul>
        <li><b>Gestão de Pátio | YMS:</b> texto texto.</li> 
        </ul>`
      },
      "plataforma-frete": { titulo: "Plataforma de Frete",
      descricao: `</b>
      <ul>
        <li><b>GKO Frete:</b> integração via WebHook para recebimento de Pedidos, Notas Fiscais, Faturas, e integração via API para envio das ofertas como Frete Combinado e envio de CTE. <br><a href="https://documentacao.senior.com.br/plataforma-fretes/1.0/#manual-processos/integracao-gko-frete.htm%3FTocPath%3DPlataforma%2520de%2520Fretes%2520-%2520Manual%2520de%2520Usu%25C3%25A1rio%7CIntegra%25C3%25A7%25C3%25B5es%7C_____1">Saiba mais</a></li> 
        </ul>`
      },
      "confirma-facil": { titulo: "Confirma Fácil",
      descricao: `</b>
      <ul>
        <li><b>GKO Frete:</b> integração de Notas Fiscais via API e CSV. Integração de Ocorrência via CSV.</li> 
        </ul>`
      }
  };

function resetVisualizacao() {
  hideAllBackgrounds();
  if (defaultBg) {
    defaultBg.style.display = "block";
    setTimeout(() => defaultBg.style.opacity = "1", 30);
  }
  document.getElementById("modal").classList.add("hidden");
}

// Clique em ícones com a classe .item
document.querySelectorAll(".item, .new-items").forEach(item => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    e.stopPropagation();

    const id = this.getAttribute("id");
    if (!id) return;

    const targetBg = document.querySelector(`.background-${id}`);
    hideAllBackgrounds();
    if (targetBg) {
      targetBg.style.display = "block";
      setTimeout(() => targetBg.style.opacity = "1", 30);
    }

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
    resetVisualizacao();
  }
});

// Fechar modal via botão
const btnFechar = document.getElementById('fecharModal');
if (btnFechar) {
  btnFechar.addEventListener('click', function () {
    resetVisualizacao();
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

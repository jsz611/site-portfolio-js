interface Icard {
  id: string;
  img1: string;
  img2: string;
  img3: string;
  img4: string;
  name: string;
  description: string;
  site?: string;
  codigo?: string;
}

const path = " /assets/images";

export const ContentCard: Array<Icard> = [
  {
    id: "1",
    name: "Consumo de API",
    img1: `${path}/imgTours/card.png`,
    img2: `${path}/imgTours/home.png`,
    img3: `${path}/imgTours/loading.png`,
    img4: `${path}/imgTours/refresh.png`,
    description:
      "Consumo de API da course.  Utilizei o react vite, fetch para fazer requisições HTTP na API https://course-api.com/, deixando o site responsível para móbile, tablet e desktop e o deploy foi feito na vercel",
    site: "https://couser-api-consumption.vercel.app/",
    codigo: "https://github.com/jsz611/couser-api-consumption",
  },
  {
    id: "2",
    name: "Site de Vagas de Emprego",
    img1: `${path}/imgSiteVagas/home.png`,
    img2: `${path}/imgSiteVagas/login.png`,
    img3: `${path}/imgSiteVagas/vagas.png`,
    img4: `${path}/imgSiteVagas/vagas2.png`,
    description:
      "Para acessar este site é preciso usar as senhas, usuário = umbler e senha = testehospedagem. Site feito com php e mysql para que pessoas possam conseguir seu emprego",
    site: "http://site-de-vagas-com-br.umbler.net/",
    codigo: "https://github.com/jsz611/projeto-squad-3",
  },
  {
    id: "3",
    name: "API Anúncio de Carro",
    img1: `${path}/imgApiLojaDeAnuncios/api.png`,
    img2: `${path}/imgApiLojaDeAnuncios/obj.png`,
    img3: `${path}/imgApiLojaDeAnuncios/terminal.png`,
    img4: `${path}/imgApiLojaDeAnuncios/vscode.png`,
    description: `Essa API foi feita para atender o front end Anúncios de Carros, utilizei o node, javascript, typescript, jest para os testes, postman api  para documentação da API, podendo acessá-la por aqui https://documenter.getpostman.com/view/16102831/2s93Xzyi9E,  axios para requisições https, planejo evoluir esse projeto adicionando uma ORM, DOCKER e mais funcionalidades. Foi feito deploy na render.com. Para visualizar melhor os objetos da API no navegar é preciso ter instalado no navegador a extensão JSON Viewer.`,
    site: "https://api-loja-carro.onrender.com/",
    codigo: "https://github.com/jsz611/car-shop-api",
  },
  {
    id: "4",
    name: "Site de Anúncios de Carros",
    img1: `${path}/imgLoja/home.png`,
    img2: `${path}/imgLoja/cadastro.png`,
    img3: `${path}/imgLoja/card.png`,
    img4: `${path}/imgLoja/cripto.png`,
    description:
      "Esse projeto foi feito com react vite com typescript, styled-component, react-router-dom, lib Ether para manipulação de dados na blockchain na rede da BINANCE, usando a metamask como conexão. Tendo como objetivo um crud e transferência de token para outra carteira. E foi feito deploy na netlify. Também fiz uma API para este projeto, para fins de teste você pode abrir o proxímo link ver site do API Anúncio de Carro, para cada alteração é preciso atualizar a página da api, assim você pode criar outros anúncios, editar ou deletar. Para usar a carteira metamask é preciso tê-la instalada no seu navegador.",
    site: "https://josiel-auto-car.netlify.app/",
    codigo: "https://github.com/jsz611/car-ad-website",
  },
  {
    id: "5",
    name: "Meu Portfólio",
    img1: `${path}/imgPortfolio/home.png`,
    img2: `${path}/imgPortfolio/card.png`,
    img3: `${path}/imgPortfolio/footer.png`,
    img4: `${path}/imgPortfolio/sobre.png`,
    description: `Este site visa unir todos os projetos que eu fizer. Para construção desse site, foi utilizado o vite, typescript, axios para fazer enviar os dados do formulário para uma planilha no Google drive usando um serviço chamado SHEET.BEST, material.ui. E foi feito deploy na netlify`,
    site: "https://site-portfolio-js.netlify.app/",
    codigo: "https://github.com/jsz611/site-portfolio-js",
  },
  {
    id: "6",
    name: "API em python",
    img1: `${path}/imgApiPython/agendamento.png`,
    img2: `${path}/imgApiPython/home.png`,
    img3: `${path}/imgApiPython/prof.png`,
    img4: `${path}/imgApiPython/professores.png`,
    description: `Esta API foi criada para o agendamento de aulas com professores previamente cadastrado, tecnologias usadas: python3, django, rest_framework, corsheaders e postman para os testes`,
    site: "https://documenter.getpostman.com/view/27477808/2s93sWAGAM",
    codigo: "https://github.com/jsz611/API-python",
  },
  {
    id: "7",
    name: "API de Produto em Node",
    img1: `${path}/imgApiProduto/codigo.png`,
    img2: `${path}/imgApiProduto/navegadorUrl.png`,
    img3: `${path}/imgApiProduto/terminal.png`,
    img4: `${path}/imgApiProduto/Unico-produto.png`,
    description: `Uma API simples, apenas para consumo de produto, aceita requisição http GET. Construída apenas com node, nodemon para  monitorar arquivos do projeto em busca de mudanças e reiniciar automaticamente o servidor toda vez que algum arquivo é modificado, e foi deployada na vercel.`,
    site: "https://api-estoque-produto.vercel.app/",
    codigo: "https://github.com/jsz611/product-stock-api",
  },
];

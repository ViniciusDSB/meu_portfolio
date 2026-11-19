export const projects = [
  {
    id: "0",
    title: "U-Net Segmentation",
    description: "Modelo de segmentação CNN desenvolvido para minha iniciação científica.",
    long_description:
      "Um dos modelos que estou usando na iniciação científica com o pessoal do IPEN/USP. A imagem ao lado foi gerada usando um dataset de animais de Oxford para testar o código. A outra foi feita com imagens obtidas por feixe de nêutrons do reator do IPEN, utilizando um dataset muito menor, ampliado por técnicas de aumento de dados. Este repositório é privado.",
    images: ["images/unet_0.png", "images/unet_1.png"],
    tools: ["Python", "Tensorflow", "Colab", "Numpy"],
    repo: "",
  },
  {
    id: "1",
    title: "Invitation Decliner",
    description: "Gera desculpas para recusar convites.",
    long_description:
      "Vi um vídeo curto de um cara mostrando uma página que retornava apenas um JSON com uma frase para recusar um convite. Usei o repositório dele (https://github.com/hotheadhacker/no-as-a-service) para criar uma interface com botão e adicionar uma tradução feita em Python. Assim, antes de enviar uma das desculpas, ela é traduzida e retornada ao usuário. Ainda pretendo colocar esse projeto no GitHub.",
    images: ["images/negador_de_convite_0.png", "images/negador_de_convite_1.png"],
    tools: ["Python", "JavaScript", "React", "libre-translate", "Node"],
    repo: "",
  },
  {
    id: "2",
    title: "Tic Tac Toe",
    description: "Jogo da velha feito durante o tutorial oficial de React.",
    long_description:
      "Decidi que era hora de aprender React, pois queria fazer este portfólio usando a biblioteca e evitar escrever CSS manualmente. Para começar, segui o tutorial oficial, testei algumas ideias e desenvolvi o jogo da velha ensinado na documentação. Não acho que valha um repositório próprio, mas foi um ótimo exercício.",
    images: ["images/tictactoe_0.png", "images/tictactoe_1.png"],
    tools: ["JavaScript", "React", "Node", "Vite JS"],
    repo: "",
  },
  {
    id: "3",
    title: "VGG16 and AlexNet",
    description: "Modelos de classificação CNN utilizados na minha iniciação científica.",
    long_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    images: ["images/vgg16.png"],
    tools: ["Python", "Tensorflow", "Colab", "Numpy"],
    repo: "",
  },
  {
    id: "4",
    title: "TalkChat",
    description: "Chat desenvolvido para o TCC do meu curso técnico.",
    long_description:
      "É um projeto que comecei em 2021, quando estava aprendendo desenvolvimento web para o TCC do meu curso técnico. Volto a ele de tempos em tempos com alguma ideia nova, geralmente recomeçando do zero. Na época, eu não entendia direito o que estava fazendo. Depois de terminar o curso, fui estudar mais e voltei ao projeto para entender melhor o que eu mesmo tinha criado. Mais tarde, resolvi refazê-lo do zero usando apenas Express e Socket.IO, escrevendo todo o código em JavaScript e CSS puros. Essa é a versão da branch principal no GitHub, que fiz para mostrar a um amigo. No ano seguinte, resolvi experimentar novas estilizações e adicionar recursos que não existiam na versão anterior, como mensagens privadas, status de usuário e outras melhorias menores. Futuramente, pretendo recuperar a versão original e adicioná-la ao GitHub, além de criar uma nova usando Docker e React, tecnologias que eu ainda não conhecia quando desenvolvi a última versão.",
    images: ["images/talkchat_0.png", "images/talkchat_1.png", "images/talkchat_2.png", "images/talkchat_3.png"],
    tools: ["JavaScript", "socket.io", "Handlebars", "html", "Bootstrap", "CSS", "Node", "Express JS", "Sequelize", "SQLite", "MySQL"],
    repo: "https://github.com/ViniciusDSB/TalkChat",
  },
  {
    id: "5",
    title: "Quack-Farma",
    description: "Sistema de farmácia desenvolvido em grupo para um processo seletivo de empresa júnior.",
    long_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    images: [],
    tools: ["Vue JS", "JavaScript", "Node", "Docker", "Rest API", "Express JS", "PostgresSQL", "Nodemon"],
    repo: "https://github.com/JulioDalpiaz/QuackFarma/tree/main",
  },
  {
    id: "6",
    title: "MeuVeterano",
    description: "Sistema para indexar, visualizar e baixar slides, PDFs, provas e listas de exercícios.",
    long_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    images: [],
    tools: ["PHP", "MySQL", "XAMPP", "Bootstrap", "JavaScript"],
    repo: "https://github.com/ViniciusDSB/meuVeterano",
  },
  {
    id: "7",
    title: "Metasup",
    description: "Extensão para Chrome que responde mensagens do WhatsApp usando um chatbot.",
    long_description:
      "Nas férias de julho de 2025, resolvi que deveria aprender a desenvolver extensões para o Chrome. Além disso, queria fazer um bot para responder mensagens do WhatsApp usando um chatbot. Como não quis utilizar a API oficial do WhatsApp, resolvi fazer tudo por força bruta, interagindo diretamente com os elementos da página. As mensagens eram enviadas para um servidor Flask em Python, que fazia requisições à API do Gemini e retornava a resposta, que então era enviada ao contato. Como a solução depende da estrutura da página, ela pode quebrar facilmente quando o WhatsApp altera as classes ou elementos do HTML. Mesmo assim, foi divertido ver as reações.",
    images: ["images/metasup_0.png", "images/metasup_1.png", "images/metasup_2.png", "images/metasup_3.png"],
    tools: ["JavaScript", "Chrome", "Python", "HTML", "CSS", "Gemini"],
    repo: "",
  },
  {
    id: "8",
    title: "InstaPoster",
    description: "Ferramenta para publicar grandes quantidades de fotos no Instagram.",
    long_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    images: [],
    tools: ["Python", "Selenium", "WebDriver"],
    repo: "",
  },
  {
    id: "9",
    title: "Discord Bot",
    description: "Bot para Discord que conversa no chat utilizando IA.",
    long_description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    images: [],
    tools: ["Python", "Discord API", "MetaAI"],
    repo: "",
  },
];
#CRIAÇÃO DE UM CHAT EM TEMPO REAL UTILIZANDO WEBSOCKETS_

  //Cada vez que o cliente entra no endpoint da aplicação, o websocket capta esse evento e emite informações para o sever;
  //Assim que o cliente fecha a aba, essa conexão do cliente com o servidor é fechada;
  //Varios clientes podem acessar simultaneamente a aplicação;

Criação de um webSocket básico para a construção de um chat simples em tempo real_

Pre-Requisitos:
1- Node.js instalado(v.14 ou superior);
2- npm ou yarn como gerenciador de pacotes;
3- Conhecimentos básicos em Typescript e Nestjs;

Configuração do Projeto:
-> Criação de um novo projeto Nestjs_
    1- Instalação do cli do nest de forma global: npm install  @nestjs/cli
    2- Criação de um novo projeto com nestjs: npx nest new nestjs-chat
    3- nextjs-chat

Instalação das bibliotecas necessárias para construção e configuração do websocket:
"npm install @nestjs/websockets"
"npm install @nestjs/platform-socket.io"
"npm install socket.io"

Após isso, iremos criar um módulo específico para o chat, com o comando:
"npx nest g module chat"

IMPLEMENTAÇÃO DOS SERVIÇOS E GATEWAYS_
Os Gateways são responsáveis por gerenciar as conexões websockets_
-> gerar um gateway para gerenciar as conexões da aplicação com o comando: "npx nest g gateway chat"


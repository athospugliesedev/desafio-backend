
# Desafio Back-end • Desafio técnico 2

Desenvolver uma API RESTful para autenticação de usuários, que permita operações de cadastro (sign up),
autenticação (sign in) e recuperação de informações do usuário.

#### Deploy
http://desafioescribo.vercel.app/

💙 Desafio proposto pela [Escribo inovação para o Aprendizado](https://escribo.com/) para a vaga de desenvolvedor Backend.



### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)


```bash
# Clone este repositório
$ git clone https://github.com/athospugliesedev/desafio-backend

# Acesse a pasta do projeto no terminal/cmd
$ cd desafio-backend

# Depois execute o comando
$ npm install

```
# Rodando a api localmente
Para rodar a API e os testes localmente, adicione o .env (Enviado no e-mail)

## Executando a api localmente

```bash
  npm run dev
```

## Executando os testes localmente

```bash
  npm test
```
## Executando o JsHint localmente

```bash
  npm lint
```



## Funcionalidades

- Todos os endpoints devem aceitar e retornar apenas dados no formato JSON.
- Retorno JSON para situações de endpoint não encontrado.
- Armazenamento persistente de dados do usuário.
- Respostas de Erro

## Requisitos
- Persistência de dados. ✅
- Sistema de build com gerenciamento de dependências. ✅
- Task runner para build. ✅
- Padronização de estilo (ex: jsHint/jsLint). ✅
- Framework: Express, Hapi, ou similar. ✅


## Requisitos desejáveis
- JWT como token. ✅
- Testes unitários. ✅
- Criptografia hash na senha e token. ✅
## Documentação da API

#### Criação de conta

`
  POST /signup
`


```http
{
 "nome": "string",
 "email": "string",
 "senha": "senha",
 "telefones": [{"numero": "123456789", "ddd": "11"}]
}
```

#### Retorno da API para /signup
 

```http
{
 "id": "c6795ed0-a067-449a-a2c5-7f8682d1e8e8",
 "data_criacao": "2023-11-20T23:30:54.994Z",
 "data_atualizacao": "2023-11-20T23:30:54.994Z",
 "ultimo_login": null,
 "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjNjc5NWVkMC1hMDY3LTQ0OWEtYTJjNS03Zjg2ODJkMWU4ZTgiLCJpYXQiOjE3MDA1MjMwNTYsImV4cCI6MTcwMDUyMzA1Nn0.hMtWBbga1ioBupGs-uD9m4562pf-h3QvW1iOCJu_wfY"
}
```

`
  POST /signin
`


```http
{
 "email": "string",
 "senha": "senha",
}
```

#### Retorno da API para /signin
 

```http
{
"id": "c6795ed0-a067-449a-a2c5-7f8682d1e8e8",
"data_criacao": "2023-11-20T23:30:54.994Z",
"data_atualizacao": "2023-11-20T23:30:54.994Z",
"ultimo_login": "2023-11-20T23:33:06.413Z",
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjNjc5NWVkMC1hMDY3LTQ0OWEtYTJjNS03Zjg2ODJkMWU4ZTgiLCJpYXQiOjE3MDA1MjMxODYsImV4cCI6MTcwMDUyMzE4Nn0.Z7XeyYvCmTqtXh_qpfYVWJ4-FBPaa8Oxlc3zQB8xVDM"
}
```


#### Requisição usando bearer token através do Header Authentication
`
  GET /protected
`

#### Se a conta estiver logado antes do tempo de expiração do token, retornará:


```http
{
"mensagem":"Não autorizado"
}
```

#### Se tentar acesso após meia hora do login, retornará a mensagem do token expirado:


```http
{
"mensagem":"Sessão inválida"
}
```


## Stack utilizada
- **Linguagem:** Javascript
- **Compiler:** Node.js 
- **Banco de dados:** Postgresql
- **Framework:** Express
- **ORM:** Prisma
- **Testes:** Jest
- **Estilo:** JsHint
- **Tokenização:** JWT
- **Hash:** BCrypt
- **Deploy:** Vercel & Neon.tech
## Screenshots

![Testes](https://i.imgur.com/iqkqnid.png/468x300?text=Teste+em+execucao)


## Express Login JWT API 

<h3 align="center">
    Projeto construido com Express, Docker, Typescript, Redis, Jest, Faker, JWT e muita dedicação ❤
</h3>

<!--ts-->
* [Objetivo](#objetivo)
* [Tech/Lib](#tech)
* [Como Usar](#como)
* [Rotas](#rotas)
<!--te-->

<a id="objetivo"></a>
## Objetivo
* Aprimorar conhecimento com Typescript
* Aprimorar conhecimento com Express
* Aprender a criar imagens Docker para javascript 
* Aprender a manipular imagens com Docker
* Uso do JWT para gerar tokens e permitir acessos a aplicação
* Uso do Jest e Faker para realizar testes
* Uso do Redis como SGBD

<a id="tech"></a>
## Tech/Lib
<small>Clique abaixo para conferir as tecnologias usadas neste projeto</small>
* <a href="https://www.typescriptlang.org/">Typescript</a>
* <a href="https://expressjs.com/pt-br/">Express.js</a>
* <a href="https://www.docker.com/">Docker</a>
* <a href="https://jestjs.io/pt-BR/">Jest</a>
* <a href="https://fakerjs.dev/">Faker</a>
* <a href="https://redis.io/">Redis</a>
* <a href="https://jwt.io/">JWT</a>

<a id="como"></a>
## Como Usar

1. git clone https://github.com/DaviRamosUC/express_login_jwt_api.git
2. ```cd express_login_jwt_api```
3. ```npm install```
3. ```docker-composer up -d```
4. ```npm run dev```


<a id="rotas"></a>
## Repostas e rotas

```/auth/sign-in```
{
    "user": {
        "id": 123,
        "fullName": "Admin",
        "email": "admin@admin.com"
    }
}

```/users```
[
    {
        "id": "456",
        "email": "jhondoe@exemple.com"
    }
]

```/auth/sign-out```
{} status 204

Made by <a href="https://github.com/DaviRamosUC">@daviramosuc<a>
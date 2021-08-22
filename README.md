# Desafio Vórtx

## Instalação
##### OBS: todos os comandos são considerando a pasta root (show-me-the-code) como inicial.

O projeto está divido entre a **API e frontend**, então serão necessárias duas instalações, uma dentro da pasta API:
    
    $ cd API
    $ yarn install

E outra no **front**:

    $ cd frontend
    $ yarn install

## Rodando o projeto

Novamente, como o projeto está dividido em duas partes, primeiro iniciamos o **backend**:

    $ cd API
    $ yarn start

E depois no **front**:

    $ cd frontend
    $ yarn start

A aplicação tem somente uma página, onde pode-se realizar a consulta dos preços das chamadas, inserindo o DDD de origem, destino, a duração e qual plano:

![](D:\du\vagas\vortx\show-me-the-code\frontend\src\styles\images\front-before.png)

O resultado da simulação é mostrado da seguinte forma:

![](D:\du\vagas\vortx\show-me-the-code\frontend\src\styles\images\front-after.png)

Clicando no botão ***Nova Simulação***, limpamos os campos e podemos simular uma nova ligação.

## Rotas

Informações mais detalhads das rotas no [swagger](API/Routes/swagger.yaml).


## Testes das rotas

Antes da realização dos testes, precisamos rodar o servidor com o comando dentro da pasta API:
    
    $ cd API
    $ yarn start

Depois que o servidor estiver rodando, podemos fazer os testes:

    $ yarn test

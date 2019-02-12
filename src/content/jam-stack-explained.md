---
title: Conhecendo mais sobre JAMStack
author: Fernando Farias
tags: [gatsby, react, frontend]
image: img/demo1.jpg
date: 2019-02-11T15:00:00.000Z
draft: false
---

Fala pessoal, ultimamente tenho consumido muito conteudo falando sobre JAMStack, um assunto bem controverso que me causou várias dúvidas, principalmente sobre, qual o limite de uma aplicação JAMStack ? Podemos chamar o resultado do build de uma JAMStack de aplicação ? O que define a arquitetura JAMStack ?

Bom vamos ver se consigo esclarecer algumas dessas dúvidas, ou somente adicionar mais questionamentos hehe.

## Um pouco de contexto

No passado não tão distante assim, possuiamos dois tipos de aplicação "frontend", a verdade é que nem havia começado essa prática de separação entre back e front, portanto, ou havia um monolíto com alguma linguagem para servir o HTML pronto, JSP, JSF, ASP, PHP, Rails e a lista vai longe, ou, havia o html e css para sites estáticos, com pouca interação e quase nenhuma intervenção externa, quem nunca se deparou com um site como o da Capitã Marvel não é mesmo ? [Link aqui](https://www.marvel.com/captainmarvel).

Com a evolução da Web, dos browsers e da propria linguagem JS, muitos frameworks novos foram criados para suprir as necessidades do mercado e criar essa separação entre backend e frontend, podemos citar vários aqui: JQuery, AngularJS, Ember, Backbone, React, Preact, Vue, Angular e por ai vai.

## Então, o que significa esse termo JAMStack

JAMStack foi um termo cunhado pelo Mathias Biilman, criador do Netlify, para se referir a arquitetura frontend que utiliza esses três pilares: Javascript, API e Markup. Basicamente, estamos falando de aplicações frontend, gerada a partir de um processo de build, no qual os arquivos estáticos podem ser deployados em qualquer CDN, para isso temos várias ferramentas hoje em dia que nos ajudam nesse processo, gatsby, jekyll, middleman, hugo, create-react-app, angular-cli e por ai vai.

## Mas por que isso é melhor do que uma aplicação Rails/Phoenix/Laravel/Wordpress/Drupal etc. ?

Bom, toda a ideia por trás da JAMStack se baseia em arquivos estáticos, dessa forma, podemos fazer o deploy da aplicação em qualquer CDN disponivel atualmente, isso trás vantagens como: melhor performance, alta segurança (afinal não temos um servidor pra isso, certo ?), custo baixo e alta escala, e várias outras vantagens para o desenvolvedor (frameworks, tools, third-party APIs).

## Novas tendências

Esse novo estilo arquitetural vem trazendo não só beneficios relacionados a infraestrutura e código, ele trás um novo ecossistema cheio de ferramentas especializadas em diferentes necessidades, o próprio Netlify é uma ferramenta poderosa que trás não só a parte de CDN, ele vem com CI integrado ao git, invalidação de cache instantâneo, deploys atômicos e cada dias mais serviços são integrados. A ideia é que no futuro você construa sua aplicação usando apenas os microserviços que você precisa, sem a necessidade de se preocupar com persistência de dados, autenticação, busca e tudo mais, para isso vários microserviços estão surgindo, como lambda functions, identity providers, push notification services, form submitions, search engine, image optimization e muito mais, todos os dias encontro algum serviço novo que substitue o bom e velho backend tradicional, isso sem falar dos novos serviços de headless CMS.

# Já ta na hora de adotar isso na minha empresa ?

Por mais que o termo pareça novo, já estamos usando JAMStack a vários anos com diferentes frameworks, aprendendo a fazer da melhor forma possível e cada vez mais melhorando a experiência do usuário com SPAs e a dos rôbos de busca com SSR. Estamos falando de uma stack consolidada, com grandes resultados nas maiores empresas do mundo, mas o grande conselho aqui é, avalie se a sua aplicação precisa dessa mudança no momento, trazer uma nova stack para o seu time demanda muito esforço e muitos erros ao longo do caminho, avalie bem se esse custo vale a recompensa que essa stack te traz, avalie mais ainda o custo da oportunidade, o quanto você vai está pagando por não tomar a decisão de migrar para JAMStack hoje, o valor do arrependimento as vezes chega a ser bem caro.

Fato interessante, mesmo o novo site da capitã marvel sendo uma cópia dos sites da decada de 90 ele foi criado com alguma ferramenta JAMStack. Kudos para o meu amigo Leonardo Alcantara que me fez ver isso.

Bom pessoal, agradeço quem se dispos a ler este artigo e aprender um pouco mais sobre algumas tendencias de mercado, aceito feedbacks no twitter @nandofarias, ficaria honrado, forte abraço.

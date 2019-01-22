import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import * as React from 'react';
import { css } from 'emotion';

import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '../templates/post';
import { PostFullContent } from '../components/PostContent';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';

const PageTemplate = css`
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }
`;

const About: React.FunctionComponent = () => (
  <IndexLayout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Wrapper className={`${PageTemplate}`}>
      <header className={`${SiteHeader} ${outer}`}>
        <div className={`${inner}`}>
          <SiteNav />
        </div>
      </header>
      <main id="site-main" className={`site-main ${SiteMain} ${outer}`}>
        <article className={`${PostFull} post page ${NoImage}`}>
          <PostFullHeader>
            <PostFullTitle>About</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
            <div className="post-content">
              <p>
                Bom pessoal, um breve resumo da minha carreira, atualmente sou CTO de uma empresa
                fantástica que é a Kanamobi, sério, estamos fazendo coisas incríveis por lá. Já fui
                CTO e co-founder de uma startup muito divertida que foi a BemCombinado.com, um
                marketplace de prestação de serviços bem diferente do modelo tradicional. Já
                trabalhei em empresas gigantes no mercado como Porto Seguro, Banco Santander e
                Conductor Tecnologia e já fui viciado em MMORPG um dia.
              </p>
              <p>
                Já desenvolvi grandes projetos em Java, Node, Angular, React, React Native, Swift,
                Kotlin e a lista vai longe, atualmente como CTO meu papel está mais em como fazer
                gestão de times para que eles alcancem os seus objetivos, mas to seguindo firme e
                forte com desenvolvimento nas horas vagas, estou amando desenvolver coisas malucas
                como smart contracts e dapps.
              </p>
              <blockquote>
                Frase inspiração do ano:
                <p>"There is nothing like a dream to create the future" - Victor Hugo</p>
              </blockquote>
              <p>
                Pra trocar uma ideia legal comigo, ou marcar pra tomar um café, é só me procurar no
                Twitter, to sempre por lá <a href="https://twitter.com/nandofarias">@nandofarias</a>
                . Um forte abraço pra vocês.
              </p>
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;

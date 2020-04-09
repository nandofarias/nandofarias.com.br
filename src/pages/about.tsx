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
                Bom pessoal, um breve resumo da minha carreira, atualmente Software Engineer de uma
                empresa fantástica que é a SWAP, sério, estamos fazendo coisas incríveis por lá. Já
                fui CTO e co-founder de uma startup muito divertida que foi a BemCombinado.com, um
                marketplace de prestação de serviços bem diferente do modelo tradicional. Já
                trabalhei em empresas gigantes no mercado como Porto Seguro, Banco Santander e
                Conductor Tecnologia e já trabalhei com pessoas incríveis na GO.K atuando como CTO.
              </p>
              <p>
                Já desenvolvi grandes projetos em Java, Node, Angular, React, React Native, Swift,
                Kotlin e a lista vai longe, atualmente estou quebrando a cabeça com o mercado de
                meios de pagamento com o foco em tornar a vida dos nossos clientes super fácil, é
                muito bom poder colocar crazy ideas em produção.
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

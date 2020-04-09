export interface WebsiteConfig {
  title: string;
  description: string;
  coverImage: string;
  logo: string;
  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  facebook?: string;
  twitter?: string;
}

const config: WebsiteConfig = {
  title: 'Fernando Farias',
  description: 'Software Engineer at SWAP',
  coverImage: 'img/blog-cover.jpg',
  logo: 'img/logo.png',
  lang: 'pt-br',
  siteUrl: 'https://nandofarias.com.br',
  facebook: 'https://www.facebook.com/nandofarias12',
  twitter: 'https://twitter.com/nandofarias',
};

export default config;

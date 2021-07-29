const title = 'Rokas Samuolis';
const description =
  'Front-end developer, graphic designer, based in Oslo, Norway';

const SEO = {
  title,
  description,
  canonical: 'https://samuolis.com',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://samuolis.com',
    title,
    description,
    images: [
      {
        url: 'https://samuolis.com/favicon.ico',
        alt: title,
      },
    ],
  },
};

export default SEO;
